import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTools, FaHammer, FaPaintRoller, FaWrench, FaPlug, FaFaucet, FaHome } from 'react-icons/fa';

const CategoryCard = ({ category }) => {
  // Fonction pour obtenir l'icône correspondant à la catégorie
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Plomberie': <FaFaucet />,
      'Électricité': <FaPlug />,
      'Menuiserie': <FaHammer />,
      'Maçonnerie': <FaHome />,
      'Peinture': <FaPaintRoller />,
      'Réparation': <FaWrench />
    };

    return iconMap[categoryName] || <FaTools />;
  };

  return (
    <div className="category-card">
      <Link to={`/categories/${category.slug}`} className="category-card__link">
        <div className="category-card__icon">
          {getCategoryIcon(category.nom)}
        </div>
        <h3 className="category-card__name">{category.nom}</h3>
        <div className="category-card__count">
          {category.nombreArtisans} artisan{category.nombreArtisans > 1 ? 's' : ''}
        </div>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    nombreArtisans: PropTypes.number.isRequired
  }).isRequired
};

export default CategoryCard; 