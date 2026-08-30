import "../css/Tools.css";

import UnitEconomics from "../Components/tools/UnitEconomics";
import ESI from "../Components/tools/ESI";

function Tools() {
  return (
    <>

      {/* HERO */}

      <section className="tools-hero">

        <div className="tools-symbol">
          ✣
        </div>

        <h1>
          Финансовые инструменты
        </h1>

        <p>
          Рассчитывайте ключевые показатели бизнеса,
          анализируйте эффективность привлечения клиентов
          и оценивайте устойчивость своей компании.
        </p>

      </section>


      {/* INTRO */}

      <section className="tools-intro">

        <h2>
          Считай.
          <br />
          Анализируй.
          <br />
          Расти.
        </h2>

        <p>
          Здесь собраны инструменты, которые помогают
          превратить финансовые данные в понятные
          показатели для принятия решений.
        </p>

      </section>


      {/* CAC / LTV / ARPU */}

      <UnitEconomics />


      {/* ESI */}

      <ESI />

    </>
  );
}

export default Tools;