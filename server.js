import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024"
    });

    res.json({
      image: response.data[0].url
    });

  } catch (error) {
    res.json({ error: error.message });
  }
});

export default app;
app.get("/", (req, res) => {
  res.send("AI Server is Running ✔");
});
app.use(express.static("."));
