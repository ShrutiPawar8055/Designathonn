import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Reverie Backend Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Sample API Route: Get Places (from data file for now)
import { places } from './src/data/places.js';

app.get('/api/places', (req, res) => {
  res.json({
    success: true,
    data: places
  });
});

app.get('/api/places/:placeId', (req, res) => {
  const { placeId } = req.params;
  const place = places.find(p => p.id === placeId);
  
  if (!place) {
    return res.status(404).json({
      success: false,
      message: 'Place not found'
    });
  }

  res.json({
    success: true,
    data: place
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`
  🚀 Reverie Backend Server Started!
  📡 Running on: http://localhost:${PORT}
  🔗 API Base: http://localhost:${PORT}/api
  `);
});
