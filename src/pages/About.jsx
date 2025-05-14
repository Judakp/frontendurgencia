import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">À propos de notre entreprise</h1>

      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            src="/Urgencia.jpg"
            alt="Urgencia"
            className="about-image"
          />
          <h2 className="company-name">Urgencia</h2> {/* Nom de l'entreprise */}
        </div>

        <div className="about-text">
          <p>
            Bienvenue sur notre plateforme ! Nous sommes une entreprise locale basée à Ouidah,
            engagée à faciliter l'accès à des services essentiels comme la localisation rapide des pharmacies, hopitaux et postes de sapeurs pompiers.
          </p>
          <p>
            L'objectif de ce site est de vous permettre de trouver rapidement une pharmacie, un hopital ou un poste de sapeurs pompiers, ouverts.
            près de chez vous, avec des informations précises, des images, et même l'itinéraire via Google Maps.
          </p>
          <p>
            Grâce à la géolocalisation, notre outil vous connecte automatiquement à la pharmacie la
            plus proche pour vous faire gagner du temps et garantir votre santé et celle de vos proches.
          </p>
        </div>
      </div>
    </div>
  );
}
