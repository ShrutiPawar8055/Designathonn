import { placesData } from '../lib/data.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  res.status(200).json({ success: true, data: placesData });
}
