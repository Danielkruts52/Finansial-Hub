import "../css/Time.css";

import Clock from "../Components/Clock";
import cities from "../data/cities";

function Time() {
  return (
    <>

      {/* HERO */}

      <section className="time-hero">

        <div className="time-symbol">
          ✣
        </div>

        <h1>
          Мировое время
        </h1>

        <p>
          Следите за текущим временем в крупнейших
          финансовых центрах мира в одном месте.
        </p>

      </section>


      {/* CLOCKS */}

      <section className="clocks-section">

        <div className="section-heading">

          <h2>
            Сейчас в мире
          </h2>

          <p>
            Время обновляется автоматически каждую
            секунду и учитывает часовые пояса городов.
          </p>

        </div>


        <div className="clock-grid">

          {cities.map((city) => (
            <Clock
              key={city.timezone}
              city={city.city}
              country={city.country}
              timezone={city.timezone}
            />
          ))}

        </div>

      </section>

    </>
  );
}

export default Time;