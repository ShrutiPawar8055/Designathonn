# Reverie Backend

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Supabase and Sarvam API keys to `.env`

3. **Run backend server**
   ```bash
   npm run dev:backend
   ```

4. **Run frontend (in separate terminal)**
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | `/api/health`     | Health check               |
| GET    | `/api/places`     | Get all places             |
| GET    | `/api/places/:id` | Get place by id            |

## Built With
- Express.js - Backend framework
- Supabase - Database & authentication
- Sarvam AI - AI/Voice integration
