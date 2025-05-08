import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <img src="/Urgencia.jpg" alt="Urgencia" />
        <span className="company-name">Urgencia</span>
      </Link>

      

      {/* Bouton hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>

      {/* Navigation conditionnelle avec classe `open` */}
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/pharmacies" onClick={() => setMenuOpen(false)}>Pharmacies</Link></li>
          <li><Link to="/hopitaux" onClick={() => setMenuOpen(false)}>Hôpitaux</Link></li>
          <li><Link to="/pompiers" onClick={() => setMenuOpen(false)}>Pompiers</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/apropos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

