import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import '../styles/pages/contact.scss';

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="container">
        <h1 className="contact-page__title">Contactez-nous</h1>
        
        <div className="contact-page__content">
          <div className="contact-page__info">
            <div className="contact-card">
              <h2 className="contact-card__title">Région Auvergne-Rhône-Alpes</h2>
              <p className="contact-card__subtitle">Antenne de Lyon</p>
              
              <div className="contact-card__details">
                <div className="contact-card__detail">
                  <FaMapMarkerAlt className="contact-card__icon" />
                  <div>
                    <p>101 cours Charlemagne</p>
                    <p>CS 20033</p>
                    <p>69269 LYON CEDEX 02</p>
                    <p>France</p>
                  </div>
                </div>
                
                <div className="contact-card__detail">
                  <FaPhone className="contact-card__icon" />
                  <div>
                    <p>+33 (0)4 26 73 40 00</p>
                  </div>
                </div>
                
                <div className="contact-card__detail">
                  <FaEnvelope className="contact-card__icon" />
                  <div>
                    <p>contact@trouve-ton-artisan.fr</p>
                  </div>
                </div>
                
                <div className="contact-card__detail">
                  <FaClock className="contact-card__icon" />
                  <div>
                    <p>Lundi - Vendredi: 9h00 - 17h00</p>
                    <p>Fermé les week-ends et jours fériés</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-page__map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1825257751396!2d4.8158699!3d45.7417843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4a2d2a1729%3A0x3e1c5d48dd605c4d!2s101%20Cr%20Charlemagne%2C%2069002%20Lyon!5e0!3m2!1sfr!2sfr!4v1652345678901!5m2!1sfr!2sfr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation de la Région Auvergne-Rhône-Alpes à Lyon"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-page__form">
            <h2 className="contact-page__form-title">Envoyez-nous un message</h2>
            <p className="contact-page__form-subtitle">
              Vous avez une question sur le site ou sur les artisans ? N'hésitez pas à nous contacter.
            </p>
            
            <ContactForm />
          </div>
        </div>
        
        <div className="contact-page__faq">
          <h2 className="contact-page__faq-title">Questions fréquentes</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-item__question">Comment puis-je devenir un artisan référencé sur le site ?</h3>
              <p className="faq-item__answer">
                Pour être référencé sur notre plateforme, vous devez être un artisan enregistré dans la région Auvergne-Rhône-Alpes. 
                Contactez-nous via le formulaire ci-dessus en précisant votre activité et vos coordonnées, et nous vous expliquerons la procédure.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-item__question">Comment sont sélectionnés les artisans du mois ?</h3>
              <p className="faq-item__answer">
                Les artisans du mois sont sélectionnés selon plusieurs critères : la qualité des avis clients, 
                le nombre de projets réalisés récemment, et l'engagement envers l'excellence artisanale. 
                Cette sélection est renouvelée chaque mois pour mettre en avant différents talents.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-item__question">Comment puis-je signaler un problème avec un artisan ?</h3>
              <p className="faq-item__answer">
                Si vous rencontrez un problème avec un artisan référencé sur notre site, 
                vous pouvez nous contacter via le formulaire ci-dessus en détaillant la situation. 
                Nous examinerons votre signalement et prendrons les mesures appropriées.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-item__question">Les artisans sont-ils vérifiés avant d'être référencés ?</h3>
              <p className="faq-item__answer">
                Oui, tous les artisans référencés sur notre plateforme sont vérifiés. 
                Nous contrôlons leur inscription au répertoire des métiers, leurs qualifications professionnelles 
                et leur assurance responsabilité civile professionnelle avant de les ajouter à notre base de données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact; 