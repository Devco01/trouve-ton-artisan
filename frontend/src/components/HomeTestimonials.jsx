import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const HomeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Émilie Bertrand",
      location: "Lyon",
      rating: 5,
      text: "J'ai fait appel à un plombier via ce site pour réparer une fuite urgente. Le service était rapide et professionnel. Je recommande vivement !",
      image: "/assets/images/testimonials/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Thomas Laurent",
      location: "Grenoble",
      rating: 5,
      text: "Grâce à cette plateforme, j'ai trouvé un excellent électricien pour refaire toute l'installation de ma maison. Travail impeccable et tarif transparent.",
      image: "/assets/images/testimonials/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Sophie Moreau",
      location: "Annecy",
      rating: 4,
      text: "Très satisfaite du menuisier que j'ai contacté via ce site. Il a réalisé un dressing sur mesure qui correspond exactement à mes attentes.",
      image: "/assets/images/testimonials/testimonial-3.jpg"
    }
  ];

  // Fonction pour passer au témoignage suivant automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Fonction pour afficher les étoiles selon la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < rating ? "star-filled" : "star-empty"} 
        />
      );
    }
    return stars;
  };

  return (
    <section className="home-testimonials">
      <div className="container">
        <h2 className="home-testimonials__title">Ce que nos clients disent</h2>
        
        <div className="home-testimonials__carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-card__quote">
                <FaQuoteLeft className="quote-icon" />
              </div>
              
              <div className="testimonial-card__content">
                <p className="testimonial-card__text">{testimonial.text}</p>
                
                <div className="testimonial-card__rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="testimonial-card__author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-card__author-image" 
                  />
                  <div className="testimonial-card__author-info">
                    <h4 className="testimonial-card__author-name">{testimonial.name}</h4>
                    <p className="testimonial-card__author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="home-testimonials__indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Voir témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials; 