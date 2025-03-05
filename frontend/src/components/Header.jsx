import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/recherche?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="Trouve ton artisan" className="header__logo-img" />
          </Link>
        </div>

        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link to="/" className={isActive('/')}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/categories" className={isActive('/categories')}>
                Catégories
              </Link>
            </li>
            <li>
              <Link to="/artisans" className={isActive('/artisans')}>
                Artisans
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact')}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="header__search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Rechercher un artisan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 