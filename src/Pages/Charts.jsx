import "../css/Charts.css";

import PieChart from "../Components/charts/PieChart";
import BarChart from "../Components/charts/BarChart";

function Charts() {
  return (
    <>

      {/* HERO */}

      <section className="charts-hero">

        <div className="charts-symbol">
          ✣
        </div>

        <h1>
          Финансовые графики
        </h1>

        <p>
          Создавайте простые и понятные диаграммы,
          чтобы быстро анализировать свои данные,
          расходы, доходы и показатели бизнеса.
        </p>

      </section>


      {/* INTRO */}

      <section className="charts-intro">

        <h2>
          Визуализируй
          <br />
          свои данные
        </h2>

        <p>
          Выберите подходящий тип диаграммы,
          введите свои значения и получите
          наглядное представление данных
          в реальном времени.
        </p>

      </section>


      {/* CHARTS */}

      <PieChart />

      <BarChart />

    </>
  );
}

export default Charts;