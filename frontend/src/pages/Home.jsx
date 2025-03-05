import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeCategories from '../components/HomeCategories';
import HomeSteps from '../components/HomeSteps';
import FeaturedArtisans from '../components/FeaturedArtisans';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeFAQ from '../components/HomeFAQ';
import Newsletter from '../components/Newsletter';
import '../styles/pages/home.scss';

const Home = () => {
  // Données pour les étapes de fonctionnement du site
  const steps = [
    {
      number: 1,
      title: "Choisir la catégorie d'artisanat dans le menu",
      description: "Parcourez les différentes catégories d'artisans disponibles dans la région Auvergne-Rhône-Alpes."
    },
    {
      number: 2,
      title: "Choisir un artisan",
      description: "Consultez les profils des artisans, leurs spécialités, leurs réalisations et les avis des clients."
    },
    {
      number: 3,
      title: "Le contacter via le formulaire de contact",
      description: "Utilisez le formulaire de contact pour décrire votre projet et demander un devis ou des informations."
    },
    {
      number: 4,
      title: "Une réponse sera apportée sous 48h",
      description: "L'artisan vous répondra dans les 48 heures pour discuter de votre projet et vous proposer ses services."
    }
  ];

  // Données pour les témoignages
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      location: "Lyon",
      text: "J'ai trouvé un excellent plombier grâce à ce site. Intervention rapide et travail de qualité. Je recommande vivement !",
      rating: 5,
      image: "/assets/images/testimonials/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Pierre Durand",
      location: "Grenoble",
      text: "Le menuisier que j'ai contacté a réalisé un travail remarquable pour ma bibliothèque sur mesure. Très satisfait du résultat.",
      rating: 4.5,
      image: "/assets/images/testimonials/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Marie Leroy",
      location: "Saint-Étienne",
      text: "Grâce à Trouve ton artisan, j'ai pu rénover ma cuisine avec des professionnels compétents et à l'écoute. Merci !",
      rating: 5,
      image: "/assets/images/testimonials/testimonial-3.jpg"
    }
  ];

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
          <h2 className="section-title">Comment trouver mon artisan ?</h2>
          <HomeSteps steps={steps} />
        </div>
      </section>
      
      {/* Section Artisans du mois */}
      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Les artisans du mois</h2>
          <p className="section-subtitle">
            Découvrez les artisans les mieux notés et les plus recommandés ce mois-ci
          </p>
          <FeaturedArtisans />
        </div>
      </section>
      
      {/* Section Témoignages */}
      <section className="home-section home-section--alt">
        <div className="container">
          <h2 className="section-title">Ce que disent nos utilisateurs</h2>
          <HomeTestimonials testimonials={testimonials} />
        </div>
      </section>
      
      {/* Section FAQ */}
      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Questions fréquentes</h2>
          <HomeFAQ faqs={faqs} />
        </div>
      </section>
      
      {/* Section Newsletter */}
      <section className="home-section home-section--alt">
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </main>
  );
};

export default Home; 