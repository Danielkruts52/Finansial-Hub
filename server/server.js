import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());




// Все статьи

app.get("/api/articles", async (req, res) => {
  try {
    const [articles] = await db.query(`
      SELECT
        id,
        name,
        description,
        category,
        Annotation,
        img
      FROM articles
      ORDER BY id DESC
    `);

    res.json(articles);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении статей",
    });
  }
});


// Одна статья

app.get("/api/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [articles] = await db.query(
      `
      SELECT
        id,
        name,
        description,
        category,
        Annotation,
        img
      FROM articles
      WHERE id = ?
      `,
      [id]
    );

    if (articles.length === 0) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }

    res.json(articles[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении статьи",
    });
  }
});

// Все термины

app.get("/api/guide", async (req, res) => {
  try {
    const [guide] = await db.query(`
      SELECT
        id,
        name,
        description,
        category
      FROM Guide
      ORDER BY name ASC
    `);

    res.json(guide);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении справочника",
    });
  }
});


// Один термин

app.get("/api/guide/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [guide] = await db.query(
      `
      SELECT
        id,
        name,
        description,
        category
      FROM Guide
      WHERE id = ?
      `,
      [id]
    );

    if (guide.length === 0) {
      return res.status(404).json({
        message: "Термин не найден",
      });
    }

    res.json(guide[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении термина",
    });
  }
});


// Все новости

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


// Одна новость

app.get("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [news] = await db.query(
      `
      SELECT
        id,
        name,
        img,
        description,
        published_at,
        category
      FROM News
      WHERE id = ?
      `,
      [id]
    );

    if (news.length === 0) {
      return res.status(404).json({
        message: "Новость не найдена",
      });
    }

    res.json(news[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении новости",
    });
  }
});


// Сервер

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server запущен на http://localhost:${PORT}`);
});