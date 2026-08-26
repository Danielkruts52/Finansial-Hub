import "../css/Header.css"

function Header() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <span className="logo-icon">✣</span>
          <span>Finansial Hub</span>
        </a>

        <nav className="nav">
          <a href="">Справочник</a>
          <a href="">Статьи</a>
          <a href="">Время</a>
          <a href="">Новости</a>
          <a href="">Инструменты</a>
          <a href="">Графики</a>
        </nav>

        <button className="header-button">Подписаться</button>
      </header>
    </div>
  )
}

export default Header