import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/News.css"

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось получить новости");
        }

        return response.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Произошла ошибка при загрузке новостей");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Загрузка новостей...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="news-page">

      <section className="news-hero">
        <div className="news-symbol">✣</div>

        <h1>Новости</h1>

        <p>
          Самые свежие новости из мира финансов,
          экономики и бизнеса.
        </p>
      </section>

      <section className="news-section">

        <div className="section-heading">
          <h2>Последние новости</h2>

          <p>
            Новости отсортированы от самых новых
            к самым старым.
          </p>
        </div>

        <div className="news-grid">

          {news.map((item) => (
            <article className="news-card" key={item.id}>

              <img
                src={item.img}
                alt={item.name}
                className="news-image"
              />

              <div className="news-card-content">

                <span className="news-category">
                  {item.category}
                </span>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="news-card-bottom">

                  <span className="news-date">
                    {new Date(item.published_at).toLocaleDateString(
                      "ru-RU"
                    )}
                  </span>

                 <Link
  to={`/news/${item.id}`}
  className="news-button"
>
  Читать
</Link>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default News;