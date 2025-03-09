import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import '../styles/components/header.scss';
import { categoryService } from '../services/api';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getAll();
        setCategories(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        // Catégories par défaut en cas d'erreur
        setCategories([
          { id: 1, nom: 'Bâtiment', slug: 'batiment' },
          { id: 2, nom: 'Services', slug: 'services' },
          { id: 3, nom: 'Fabrication', slug: 'fabrication' },
          { id: 4, nom: 'Alimentation', slug: 'alimentation' }
        ]);
      }
    };

    fetchCategories();
  }, []);

  // Fonction pour fermer le menu mobile après clic sur un lien
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  // Fonction pour gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <img src="/assets/images/logo.png" alt="Trouve ton artisan" />
        </Link>
        
        <div className="header__right">
          {/* Navigation */}
          <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
            <ul className="header__menu">
              {categories.map(category => (
                <li key={category.id} className="header__menu-item">
                  <NavLink 
                    to={`/categories/${category.slug}`} 
                    className="header__link" 
                    onClick={handleLinkClick}
                  >
                    {category.nom}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Barre de recherche */}
          <form onSubmit={handleSearch} className="header__search">
            <input
              type="text"
              placeholder="Rechercher un artisan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Rechercher un artisan"
            />
            <button type="submit" aria-label="Rechercher">
              <FaSearch />
            </button>
          </form>
        </div>
        
        {/* Bouton hamburger pour mobile */}
        <div className="header__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header; 