import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import '../styles/components/header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
        
        {/* Navigation */}
        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item">
              <NavLink to="/" className="header__link" onClick={handleLinkClick}>Accueil</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/categories/batiment" className="header__link" onClick={handleLinkClick}>Bâtiment</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/categories/services" className="header__link" onClick={handleLinkClick}>Services</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/categories/fabrication" className="header__link" onClick={handleLinkClick}>Fabrication</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/categories/alimentation" className="header__link" onClick={handleLinkClick}>Alimentation</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/about" className="header__link" onClick={handleLinkClick}>À propos</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/contact" className="header__link" onClick={handleLinkClick}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Barre de recherche */}
        <form onSubmit={handleSearch} className="header__search">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Rechercher">
            <FaSearch />
          </button>
        </form>
        
        {/* Bouton hamburger pour mobile */}
        <div className="header__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header; 