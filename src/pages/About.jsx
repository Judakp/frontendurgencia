import React from "react";
import { Link } from "react-router-dom";
// import GoogleMap from "../components/GoogleMap"; // Composant pour afficher la carte

const About = () => {
  return (
    <div className="home-container">
      {/* En-tête de la page */}
      <header className="home-header">
        <h1>Bienvenue à Ouidah - Services Essentiels pour les Touristes</h1>
        <p>
          Trouvez facilement les lieux essentiels pour votre séjour : pharmacies, hôpitaux, pompiers, stations-service et mairie.
        </p>
      </header>

      {/* Section des services disponibles */}
      <section className="services">
        <h2>Nos Services</h2>
        <div className="service-list">
          Bonjour Apropos
        </div>
      </section>

      {/* Google Maps - Affichage de la carte
      <section className="map-section">
        <h2>Localisation des Services</h2>
        <GoogleMap />
      </section> */}

      {/* Pied de page */}
      <footer className="home-footer">
        <p>Ouidah Tourisme - Contactez-nous pour plus d’informations !</p>
      </footer>
    </div>
  );
};

export default About; 
