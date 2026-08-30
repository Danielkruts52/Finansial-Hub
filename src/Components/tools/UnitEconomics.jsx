import { useState } from "react";

import ToolCard from "./ToolCard";

function UnitEconomics() {

  const [marketing, setMarketing] = useState(100000);
  const [customers, setCustomers] = useState(100);
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000);
  const [lifetime, setLifetime] = useState(24);

  const [calculated, setCalculated] = useState(true);


  const formatNumber = (value) => {
    return new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 2,
    }).format(value);
  };


  const calculate = () => {
    setCalculated(true);
  };


  const cac =
    customers > 0
      ? marketing / customers
      : 0;


  const arpu =
    monthlyRevenue;


  const ltv =
    arpu * lifetime;


  const ratio =
    cac > 0
      ? ltv / cac
      : 0;


  const ltvProfit =
    ltv - cac;


  let ratioStatus = "Введите данные";

  if (ratio >= 5) {
    ratioStatus = "Очень сильная экономика";
  } else if (ratio >= 3) {
    ratioStatus = "Здоровое соотношение";
  } else if (ratio >= 1.5) {
    ratioStatus = "Есть потенциал для улучшения";
  } else if (ratio > 0) {
    ratioStatus = "Высокая стоимость привлечения";
  }


  return (
    <ToolCard
      title="CAC · LTV · ARPU"
      description="Рассчитайте стоимость привлечения клиента, его пожизненную ценность и средний доход на одного пользователя."
      light
    >

      {/* INPUTS */}

      <div className="tool-grid">

        <div className="field">

          <label>
            Расходы на привлечение клиентов
          </label>

          <input
            type="number"
            min="0"
            value={marketing}
            onChange={(e) =>
              setMarketing(Number(e.target.value))
            }
            placeholder="Например: 100000"
          />

        </div>


        <div className="field">

          <label>
            Количество новых клиентов
          </label>

          <input
            type="number"
            min="1"
            value={customers}
            onChange={(e) =>
              setCustomers(Number(e.target.value))
            }
            placeholder="Например: 100"
          />

        </div>


        <div className="field">

          <label>
            Средний доход с клиента в месяц
          </label>

          <input
            type="number"
            min="0"
            value={monthlyRevenue}
            onChange={(e) =>
              setMonthlyRevenue(Number(e.target.value))
            }
            placeholder="Например: 5000"
          />

        </div>


        <div className="field">

          <label>
            Средняя продолжительность жизни клиента, месяцев
          </label>

          <input
            type="number"
            min="1"
            value={lifetime}
            onChange={(e) =>
              setLifetime(Number(e.target.value))
            }
            placeholder="Например: 24"
          />

        </div>

      </div>


      {/* BUTTON */}

      <button
        className="calculate-button"
        onClick={calculate}
      >
        Рассчитать
      </button>


      {/* RESULTS */}

      {calculated && (
        <>
          <div className="results">

            <div className="result">

              <div className="result-name">
                CAC
              </div>

              <div className="result-value">
                {formatNumber(cac)}
              </div>

              <div className="result-info">
                Стоимость привлечения клиента
              </div>

            </div>


            <div className="result">

              <div className="result-name">
                LTV
              </div>

              <div className="result-value">
                {formatNumber(ltv)}
              </div>

              <div className="result-info">
                Пожизненная ценность клиента
              </div>

            </div>


            <div className="result">

              <div className="result-name">
                ARPU
              </div>

              <div className="result-value">
                {formatNumber(arpu)}
              </div>

              <div className="result-info">
                Средний доход с пользователя
              </div>

            </div>


            <div className="result">

              <div className="result-name">
                Прибыль LTV
              </div>

              <div className="result-value">
                {formatNumber(ltvProfit)}
              </div>

              <div className="result-info">
                LTV − CAC
              </div>

            </div>

          </div>


          {/* RATIO */}

          <div className="ratio-result">

            <div>

              <div className="ratio-label">
                Соотношение LTV : CAC
              </div>

              <div className="ratio-number">
                {ratio.toFixed(2)}×
              </div>

            </div>


            <div className="ratio-status">
              {ratioStatus}
            </div>

          </div>

        </>
      )}

    </ToolCard>
  );
}

export default UnitEconomics;