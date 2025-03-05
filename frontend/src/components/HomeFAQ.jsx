import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HomeFAQ = () => {
  // État pour suivre quelle question est ouverte
  const [openIndex, setOpenIndex] = useState(null);

  // Fonction pour basculer l'état d'ouverture d'une question
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Liste des questions fréquemment posées
  const faqItems = [
    {
      question: "Comment trouver un artisan sur la plateforme ?",
      answer: "Vous pouvez rechercher un artisan en utilisant la barre de recherche en haut de la page d'accueil. Filtrez par spécialité, localisation ou mot-clé pour trouver l'artisan qui correspond à vos besoins. Vous pouvez également parcourir les différentes catégories d'artisans disponibles."
    },
    {
      question: "Comment sont sélectionnés les artisans sur la plateforme ?",
      answer: "Tous les artisans présents sur notre plateforme sont des professionnels qualifiés et certifiés. Nous vérifions leurs qualifications, leurs assurances et leurs références avant de les accepter. Nous suivons également les avis des clients pour garantir un service de qualité."
    },
    {
      question: "Comment contacter un artisan ?",
      answer: "Une fois que vous avez trouvé un artisan qui vous intéresse, vous pouvez le contacter directement via son profil. Ses coordonnées (téléphone, email) sont disponibles, ou vous pouvez utiliser notre formulaire de contact intégré qui lui enverra directement votre demande."
    },
    {
      question: "Les devis sont-ils gratuits ?",
      answer: "La plupart des artisans proposent des devis gratuits. Cependant, cette politique peut varier selon les professionnels et la nature des travaux. Cette information est généralement indiquée sur le profil de l'artisan."
    },
    {
      question: "Puis-je laisser un avis après une prestation ?",
      answer: "Absolument ! Nous encourageons tous les clients à laisser un avis après avoir fait appel à un artisan via notre plateforme. Vos retours sont précieux pour aider d'autres utilisateurs à faire leur choix et pour maintenir la qualité de service de notre réseau d'artisans."
    },
    {
      question: "Que faire en cas de problème avec un artisan ?",
      answer: "Si vous rencontrez un problème avec un artisan, nous vous invitons à le contacter directement pour tenter de résoudre la situation. Si le problème persiste, vous pouvez contacter notre service client qui vous accompagnera dans la résolution du litige."
    }
  ];

  return (
    <section className="home-faq">
      <div className="container">
        <h2 className="home-faq__title">Questions fréquemment posées</h2>
        
        <div className="home-faq__container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-item__question"
                onClick={() => toggleQuestion(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-item__icon">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="home-faq__contact">
          <p>Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="/contact" className="btn btn-contact">Contactez-nous</a>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ; 