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
        const data = await artisanService.getAll({ featured: true, limit: 4 });
        setArtisans(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la récupération des artisans en vedette:', err);
        setError('Impossible de charger les artisans en vedette. Veuillez réessayer plus tard.');
        
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
            description: "Plombier expérimenté avec plus de 15 ans d'expérience. Spécialisé dans les installations sanitaires et le dépannage d'urgence.",
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
            description: "Électricienne qualifiée pour tous vos travaux d'installation, de rénovation et de mise aux normes électriques.",
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
            description: "Menuisier ébéniste spécialisé dans la fabrication et la restauration de meubles sur mesure et d'aménagements intérieurs.",
            telephone: "0477456789"
          },
          {
            id: 4,
            nom: "Sophie Leroy",
            image: "/assets/images/artisans/artisan-4.jpg",
            note: 4.6,
            nombreAvis: 42,
            specialite: "Peintre",
            ville: "Annecy",
            codePostal: "74000",
            description: "Peintre décoratrice proposant des prestations de qualité pour vos intérieurs et extérieurs. Conseils en décoration offerts.",
            telephone: "0450789123"
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
      <div className="container">
        <h2 className="featured-artisans__title">Nos artisans en vedette</h2>
        
        {loading ? (
          <div className="text-center">
            <p>Chargement des artisans en vedette...</p>
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
            
            <div className="text-center mt-5">
              <Link to="/artisans" className="btn btn-primary">
                Voir tous les artisans
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedArtisans; 