import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// frontend serve
app.use(express.static("."));

// homepage
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

// FREE AI image generator
app.post("/generate", (req, res) => {
  const prompt = req.body.prompt;

  const imageUrl =
    "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt);

  res.json({ image: imageUrl });
});

export default app;
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});
