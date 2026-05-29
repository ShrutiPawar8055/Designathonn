import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Backend-only places data without image imports
const placesData = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'The City of Light',
    state: 'UTTAR PRADESH',
    bestTime: 'October to March',
    language: 'Hindi, Sanskrit',
    significance: 'Spiritual Capital of India',
    category: 'Spiritual',
    region: 'North',
    story: {
      what: "Known as Kashi (City of Light), Varanasi is the spiritual heart of India. It is a city of ghats, narrow winding alleys, and ancient temples where life and death meet in a sacred dance on the banks of the Ganges.",
      when: "While historians trace its origins to the 11th Century BCE, making it one of the world's oldest living cities, in Hindu mythology, it is considered eternal—a place that exists beyond the cycles of creation and destruction.",
      why: "Varanasi's popularity stems from the belief that dying here grants 'Moksha' or liberation from the cycle of rebirth. It is the abode of Lord Shiva, home to the Kashi Vishwanath Jyotirlinga, and the site of the world-famous Ganga Aarti, which draws millions seeking spiritual transcendence.",
    }
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    tagline: 'A Tear on the Face of Eternity',
    state: 'UTTAR PRADESH',
    bestTime: 'November to February',
    language: 'Hindi, Urdu, English',
    significance: 'UNESCO World Heritage Site',
    category: 'Historic',
    region: 'North',
    story: {
      what: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. It is the jewel of Mughal art in India and one of the universally admired masterpieces of the world's heritage.",
      when: "Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal, the main structure was completed in 1648, with the surrounding buildings finished by 1653.",
      why: "It is popular not just for its breathtaking symmetry and architectural perfection, but as the ultimate symbol of eternal love. The way the marble changes color from pinkish at dawn to milky white in the evening and golden under the moon makes it a cinematic experience unlike any other.",
    }
  },
  {
    id: 'somnath',
    name: 'Somnath',
    tagline: 'The Eternal Shrine',
    state: 'GUJARAT',
    bestTime: 'September to March',
    language: 'Gujarati, Hindi',
    significance: 'First of the Twelve Jyotirlingas',
    category: 'Spiritual',
    region: 'West',
    story: {
      what: "Somnath is the 'Lord of the Moon'. The temple is situated on the shores of the Arabian Sea and is the most sacred of the twelve Jyotirlingas, where Shiva appeared as a pillar of light.",
      when: "The temple's origins are lost in antiquity, mentioned in the Rig Veda. The current structure, known as the 'Mahameru Prasad', was rebuilt in 1951 after centuries of repeated destruction and reconstruction.",
      why: "It is popular as a symbol of cultural resilience. Having been destroyed and rebuilt 17 times by various invaders, it stands today as a testament to the indestructible nature of Indian spirit and devotion.",
    }
  },
  {
    id: 'vrindavan',
    name: 'Vrindavan',
    tagline: 'The Land of Eternal Love',
    state: 'UTTAR PRADESH',
    bestTime: 'September to March',
    language: 'Braj Bhasha, Hindi',
    significance: 'Childhood Abode of Lord Krishna',
    category: 'Spiritual',
    region: 'North',
    story: {
      what: "Vrindavan is a sacred forest town where Lord Krishna is believed to have spent his childhood. It is a city of over 5,000 temples, where the atmosphere is perpetually thick with the scent of incense and the sound of 'Radhe Radhe'.",
      when: "While its spiritual history is ancient, the modern town was 'rediscovered' in 1515 by Chaitanya Mahaprabhu, who identified the lost sites associated with Krishna's life through divine intuition.",
      why: "Vrindavan's popularity lies in its 'Bhakti' (devotional) atmosphere. Unlike the grand rituals of Varanasi, Vrindavan is about personal, emotional connection with the divine—expressed through Holi, Rasa Lila, and the unique 'Banke Bihari' style of worship.",
    }
  }
];

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

// Get all places
app.get('/api/places', (req, res) => {
  res.json({
    success: true,
    data: placesData
  });
});

// Get single place
app.get('/api/places/:placeId', (req, res) => {
  const { placeId } = req.params;
  const place = placesData.find(p => p.id === placeId);
  
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

// AI Chat Endpoint (placeholder)
app.post('/api/chat', (req, res) => {
  const { query, placeId } = req.body;
  const place = placesData.find(p => p.id === placeId);
  
  const responses = [
    `Ah, what a wonderful question about ${place?.name || 'this sacred place'}! Let me tell you a story...`,
    `Picture this: centuries ago, in ${place?.name || 'this very place'}, something magical happened...`,
    `Listen carefully. The stones here remember everything about ${place?.name || 'this place'}...`
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  
  res.json({
    success: true,
    data: {
      response: responses[randomIndex]
    }
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
