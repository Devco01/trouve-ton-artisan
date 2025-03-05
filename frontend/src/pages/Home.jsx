import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeCategories from '../components/HomeCategories';
import HomeSteps from '../components/HomeSteps';
import FeaturedArtisans from '../components/FeaturedArtisans';
import HomeFAQ from '../components/HomeFAQ';
import Newsletter from '../components/Newsletter';
import '../styles/pages/home.scss';

const Home = () => {
  // Données pour la FAQ
  const faqs = [
    {
      id: 1,
      question: "Comment fonctionne Trouve ton artisan ?",
      answer: "Trouve ton artisan est une plateforme qui met en relation les particuliers avec des artisans qualifiés de la région Auvergne-Rhône-Alpes. Vous pouvez rechercher un artisan par catégorie ou spécialité, consulter son profil et le contacter directement via un formulaire."
    },
    {
      id: 2,
      question: "Les artisans référencés sont-ils vérifiés ?",
      answer: "Oui, tous les artisans référencés sur notre plateforme sont vérifiés. Nous contrôlons leur inscription au répertoire des métiers, leurs qualifications professionnelles et leur assurance responsabilité civile professionnelle."
    },
    {
      id: 3,
      question: "Comment contacter un artisan ?",
      answer: "Pour contacter un artisan, rendez-vous sur sa fiche détaillée et utilisez le formulaire de contact. Vous pouvez y décrire votre projet, poser vos questions et demander un devis. L'artisan vous répondra directement dans un délai de 48 heures."
    },
    {
      id: 4,
      question: "Est-ce que le service est gratuit ?",
      answer: "Oui, l'utilisation de la plateforme Trouve ton artisan est entièrement gratuite pour les particuliers. Vous pouvez rechercher des artisans, consulter leurs profils et les contacter sans aucun frais."
    }
  ];

  return (
    <main className="home-page">
      {/* Section Hero avec barre de recherche */}
      <HomeHero />
      
      {/* Section Catégories */}
      <section className="home-section">
        <div className="container">
          <HomeCategories />
        </div>
      </section>
      
      {/* Section Comment ça marche */}
      <section className="home-section home-section--alt">
        <div className="container">
          <HomeSteps />
        </div>
      </section>
      
      {/* Section Artisans du mois */}
      <section className="home-section">
        <div className="container">
          <p className="section-subtitle">
            Découvrez les artisans les mieux notés et les plus recommandés ce mois-ci
          </p>
          <FeaturedArtisans />
        </div>
      </section>
      
      {/* Section FAQ */}
      <section className="home-section home-section--alt">
        <div className="container">
          <HomeFAQ faqs={faqs} />
        </div>
      </section>
      
      {/* Section Newsletter */}
      <section className="home-section">
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </main>
  );
};

export default Home; 