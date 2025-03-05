import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import ArtisanCard from '../components/ArtisanCard';
import { artisanService } from '../services/api';
import { useAppContext } from '../context/AppContext';
import '../styles/pages/search.scss';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categories } = useAppContext();
  
  // Extraire les paramètres de recherche de l'URL
  const searchParams = new URLSearchParams(location.search);
  const initialSearchTerm = searchParams.get('q') || '';
  const initialCategory = searchParams.get('categorie') || '';
  const initialSpecialty = searchParams.get('specialite') || '';
  const initialLocation = searchParams.get('lieu') || '';
  
  // États pour les filtres et résultats
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [showFilters, setShowFilters] = useState(false);
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Récupérer les spécialités disponibles pour la catégorie sélectionnée
  const specialties = selectedCategory 
    ? categories
        .filter(cat => cat.nom === selectedCategory)
        .flatMap(cat => cat.specialites || [])
    : categories.flatMap(cat => cat.specialites || []);
  
  // Récupérer les lieux disponibles (villes uniques des artisans)
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await artisanService.getLocations();
        setLocations(data);
      } catch (err) {
        console.error('Erreur lors de la récupération des lieux:', err);
        // Utiliser des données fictives en cas d'erreur
        setLocations([
          'Lyon', 'Grenoble', 'Saint-Étienne', 'Clermont-Ferrand', 
          'Annecy', 'Chambéry', 'Valence', 'Bourg-en-Bresse'
        ]);
      }
    };
    
    fetchLocations();
  }, []);
  
  // Effectuer la recherche lorsque les paramètres changent
  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        setLoading(true);
        
        // Construire les paramètres de recherche
        const params = {
          q: initialSearchTerm,
          categorie: initialCategory,
          specialite: initialSpecialty,
          lieu: initialLocation
        };
        
        // Filtrer les paramètres vides
        Object.keys(params).forEach(key => {
          if (!params[key]) delete params[key];
        });
        
        const data = await artisanService.search(params);
        setArtisans(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la recherche d\'artisans:', err);
        setError('Impossible de charger les résultats. Veuillez réessayer plus tard.');
        
        // Utiliser des données fictives en cas d'erreur
        setArtisans([
          {
            id: 1,
            nom: "Jean Dupont",
            image: "/assets/images/artisans/artisan-1.jpg",
            note: 4.8,
            nombreAvis: 124,
            specialite: "Plombier",
            ville: "Lyon",
            codePostal: "69001",
            description: "Plombier expérimenté avec plus de 15 ans d'expérience."
          },
          {
            id: 2,
            nom: "Marie Martin",
            image: "/assets/images/artisans/artisan-2.jpg",
            note: 4.9,
            nombreAvis: 87,
            specialite: "Électricienne",
            ville: "Grenoble",
            codePostal: "38000",
            description: "Électricienne qualifiée pour tous vos travaux."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArtisans();
  }, [initialSearchTerm, initialCategory, initialSpecialty, initialLocation]);
  
  // Gérer la soumission du formulaire de recherche
  const handleSearch = (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.append('q', searchTerm.trim());
    if (selectedCategory) params.append('categorie', selectedCategory);
    if (selectedSpecialty) params.append('specialite', selectedSpecialty);
    if (selectedLocation) params.append('lieu', selectedLocation);
    
    navigate(`/search?${params.toString()}`);
  };
  
  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSpecialty('');
    setSelectedLocation('');
    navigate('/search');
  };
  
  return (
    <main className="search-page">
      <div className="container">
        <h1 className="search-page__title">
          {initialSearchTerm 
            ? `Résultats pour "${initialSearchTerm}"` 
            : 'Rechercher un artisan'}
        </h1>
        
        <div className="search-page__search-bar">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-form__input-group">
              <input
                type="text"
                className="search-form__input"
                placeholder="Que recherchez-vous ?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-form__button">
                <FaSearch /> Rechercher
              </button>
            </div>
            
            <button 
              type="button" 
              className="search-form__filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter /> Filtres {showFilters ? <FaTimes /> : null}
            </button>
          </form>
          
          {showFilters && (
            <div className="search-filters">
              <div className="search-filters__row">
                <div className="search-filters__group">
                  <label htmlFor="category" className="search-filters__label">Catégorie</label>
                  <select
                    id="category"
                    className="search-filters__select"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedSpecialty(''); // Réinitialiser la spécialité quand la catégorie change
                    }}
                  >
                    <option value="">Toutes les catégories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.nom}>
                        {category.nom}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="search-filters__group">
                  <label htmlFor="specialty" className="search-filters__label">Spécialité</label>
                  <select
                    id="specialty"
                    className="search-filters__select"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    disabled={specialties.length === 0}
                  >
                    <option value="">Toutes les spécialités</option>
                    {specialties.map((specialty, index) => (
                      <option key={index} value={specialty.nom}>
                        {specialty.nom}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="search-filters__group">
                  <label htmlFor="location" className="search-filters__label">Lieu</label>
                  <select
                    id="location"
                    className="search-filters__select"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">Tous les lieux</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="search-filters__actions">
                <button 
                  type="button" 
                  className="search-filters__reset"
                  onClick={resetFilters}
                >
                  <FaTimes /> Réinitialiser les filtres
                </button>
                <button 
                  type="button" 
                  className="search-filters__apply"
                  onClick={handleSearch}
                >
                  Appliquer les filtres
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="search-page__results">
          {loading ? (
            <div className="text-center">
              <p>Chargement des résultats...</p>
            </div>
          ) : error ? (
            <div className="text-center">
              <p className="text-danger">{error}</p>
            </div>
          ) : artisans.length === 0 ? (
            <div className="search-page__no-results">
              <h2>Aucun résultat trouvé</h2>
              <p>
                Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
              </p>
              <button 
                className="btn btn-primary mt-3"
                onClick={resetFilters}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <>
              <p className="search-page__results-count">
                {artisans.length} artisan{artisans.length > 1 ? 's' : ''} trouvé{artisans.length > 1 ? 's' : ''}
              </p>
              <div className="search-page__results-grid">
                {artisans.map(artisan => (
                  <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchResults; 