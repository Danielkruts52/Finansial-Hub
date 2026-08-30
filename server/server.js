import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/news", async (req, res) => {
  try {
    const [news] = await db.query(`
      SELECT
        id,
        name,
        img,
        description,
        published_at,
        category
      FROM News
      ORDER BY published_at DESC
    `);

    res.json(news);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении новостей",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server запущен на http://localhost:${PORT}`);
});