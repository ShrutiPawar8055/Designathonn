import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { text, target_language_code = 'en-IN', speaker = 'shubh', pace = 1.0 } = req.body;

  if (!text) {
    return res.status(400).json({ success: false, message: 'Text is required' });
  }

  try {
    const SARVAM_BASE_URL = process.env.SARVAM_BASE_URL || 'https://api.sarvam.ai';

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

    res.status(200).json({ success: true, data: { audios: response.data.audios } });
  } catch (error) {
    const upstreamMessage =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message ||
      'Unable to reach Sarvam TTS API.';

    res.status(502).json({ success: false, message: `TTS request failed: ${upstreamMessage}` });
  }
}
