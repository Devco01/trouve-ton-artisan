import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArtisanCard from './ArtisanCard';
import { artisanService } from '../services/api';

const FeaturedArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer les artisans en vedette depuis l'API
  useEffect(() => {
    const fetchFeaturedArtisans = async () => {
      try {
        setLoading(true);
        // Récupérer les artisans avec le paramètre "featured=true"
        const data = await artisanService.getAll({ featured: true, limit: 3 });
        setArtisans(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la récupération des artisans du mois:', err);
        setError('Impossible de charger les artisans du mois. Veuillez réessayer plus tard.');
        
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

    fetchFeaturedArtisans();
  }, []);

  return (
    <section className="featured-artisans">
      {loading ? (
        <div className="text-center">
          <p>Chargement des artisans du mois...</p>
        </div>
      ) : error ? (
        <div className="text-center">
          <p className="text-danger">{error}</p>
        </div>
      ) : (
        <>
          <div className="featured-artisans__container">
            {artisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/categories/batiment" className="btn btn-outline-primary">
              Voir tous les artisans
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedArtisans; 