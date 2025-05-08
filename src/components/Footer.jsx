import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>© 2025 - Site d'information pour les touristes</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube.svg" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.threads.net/@nom_de_l_entreprise" target="_blank" rel="noopener noreferrer">
            <img src="/icons/threads.svg" alt="Threads" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
