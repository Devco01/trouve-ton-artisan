import React, { useState } from 'react';

const ContactForm = ({ artisanId, artisanName }) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        nom: '',
        email: '',
        objet: '',
        message: ''
      });
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
      });
    }
  };

  if (formStatus.isSubmitted) {
    return (
      <div className="contact-form">
        <div className="contact-form__success">
          <h3>Message envoyé avec succès !</h3>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
          <button 
            className="contact-form__button mt-3"
            onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      {formStatus.error && (
        <div className="contact-form__error mb-4">
          {formStatus.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label htmlFor="nom" className="contact-form__label">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="Votre nom"
            required
          />
        </div>
        
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="Votre adresse email"
            required
          />
        </div>
        
        <div className="contact-form__group">
          <label htmlFor="objet" className="contact-form__label">Objet</label>
          <input
            type="text"
            id="objet"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="L'objet de votre message"
            required
          />
        </div>
        
        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-form__textarea"
            placeholder="Votre message..."
            rows="4"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="contact-form__button"
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 