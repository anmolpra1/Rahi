<div align="center">

# 🛣️ Rahi — RideSure

### Trust-first intercity ride sharing platform for India

<p>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

**RideSure** pairs intercity carpooling with **ID verification**, **live GPS tracking**, and an **AI trust score** — so every seat you book comes with proof, not promises.

[Getting Started](#-getting-started) · [Features](#-features) · [Tech Stack](#-tech-stack) · [API Reference](#-api-reference) · [Screenshots](#-screenshots)

</div>

---

## 📸 Screenshots

<details>
<summary><b>🏠 Landing Page</b> — Hero section with search & trust pillars</summary>
<br/>
<img src="docs/screenshots/home.png" alt="Landing Page" width="100%" />
</details>

<details>
<summary><b>🔐 Login</b> — OTP authentication & Google OAuth</summary>
<br/>
<img src="docs/screenshots/login.png" alt="Login Page" width="100%" />
</details>

<details>
<summary><b>🚗 Offer a Ride</b> — Publish rides with intermediate stops & smart pricing</summary>
<br/>
<img src="docs/screenshots/offer-ride.png" alt="Offer a Ride" width="100%" />
</details>

<details>
<summary><b>📍 Ride Details</b> — Route timeline, driver trust score & booking panel</summary>
<br/>
<img src="docs/screenshots/ride-details.png" alt="Ride Details" width="100%" />
</details>

<details>
<summary><b>🗺️ Live Route Tracking</b> — Real-time GPS, chat & escrow payments</summary>
<br/>
<img src="docs/screenshots/live-tracking.png" alt="Live Tracking" width="100%" />
</details>

<details>
<summary><b>🆘 Emergency SOS</b> — One-tap SOS alert with coordinates</summary>
<br/>
<img src="docs/screenshots/sos.png" alt="Emergency SOS" width="100%" />
</details>

<details>
<summary><b>👤 Profile Settings</b> — Avatar, role selector & identity verification</summary>
<br/>
<img src="docs/screenshots/profile.png" alt="Profile Settings" width="100%" />
</details>

---

## ✨ Features

### 🔒 Trust & Safety
- **Government ID Verification** — Aadhaar / PAN document upload with admin approval
- **Face Match Validation** — AWS Rekognition face-comparison for selfie ↔ ID matching
- **Vehicle Document Checks** — RC, insurance & license verification
- **AI Trust Score** — Dynamic 0–100 score computed from verification depth, trip history, ratings & cancellation behaviour
- **One-Tap SOS** — Emergency alert that logs coordinates and notifies contacts instantly
- **Women-Only Rides** — Dedicated filter & ride mode for women passengers

### 🚗 Ride Management
- **Publish Rides** — Drivers set route, intermediate stops, seats, price & scheduling
- **Smart Search** — Origin/destination autocomplete powered by OpenStreetMap Nominatim
- **Flexible Booking** — Instant book or request-to-book with seat selection
- **Intermediate Stop Boarding** — Passengers can pick up/drop off at any stop along the route
- **Cancellation Policy** — Full refund ≥ 2 hours before departure, zero refund after

### 💰 Payments & Wallet
- **Razorpay Integration** — UPI, cards & net banking via Razorpay Checkout
- **Secure Escrow** — Payments held safely and released to drivers only after trip completion or 24h
- **In-App Wallet** — Balance management, top-up & transaction history
- **HMAC-SHA256 Verification** — Cryptographic payment signature validation

### 📡 Real-Time Features
- **Live GPS Tracking** — Socket.IO powered real-time location broadcast on a Leaflet map
- **Ride Coordinator Chat** — In-ride messaging between driver and passengers
- **Push Notifications** — Real-time toast notifications for booking updates, messages & alerts
- **Share Live Tracking Link** — Shareable family link for trip monitoring

### 👤 User Experience
- **Role System** — Switch between Passenger, Driver or Both on the fly
- **Preset Avatars** — Choose from fun preset avatars or upload a custom photo
- **Public Profiles** — View any user's trust score, verification status & ride history
- **Admin Dashboard** — Manage users, verify documents, view reports & platform analytics
- **Reviews & Ratings** — Post-ride ratings with from/to user attribution

---

## 🛠️ Tech Stack

### Frontend

<table>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" /><br/>
<b>React 19</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="40" /><br/>
<b>Vite 8</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="40" /><br/>
<b>Tailwind CSS 4</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="40" /><br/>
<b>Axios</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" width="40" /><br/>
<b>Firebase</b>
</td>
</tr>
</table>

| Technology | Purpose |
|---|---|
| **React 19** | UI library with hooks & context API |
| **Vite 8** | Lightning-fast build tooling & HMR |
| **Tailwind CSS 4** | Utility-first styling with OKLCH design tokens |
| **React Router 6** | Client-side SPA routing |
| **TanStack Query 5** | Server state management & caching |
| **Radix UI** | Accessible headless UI primitives (Dialog, Select, Tabs, etc.) |
| **Axios** | HTTP client with JWT interceptors |
| **Socket.IO Client** | Real-time bidirectional communication |
| **Firebase 12** | Authentication & cloud messaging |
| **Recharts** | Data visualization for admin analytics |
| **Zod** | Runtime schema validation |
| **React Hook Form** | Performant form handling |
| **Lucide React** | Icon library |
| **Sonner** | Toast notification system |
| **Embla Carousel** | Touch-friendly carousels |

### Backend

<table>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" /><br/>
<b>Node.js 20</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" /><br/>
<b>Express 4</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" /><br/>
<b>MongoDB</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" width="40" /><br/>
<b>Redis</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" width="40" /><br/>
<b>Socket.IO</b>
</td>
</tr>
</table>

| Technology | Purpose |
|---|---|
| **Node.js 20** | JavaScript runtime |
| **Express 4** | RESTful API framework |
| **MongoDB Atlas** | NoSQL cloud database (Mongoose ODM) |
| **Redis (Upstash)** | OTP caching, rate limiting & session store |
| **Socket.IO 4** | Real-time event engine (tracking, chat, notifications) |
| **JWT** | Stateless authentication with 7-day sessions |
| **Razorpay API** | Payment order creation & HMAC signature verification |
| **Cloudinary** | Image & document upload/storage |
| **AWS Rekognition** | Face comparison for identity verification |
| **Twilio** | SMS OTP delivery |
| **Google Auth Library** | Google OAuth ID token verification |
| **Multer** | Multipart file upload middleware |

### Infrastructure & DevOps

<table>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" /><br/>
<b>Docker</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" width="40" /><br/>
<b>Nginx</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="40" /><br/>
<b>ESLint 9</b>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg" width="40" /><br/>
<b>Vitest</b>
</td>
</tr>
</table>

| Technology | Purpose |
|---|---|
| **Docker** | Containerized builds for frontend (Nginx) & backend |
| **Nginx** | Production static file serving for the SPA |
| **ESLint 9** | Flat config linting for code quality |
| **Prettier** | Consistent code formatting |
| **Vitest** | Unit testing framework |
| **Nodemon** | Auto-restart dev server on file changes |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** ≥ 20.x — [Download](https://nodejs.org/)
- **npm** ≥ 10.x (comes with Node.js)
- **Git** — [Download](https://git-scm.com/)
- **Docker** *(optional, for containerized deployment)*

### 1. Clone the Repository

```bash
git clone https://github.com/Vansh-yadav-hare/Rahi.git
cd Rahi
```

### 2. Install Dependencies

This is a monorepo using npm workspaces. A single install covers both frontend and backend:

```bash
npm install
```

Or install each workspace individually:

```bash
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
```

### 3. Configure Environment Variables

#### Backend (`backend/.env`)

Copy the example and fill in your credentials:

```bash
cp backend/.env.example backend/.env
```

| Variable | Description | Required |
|---|---|:---:|
| `MONGODB_URI` | MongoDB Atlas connection string | ✅ |
| `REDIS_URL` | Upstash Redis URL (falls back to in-memory if unavailable) | ⚠️ |
| `JWT_SECRET` | Secret key for signing JWT tokens | ✅ |
| `JWT_EXPIRES_IN` | Token expiry duration (default: `7d`) | ❌ |
| `GOOGLE_OAUTH_CLIENT_ID` | Google OAuth 2.0 Client ID | ❌ |
| `GOOGLE_OAUTH_CLIENT_SECRET` | Google OAuth 2.0 Client Secret | ❌ |
| `RAZORPAY_KEY_ID` | Razorpay API Key ID | ❌ |
| `RAZORPAY_KEY_SECRET` | Razorpay API Secret | ❌ |
| `CLOUDINARY_URL` | Cloudinary media upload URL | ❌ |
| `TWILIO_ACCOUNT_SID` | Twilio Account SID for SMS OTP | ❌ |
| `TWILIO_AUTH_TOKEN` | Twilio Auth Token | ❌ |
| `TWILIO_PHONE_NUMBER` | Twilio sender phone number | ❌ |
| `FIREBASE_SERVER_KEY` | Firebase Cloud Messaging key | ❌ |
| `GOOGLE_MAPS_API_KEY` | Google Maps Geocoding/Directions key | ❌ |

#### Frontend (`frontend/.env`)

```bash
cp frontend/.env.example frontend/.env
```

| Variable | Description | Required |
|---|---|:---:|
| `VITE_API_URL` | Backend API base URL (default: `http://localhost:5000/api`) | ✅ |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth Client ID (must match backend) | ❌ |
| `VITE_FIREBASE_API_KEY` | Firebase Web API Key | ❌ |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | ❌ |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID | ❌ |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | ❌ |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | ❌ |
| `VITE_FIREBASE_APP_ID` | Firebase App ID | ❌ |

### 4. Run the Application

#### Development (both servers concurrently)

```bash
npm run dev
```

This starts:
- **Frontend** → `http://localhost:5173` (Vite dev server)
- **Backend** → `http://localhost:5000` (Express + Nodemon)

#### Run individually

```bash
# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend
```

#### Production with Docker

```bash
# Build & run backend
cd backend
docker build -t rahi-backend .
docker run -p 5000:5000 --env-file .env rahi-backend

# Build & run frontend
cd ../frontend
docker build -t rahi-frontend .
docker run -p 80:80 rahi-frontend
```

---

## 📁 Project Structure

```
Rahi/
├── package.json              # Monorepo root with npm workspaces
│
├── frontend/                 # React SPA (Vite)
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ui/           # Radix-based primitives (Button, Dialog, etc.)
│   │   │   ├── SiteHeader.jsx
│   │   │   ├── SiteFooter.jsx
│   │   │   ├── SearchForm.jsx
│   │   │   ├── RideCard.jsx
│   │   │   ├── TrustScore.jsx
│   │   │   ├── LiveTrackingMap.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   └── SOSButton.jsx
│   │   ├── pages/            # Route-level page components
│   │   │   ├── Home.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── RideDetails.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Offer.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── PublicProfile.jsx
│   │   │   ├── Wallet.jsx
│   │   │   ├── Safety.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   └── VerificationUpload.jsx
│   │   ├── features/         # Feature-scoped modules
│   │   │   ├── auth/         # AuthContext & AuthProvider
│   │   │   ├── bookings/     # MyBookings component
│   │   │   ├── rides/        # CreateRideForm
│   │   │   └── reviews/      # Review components
│   │   ├── services/         # API client & socket setup
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility helpers
│   │   ├── styles.css        # Design system (OKLCH tokens, Tailwind config)
│   │   ├── firebase.js       # Firebase initialization
│   │   ├── App.jsx           # Router & providers
│   │   └── main.jsx          # Entry point
│   ├── Dockerfile            # Multi-stage build → Nginx
│   ├── nginx.conf            # SPA fallback routing
│   └── vite.config.js        # Vite + React + Tailwind v4
│
├── backend/                  # Express REST API
│   ├── src/
│   │   ├── config/           # DB, Redis & env validation
│   │   ├── models/           # Mongoose schemas
│   │   │   ├── User.js
│   │   │   ├── Ride.js
│   │   │   ├── Booking.js
│   │   │   ├── Payment.js
│   │   │   ├── Review.js
│   │   │   ├── Verification.js
│   │   │   ├── Transaction.js
│   │   │   ├── Message.js
│   │   │   ├── SOSAlert.js
│   │   │   └── RideReport.js
│   │   ├── controllers/      # Route handlers
│   │   ├── routes/           # Express route definitions
│   │   ├── middleware/       # authGuard, etc.
│   │   ├── services/         # Geocoding, notifications, sockets
│   │   ├── sockets/          # Socket.IO event handlers
│   │   ├── scripts/          # DB seeds & utilities
│   │   ├── utils/            # Shared helpers
│   │   └── server.js         # Express app entry point
│   ├── Dockerfile            # Multi-stage build with lint check
│   └── .env.example          # Environment template
│
└── docs/                     # Documentation
    ├── COMPONENTS.md
    ├── DATA-MODEL.md
    ├── DESIGN-SYSTEM.md
    ├── PAGES.md
    └── screenshots/          # App screenshots
```

---

## 🔌 API Reference

All endpoints are prefixed with `/api`. Protected routes require a `Bearer <JWT>` token in the `Authorization` header.

### 🔐 Authentication — `/api/auth`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/otp/send` | Send 6-digit OTP to phone (60s cooldown) | ❌ |
| `POST` | `/otp/verify` | Verify OTP & receive JWT token | ❌ |
| `POST` | `/google` | Sign in with Google OAuth ID token | ❌ |

### 👤 Users — `/api/users`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `GET` | `/me` | Get authenticated user profile | ✅ |
| `PUT` | `/me` | Update profile (name, email, role, avatar) | ✅ |

### 🚗 Rides — `/api/rides`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/` | Create a new ride (drivers only) | ✅ |
| `GET` | `/search` | Search rides by origin/destination | ❌ |
| `GET` | `/:id` | Get ride details with driver info | ❌ |

### 📋 Bookings — `/api/bookings`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/` | Book seats on a ride (atomic transaction) | ✅ |
| `GET` | `/me` | Get user's booking history | ✅ |
| `PUT` | `/:id/cancel` | Cancel booking (refund policy applies) | ✅ |

### 💳 Payments — `/api/payments`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/order` | Create Razorpay payment order | ✅ |
| `POST` | `/verify` | Verify payment signature (HMAC-SHA256) | ✅ |

### ⭐ Reviews — `/api/reviews`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/` | Submit a ride review (1–5 rating) | ✅ |
| `GET` | `/user/:userId` | Get reviews for a user | ❌ |

### 💰 Wallet — `/api/wallet`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `GET` | `/` | Get wallet balance & transactions | ✅ |

### ✅ Verification — `/api/verification`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/upload` | Upload verification documents | ✅ |
| `GET` | `/status` | Check verification status | ✅ |

### 🆘 SOS — `/api/sos`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/` | Trigger emergency SOS alert | ✅ |

### 🚩 Reports — `/api/reports`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `POST` | `/` | Report a ride concern | ✅ |

### 🛡️ Admin — `/api/admin`

| Method | Endpoint | Description | Auth |
|:---:|---|---|:---:|
| `GET` | `/users` | List all users | ✅ (admin) |
| `GET` | `/verifications` | List pending verifications | ✅ (admin) |
| `PUT` | `/verify/:id` | Approve/reject a verification | ✅ (admin) |

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, trust pillars & search |
| `/search` | Search Results | Ride results with filters & autocomplete |
| `/ride/:rideId` | Ride Details | Route timeline, driver profile, booking & live tracking |
| `/booking/:rideId` | Booking | Seat selection & Razorpay payment flow |
| `/offer` | Offer a Ride | Publish a ride with route, stops, pricing |
| `/login` | Login | OTP + Google OAuth authentication |
| `/profile` | Profile | Edit name, email, role & avatar |
| `/profile/:userId` | Public Profile | View another user's trust & ride history |
| `/my-bookings` | My Bookings | Active, completed & cancelled booking history |
| `/wallet` | Wallet | Balance, top-up & transaction history |
| `/safety` | Safety Centre | Verification stack & safety feature explainer |
| `/verification` | Verification | Upload ID, selfie & vehicle documents |
| `/admin` | Admin Panel | User management, verification approvals & analytics |

---

## 🗄️ Database Models

| Model | Description |
|---|---|
| **User** | Profile, phone, email, OAuth, role (`passenger` / `driver` / `both`), trustScore |
| **Ride** | Driver reference, origin/destination with coordinates, stops, seats, price, status |
| **Booking** | Ride + passenger references, seats booked, pickup/dropoff, cancellation info, status |
| **Payment** | Booking reference, Razorpay order/payment IDs, amount, status |
| **Review** | From/to user references, ride reference, rating (1–5), comment |
| **Verification** | User reference, document type, Cloudinary paths, face match status, approval |
| **Transaction** | Wallet transaction records (credit/debit/refund) |
| **Message** | In-ride chat messages between driver and passengers |
| **SOSAlert** | Emergency alert with coordinates, timestamp & user reference |
| **RideReport** | User-submitted ride concern reports |

---

## 🧪 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start both frontend & backend concurrently |
| `npm run dev:frontend` | Start Vite dev server only |
| `npm run dev:backend` | Start Express with Nodemon only |
| `npm start` | Start backend in production mode |

### Frontend-specific

```bash
cd frontend
npm run dev        # Vite dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint check
npm run format     # Prettier format
npm run test       # Run Vitest
```

### Backend-specific

```bash
cd backend
npm run dev        # Nodemon dev server
npm start          # Production start
npm run lint       # ESLint check
npm run format     # Prettier format
npm run test       # Node.js test runner
```

---

## 🧑‍💻 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "Add amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

> ⚠️ **Note:** This project is connected to [Lovable](https://lovable.dev). Avoid force pushing or rebasing/amending/squashing commits that are already pushed, as it rewrites history on Lovable's side.

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Vansh Yadav](https://github.com/Vansh-yadav-hare) & [Anmol Prajapati](https://github.com)**

⭐ Star this repo if you found it helpful!

</div>
