import React, { useEffect, useState } from "react";
import "./Hopitaux.css";

const hospitals = [
  { name: "Hôpital de zone Ouidah", image: "/hopitalzoneouidah.jpg", lat: 6.386430940329989, lng: 2.0658444166742447 },
  { name: "Centre de Santé Ouidah 2", image: "/hopital3.jpg", lat: 6.3662, lng: 2.0783 },
  { name: "Houakpe Centre de Santé d’Arrondissement", image: "/hopital3.jpg", lat: 6.3698, lng: 2.0821 },
  { name: "Djegbadji Centre de Santé d’Arrondissement", image: "/hopital3.jpg", lat: 6.3711, lng: 2.0764 },
  { name: "Centre de Santé de Kindji/ Ouidah", image: "/hopital3.jpg", lat: 6.3861, lng: 2.2100 },
  { name: "Centre de Santé Pahou", image: "/pahou-centre-de-sante.jpg", lat: 6.3889, lng: 2.2215 },
  { name: "Maternité de Pahou", image: "hopital3.jpg", lat: 6.3802, lng: 2.2051 }
];

export default function Hospitals() {
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

  const openDirections = (hospital) => {
    if (!userLocation) {
      alert("Votre position n'est pas encore disponible.");
      return;
    }

    // Encodage uniquement du nom, pour une recherche plus précise
    const destinationQuery = encodeURIComponent(hospital.name);
    const origin = `${userLocation.lat},${userLocation.lng}`;

    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destinationQuery}&travelmode=driving`;
    window.open(url, "_blank");
  };

  return (
    <div className="hospitals-container">
      <h1 className="page-title">Hôpitaux à Ouidah</h1>

      <div className="hospitals-row">
        {hospitals.slice(0, 4).map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <img src={hospital.image} alt={hospital.name} className="hospital-image" />
            <div className="hospital-info">
              <h2>{hospital.name}</h2>
              <button onClick={() => openDirections(hospital)}>Voir l'itinéraire</button>
            </div>
          </div>
        ))}
      </div>

      <div className="hospitals-row second-row">
        {hospitals.slice(4).map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <img src={hospital.image} alt={hospital.name} className="hospital-image" />
            <div className="hospital-info">
              <h2>{hospital.name}</h2>
              <button onClick={() => openDirections(hospital)}>Voir l'itinéraire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
