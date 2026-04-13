export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Authorization": "Token " + process.env.REPLICATE_API_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "7838f9c2d4f7f1c1e8c6f1e5c0c9b6b0cbb",
      input: {
        prompt: prompt
      }
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
