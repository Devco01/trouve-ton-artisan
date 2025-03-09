import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/components/artisanCard.scss';

const ArtisanCard = ({ artisan }) => {
  // Fonction pour obtenir les initiales
  const getInitials = (name) => {
    if (!name) return 'A';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Fonction pour afficher les étoiles selon la note
  const renderStars = (note) => {
    const stars = [];
    const fullStars = Math.floor(note);
    const hasHalfStar = note - fullStars >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star-half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-empty" />);
      }
    }
    
    return stars;
  };

  return (
    <Link to={`/artisans/${artisan.id}`} className="artisan-card">
      <div className="artisan-card__header">
        {artisan.image ? (
          <img 
            src={artisan.image} 
            alt={artisan.nom} 
            className="artisan-card__image" 
          />
        ) : (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100%', 
              backgroundColor: '#0072bc',
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold'
            }}
          >
            {getInitials(artisan.nom)}
          </div>
        )}
      </div>
      
      <div className="artisan-card__content">
        <h3 className="artisan-card__title">{artisan.nom}</h3>
        
        <div className="artisan-card__rating">
          <div className="artisan-card__stars">
            {renderStars(artisan.note)}
          </div>
          <span className="artisan-card__reviews">
            ({artisan.nombreAvis})
          </span>
        </div>
        
        <p className="artisan-card__specialty">
          {artisan.specialite?.nom || artisan.specialite}
        </p>
        
        <p className="artisan-card__location">
          <FaMapMarkerAlt className="artisan-card__location-icon" />
          {artisan.ville}, {artisan.codePostal}
        </p>
      </div>
    </Link>
  );
};

export default ArtisanCard; 