import { Link } from 'react-router-dom';
import "../css/Home.css"

function Home() {
    return (
       <div>
      <MainImage />
      <About />
      <Features />
      <Logos />
      <UseCase />
    </div>
    )
}

function MainImage() {
  return (
    <div>
       <section className="hero">
        <div className="hero-content">
          <div className="hero-symbol">✣</div>

          <h1>Доступ в бизнес для каждого</h1>

          <p>
            Портал на котором собрана вся информация, чтобы начать свой путь в финансовой сфере. Подписывайся и полуйчай самые свежие новости из мира финансов
          </p>

          <button className="primary-button">Подписаться</button>
        </div>

        <div className="hero-visual">
          <div className="coin coin-left"></div>
          <div className="coin coin-right"></div>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div>
      <section className="intro">
        <div>
          <h2>Что такое Finansial Hub?</h2>

          <div className="intro-action">
            <Link to='/guide' className="dark-button">Справочник</Link>
          </div>
        </div>

        <p className="intro-text">
          Finansial Hub - финансовое пространство, которое помогает начинающим маркетологам, аналитикам понять как устроена экономика. На сайте собраны десятки статьей, а также множество полезных инструментов, которые помогут разобраться в устройстве финансовой среды.
        </p>
      </section>
    </div>
  )
}

function Features() {
  return (
    <div>
      
    <section className="features">

        <article className="feature feature-light">
          <h3>Инфляция растет вместе с нами</h3>

          <p>
             Как зарабатывать деньги так, чтобы они не обесценелись? Читайте на нашем портале.
          </p>

          <div className="flower"></div>
        </article>

        <article className="feature">
          <h3>
            Всегда наготове,<br/>
            Всегда готов к действию.
          </h3>

          <p>
            Следи за временем и новостями из разных уголков планеты на нашей платформе.
          </p>
        </article>

        <article className="feature">
          <h3>
            100%<br/>
            Бывает ли реальный успех?
          </h3>

          <p>
            Начинайте инвестировать прямо сейчас в ценные бумаги и свое будущее. Статьи об инвестициях на нашем портале.
          </p>
        </article>

      </section>


    </div>
  )
}

function Logos() {
  return (
    <div>

<section className="logos">
        <div className="logos-caption">
          Наши партнеры
        </div>

        <div className="logo-list">
          <span>The weight of shadow</span>
          <span>DK studio</span>
          <span>Looking for himself</span>
          <span>Mathub</span>
          <span>SSQ Group</span>
        </div>
      </section>

    </div>
  )
}

function UseCase(){
  return(
    <div>
      <section className="use-cases">

        <div className="use-cases-info">
          

          <h2>Используй инструменты</h2>

          <p className="use-cases-description">
            Наши технологии позволяют оптимизировать рутинные задачи, а также визуализировать данные.
          </p>
        </div>

        <article className="business-card">
          <h3>Графики</h3>

          <p>
            На нашем портале вы можете визуализировать графики прибыли, продаж и других данных вашей компании на усмотрение
          </p>

          <Link to="/charts" className="learn-more">
          <span>→</span>
          Начать
          </Link>

          <div className="bank">
            <div className="bank-roof"></div>
            <div className="bank-top"></div>

            <div className="bank-columns">
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
            </div>

            <div className="bank-base"></div>
          </div>
        </article>

      </section>
    </div>
  )
}

export default Home
