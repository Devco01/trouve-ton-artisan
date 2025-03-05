import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Fonction pour valider le format de l'email
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Réinitialiser les états
    setError('');
    
    // Valider l'email
    if (!email) {
      setError('Veuillez entrer votre adresse email.');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }
    
    // Simuler l'envoi à une API (à remplacer par un appel API réel)
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <div className="newsletter__text">
            <h2 className="newsletter__title">Restez informé</h2>
            <p className="newsletter__description">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, 
              conseils d'experts et offres exclusives directement dans votre boîte mail.
            </p>
          </div>
          
          <div className="newsletter__form-container">
            {isSubmitted ? (
              <div className="newsletter__success">
                <FaPaperPlane className="newsletter__success-icon" />
                <h3>Merci pour votre inscription !</h3>
                <p>Vous recevrez bientôt nos prochaines actualités.</p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  S'inscrire avec une autre adresse
                </button>
              </div>
            ) : (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">
                    Adresse email
                  </label>
                  <div className="input-button-wrapper">
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${error ? 'is-invalid' : ''}`}
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                      S'inscrire
                    </button>
                  </div>
                </div>
                {error && <div className="newsletter__error">{error}</div>}
                <div className="newsletter__privacy">
                  En vous inscrivant, vous acceptez notre{' '}
                  <a href="/politique-confidentialite">politique de confidentialité</a>.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 