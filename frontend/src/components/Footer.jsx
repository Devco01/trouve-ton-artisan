import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Section Logo */}
        <div className="footer__section footer__section--logo">
          <Link to="/" className="footer__logo">
            <img src="/assets/images/logo.png" alt="Trouve ton artisan" />
          </Link>
          <p className="footer__tagline">
            La plateforme qui vous met en relation avec les meilleurs artisans de la région Auvergne-Rhône-Alpes.
          </p>
        </div>
        
        {/* Section Pages légales */}
        <div className="footer__section">
          <h3 className="footer__title">Pages légales</h3>
          <ul className="footer__links">
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
            <li><Link to="/accessibilite">Accessibilité</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
        
        {/* Section Adresse */}
        <div className="footer__section">
          <h3 className="footer__title">Adresse</h3>
          <address className="footer__address">
            101 cours Charlemagne<br />
            CS 20033<br />
            69269 LYON CEDEX 02<br />
            France<br />
            +33 (0)4 26 73 40 00
          </address>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="footer__copyright">
        © 2025 Région Auvergne-Rhône-Alpes. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer; 