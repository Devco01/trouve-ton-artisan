import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { artisanService } from '../services/api';
import ContactForm from '../components/ContactForm';
import '../styles/pages/artisan-detail.scss';

const ArtisanDetail = () => {
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { artisanId } = useParams();

  // Fonction pour obtenir les initiales
  const getInitials = (name) => {
    if (!name) return 'A';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

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
          specialite: { nom: "Électricité" },
          categorie: { nom: "Bâtiment" },
          ville: "Lyon",
          codePostal: "69001",
          description: "Jean Dupont est un plombier expérimenté avec plus de 15 ans d'expérience dans le domaine. Spécialisé dans les installations sanitaires et le dépannage d'urgence. Il intervient rapidement sur Lyon et sa périphérie. Jean Dupont est reconnu pour son professionnalisme, sa ponctualité et la qualité de son travail.",
          telephone: "04 XX XX XX XX",
          email: "contact@jeandupont.fr"
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
      <div className="artisan-detail-content">
        <div className="container">
          <div className="artisan-detail-main">
            <div className="artisan-detail-main__left">
              <div className="artisan-detail-main__image-container">
                {artisan.image ? (
                  <img 
                    src={artisan.image} 
                    alt={artisan.nom} 
                    className="artisan-detail-main__image" 
                  />
                ) : (
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      height: '100%', 
                      backgroundColor: '#0072bc',
                      color: 'white',
                      fontSize: '72px',
                      fontWeight: 'bold'
                    }}
                  >
                    {getInitials(artisan.nom)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="artisan-detail-main__center">
              <h2 className="artisan-detail-main__name">{artisan.nom}</h2>
              
              <div className="artisan-detail-main__rating">
                <div className="artisan-detail-main__stars">
                  {renderStars(artisan.note)}
                </div>
                <span className="artisan-detail-main__rating-text">
                  ({artisan.nombreAvis} avis)
                </span>
              </div>
              
              <div className="artisan-detail-main__specialty">
                {artisan.specialite?.nom || artisan.specialite}
              </div>
              
              <div className="artisan-detail-main__location">
                <FaMapMarkerAlt className="artisan-detail-main__icon" />
                <span>{artisan.ville}, {artisan.codePostal}</span>
              </div>
              
              <div className="artisan-detail-main__contact-info">
                <div className="artisan-detail-main__phone">
                  <FaPhone className="artisan-detail-main__icon" />
                  <span>Téléphone: {artisan.telephone}</span>
                </div>
                
                {artisan.email && (
                  <div className="artisan-detail-main__email">
                    <FaEnvelope className="artisan-detail-main__icon" />
                    <span>Email: {artisan.email}</span>
                  </div>
                )}
              </div>
              
              <div className="artisan-detail-main__about">
                <h3 className="artisan-detail-main__about-title">À propos</h3>
                <p className="artisan-detail-main__about-text">{artisan.description}</p>
              </div>
            </div>
            
            <div className="artisan-detail-main__right">
              <div className="artisan-detail-main__contact-form">
                <h3 className="artisan-detail-main__contact-title">Contacter {artisan.nom}</h3>
                <p className="artisan-detail-main__contact-subtitle">
                  Remplissez ce formulaire pour demander un devis ou poser une question. Une réponse vous sera apportée sous 24h.
                </p>
                <ContactForm artisanId={artisan.id} artisanName={artisan.nom} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtisanDetail;