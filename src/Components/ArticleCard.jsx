import { Link } from "react-router-dom";


function ArticleCard({
  id,
  name,
  annotation,
  category,
  img,
}) {

  return (
    <article className="article-card">


      <div className="article-image-wrapper">

        {img ? (

          <img
            src={img}
            alt={name}
            className="article-image"
          />

        ) : (

          <div className="article-image-placeholder">
            ✣
          </div>

        )}

      </div>


      <div className="article-card-content">

        <span className="article-category">
          {category}
        </span>


        <h3>
          {name}
        </h3>


        <p>
          {annotation}
        </p>


        <Link
          to={`/articles/${id}`}
          className="article-read-button"
        >
          <span>→</span>
          Читать
        </Link>

      </div>

    </article>
  );
}


export default ArticleCard;