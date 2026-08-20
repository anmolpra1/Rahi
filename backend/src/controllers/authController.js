import jwt from 'jsonwebtoken'
import { OAuth2Client } from 'google-auth-library'
import redisClient from '../config/redis.js'
import User from '../models/User.js'
import twilio from 'twilio'

const googleClient = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID)

// Initialize Twilio Client dynamically if keys are available
const twilioClient =
  process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
    ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    : null

// Helper to format/normalize phone number to E.164 standard (+91 country code fallback)
const formatPhoneNumber = (phone) => {
  const cleanPhone = phone.trim()
  if (!cleanPhone.startsWith('+')) {
    const stripped = cleanPhone.startsWith('0') ? cleanPhone.slice(1) : cleanPhone
    return `+91${stripped}`
  }
  return cleanPhone
}

// Send OTP function
export const sendOTP = async (req, res) => {
  const { phone } = req.body

  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' })
  }

  try {
    const formattedPhone = formatPhoneNumber(phone)
    const rateLimitKey = `rate_limit:${formattedPhone}`
    const otpKey = `otp:${formattedPhone}`

    // 1. Rate limit check (60s)
    const rateLimitExists = await redisClient.get(rateLimitKey)
    if (rateLimitExists) {
      return res.status(429).json({ message: 'Please wait 60 seconds between OTP requests' })
    }

    // 2. Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    // 3. Store OTP (5-minute TTL) and set rate limit key (60-second TTL)
    await redisClient.set(otpKey, otp, { EX: 300 })
    await redisClient.set(rateLimitKey, 'true', { EX: 60 })

    // 4. Send SMS via Twilio if configured
    let smsSent = false
    let smsError = null
    if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
      try {
        await twilioClient.messages.create({
          body: `Your RideSure verification code is: ${otp}. It is valid for 5 minutes.`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhone,
        })
        smsSent = true
        console.log(`[AUTH] Successfully sent Twilio SMS to ${formattedPhone}`)
      } catch (err) {
        smsError = err.message
        console.error(`[AUTH] Failed to send Twilio SMS to ${formattedPhone}: ${smsError}`)
      }
    } else {
      console.log(`[AUTH] Twilio is not configured. Falling back to console log.`)
    }

    // Log the OTP to console (demo environment)
    console.log(`[AUTH] Generated OTP for ${formattedPhone}: ${otp}`)

    return res.status(200).json({
      message: smsSent
        ? 'OTP sent successfully to your mobile device'
        : smsError
        ? `OTP generated, but failed to send SMS: ${smsError}`
        : 'OTP sent successfully (check server logs/screen below)',
      otp,
    })
  } catch (error) {
    console.error(`Send OTP Error: ${error.message}`)
    return res.status(500).json({ message: 'Failed to send OTP' })
  }
}

// Verify OTP function
export const verifyOTP = async (req, res) => {
  const { phone, otp } = req.body

  if (!phone || !otp) {
    return res.status(400).json({ message: 'Phone number and OTP are required' })
  }

  try {
    const formattedPhone = formatPhoneNumber(phone)
    const otpKey = `otp:${formattedPhone}`
    const savedOtp = await redisClient.get(otpKey)

    if (!savedOtp || savedOtp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' })
    }

    // Clear the OTP key on success
    await redisClient.del(otpKey)

    // Find or create the user
    let user = await User.findOne({ phone: formattedPhone })
    if (!user) {
      user = await User.create({ phone: formattedPhone, role: 'passenger' })
      console.log(`[AUTH] Created new user for phone ${formattedPhone}`)
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    })

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        phone: user.phone,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePhoto: user.profilePhoto,
        trustScore: user.trustScore,
        isVerified: user.isVerified,
      },
      token,
    })
  } catch (error) {
    console.error(`Verify OTP Error: ${error.message}`)
    return res.status(500).json({ message: 'Failed to verify OTP' })
  }
}

// Google OAuth Login
export const googleLogin = async (req, res) => {
  const { idToken } = req.body

  if (!idToken) {
    return res.status(400).json({ message: 'Google ID token is required' })
  }

  if (!process.env.GOOGLE_OAUTH_CLIENT_ID) {
    return res.status(500).json({
      message: 'GOOGLE_OAUTH_CLIENT_ID is not configured in the backend environment variables',
    })
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    const oauthId = payload['sub']
    const email = payload['email']
    const name = payload['name']
    const picture = payload['picture']

    // Find or create User by oauthId
    let user = await User.findOne({ oauthId })

    if (!user) {
      // Check if user with this email already exists
      if (email) {
        user = await User.findOne({ email })
      }

      if (user) {
        // Link Google ID to existing email account
        user.oauthId = oauthId
        if (!user.profilePhoto) user.profilePhoto = picture
        await user.save()
        console.log(`[AUTH] Linked Google credentials to user ${email}`)
      } else {
        // Create new user
        user = await User.create({
          name,
          email,
          oauthId,
          profilePhoto: picture,
          role: 'passenger',
        })
        console.log(`[AUTH] Created new Google user: ${email}`)
      }
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    })

    return res.status(200).json({
      message: 'Google login successful',
      user: {
        id: user._id,
        phone: user.phone,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePhoto: user.profilePhoto,
        trustScore: user.trustScore,
        isVerified: user.isVerified,
      },
      token,
    })
  } catch (error) {
    console.error(`Google Login Error: ${error.message}`)
    return res.status(401).json({ message: 'Google OAuth token verification failed' })
  }
}
