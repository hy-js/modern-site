import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'

const EXTERNAL_API_URL = 'https://api.github.com/users/hy-js/repos?sort=pushed&per_page=1&direction=desc';
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const res = await fetch(EXTERNAL_API_URL,    {
      headers: {
        authorization: `${process.env.GITHUB_TOKEN}`
      }
    }
  );
    if (!res.ok) {
      throw new Error('Failed to fetch data from the external API');
    }

    const data = await res.json();
    NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: 'Internal Server Error' });
  }
}

