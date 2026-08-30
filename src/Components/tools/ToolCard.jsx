function ToolCard({
  title,
  description,
  children,
  light = false,
  className = "",
}) {
  return (
    <section
      className={`tool-card ${light ? "light" : ""} ${className}`}
    >

      <div className="tool-card-header">

        <div>

          <h3>
            {title}
          </h3>

          <p className="tool-card-description">
            {description}
          </p>

        </div>

      </div>

      {children}

    </section>
  );
}

export default ToolCard;