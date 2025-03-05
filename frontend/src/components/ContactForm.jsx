import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ recipient, subject }) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: subject || '',
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
        telephone: '',
        sujet: subject || '',
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
            className="btn btn-primary mt-3"
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
      <h3 className="contact-form__title">
        {recipient ? `Contacter ${recipient}` : 'Nous contacter'}
      </h3>
      
      {formStatus.error && (
        <div className="alert alert-danger mb-4">
          {formStatus.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label htmlFor="nom" className="contact-form__label">Nom complet</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="contact-form__input"
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
            required
          />
        </div>
        
        <div className="contact-form__group">
          <label htmlFor="telephone" className="contact-form__label">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="contact-form__input"
          />
        </div>
        
        <div className="contact-form__group">
          <label htmlFor="sujet" className="contact-form__label">Sujet</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className="contact-form__input"
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
            rows="5"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="contact-form__button"
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  recipient: PropTypes.string,
  subject: PropTypes.string
};

export default ContactForm; 