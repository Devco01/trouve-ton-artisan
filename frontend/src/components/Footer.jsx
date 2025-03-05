import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__section">
            <h4>Trouve ton artisan</h4>
            <p>
              La plateforme qui connecte les particuliers avec les meilleurs artisans 
              de la région Auvergne Rhône-Alpes.
            </p>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Liens rapides</h4>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/categories">Catégories</Link>
              </li>
              <li>
                <Link to="/artisans">Artisans</Link>
              </li>
              <li>
                <Link to="/a-propos">À propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Catégories populaires</h4>
            <ul>
              <li>
                <Link to="/categories/batiment">Bâtiment</Link>
              </li>
              <li>
                <Link to="/categories/services">Services</Link>
              </li>
              <li>
                <Link to="/categories/fabrication">Fabrication</Link>
              </li>
              <li>
                <Link to="/categories/alimentation">Alimentation</Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Contact</h4>
            <p>123 Avenue des Artisans</p>
            <p>69000 Lyon, France</p>
            <p>Téléphone: +33 4 78 XX XX XX</p>
            <p>Email: contact@trouve-ton-artisan.fr</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Trouve ton artisan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 