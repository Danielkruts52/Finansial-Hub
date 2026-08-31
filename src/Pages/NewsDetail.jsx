import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/NewsDetail.css";

function NewsDetail() {
  const { id } = useParams();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Новость не найдена");
        }

        return response.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Не удалось загрузить новость");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="news-status">Загрузка новости...</p>;
  }

  if (error) {
    return <p className="news-status">{error}</p>;
  }

  return (
    <main className="news-detail">

      <article className="news-detail-card">

        <img
          src={news.img}
          alt={news.name}
          className="news-detail-image"
        />

        <div className="news-detail-content">

          <div className="news-detail-meta">
            <span>{news.category}</span>

            <span>
              {new Date(news.published_at).toLocaleDateString("ru-RU")}
            </span>
          </div>

          <h1>{news.name}</h1>

          <div className="news-detail-description">
            {news.description}
          </div>

          <Link to="/news" className="back-button">
            ← Вернуться к новостям
          </Link>

        </div>

      </article>

    </main>
  );
}

export default NewsDetail;