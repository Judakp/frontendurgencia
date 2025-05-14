import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>Contact : +2290167337385</p>
        <p>Email : info@urgencia.com</p>
        <p>© 2025 - Site d'information sur les services essentiels de la ville de Ouidah</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/logofacebook.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/logolinkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/logoyoutube.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpeg" alt="Instagram" />
          </a>
          <a href="https://www.threads.net/@nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/thread.png" alt="Threads" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
