import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../styles/pages/not-found.scss';

const NotFound = () => {
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-image">
            <img 
              src="/assets/images/not-found.svg" 
              alt="Page non trouvée" 
              className="not-found-img"
            />
          </div>
          
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page non trouvée</h2>
          
          <p className="not-found-text">
            Oups ! La page que vous recherchez semble avoir disparu ou n'existe pas.
          </p>
          <p className="not-found-text">
            Peut-être que l'artisan que vous cherchiez est parti réparer quelque chose ailleurs ?
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <FaHome /> Retour à l'accueil
            </Link>
          </div>
          
          <div className="not-found-help">
            <h3 className="not-found-help-title">Besoin d'aide ?</h3>
            <p className="not-found-help-text">
              Si vous pensez qu'il s'agit d'une erreur ou si vous ne trouvez pas ce que vous cherchez,
              n'hésitez pas à <Link to="/contact">nous contacter</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound; 