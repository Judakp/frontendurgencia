import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

const Accueil = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    try {
      const response = await fetch("https://formspree.io/f/mpwdrkqd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset(); // Optionnel : reset du formulaire
      } else {
        const data = await response.json();
        if (data.errors) {
          alert("Erreur : " + data.errors.map(err => err.message).join(", "));
        } else {
          alert("Une erreur est survenue.");
        }
      }
    } catch (error) {
      console.error("Erreur lors de l’envoi :", error);
      alert("Erreur réseau ou serveur.");
    }
  };
  

  return (
    <div className="home-container">
      {/* En-tête */}
      <header className="home-header">
        <center>
          <h1>Bienvenue sur Urgencia</h1>
          <p>
            La plateforme pour trouver facilement les services essentiels pour votre séjour à Ouidah : pharmacies, hôpitaux et postes de sapeurs pompiers.
          </p>
        </center>
      </header>

      {/* Slider */}
      <center>
        <section className="home-slider-container">
          <div className="home-slider-box">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <img src="/Hopital.jpg" alt="Slide 1" style={{ width: '500px', height: '300px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Pharmacie.jpg" alt="Slide 2" style={{ width: '500px', height: '300px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Pompiers.jpeg" alt="Slide 3" style={{ width: '500px', height: '300px' }} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </center>

      {/* Services - 3 cartes sur la même ligne */}
      <section className="services-horizontal">
        <div className="service-card" style={{ backgroundColor: "#f16b12" }}>
          <img src="/Pharmacies.jpg" alt="Pharmacie" />
          <h3>Pharmacies</h3>
          <p>Retrouvez les pharmacies ouvertes à Ouidah pour vos besoins médicaux urgents et quotidiens.</p>
          <Link to="/pharmacies" className="btn">Voir l’itinéraire</Link>
        </div>

        <div className="service-card" style={{ backgroundColor: "#f16b12" }}>
          <img src="/Hopital2.jpg" alt="Hôpital" />
          <h3>Hôpitaux</h3>
          <p>Accédez aux établissements hospitaliers pour une assistance rapide et efficace.</p>
          <Link to="/hopitaux" className="btn">Voir l’itinéraire</Link>
        </div>

        <div className="service-card" style={{ backgroundColor: "#f16b12" }}>
          <img src="/pompiers2.jpg" alt="Pompiers" />
          <h3>Sapeurs-Pompiers</h3>
          <p>Contactez rapidement les secours en cas d'urgence à Ouidah.</p>
          <Link to="/pompiers" className="btn">Voir l’itinéraire</Link>
        </div>
      </section>

      {/* Blog */}
      <section className="blog-section">
        <center>
          <h2>Nos derniers articles</h2>
        </center>
        <br />
        <div className="blog-list">
          <div className="blog-item">
            <h3>Découverte de Ouidah</h3>
            <p>Explorez les trésors cachés de Ouidah à travers nos guides touristiques complets.</p>
            <Link to="/blog">Lire plus</Link>
          </div>
          <div className="blog-item">
            <h3>7 conseils santé pour les voyageurs</h3>
            <p>Restez en pleine forme pendant votre séjour avec nos astuces santé simples et pratiques.</p>
            <Link to="/blog">Lire plus</Link>
          </div>
        </div>
      </section>

      {/* Formulaire + Texte descriptif */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Colonne gauche : texte descriptif */}
          <div className="contact-info" style={{ backgroundColor: '#e1f5fe' }}>
            <h2>Pourquoi nous écrire ?</h2>
            <p>
              Vous avez une question sur un lieu, un service ou un article de notre site ?
              Utilisez ce formulaire pour nous écrire. Nous répondons généralement sous 24h.
            </p>
            <p>
              Merci de préciser votre demande pour que nous puissions vous aider efficacement.
            </p>
          </div>

          {/* Colonne droite : formulaire */}
          <div className="contact-form-wrapper" style={{ backgroundColor: '#fff3e0' }}>
            {isSubmitted ? (
              <div className="thank-you-message">
                <h3>Merci pour votre message !</h3>
                <p>Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Votre nom" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="Votre email" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" className="form-input" placeholder="Votre message"></textarea>
                </div>

                <button type="submit" className="btn">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </section>
      <br /><br /><br />
    </div>
  );
};

export default Accueil;
