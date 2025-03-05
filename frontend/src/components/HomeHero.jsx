import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const HomeHero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  
  // Utiliser le contexte pour accéder aux catégories
  const { categories, categoriesLoading } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchTerm.trim()) {
      params.append('q', searchTerm.trim());
    }
    if (category) {
      params.append('categorie', category);
    }
    
    navigate(`/search?${params.toString()}`);
  };

  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero__content">
          <div className="home-hero__text">
            <h1 className="home-hero__title">Trouvez l'artisan idéal pour vos projets</h1>
            <p className="home-hero__subtitle">
              Découvrez des artisans qualifiés en Auvergne-Rhône-Alpes pour tous vos travaux de rénovation, construction et dépannage.
            </p>
            
            <div className="home-hero__search-container">
              <div className="home-hero__search">
                <form onSubmit={handleSearch} className="home-hero__form">
                  <div className="home-hero__input-group">
                    <FaSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder="Que recherchez-vous ?"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    disabled={categoriesLoading}
                  >
                    <option value="">Toutes les catégories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.nom}
                      </option>
                    ))}
                  </select>
                  
                  <button type="submit" className="btn btn-primary">
                    Rechercher
                  </button>
                </form>
              </div>
            </div>
            
            <div className="home-hero__stats">
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">500+</div>
                <div className="home-hero__stat-text">Artisans qualifiés</div>
              </div>
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">50+</div>
                <div className="home-hero__stat-text">Spécialités</div>
              </div>
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">10k+</div>
                <div className="home-hero__stat-text">Clients satisfaits</div>
              </div>
              <div className="home-hero__stat">
                <div className="home-hero__stat-number">12</div>
                <div className="home-hero__stat-text">Départements couverts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero; 