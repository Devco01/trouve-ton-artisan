import React from 'react';

const HomeFAQ = ({ faqs }) => {
  return (
    <div className="home-faq">
      <h2 className="section-title">Questions fréquentes</h2>
      <div className="home-faq__container">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className="home-faq__item"
          >
            <div className="home-faq__question">
              <h3>{faq.question}</h3>
            </div>
            <div className="home-faq__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFAQ; 