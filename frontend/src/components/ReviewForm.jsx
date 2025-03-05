import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const ReviewForm = ({ artisanId, onSubmitSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    name: '',
    email: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prevData => ({
      ...prevData,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      setFormStatus({
        isSubmitting: false,
        error: "Veuillez attribuer une note."
      });
      return;
    }
    
    setFormStatus({
      isSubmitting: true,
      error: null
    });

    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Appeler la fonction de callback avec les données du formulaire
      onSubmitSuccess({
        ...formData,
        artisanId,
        date: new Date().toISOString()
      });
      
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        error: "Une erreur s'est produite lors de l'envoi de votre avis. Veuillez réessayer."
      });
    }
  };

  return (
    <div className="review-form">
      <h3 className="review-form__title">Ajouter un avis</h3>
      
      {formStatus.error && (
        <div className="alert alert-danger mb-4">
          {formStatus.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="review-form__rating">
          <label>Votre note</label>
          <div className="review-form__rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => handleRatingClick(star)}
                className={star <= formData.rating ? 'active' : ''}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
        
        <div className="review-form__group">
          <label htmlFor="name" className="review-form__label">Votre nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form__input"
            required
          />
        </div>
        
        <div className="review-form__group">
          <label htmlFor="email" className="review-form__label">Votre email</label>
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
        
        <div className="review-form__group">
          <label htmlFor="comment" className="review-form__label">Votre commentaire</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="review-form__textarea"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="review-form__actions">
          <button 
            type="submit" 
            className="review-form__button"
            disabled={formStatus.isSubmitting}
          >
            {formStatus.isSubmitting ? 'Envoi en cours...' : 'Publier mon avis'}
          </button>
          
          <button 
            type="button" 
            className="btn btn-secondary ml-2"
            onClick={onCancel}
            disabled={formStatus.isSubmitting}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  artisanId: PropTypes.number.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ReviewForm; 