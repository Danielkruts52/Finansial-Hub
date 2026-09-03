import "../css/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <Link className="logo" to="/" onClick={closeMenu}>
        <span className="logo-icon">✣</span>
        <span>Finansial Hub</span>
      </Link>

      {/* Desktop navigation */}
      <nav className="nav">
        <Link to="/guide">Справочник</Link>
        <Link to="/articles">Статьи</Link>
        <Link to="/time">Время</Link>
        <Link to="/news">Новости</Link>
        <Link to="/tools">Инструменты</Link>
        <Link to="/charts">Графики</Link>
      </nav>

      {/* Desktop subscribe button */}
      <Link className="header-button" to="/subscribe">
        Подписаться
      </Link>

      {/* Mobile hamburger */}
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <nav className="mobile-nav">
          <Link to="/guide" onClick={closeMenu}>
            Справочник
          </Link>

          <Link to="/articles" onClick={closeMenu}>
            Статьи
          </Link>

          <Link to="/time" onClick={closeMenu}>
            Время
          </Link>

          <Link to="/news" onClick={closeMenu}>
            Новости
          </Link>

          <Link to="/tools" onClick={closeMenu}>
            Инструменты
          </Link>

          <Link to="/charts" onClick={closeMenu}>
            Графики
          </Link>
        </nav>

        <Link
          className="mobile-subscribe"
          to="/subscribe"
          onClick={closeMenu}
        >
          Подписаться
        </Link>
      </div>
    </header>
  );
}

export default Header;