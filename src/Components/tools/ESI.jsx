import { useState } from "react";

import ToolCard from "./ToolCard";

function ESI() {

  const [retention, setRetention] = useState(85);
  const [ratio, setRatio] = useState(3);
  const [margin, setMargin] = useState(25);
  const [runway, setRunway] = useState(12);


  const [calculated, setCalculated] = useState(true);


  const calculateESI = () => {
    setCalculated(true);
  };


  // Нормализация показателей

  const retentionScore =
    Math.min(retention / 100, 1);


  const ratioScore =
    Math.min(ratio / 5, 1);


  const marginScore =
    Math.min(margin / 50, 1);


  const runwayScore =
    Math.min(runway / 24, 1);


  // Итоговый ESI

  const esi =
    (
      retentionScore * 0.4 +
      ratioScore * 0.3 +
      marginScore * 0.2 +
      runwayScore * 0.1
    ) * 100;


  const roundedESI =
    Math.round(esi);


  // Поворот круга

  const meterStyle = {
    background: `conic-gradient(
      #8179b8 0deg,
      #8179b8 ${esi * 3.6}deg,
      rgba(255,255,255,.08) ${esi * 3.6}deg,
      rgba(255,255,255,.08) 360deg
    )`,
  };


  // Текст состояния

  let title;
  let description;
  let status;


  if (esi >= 80) {

    title =
      "Высокая устойчивость";

    description =
      "Бизнес обладает хорошим запасом устойчивости. Потеря части клиентов или временное снижение доходов с меньшей вероятностью приведут к серьёзному кризису.";

    status =
      "80–100 · Стабильная зона";

  } else if (esi >= 60) {

    title =
      "Относительная устойчивость";

    description =
      "Основные показатели выглядят достаточно здоровыми, однако отдельные слабые места могут стать проблемой при ухудшении рыночной ситуации.";

    status =
      "60–79 · Нормальная зона";

  } else if (esi >= 40) {

    title =
      "Зона риска";

    description =
      "Бизнес уже чувствителен к ухудшению условий. Стоит обратить внимание на удержание клиентов, маржинальность или стоимость их привлечения.";

    status =
      "40–59 · Зона риска";

  } else {

    title =
      "Высокая нестабильность";

    description =
      "Компания сильно зависит от сохранения текущих условий. Даже относительно небольшое падение выручки или рост стоимости привлечения клиентов может создать серьёзное давление.";

    status =
      "0–39 · Критическая зона";
  }


  return (
    <ToolCard
      title="Экзистенциальная нестабильность"
      description="Авторский индекс устойчивости бизнеса. Он показывает, насколько компания уязвима к потере клиентов, снижению маржи и сокращению финансового запаса."
      className="esi-card"
    >

      {/* INPUTS */}

      <div className="tool-grid">

        <div className="field">

          <label>
            Удержание клиентов, %
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={retention}
            onChange={(e) =>
              setRetention(Number(e.target.value))
            }
          />

        </div>


        <div className="field">

          <label>
            LTV : CAC
          </label>

          <input
            type="number"
            min="0"
            step="0.1"
            value={ratio}
            onChange={(e) =>
              setRatio(Number(e.target.value))
            }
          />

        </div>


        <div className="field">

          <label>
            Операционная маржа, %
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={margin}
            onChange={(e) =>
              setMargin(Number(e.target.value))
            }
          />

        </div>


        <div className="field">

          <label>
            Финансовый запас, месяцев
          </label>

          <input
            type="number"
            min="0"
            value={runway}
            onChange={(e) =>
              setRunway(Number(e.target.value))
            }
          />

        </div>

      </div>


      {/* BUTTON */}

      <button
        className="calculate-button"
        onClick={calculateESI}
      >
        Рассчитать устойчивость
      </button>


      {/* RESULT */}

      {calculated && (
        <div className="esi-content">

          <div
            className="esi-meter"
            style={meterStyle}
          >

            <div className="esi-number">

              <strong>
                {roundedESI}
              </strong>

              <span>
                ESI / 100
              </span>

            </div>

          </div>


          <div className="esi-text">

            <h4>
              {title}
            </h4>

            <p>
              {description}
            </p>


            <div className="esi-status">
              {status}
            </div>


            <div className="formula">

              ESI = 0,4 × Retention
              + 0,3 × LTV/CAC
              + 0,2 × Margin
              + 0,1 × Runway

            </div>

          </div>

        </div>
      )}

    </ToolCard>
  );
}

export default ESI;