import React from 'react';

const HomeSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Recherchez",
      description: "Trouvez l'artisan idéal en fonction de votre besoin et de votre localisation."
    },
    {
      number: 2,
      title: "Comparez",
      description: "Consultez les profils, les avis et les tarifs pour faire le meilleur choix."
    },
    {
      number: 3,
      title: "Contactez",
      description: "Prenez contact directement avec l'artisan pour discuter de votre projet."
    },
    {
      number: 4,
      title: "Évaluez",
      description: "Après la prestation, partagez votre expérience pour aider la communauté."
    }
  ];

  return (
    <section className="home-steps">
      <div className="container">
        <h2 className="home-steps__title">Comment ça marche ?</h2>
        
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