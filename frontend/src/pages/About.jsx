import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaUsers, FaTools, FaMapMarkedAlt } from 'react-icons/fa';
import '../styles/pages/about.scss';

const About = () => {
  // Styles plus agressifs pour le centrage
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center'
  };
  
  const textContainerStyle = {
    width: '100%',
    maxWidth: '800px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  
  const paragraphStyle = {
    width: '100%',
    textAlign: 'center',
    margin: '0 auto 1rem auto',
    maxWidth: '800px'
  };
  
  const titleStyle = {
    textAlign: 'center',
    width: '100%',
    margin: '0 auto 1rem auto'
  };

  return (
    <main className="about-page" style={{ textAlign: 'center' }}>
      <div className="container" style={containerStyle}>
        <h1 className="about-page__title" style={titleStyle}>À propos de Trouve ton artisan</h1>
        
        <section className="about-section" style={containerStyle}>
          <div className="about-section__content" style={textContainerStyle}>
            <h2 className="about-section__title" style={titleStyle}>Notre mission</h2>
            <div style={textContainerStyle}>
              <p style={paragraphStyle}>
                Trouve ton artisan est une initiative de la région Auvergne-Rhône-Alpes visant à valoriser 
                et promouvoir les artisans locaux. Notre mission est de faciliter la mise en relation entre 
                les particuliers et les artisans qualifiés de la région, contribuant ainsi au développement 
                économique local et à la préservation des savoir-faire artisanaux.
              </p>
              <p style={paragraphStyle}>
                Nous croyons fermement que l'artisanat est un pilier essentiel de notre patrimoine culturel 
                et économique. C'est pourquoi nous nous engageons à offrir une plateforme accessible et 
                conviviale qui met en lumière le talent et l'expertise des artisans de notre région.
              </p>
            </div>
          </div>
        </section>
        
        <section className="about-section about-section--reverse" style={containerStyle}>
          <div className="about-section__content" style={textContainerStyle}>
            <h2 className="about-section__title" style={titleStyle}>L'artisanat en Auvergne-Rhône-Alpes</h2>
            <div style={textContainerStyle}>
              <p style={paragraphStyle}>
                L'Auvergne-Rhône-Alpes est l'une des régions les plus artisanales de France, avec près d'un tiers 
                des entreprises de la région qui sont des entreprises d'artisanat. En 2021, on comptait 221 000 
                entreprises artisanales dans la région, couvrant une grande diversité de métiers et de savoir-faire.
              </p>
              <p style={paragraphStyle}>
                Ces artisans contribuent significativement à l'économie locale, à la création d'emplois et à la 
                transmission de compétences uniques. Ils sont présents dans tous les secteurs d'activité : 
                bâtiment, services, fabrication et alimentation.
              </p>
            </div>
          </div>
        </section>
        
        <section className="values-section" style={containerStyle}>
          <h2 className="values-section__title" style={titleStyle}>Nos valeurs</h2>
          
          <div className="values-grid">
            <div className="value-card" style={{ textAlign: 'center' }}>
              <div className="value-card__icon">
                <FaHandshake />
              </div>
              <h3 className="value-card__title" style={titleStyle}>Qualité et confiance</h3>
              <p style={paragraphStyle}>
                Nous nous engageons à référencer des artisans qualifiés et fiables, 
                pour garantir des prestations de qualité aux particuliers.
              </p>
            </div>
            
            <div className="value-card" style={{ textAlign: 'center' }}>
              <div className="value-card__icon">
                <FaUsers />
              </div>
              <h3 className="value-card__title" style={titleStyle}>Proximité et accessibilité</h3>
              <p style={paragraphStyle}>
                Nous facilitons la mise en relation entre les artisans locaux et les habitants 
                de la région, favorisant ainsi l'économie de proximité.
              </p>
            </div>
            
            <div className="value-card" style={{ textAlign: 'center' }}>
              <div className="value-card__icon">
                <FaTools />
              </div>
              <h3 className="value-card__title" style={titleStyle}>Savoir-faire et tradition</h3>
              <p style={paragraphStyle}>
                Nous valorisons l'expertise et les techniques traditionnelles des artisans, 
                tout en encourageant l'innovation et l'adaptation aux nouvelles demandes.
              </p>
            </div>
            
            <div className="value-card" style={{ textAlign: 'center' }}>
              <div className="value-card__icon">
                <FaMapMarkedAlt />
              </div>
              <h3 className="value-card__title" style={titleStyle}>Développement territorial</h3>
              <p style={paragraphStyle}>
                Nous contribuons au dynamisme économique de tous les territoires de la région, 
                des grandes agglomérations aux zones rurales.
              </p>
            </div>
          </div>
        </section>
        
        <section className="about-section" style={containerStyle}>
          <div className="about-section__content" style={textContainerStyle}>
            <h2 className="about-section__title" style={titleStyle}>Notre engagement</h2>
            <div style={textContainerStyle}>
              <p style={paragraphStyle}>
                Trouve ton artisan s'engage à offrir une plateforme accessible à tous, conformément 
                à la norme WCAG 2.1. Nous veillons à ce que notre site soit utilisable par tous les publics, 
                y compris les personnes en situation de handicap.
              </p>
              <p style={paragraphStyle}>
                Nous nous engageons également à protéger les données personnelles des utilisateurs 
                et à assurer la sécurité des échanges sur notre plateforme. Pour en savoir plus, 
                consultez notre page sur les <Link to="/donnees-personnelles">données personnelles</Link>.
              </p>
            </div>
          </div>
        </section>
        
        <section className="cta-section" style={containerStyle}>
          <h2 className="cta-section__title" style={titleStyle}>Rejoignez-nous</h2>
          <p style={paragraphStyle}>
            Que vous soyez un particulier à la recherche d'un artisan qualifié ou un artisan 
            souhaitant rejoindre notre plateforme, nous sommes là pour vous accompagner.
          </p>
          <div className="cta-section__buttons">
            <Link to="/search" className="btn btn-primary">Trouver un artisan</Link>
            <Link to="/contact" className="btn btn-contact">Nous contacter</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About; 