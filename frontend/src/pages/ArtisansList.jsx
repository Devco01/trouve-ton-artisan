import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard';
import { artisanService, categoryService } from '../services/api';
import '../styles/pages/artisans-list.scss';

const ArtisansList = () => {
  const [artisans, setArtisans] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categorySlug } = useParams();
  const location = useLocation();
  
  // Extraire les paramètres de recherche de l'URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');
  const searchCategory = searchParams.get('categorie');

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        setLoading(true);
        let data = [];
        
        // Si nous sommes sur une page de recherche
        if (location.pathname === '/search') {
          data = await artisanService.search(searchQuery, searchCategory);
          setCategory({ nom: searchQuery ? `Résultats pour "${searchQuery}"` : 'Tous les artisans' });
        } 
        // Si nous sommes sur une page de catégorie
        else if (categorySlug) {
          // Récupérer d'abord la catégorie par son slug
          const categories = await categoryService.getAll();
          console.log('Catégories récupérées:', categories);
          console.log('Slug recherché:', categorySlug);
          
          const foundCategory = categories.find(
            cat => cat.slug === categorySlug || cat.nom.toLowerCase().replace(/\s+/g, '-') === categorySlug
          );
          
          console.log('Catégorie trouvée:', foundCategory);
          
          if (foundCategory) {
            setCategory(foundCategory);
            // Récupérer les artisans de cette catégorie
            data = await artisanService.getByCategory(foundCategory.id);
            console.log('Artisans récupérés pour la catégorie:', data);
            
            // Si aucun artisan n'est trouvé, essayons de filtrer manuellement
            if (data.length === 0) {
              console.log('Aucun artisan trouvé, tentative de filtrage manuel');
              const allArtisans = await artisanService.getAll();
              data = allArtisans.filter(artisan => 
                artisan.categorieId === foundCategory.id || 
                artisan.categorie.toLowerCase() === foundCategory.nom.toLowerCase()
              );
              console.log('Artisans après filtrage manuel:', data);
            }
          } else {
            throw new Error('Catégorie non trouvée');
          }
        } 
        // Si nous sommes sur la page de tous les artisans
        else {
          data = await artisanService.getAll();
          setCategory({ nom: 'Tous les artisans' });
        }
        
        setArtisans(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la récupération des artisans:', err);
        setError('Impossible de charger les artisans. Veuillez réessayer plus tard.');
        
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
            description: "Plombier expérimenté avec plus de 15 ans d'expérience.",
            telephone: "0478123456"
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
            description: "Électricienne qualifiée pour tous vos travaux.",
            telephone: "0476987654"
          },
          {
            id: 3,
            nom: "Pierre Durand",
            image: "/assets/images/artisans/artisan-3.jpg",
            note: 4.7,
            nombreAvis: 56,
            specialite: "Menuisier",
            ville: "Saint-Étienne",
            codePostal: "42000",
            description: "Menuisier ébéniste spécialisé dans la fabrication sur mesure.",
            telephone: "0477456789"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [categorySlug, location.pathname, searchQuery, searchCategory]);

  return (
    <main className="artisans-list-page">
      <div className="container">
        <h1 className="artisans-list-page__title">
          {category ? category.nom : 'Artisans'}
        </h1>
        
        {loading ? (
          <div className="text-center">
            <p>Chargement des artisans...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-danger">{error}</p>
          </div>
        ) : artisans.length === 0 ? (
          <div className="text-center">
            <p>Aucun artisan trouvé.</p>
          </div>
        ) : (
          <div className="artisans-list-page__grid">
            {artisans.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ArtisansList; 