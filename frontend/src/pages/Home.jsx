import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeSteps from '../components/HomeSteps';
import FeaturedArtisans from '../components/FeaturedArtisans';
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <main className="home-page">
      {/* Section Hero avec barre de recherche */}
      <HomeHero />
      
      {/* Section Comment ça marche */}
      <section className="home-section home-section--alt">
        <div className="container">
          <HomeSteps />
        </div>
      </section>
      
      {/* Section Artisans du mois */}
      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Les artisans du mois</h2>
          <p className="section-subtitle">
            Découvrez les artisans les mieux notés et les plus recommandés ce mois-ci
          </p>
          <FeaturedArtisans />
        </div>
      </section>
    </main>
  );
};

export default Home; 