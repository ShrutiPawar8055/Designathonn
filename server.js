import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const SARVAM_BASE_URL = process.env.SARVAM_BASE_URL || 'https://api.sarvam.ai';
const SARVAM_MODEL = process.env.SARVAM_MODEL || 'sarvam-m';

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
      mythology: "Legend says the city rests on the tip of Lord Shiva's trident. It was here that the Ganges descended from the heavens, her force broken by Shiva's matted hair, to purify the souls of ancestors.",
      history: "From the visit of Lord Buddha in 500 BCE to the resilience shown during medieval invasions, Varanasi has remained the bastion of Sanskrit learning, classical music, and Vedic philosophy for millennia.",
      legends: "The city is home to the 'Manikarnika' ghat, where the funeral pyre has reportedly never been extinguished for thousands of years, serving as a reminder of the transient nature of life."
    },
    audioGuide: {
      title: 'Echoes of the Ganges',
      duration: '15:20',
      type: 'Ritual & Ambient'
    },
    timeline: [
      { year: '1100 BCE', event: 'First historical settlements appear on the banks of the Varuna and Assi rivers.' },
      { year: '528 BCE', event: 'Gautama Buddha gives his first sermon at nearby Sarnath.' },
      { year: '8th Century CE', event: 'Adi Shankaracharya establishes Varanasi as a primary center of Shaivite worship.' },
      { year: '1780 CE', event: 'The current Kashi Vishwanath Temple is built by Ahilyabai Holkar.' }
    ]
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
      mythology: "While historical, many believe the site was chosen for its alignment with the heavens. Local legends often speak of a 'Black Taj' that Shah Jahan intended to build for himself across the river, though no evidence exists.",
      history: "Built by over 20,000 artisans under a board of architects led by Ustad Ahmad Lahauri, it utilized materials from all over India and Asia, carried by over 1,000 elephants.",
      legends: "The most famous legend—that Shah Jahan cut off the hands of the workers so they could never build anything as beautiful again—is widely considered a myth by historians, as the same architects worked on later projects."
    },
    audioGuide: {
      title: 'The Emperor\'s Vow',
      duration: '12:45',
      type: 'History & Poetry'
    },
    timeline: [
      { year: '1631', event: 'Mumtaz Mahal passes away; Shah Jahan vows to build her a monument like no other.' },
      { year: '1632', event: 'Construction begins on the Yamuna river bank.' },
      { year: '1648', event: 'The main mausoleum is completed.' },
      { year: '1983', event: 'Designated as a UNESCO World Heritage site.' }
    ]
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
      mythology: "According to legend, the Moon God (Soma) built the first temple in gold after Lord Shiva cured him of a curse. Later, Ravana built it in silver, Krishna in wood, and Bhimdev in stone.",
      history: "The temple was a target for many invaders due to its immense wealth. Each time it was razed, it was rebuilt with greater fervor by local kings like the Solankis and later by Sardar Vallabhbhai Patel after independence.",
      legends: "The 'Baan Stambh' (Arrow Pillar) at the temple points in a straight line towards the South Pole, with no landmass in between—a marvel of ancient geographical knowledge."
    },
    audioGuide: {
      title: 'The Resilience of Light',
      duration: '18:10',
      type: 'Spiritual & Historical'
    },
    timeline: [
      { year: 'Ancient', event: 'Soma, the Moon God, establishes the first shrine to Shiva.' },
      { year: '1024 CE', event: 'Mahmud of Ghazni raids and destroys the temple.' },
      { year: '1783 CE', event: 'Ahilyabai Holkar builds a smaller temple nearby as the main site was in ruins.' },
      { year: '1951', event: 'The modern temple is inaugurated by Dr. Rajendra Prasad, India\'s first President.' }
    ]
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
      mythology: "The 'Nidhivan' forest in Vrindavan is believed to be the site where Krishna still performs the Maha-Raas (celestial dance) with the Gopis every night. No one is allowed to stay in the forest after sunset.",
      history: "The Mughal Emperor Akbar visited Vrindavan in 1570 and was so impressed by the saints that he donated land and funds for four grand temples, including the red sandstone Govind Dev temple.",
      legends: "The Banke Bihari idol is said to have appeared in the dreams of Swami Haridas. The deity's eyes are so powerful that a curtain is drawn every few minutes to prevent devotees from being overwhelmed by his gaze."
    },
    audioGuide: {
      title: 'Songs of the Forest',
      duration: '14:30',
      type: 'Devotional & Musical'
    },
    timeline: [
      { year: 'Ancient', event: 'Krishna performs his childhood Lilas in the forests of Vrindavan.' },
      { year: '1515 CE', event: 'Chaitanya Mahaprabhu visits and identifies the sacred sites.' },
      { year: '1590 CE', event: 'The majestic Govind Dev Temple is completed with Akbar\'s support.' },
      { year: '1864 CE', event: 'The current Banke Bihari Temple is constructed.' }
    ]
  }
];

// Enhanced story data for AI responses
const getEnhancedPlaceData = (placeId) => {
  return placesData.find(p => p.id === placeId) || {};
};

const buildPlaceContext = (place) => {
  if (!place?.id) {
    return [
      'No specific place is selected.',
      'Answer as a cultural heritage guide for India.',
      'If the user asks for a specific monument, city, temple, or story without naming the place, ask them which place they want to explore.',
      'Do not pick a random place on your own and do not invent facts.'
    ].join('\n');
  }

  return [
    `Selected place: ${place.name}`,
    `Tagline: ${place.tagline}`,
    `State: ${place.state}`,
    `Best time: ${place.bestTime}`,
    `Language: ${place.language}`,
    `Significance: ${place.significance}`,
    `Category: ${place.category}`,
    `Region: ${place.region}`,
    `What: ${place.story?.what || ''}`,
    `When: ${place.story?.when || ''}`,
    `Why popular: ${place.story?.why || ''}`,
    `Mythology: ${place.story?.mythology || ''}`,
    `History: ${place.story?.history || ''}`,
    `Legends: ${place.story?.legends || ''}`,
    `Timeline: ${(place.timeline || []).map((item) => `${item.year}: ${item.event}`).join(' | ')}`,
    `Audio guide: ${place.audioGuide?.title || ''}, ${place.audioGuide?.duration || ''}, ${place.audioGuide?.type || ''}`
  ].join('\n');
};

const stripThinkingBlock = (content) => {
  if (!content) return '';

  const normalized = String(content).trim();
  const thinkTagMatch = normalized.match(/<\/?think>/i);
  const malformedCloseIndex = normalized.toLowerCase().indexOf('/ink>');

  if (thinkTagMatch && normalized.toLowerCase().includes('</think>')) {
    return normalized.split(/<\/think>/i).pop().trim();
  }

  if (normalized.toLowerCase().startsWith('<think>') && malformedCloseIndex !== -1) {
    return normalized.slice(malformedCloseIndex + 5).trim();
  }

  if (normalized.toLowerCase().startsWith('<think>')) {
    const paragraphs = normalized.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
    return paragraphs[paragraphs.length - 1] || '';
  }

  return normalized.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
};

const generateSarvamResponse = async (query, place) => {
  if (!process.env.SARVAM_API_KEY) {
    throw new Error('SARVAM_API_KEY is missing on the backend.');
  }

  const payload = {
    model: SARVAM_MODEL,
    temperature: 0.3,
    max_tokens: 900,
    messages: [
      {
        role: 'system',
        content: [
          'You are Reverie, a cultural storytelling guide for Indian heritage places.',
          'Answer naturally, conversationally, and based on the provided context.',
          'Do not use canned or repetitive templates.',
          'Reply with the final user-facing answer only.',
          'Do not include hidden reasoning, <think> tags, or analysis notes.',
          'Do not invent facts, timings, routes, or rituals if they are not present in context.',
          'If information is missing, say that clearly and suggest what the user can ask next.',
          'When the user asks about history, mythology, legends, origins, or past events, respond as a curated narrative story grounded in the provided facts.',
          'Use a vivid, immersive, storytelling tone with sensory detail, but stay historically and culturally anchored to the place context.',
          'Do not switch to some other monument or city. Stay focused on the selected place only.',
          'Keep answers focused and helpful, usually within 4-8 sentences.',
          '',
          buildPlaceContext(place)
        ].join('\n')
      },
      {
        role: 'user',
        content: query
      }
    ]
  };

  const response = await axios.post(
    `${SARVAM_BASE_URL}/v1/chat/completions`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      timeout: 30000
    }
  );

  const message = response.data?.choices?.[0]?.message;
  const content = stripThinkingBlock(message?.content);
  if (!content) {
    throw new Error('Sarvam returned no final answer.');
  }

  return content;
};

// Middleware
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean)
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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

// Smart AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { query, placeId } = req.body;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: 'Query is required'
    });
  }

  try {
    const place = getEnhancedPlaceData(placeId);
    const response = await generateSarvamResponse(query, place);

    res.json({
      success: true,
      data: {
        response
      }
    });
  } catch (error) {
    const upstreamMessage =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message ||
      'Unable to reach Sarvam AI.';

    res.status(502).json({
      success: false,
      message: `Live AI request failed: ${upstreamMessage}`
    });
  }
});

// Text to Speech Endpoint
app.post('/api/tts', async (req, res) => {
  const { text, target_language_code = 'en-IN', speaker = 'shubh', pace = 1.0 } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: 'Text is required'
    });
  }

  try {
    const response = await axios.post(
      `${SARVAM_BASE_URL}/text-to-speech`,
      {
        text,
        target_language_code,
        speaker,
        pace,
        model: 'bulbul:v3',
        output_audio_codec: 'wav'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': process.env.SARVAM_API_KEY
        }
      }
    );

    res.json({
      success: true,
      data: {
        audios: response.data.audios
      }
    });
  } catch (error) {
    const upstreamMessage =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message ||
      'Unable to reach Sarvam TTS API.';

    res.status(502).json({
      success: false,
      message: `TTS request failed: ${upstreamMessage}`
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`
  🚀 Reverie Backend Server Started!
  📡 Running on: http://localhost:${PORT}
  🔗 API Base: http://localhost:${PORT}/api
  `);
});
