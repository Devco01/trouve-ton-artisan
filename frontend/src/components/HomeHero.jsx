import React from 'react';

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero__content">
          <div className="home-hero__text">
            <h1 className="home-hero__title">Trouvez l'artisan idéal pour vos projets</h1>
            <p className="home-hero__subtitle">
              Découvrez des artisans qualifiés en Auvergne-Rhône-Alpes pour tous vos travaux de rénovation, construction et dépannage.
            </p>
            
            <div className="home-hero__stats">
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">500+</div>
                <div className="home-hero__stat-text">Artisans qualifiés</div>
              </div>
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">50+</div>
                <div className="home-hero__stat-text">Spécialités</div>
              </div>
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">10k+</div>
                <div className="home-hero__stat-text">Clients satisfaits</div>
              </div>
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">12</div>
                <div className="home-hero__stat-text">Départements couverts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero; 