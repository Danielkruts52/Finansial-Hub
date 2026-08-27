import { useEffect, useState } from "react";

function Clock({ city, country, timezone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Получаем текущее время нужного города
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const currentTime = formatter.format(time);

  // Получаем отдельно часы, минуты и секунды
  const parts = formatter.formatToParts(time);

  const hours = Number(
    parts.find((part) => part.type === "hour")?.value
  );

  const minutes = Number(
    parts.find((part) => part.type === "minute")?.value
  );

  const seconds = Number(
    parts.find((part) => part.type === "second")?.value
  );

  // Рассчитываем положение стрелок
  const hourRotation =
    (hours % 12) * 30 + minutes * 0.5;

  const minuteRotation =
    minutes * 6 + seconds * 0.1;

  const secondRotation =
    seconds * 6;

  return (
    <article className="clock-card">

      {/* Город */}
      <div className="clock-city">
        {city}
      </div>

      {/* Страна */}
      <div className="clock-country">
        {country}
      </div>


      {/* Аналоговые часы */}
      <div className="clock">

        <div className="clock-face">

          {/* Цифры */}
          <div className="number number-12">
            12
          </div>

          <div className="number number-3">
            3
          </div>

          <div className="number number-6">
            6
          </div>

          <div className="number number-9">
            9
          </div>


          {/* Деления */}
          <div className="ticks"></div>


          {/* Стрелки */}
          <div className="hands">

            <div
              className="hour-hand"
              style={{
                transform: `rotate(${hourRotation}deg)`,
              }}
            />

            <div
              className="minute-hand"
              style={{
                transform: `rotate(${minuteRotation}deg)`,
              }}
            />

            <div
              className="second-hand"
              style={{
                transform: `rotate(${secondRotation}deg)`,
              }}
            />

            <div className="clock-center"></div>

          </div>

        </div>

      </div>


      {/* Цифровое время */}
      <div className="digital-time">
        {currentTime}
      </div>

    </article>
  );
}

export default Clock;