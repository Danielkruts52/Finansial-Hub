import "./css/App.css"
import Header from "./Components/Header.jsx"

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
      <MainImage />
      <About />

      </main>
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
            <button className="dark-button">Справочник</button>
          </div>
        </div>

        <p className="intro-text">
          Finansial Hub - финансовое пространство, которое помогает начинающим маркетологам, аналитикам понять как устроена экономика. На сайте собраны десятки статьей, а также множество полезных инструментов, которые помогут разобраться в устройстве финансовой среды.
        </p>
      </section>
    </div>
  )
}

export default App