import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ArtisanCard = ({ artisan }) => {
  // Styles inline pour les cartes d'artisans
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%'
  };

  const headerStyle = {
    backgroundColor: '#e6f2ff',
    padding: '1rem',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60px'
  };

  const badgeStyle = {
    backgroundColor: '#0066cc',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'inline-block',
    textAlign: 'center',
    maxWidth: '90%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const contentStyle = {
    padding: '1.5rem',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    color: '#003366',
    marginBottom: '0.75rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    flexGrow: '1'
  };

  const footerStyle = {
    marginTop: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.75rem',
    width: '100%'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    textAlign: 'center',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const callButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#0066cc',
    color: 'white'
  };

  // Fonction pour générer les étoiles de notation
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} style={{ color: 'gold' }} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half-star" style={{ color: 'gold', opacity: 0.5 }} />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} style={{ color: 'gold', opacity: 0.2 }} />);
    }

    return stars;
  };

  return (
    <div className="artisan-card" style={cardStyle}>
      <div className="artisan-card__header" style={headerStyle}>
        <div className="artisan-card__specialty-badge" style={badgeStyle}>{artisan.specialite}</div>
      </div>
      <div className="artisan-card__content" style={contentStyle}>
        <h3 className="artisan-card__title" style={titleStyle}>{artisan.nom}</h3>
        <div className="artisan-card__rating" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
          {renderStars(artisan.note)}
          <span style={{ marginLeft: '0.5rem', fontSize: '0.85rem', color: '#666' }}>({artisan.nombreAvis})</span>
        </div>
        <div className="artisan-card__location" style={{ display: 'flex', alignItems: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
          <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: '#0066cc', flexShrink: '0' }} /> {artisan.ville}, {artisan.codePostal}
        </div>
        <p className="artisan-card__description" style={descriptionStyle}>
          {artisan.description.length > 100
            ? `${artisan.description.substring(0, 100)}...`
            : artisan.description}
        </p>
        <div className="artisan-card__footer" style={footerStyle}>
          <Link to={`/artisans/${artisan.id}`} className="btn btn-primary" style={buttonStyle}>
            Voir le profil
          </Link>
          <a href={`tel:${artisan.telephone}`} className="btn btn-call" style={callButtonStyle}>
            <FaPhone style={{ marginRight: '0.5rem', flexShrink: '0' }} /> Appeler
          </a>
        </div>
      </div>
    </div>
  );
};

ArtisanCard.propTypes = {
  artisan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    image: PropTypes.string,
    note: PropTypes.number.isRequired,
    nombreAvis: PropTypes.number.isRequired,
    specialite: PropTypes.string.isRequired,
    ville: PropTypes.string.isRequired,
    codePostal: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired
  }).isRequired
};

export default ArtisanCard; 