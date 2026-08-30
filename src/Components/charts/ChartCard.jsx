function ChartCard({
  title,
  description,
  children,
  light = false,
}) {
  return (
    <section
      className={`chart-card ${light ? "light" : ""}`}
    >

      <div className="chart-card-header">

        <div>

          <h3>
            {title}
          </h3>

          <p className="chart-card-description">
            {description}
          </p>

        </div>

      </div>

      {children}

    </section>
  );
}

export default ChartCard;