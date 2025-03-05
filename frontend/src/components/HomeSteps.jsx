import React from 'react';

const HomeSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Choisir la catégorie",
      description: "Choisir la catégorie d'artisanat dans le menu."
    },
    {
      number: 2,
      title: "Choisir un artisan",
      description: "Choisir un artisan parmi les professionnels disponibles."
    },
    {
      number: 3,
      title: "Contacter l'artisan",
      description: "Le contacter via le formulaire de contact."
    },
    {
      number: 4,
      title: "Réponse sous 48h",
      description: "Une réponse sera apportée sous 48h."
    }
  ];

  return (
    <section className="home-steps">
      <div className="container">
        <h2 className="home-steps__title">Comment trouver mon artisan ?</h2>
        
        <div className="home-steps__container">
          {steps.map((step) => (
            <div key={step.number} className="home-steps__step">
              <div className="home-steps__step-number">{step.number}</div>
              <h3 className="home-steps__step-title">{step.title}</h3>
              <p className="home-steps__step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSteps; 