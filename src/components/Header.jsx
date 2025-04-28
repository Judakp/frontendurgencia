import { Link } from 'react-router-dom';
import "./Header.css"; // Fichier de styles CSS


const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src="/Urgencia.jpg" alt="Urgencia" />
        </div>
        <nav className="navigation">
          <ul>
  
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/pharmacies">Pharmacies</Link></li>
          <li><Link to="/hopitaux">Hôpitaux</Link></li>
          <li><Link to="/pompiers">Pompiers</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;
