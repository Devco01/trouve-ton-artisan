import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Catégories définies dans le brief
  const categories = [
    { id: 1, nom: 'Bâtiment', slug: 'batiment' },
    { id: 2, nom: 'Services', slug: 'services' },
    { id: 3, nom: 'Fabrication', slug: 'fabrication' },
    { id: 4, nom: 'Alimentation', slug: 'alimentation' }
  ];

  // Couleurs de la palette
  const colors = {
    lightBlue: '#f1f8fc',
    blue: '#0074c7',
    darkBlue: '#00497c',
    darkGrey: '#384050',
    red: '#cd2c2e',
    green: '#82b864'
  };

  // Styles pour le header
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    backgroundColor: colors.lightBlue,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    height: 'auto'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  };

  // Style pour le logo
  const logoStyle = {
    height: '100px',
    width: 'auto',
    display: 'block'
  };

  // Fonction pour fermer le menu mobile après clic sur un lien
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={{ textDecoration: 'none', display: 'block', height: '100px' }} onClick={handleLinkClick}>
          <img 
            src="/assets/images/logo.png" 
            alt="Trouve ton artisan" 
            style={logoStyle}
          />
        </Link>
        
        {/* Bouton hamburger pour mobile */}
        <div 
          style={{ 
            display: 'none', 
            '@media (max-width: 768px)': { 
              display: 'block',
              cursor: 'pointer',
              color: colors.darkBlue,
              fontSize: '24px'
            }
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Navigation */}
        <nav style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'flex-end',
          '@media (max-width: 768px)': {
            display: menuOpen ? 'block' : 'none',
            position: 'absolute',
            top: '100px',
            left: 0,
            right: 0,
            backgroundColor: colors.lightBlue,
            zIndex: 100,
            padding: '20px 0',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              width: '100%'
            }
          }}>
            <li style={{ 
              margin: '0 15px',
              '@media (max-width: 768px)': {
                margin: '10px 0',
                textAlign: 'center'
              }
            }}>
              <NavLink 
                to="/" 
                end 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : colors.darkBlue,
                  fontWeight: 'bold',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? colors.blue : 'transparent',
                  display: 'block'
                })}
                onClick={handleLinkClick}
              >
                Accueil
              </NavLink>
            </li>
            {categories.map(category => (
              <li key={category.id} style={{ 
                margin: '0 15px',
                '@media (max-width: 768px)': {
                  margin: '10px 0',
                  textAlign: 'center'
                }
              }}>
                <NavLink 
                  to={`/categories/${category.slug}`}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? 'white' : colors.darkBlue,
                    fontWeight: 'bold',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? colors.blue : 'transparent',
                    display: 'block'
                  })}
                  onClick={handleLinkClick}
                >
                  {category.nom}
                </NavLink>
              </li>
            ))}
            <li style={{ 
              margin: '0 15px',
              '@media (max-width: 768px)': {
                margin: '10px 0',
                textAlign: 'center'
              }
            }}>
              <NavLink 
                to="/about" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : colors.darkBlue,
                  fontWeight: 'bold',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? colors.blue : 'transparent',
                  display: 'block'
                })}
                onClick={handleLinkClick}
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 