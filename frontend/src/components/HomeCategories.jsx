import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaHammer, FaPaintRoller, FaWrench, FaPlug, FaFaucet, FaHome, FaTemperatureHigh, FaArrowRight, FaUtensils, FaCut, FaTshirt, FaBreadSlice } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const HomeCategories = () => {
  // Utiliser le contexte pour accéder aux catégories
  const { categories, categoriesLoading, categoriesError } = useAppContext();

  // Styles inline pour les icônes
  const iconContainerStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#e6f2ff',
    color: '#0066cc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    fontSize: '3.5rem'
  };

  // Fonction pour obtenir l'icône correspondant à la catégorie
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Bâtiment': <FaHome style={iconStyle} />,
      'Services': <FaWrench style={iconStyle} />,
      'Fabrication': <FaTools style={iconStyle} />,
      'Alimentation': <FaUtensils style={iconStyle} />,
      'Plomberie': <FaFaucet style={iconStyle} />,
      'Électricité': <FaPlug style={iconStyle} />,
      'Menuiserie': <FaHammer style={iconStyle} />,
      'Maçonnerie': <FaHome style={iconStyle} />,
      'Peinture': <FaPaintRoller style={iconStyle} />,
      'Chauffage': <FaTemperatureHigh style={iconStyle} />,
      'Coiffure': <FaCut style={iconStyle} />,
      'Couture': <FaTshirt style={iconStyle} />,
      'Boulangerie': <FaBreadSlice style={iconStyle} />
    };

    return iconMap[categoryName] || <FaTools style={iconStyle} />;
  };

  // Transformer les données pour correspondre à notre format
  const formattedCategories = categories.map(category => ({
    id: category.id,
    name: category.nom,
    slug: category.nom.toLowerCase().replace(/\s+/g, '-'),
    icon: getCategoryIcon(category.nom),
    count: category.nombreArtisans || 0
  }));

  // Limiter à 8 catégories pour l'affichage sur la page d'accueil
  const displayCategories = formattedCategories.slice(0, 8);

  return (
    <section className="home-categories">
      <div className="container">
        <h2 className="home-categories__title">Explorez nos catégories d'artisans</h2>
        
        {categoriesLoading ? (
          <div className="text-center">
            <p>Chargement des catégories...</p>
          </div>
        ) : categoriesError ? (
          <div className="text-center">
            <p className="text-danger">{categoriesError}</p>
          </div>
        ) : (
          <>
            <div className="home-categories__container">
              {displayCategories.map((category) => (
                <div key={category.id} className="category-card">
                  <div className="category-card__icon" style={iconContainerStyle}>
                    {category.icon}
                  </div>
                  <h3 className="category-card__name">{category.name}</h3>
                  <p className="category-card__count">{category.count} artisans</p>
                  <Link to={`/categories/${category.slug}`} className="category-card__link">
                    Voir les artisans <FaArrowRight />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="home-categories__view-all text-center mt-5">
              <Link to="/categories" className="btn btn-primary">
                Voir toutes les catégories
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HomeCategories; 