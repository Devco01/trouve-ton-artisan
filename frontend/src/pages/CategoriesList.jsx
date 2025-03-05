import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaHammer, FaPaintRoller, FaWrench, FaPlug, FaFaucet, FaHome, FaTemperatureHigh, FaUtensils, FaCut, FaTshirt, FaBreadSlice } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';
import '../styles/pages/categories-list.scss';

const CategoriesList = () => {
  const { categories, categoriesLoading, categoriesError } = useAppContext();

  // Fonction pour obtenir l'icône correspondant à la catégorie
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Bâtiment': <FaHome size={48} />,
      'Services': <FaWrench size={48} />,
      'Fabrication': <FaTools size={48} />,
      'Alimentation': <FaUtensils size={48} />,
      'Plomberie': <FaFaucet size={48} />,
      'Électricité': <FaPlug size={48} />,
      'Menuiserie': <FaHammer size={48} />,
      'Maçonnerie': <FaHome size={48} />,
      'Peinture': <FaPaintRoller size={48} />,
      'Chauffage': <FaTemperatureHigh size={48} />,
      'Coiffure': <FaCut size={48} />,
      'Couture': <FaTshirt size={48} />,
      'Boulangerie': <FaBreadSlice size={48} />
    };
    
    return iconMap[categoryName] || <FaTools size={48} />;
  };

  // Fonction pour générer un slug à partir du nom de la catégorie
  const getCategorySlug = (categoryName) => {
    return categoryName.toLowerCase().replace(/\s+/g, '-');
  };

  if (categoriesLoading) {
    return (
      <main className="categories-list-page">
        <div className="container">
          <h1 className="categories-list-page__title">Catégories d'artisans</h1>
          <p className="text-center">Chargement des catégories...</p>
        </div>
      </main>
    );
  }

  if (categoriesError) {
    return (
      <main className="categories-list-page">
        <div className="container">
          <h1 className="categories-list-page__title">Catégories d'artisans</h1>
          <p className="text-center text-danger">
            Impossible de charger les catégories. Veuillez réessayer plus tard.
          </p>
        </div>
      </main>
    );
  }

  // Regrouper les spécialités par catégorie
  const categoriesWithSpecialties = categories.reduce((acc, category) => {
    if (!acc[category.nom]) {
      acc[category.nom] = {
        id: category.id,
        nom: category.nom,
        slug: getCategorySlug(category.nom),
        specialites: []
      };
    }
    
    if (category.specialites) {
      acc[category.nom].specialites = [
        ...acc[category.nom].specialites,
        ...category.specialites
      ];
    }
    
    return acc;
  }, {});

  return (
    <main className="categories-list-page">
      <div className="container">
        <h1 className="categories-list-page__title">Catégories d'artisans</h1>
        <p className="categories-list-page__subtitle">
          Découvrez tous les types d'artisans disponibles dans la région Auvergne-Rhône-Alpes
        </p>
        
        <div className="categories-list-page__grid">
          {Object.values(categoriesWithSpecialties).map((category) => (
            <Link 
              to={`/categories/${category.slug}`} 
              className="category-card" 
              key={category.id}
            >
              <div className="category-card__icon">
                {getCategoryIcon(category.nom)}
              </div>
              <h2 className="category-card__title">{category.nom}</h2>
              <p className="category-card__count">
                {category.specialites.length} spécialité{category.specialites.length > 1 ? 's' : ''}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoriesList; 