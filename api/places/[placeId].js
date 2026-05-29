import { placesData } from '../lib/data.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { placeId } = req.query;
  const place = placesData.find(p => p.id === placeId);

  if (!place) {
    return res.status(404).json({ success: false, message: 'Place not found' });
  }

  res.status(200).json({ success: true, data: place });
}
