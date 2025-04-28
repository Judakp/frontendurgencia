import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import GoogleMap from "../components/GoogleMap"; // Composant pour afficher la carte

const Home = () => {
  return (
    <div className="home-container">
      {/* En-tête */}
      <header className="home-header">
        <center>
        <h1>Bienvenue à Ouidah - Services Essentiels pour les Touristes</h1>
        <p>
          Trouvez facilement les lieux essentiels pour votre séjour : pharmacies, hôpitaux, pompiers, stations-service et mairie.
        </p>
        <link rel="stylesheet" href="/frontend/src/components/Accueil.css" />
        </center>
      </header>

      {/* Slider */}
      <center>
      <section className="home-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src="/Hopital.jpg" alt="Slide 1" style={{ width: '700px', height: '300px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Pharmacie.jpg" alt="Slide 2" style={{ width: '700px', height: '300px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Pompiers.jpeg" alt="Slide 3" style={{ width: '700px', height: '300px' }} />
          </SwiperSlide>
        </Swiper>
      </section>
      </center>

      {/* Sections d'information */}
      <center>
      <section className="info-section">
        <img src="/Pharmacies.jpg" alt="Pharmacie" className="info-image" />
        <div className="info-text">
          <h2>Pharmacies</h2>
          <p>Retrouvez les pharmacies ouvertes à Ouidah pour vos besoins médicaux urgents ou quotidiens.</p>
          <Link to="/Pharmacies" className="btn">Voir les pharmacies</Link>
        </div>
      </section>

      <section className="info-section">
        <img src="/Hopital2.jpg" alt="Hôpital" className="info-image" />
        <div className="info-text">
          <h2>Hôpitaux</h2>
          <p>Accédez aux meilleurs établissements hospitaliers pour une assistance médicale rapide et efficace.</p>
          <Link to="/hopitaux" className="btn">Voir les hôpitaux</Link>
        </div>
      </section>

      <section className="info-section">
        <img src="/pompiers2.jpg" alt="Pompiers" className="info-image" />
        <div className="info-text">
          <h2>Sapeurs-Pompiers</h2>
          <p>Découvrez comment contacter rapidement les services de secours en cas d'urgence à Ouidah.</p>
          <Link to="/pompiers" className="btn">Contacter les pompiers</Link>
        </div>
      </section>

      {/* Section Blog */}
      <section className="blog-section">
        <h2>Nos Derniers Articles</h2>
        <div className="blog-list">
          <div className="blog-item">
            <h3>Découverte de Ouidah</h3>
            <p>Explorez les trésors cachés de Ouidah à travers nos guides touristiques complets.</p>
            <Link to="/blog">Lire plus</Link>
          </div>
          <div className="blog-item">
            <h3>Conseils santé pour voyageurs</h3>
            <p>Restez en pleine forme pendant votre séjour avec nos astuces santé simples et pratiques.</p>
            <Link to="/blog">Lire plus</Link>
          </div>
        </div>
      </section>
      </center>

      {/* Footer */}
      <footer className="home-footer">
        <p>Ouidah Tourisme - Contactez-nous pour plus d’informations !</p>
      </footer>
    </div>
  );
};

export default Home;
