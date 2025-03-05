import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const ReviewsList = ({ reviews, showAddButton = false, onAddReviewClick }) => {
  // Fonction pour générer les étoiles de notation
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half-star" style={{ opacity: 0.5 }} />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} style={{ opacity: 0.2 }} />);
    }

    return stars;
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="artisan-reviews">
      <div className="artisan-reviews__title">
        <h3>Avis clients ({reviews.length})</h3>
        {showAddButton && (
          <button 
            className="btn btn-primary btn-add-review"
            onClick={onAddReviewClick}
          >
            Ajouter un avis
          </button>
        )}
      </div>

      {reviews.length > 0 ? (
        <div className="artisan-reviews__container">
          {reviews.map((review) => (
            <div key={review.id} className="artisan-reviews__item">
              <div className="artisan-reviews__header">
                <div className="artisan-reviews__avatar">
                  {review.userImage ? (
                    <img src={review.userImage} alt={review.userName} />
                  ) : (
                    <FaUserCircle size={40} />
                  )}
                </div>
                <div className="artisan-reviews__author">
                  <h4>{review.userName}</h4>
                  <span className="date">{formatDate(review.date)}</span>
                </div>
                <div className="artisan-reviews__rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <div className="artisan-reviews__content">
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="artisan-reviews__empty">
          <p>Aucun avis pour le moment. Soyez le premier à donner votre avis !</p>
        </div>
      )}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      userImage: PropTypes.string,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired,
  showAddButton: PropTypes.bool,
  onAddReviewClick: PropTypes.func
};

export default ReviewsList; 