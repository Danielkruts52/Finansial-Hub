import "../css/Header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <Link className="logo" to="/">
          <span className="logo-icon">✣</span>
          <span>Finansial Hub</span>
        </Link>

        <nav className="nav">
  <Link to="/directory">Справочник</Link>
  <Link to="/articles">Статьи</Link>
  <Link to="/time">Время</Link>
  <Link to="/news">Новости</Link>
  <Link to="/tools">Инструменты</Link>
  <Link to="/charts">Графики</Link>
</nav>

        <button className="header-button">Подписаться</button>
      </header>
    </div>
  )
}

export default Header