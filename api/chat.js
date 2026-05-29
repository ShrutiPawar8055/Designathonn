import axios from 'axios';
import { getEnhancedPlaceData, buildPlaceContext, stripThinkingBlock } from './lib/data.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { query, placeId } = req.body;
  if (!query) {
    return res.status(400).json({ success: false, message: 'Query is required' });
  }

  try {
    const place = getEnhancedPlaceData(placeId);
    const SARVAM_BASE_URL = process.env.SARVAM_BASE_URL || 'https://api.sarvam.ai';
    const SARVAM_MODEL = process.env.SARVAM_MODEL || 'sarvam-m';

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

    res.status(200).json({ success: true, data: { response: content } });
  } catch (error) {
    const upstreamMessage =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message ||
      'Unable to reach Sarvam AI.';

    res.status(502).json({ success: false, message: `Live AI request failed: ${upstreamMessage}` });
  }
}
