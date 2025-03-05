import React from 'react';
import { FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "J'ai trouvé un excellent plombier en moins de 24h. Intervention rapide et travail de qualité. Je recommande vivement cette plateforme !",
      author: "Marie Dupont",
      position: "Propriétaire à Lyon"
    },
    {
      id: 2,
      quote: "Grâce à Trouve ton artisan, j'ai pu comparer plusieurs devis d'électriciens et choisir celui qui correspondait le mieux à mes attentes et à mon budget.",
      author: "Thomas Martin",
      position: "Gérant de boutique à Grenoble"
    },
    {
      id: 3,
      quote: "Service impeccable ! La plateforme est intuitive et les artisans sont sérieux et professionnels. Je n'hésiterai pas à revenir pour mes futurs projets.",
      author: "Sophie Leroy",
      position: "Architecte d'intérieur à Saint-Étienne"
    }
  ];

  return (
    <section className="home-testimonials">
      <div className="container">
        <h2 className="home-testimonials__title">Ce que disent nos clients</h2>
        
        <div className="home-testimonials__container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="home-testimonials__item">
              <p className="home-testimonials__quote">{testimonial.quote}</p>
              <div className="home-testimonials__author">
                <div className="home-testimonials__avatar">
                  <FaUser size={40} color="#0088cc" />
                </div>
                <div className="home-testimonials__info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 