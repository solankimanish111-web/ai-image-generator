app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    console.log("PROMPT:", prompt);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024"
    });

    console.log("RESPONSE:", response);

    res.json({
      image: response.data[0].url
    });

  } catch (error) {
    console.log("ERROR:", error.message);
    res.json({ error: error.message });
  }
});
