function GuideCard({ name, description, category }) {
  return (
    <article className="guide-card">

      <div className="guide-card-top">
        <span className="guide-category">
          {category}
        </span>
      </div>

      <h3>
        {name}
      </h3>

      <p>
        {description}
      </p>

    </article>
  );
}

export default GuideCard;