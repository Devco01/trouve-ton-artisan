import React from 'react';
import { FaList, FaUserCheck, FaEnvelope, FaClock } from 'react-icons/fa';

const HomeSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Choisir la catégorie",
      description: "Choisir la catégorie d'artisanat dans le menu.",
      icon: <FaList />
    },
    {
      number: 2,
      title: "Choisir un artisan",
      description: "Choisir un artisan.",
      icon: <FaUserCheck />
    },
    {
      number: 3,
      title: "Contacter l'artisan",
      description: "Le contacter via le formulaire de contact.",
      icon: <FaEnvelope />
    },
    {
      number: 4,
      title: "Réponse sous 48h",
      description: "Une réponse sera apportée sous 48h.",
      icon: <FaClock />
    }
  ];

  return (
    <div className="home-steps">
      <h2 className="section-title">Comment trouver mon artisan ?</h2>
      
      <div className="home-steps__container">
        {steps.map((step) => (
          <div key={step.number} className="home-steps__step">
            <div className="home-steps__step-number">{step.number}</div>
            <div className="home-steps__step-icon">{step.icon}</div>
            <h3 className="home-steps__step-title">{step.title}</h3>
            <p className="home-steps__step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSteps; 