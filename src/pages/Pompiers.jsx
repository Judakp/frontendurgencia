import React, { useEffect, useState } from "react";
import "./Pompiers.css";

const fireStation = {
  name: "Poste des Sapeurs-Pompiers de Ouidah",
  image: "/pompier-benin.jpeg", // à adapter selon ton projet
  lat: 6.378804183615815, // Coordonnées approximatives, à corriger si besoin
  lng: 2.088012561378884,
  phone1: "01 90 07 07 14",
  phone2: "01 98 98 98 10",
};

export default function FireStation() {
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

  const openDirections = () => {
    if (!userLocation) {
      alert("Votre position n'est pas encore disponible.");
      return;
    }

    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${fireStation.lat},${fireStation.lng}&travelmode=driving`;
    window.open(url, "_blank");
  };

  return (
    <div className="firestation-container">
      <h1 className="page-title">Sapeurs-Pompiers à Ouidah</h1>
      <div className="firestation-card">
        <img src={fireStation.image} alt={fireStation.name} className="firestation-image" />
        <div className="firestation-info">
          <h2>{fireStation.name}</h2>
          <p>📍 Localisation : Ouidah</p>
          <p>📞 Urgences : {fireStation.phone1} / {fireStation.phone2}</p>
          <button onClick={openDirections}>Voir l'itinéraire</button>
        </div>
      </div>
    </div>
  );
}
