import { NextApiRequest, NextApiResponse } from 'next';

const EXTERNAL_API_URL = 'https://api.github.com/users/hy-js/repos?sort=pushed&per_page=1&direction=desc';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(EXTERNAL_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the external API');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}