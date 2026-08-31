import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../css/ArticleDetail.css";


function ArticleDetail() {

  const { id } = useParams();

  const [article, setArticle] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


// Загрузка статьи

  useEffect(() => {

    fetch(`http://localhost:5000/api/articles/${id}`)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Статья не найдена");
        }

        return response.json();

      })

      .then((data) => {

        setArticle(data);

        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setError(
          "Не удалось загрузить статью"
        );

        setLoading(false);

      });

  }, [id]);

// Loading

  if (loading) {

    return (
      <p className="article-detail-status">
        Загрузка статьи...
      </p>
    );

  }


// Error

  if (error || !article) {

    return (
      <main className="article-detail-page">

        <div className="article-detail-error">

          <div className="article-detail-symbol">
            ✣
          </div>

          <h1>
            Статья не найдена
          </h1>

          <p>
            Возможно, статья была удалена
            или указан неправильный адрес.
          </p>

          <Link
            to="/articles"
            className="article-back-button"
          >
            ← Вернуться к статьям
          </Link>

        </div>

      </main>
    );

  }


  return (
    <main className="article-detail-page">


     {/* Article header */}

      <section className="article-detail-header">

        <Link
          to="/articles"
          className="article-back-link"
        >
          ← Все статьи
        </Link>


        <span className="article-detail-category">
          {article.category}
        </span>


        <h1>
          {article.name}
        </h1>


        {article.Annotation && (

          <p className="article-detail-annotation">
            {article.Annotation}
          </p>

        )}

      </section>


  {/* Image */}

      {article.img && (

        <div className="article-detail-image-wrapper">

          <img
            src={article.img}
            alt={article.name}
            className="article-detail-image"
          />

        </div>

      )}


      {/* Desc */}

      <article className="article-detail-content">

        <div className="article-detail-text">

          {article.description}

        </div>

      </article>


    {/* Back */}

      <div className="article-detail-footer">

        <Link
          to="/articles"
          className="article-back-button"
        >
          ← Вернуться к статьям
        </Link>

      </div>

    </main>
  );
}


export default ArticleDetail;