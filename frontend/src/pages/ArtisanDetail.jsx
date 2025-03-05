import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaGlobe, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { artisanService } from '../services/api';
import ContactForm from '../components/ContactForm';
import ReviewsList from '../components/ReviewsList';
import '../styles/pages/artisan-detail.scss';

const ArtisanDetail = () => {
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { artisanId } = useParams();

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        setLoading(true);
        const data = await artisanService.getById(artisanId);
        setArtisan(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la récupération des détails de l\'artisan:', err);
        setError('Impossible de charger les détails de l\'artisan. Veuillez réessayer plus tard.');
        
        // Utiliser des données fictives en cas d'erreur
        setArtisan({
          id: 1,
          nom: "Jean Dupont",
          image: "/assets/images/artisans/artisan-1.jpg",
          note: 4.8,
          nombreAvis: 124,
          specialite: "Plombier",
          categorie: "Bâtiment",
          ville: "Lyon",
          codePostal: "69001",
          description: "Plombier expérimenté avec plus de 15 ans d'expérience dans le domaine. Spécialisé dans les installations sanitaires, le dépannage et la rénovation. Intervention rapide et travail soigné garanti.",
          telephone: "0478123456",
          siteWeb: "https://www.plomberie-dupont.fr",
          avis: [
            {
              id: 1,
              nom: "Sophie Martin",
              note: 5,
              commentaire: "Excellent travail, rapide et efficace. Je recommande vivement !",
              date: "2023-05-15"
            },
            {
              id: 2,
              nom: "Pierre Durand",
              note: 4,
              commentaire: "Bon travail, prix correct. Légèrement en retard sur le rendez-vous.",
              date: "2023-04-22"
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [artisanId]);

  // Fonction pour afficher les étoiles selon la note
  const renderStars = (note) => {
    const stars = [];
    const fullStars = Math.floor(note);
    const hasHalfStar = note - fullStars >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star star--filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star star--half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    
    return stars;
  };

  if (loading) {
    return (
      <main className="artisan-detail-page">
        <div className="container">
          <p className="text-center">Chargement des détails de l'artisan...</p>
        </div>
      </main>
    );
  }

  if (error || !artisan) {
    return (
      <main className="artisan-detail-page">
        <div className="container">
          <p className="text-center text-danger">{error || "Artisan non trouvé"}</p>
          <div className="text-center mt-4">
            <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="artisan-detail-page">
      <div className="container">
        <div className="artisan-detail">
          <div className="artisan-detail__header">
            <div className="artisan-detail__image-container">
              <img 
                src={artisan.image || '/assets/images/artisan-default.jpg'} 
                alt={artisan.nom} 
                className="artisan-detail__image" 
              />
            </div>
            <div className="artisan-detail__info">
              <h1 className="artisan-detail__name">{artisan.nom}</h1>
              
              <div className="artisan-detail__rating">
                <div className="artisan-detail__stars">
                  {renderStars(artisan.note)}
                </div>
                <span className="artisan-detail__rating-text">
                  {artisan.note.toFixed(1)} ({artisan.nombreAvis} avis)
                </span>
              </div>
              
              <div className="artisan-detail__meta">
                <p className="artisan-detail__specialty">
                  <strong>Spécialité:</strong> {artisan.specialite}
                </p>
                <p className="artisan-detail__category">
                  <strong>Catégorie:</strong> {artisan.categorie}
                </p>
                <p className="artisan-detail__location">
                  <FaMapMarkerAlt /> {artisan.ville}, {artisan.codePostal}
                </p>
                
                {artisan.telephone && (
                  <p className="artisan-detail__phone">
                    <FaPhone /> <a href={`tel:${artisan.telephone}`}>{artisan.telephone}</a>
                  </p>
                )}
                
                {artisan.siteWeb && (
                  <p className="artisan-detail__website">
                    <FaGlobe /> <a href={artisan.siteWeb} target="_blank" rel="noopener noreferrer">
                      Visiter le site web
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="artisan-detail__content">
            <div className="artisan-detail__about">
              <h2>À propos</h2>
              <p>{artisan.description}</p>
            </div>
            
            <div className="artisan-detail__reviews">
              <h2>Avis clients</h2>
              {artisan.avis && artisan.avis.length > 0 ? (
                <ReviewsList reviews={artisan.avis} />
              ) : (
                <p>Aucun avis pour le moment.</p>
              )}
            </div>
            
            <div className="artisan-detail__contact">
              <h2>Contacter {artisan.nom}</h2>
              <ContactForm artisanId={artisan.id} artisanName={artisan.nom} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtisanDetail; 