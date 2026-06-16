
# Reverie - AI-Powered Cultural Storytelling Companion

Reverie is an immersive cultural storytelling companion that brings India's heritage to life through AI-powered narration, interactive guides, and curated collections.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Workflow Diagram](#workflow-diagram)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Future Plans: OAuth Integration](#future-plans-oauth-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **AI-Powered Narration**: Sarvam AI's Bulbul TTS for natural, immersive storytelling
- **Interactive AI Guide**: Chat with our AI guide to learn more about specific places
- **Curated Collections**: Explore places by theme (Spiritual, Historical, Mythological, Coastal)
- **Theming**: Light/Dark mode with smooth transitions
- **Localization**: Multi-language support (English + Indic languages coming soon)
- **Responsive Design**: Optimized for desktop, tablet, and mobile

---

## Tech Stack

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Router (navigation)
- Lucide React (icons)
- i18next (localization)

### Backend
- Node.js
- Express.js
- Vercel Serverless Functions (for deployment)
- Axios (API requests)

### APIs
- **Sarvam AI**:
  - Text-to-Speech (Bulbul v3)
  - Chat Completions
- Supabase (for future OAuth and user data)

---

## System Architecture

### Architecture Overview

Reverie is a **full-stack web application** with a clear separation between frontend and backend:

```
┌───────────────────────────────────────────────────────────────────┐
│                              Frontend                              │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ React App (Vite)                                            │  │
│  │ ┌──────────────────────────────────────────────────────────┐│  │
│  │ │  Pages & Components (Home, Collections, Place Detail,    ││  │
│  │ │                  AI Guide, Stories, About)               ││  │
│  │ ├──────────────────────────────────────────────────────────┤│  │
│  │ │  Context Providers (Theme, Language)                     ││  │
│  │ ├──────────────────────────────────────────────────────────┤│  │
│  │ │  React Router (Client-Side Navigation)                   ││  │
│  │ └──────────────────────────────────────────────────────────┘│  │
│  │ ┌──────────────────────────────────────────────────────────┐│  │
│  │ │  Styling (Tailwind CSS, Animations via Framer Motion)    ││  │
│  │ └──────────────────────────────────────────────────────────┘│  │
│  └─────────────────────────────────────────────────────────────┘  │
│                            ↓↑ HTTP Requests                        │
└───────────────────────────────────────────────────────────────────┘
                              ↓↑
┌───────────────────────────────────────────────────────────────────┐
│                          Vercel Serverless Functions                │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ /api/chat  →  Sarvam AI Chat Completions                     │  │
│  │ /api/tts   →  Sarvam AI Text-to-Speech (Bulbul v3)          │  │
│  │ /api/places →  Returns curated list of places                │  │
│  │ /api/places/[placeId] →  Returns detailed place info         │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                            ↓↑                                      │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │               Sarvam AI API (External)                       │  │
│  └─────────────────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │              Supabase (Coming Soon: OAuth & User Data)       │  │
│  └─────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────┘
```

---

## Workflow Diagram

Here's a step-by-step breakdown of how Reverie works:

### 1. User Opens the App
   - User navigates to Reverie (Vercel deployment or local dev server)
   - Frontend loads React app
   - Theme/Language is loaded from localStorage

### 2. User Explores Places
   - User browses collections or trending stories
   - Frontend fetches place data (for future: from `/api/places`, currently from local data)
   - User clicks a place to view details

### 3. Listens to Narration
   - User clicks "Begin Narration" or the play button
   - Frontend calls `/api/tts` with the place's story text
   - Backend (Vercel serverless function) sends request to Sarvam AI's Text-to-Speech API
   - Sarvam AI returns base64-encoded audio
   - Backend sends audio back to frontend
   - Frontend converts audio to playable format and starts playback

### 4. Chat with AI Guide
   - User asks a question to the AI Guide
   - Frontend calls `/api/chat` with question and (optionally) current place ID
   - Backend sends request to Sarvam AI's Chat Completions API with curated place context
   - Sarvam AI returns storytelling-focused response
   - Response is displayed in the chat interface

---

## Getting Started

Follow these instructions to get a local copy of the project up and running!

### Prerequisites

Make sure you have these installed:
- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShrutiPawar8055/Designathon.git
   cd Designathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` and `.env.local`
   - Fill in your `SARVAM_API_KEY` and other configs (see [Environment Variables](#environment-variables))

4. **Run the app**
   - **Frontend**: `npm run dev`
   - **Backend (local)**: `npm run dev:backend`
   - For Vercel deployment, just push to your repo!

### Local Development
- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:5000`

---

## Environment Variables

Create a `.env` file (for backend) and `.env.local` (for frontend) in your project root:

### .env & .env.local
```env
# Backend Port (local only)
PORT=5000

# Frontend API Base (local only - uses relative path on Vercel)
VITE_API_BASE_URL=http://localhost:5000

# Supabase Configuration (for future OAuth)
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Sarvam AI Configuration (MANDATORY)
SARVAM_API_KEY=your_sarvam_api_key
SARVAM_BASE_URL=https://api.sarvam.ai

# CORS Origin (local only)
CORS_ORIGIN=http://localhost:5173
```

---

## Future Plans: OAuth Integration

In our next phase, we'll be adding OAuth integration using **Supabase Auth**! Here's what we're planning:

### Features with OAuth
1. **User Accounts**: Users can sign up/login with Google, Email, or other providers
2. **Saved Stories**: Save favorite stories and places to your account
3. **Personalized Recommendations**: AI suggests places based on your saved stories
4. **Sync Across Devices**: Access your saved content from anywhere

### High-Level OAuth Workflow
1. User clicks "Sign In" button
2. Frontend uses Supabase Auth UI to present login options
3. User authenticates with chosen provider
4. Supabase creates user session and returns JWT
5. Frontend stores session securely
6. Future API requests include JWT for authentication
7. Backend verifies JWT with Supabase and fetches user-specific data

Stay tuned for updates!

---

## Contributing

We welcome contributions! Here's how you can help:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (you should create one!).

---

<p align="center">Made with ❤️ for India's heritage</p>
