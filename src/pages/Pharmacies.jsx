import React, { useEffect, useState } from "react";
import "./Pharnacies.css";

const pharmacies = [
  {
    name: "Pharmacie Dagbede de Vasseho",
    image: "/pharmacie-dagbede-vasseho.jpg",
    lat: 6.360985546677428,
    lng: 2.1052557155474423,
  },
  {
    name: "Pharmacie La Grâce Ouidah",
    image: "/pharmacie-modele.jpg",
    lat: 6.372451071856447,
    lng: 2.076367562209042,
  },
  {
    name: "Pharmacie LA PROVIDENCE",
    image: "/pharmacie-la-providence-ouidah.jpg",
    lat: 6.375267574708774,
    lng: 2.087736915344721,
  },
  {
    name: "Pharmacie Gbena Ouidah", // Nom tel qu'affiché sur Google Maps
    image: "/pharmacie-modele.jpg",
    lat: 6.366225705103651,
    lng: 2.0788105238454833,
  },
  {
    name: "Pharmacie Saint-Trinite Pahou",
    image: "/pharmacie-ste-trinite-pahou.jpg",
    lat: 6.386353409473455,
    lng: 2.208501707931674,
  },
  {
    name: "Pharmacie Prunelle de l'eternel",
    image: "/pharmacie-modele.jpg",
    lat: 6.378523621852646,
    lng: 2.2077466615816093,
  },
  {
    name: "Pharmacie Pahou Capot",
    image: "/pharmacie-capot-pahou.jpg",
    lat: 6.378438322482308,
    lng: 2.2057725557244456,
  },
];

export default function Pharmacies() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => {
        console.error("Erreur de géolocalisation :", err);
        alert("Impossible d'obtenir votre position.");
      }
    );
  }, []);

  const openDirections = (pharmacy) => {
    if (!userLocation) {
      alert("Votre position n'est pas encore disponible.");
      return;
    }

    const origin = `${userLocation.lat},${userLocation.lng}`;
    const destination = encodeURIComponent(pharmacy.name); // uniquement le nom encodé

    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
    window.open(url, "_blank");
  };

  return (
    <div className="pharmacies-container">
      <h1 className="page-title">Pharmacies à Ouidah</h1>

      <div className="pharmacies-row">
        {pharmacies.slice(0, 4).map((pharmacy, index) => (
          <div className="pharmacy-card" key={index}>
            <img src={pharmacy.image} alt={pharmacy.name} className="pharmacy-image" />
            <div className="pharmacy-info">
              <h2>{pharmacy.name}</h2>
              <button onClick={() => openDirections(pharmacy)}>Voir l'itinéraire</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pharmacies-row second-row">
        {pharmacies.slice(4).map((pharmacy, index) => (
          <div className="pharmacy-card" key={index}>
            <img src={pharmacy.image} alt={pharmacy.name} className="pharmacy-image" />
            <div className="pharmacy-info">
              <h2>{pharmacy.name}</h2>
              <button onClick={() => openDirections(pharmacy)}>Voir l'itinéraire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
