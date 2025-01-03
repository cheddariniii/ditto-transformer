export async function POST(req) {
  const data = await req.json();
  const response = await fetch('https://api.meshy.ai/openapi/v2/text-to-3d', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MESHY_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return Response.json(await response.json());
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const response = await fetch(`https://api.meshy.ai/openapi/v2/text-to-3d/${id}`, {
    headers: {
      'Authorization': `Bearer ${process.env.MESHY_API_KEY}`
    }
  });
  return Response.json(await response.json());
}