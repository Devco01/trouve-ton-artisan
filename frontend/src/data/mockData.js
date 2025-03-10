// Données fictives pour l'application

// Ajout d'un objet Fr pour résoudre l'erreur Fr.getArtisans
export const Fr = {
  getArtisans: (categoryId) => {
    if (categoryId) {
      return mockArtisans.filter(artisan => 
        artisan.categorieId === parseInt(categoryId) || 
        (artisan.categorie && mockCategories.find(cat => cat.id === parseInt(categoryId))?.nom === artisan.categorie)
      );
    }
    return mockArtisans;
  }
};

export const mockCategories = [
  { id: 1, nom: 'Bâtiment', slug: 'batiment', nombreArtisans: 3 },
  { id: 2, nom: 'Services', slug: 'services', nombreArtisans: 3 },
  { id: 3, nom: 'Fabrication', slug: 'fabrication', nombreArtisans: 3 },
  { id: 4, nom: 'Alimentation', slug: 'alimentation', nombreArtisans: 3 }
];

export const mockSpecialties = [
  // Bâtiment
  { id: 1, nom: 'Maçonnerie', categorieId: 1 },
  { id: 2, nom: 'Plomberie', categorieId: 1 },
  { id: 3, nom: 'Électricité', categorieId: 1 },
  
  // Services
  { id: 6, nom: 'Coiffure', categorieId: 2 },
  { id: 7, nom: 'Réparation automobile', categorieId: 2 },
  { id: 8, nom: 'Nettoyage', categorieId: 2 },
  
  // Fabrication
  { id: 9, nom: 'Ébénisterie', categorieId: 3 },
  { id: 10, nom: 'Poterie', categorieId: 3 },
  { id: 11, nom: 'Bijouterie', categorieId: 3 },
  
  // Alimentation
  { id: 12, nom: 'Boulangerie', categorieId: 4 },
  { id: 13, nom: 'Pâtisserie', categorieId: 4 },
  { id: 14, nom: 'Boucherie', categorieId: 4 }
];

export const mockArtisans = [
  // Artisans du Bâtiment
  {
    id: 1,
    nom: 'Jean Dupont',
    company: 'Dupont Électricité',
    categorie: 'Bâtiment',
    categorieId: 1,
    specialite: 'Électricité',
    specialiteId: 3,
    specialites: ['Installation électrique', 'Dépannage', 'Rénovation'],
    note: 4.8,
    nombreAvis: 24,
    ville: 'Lyon',
    departement: 'Rhône',
    codePostal: '69001',
    adresse: '15 rue de la République, 69001 Lyon',
    telephone: '04 78 XX XX XX',
    email: 'contact@dupont-electricite.fr',
    site: 'www.dupont-electricite.fr',
    description: 'Électricien qualifié avec plus de 15 ans d\'expérience. Spécialisé dans les installations électriques résidentielles et commerciales.',
    image: null,
    certifications: ['Qualifélec', 'RGE'],
    dateCreation: '2020-05-12'
  },
  {
    id: 2,
    nom: 'Marie Martin',
    company: 'Martin Plomberie',
    categorie: 'Bâtiment',
    categorieId: 1,
    specialite: 'Plomberie',
    specialiteId: 2,
    specialites: ['Plomberie générale', 'Chauffage', 'Sanitaires'],
    note: 4.9,
    nombreAvis: 32,
    ville: 'Grenoble',
    departement: 'Isère',
    codePostal: '38000',
    adresse: '8 boulevard Gambetta, 38000 Grenoble',
    telephone: '04 76 XX XX XX',
    email: 'contact@martin-plomberie.fr',
    site: 'www.martin-plomberie.fr',
    description: 'Plombier chauffagiste intervenant sur Grenoble et sa région. Installation, dépannage et entretien de vos systèmes de plomberie et chauffage.',
    image: null,
    certifications: ['Qualibat', 'RGE'],
    dateCreation: '2019-03-24'
  },
  {
    id: 3,
    nom: 'Pierre Durand',
    company: 'Durand Menuiserie',
    categorie: 'Bâtiment',
    categorieId: 1,
    specialite: 'Menuiserie',
    specialiteId: 4,
    specialites: ['Menuiserie bois', 'Agencement', 'Rénovation'],
    note: 4.9,
    nombreAvis: 32,
    ville: 'Saint-Étienne',
    departement: 'Loire',
    codePostal: '42000',
    adresse: '25 rue des Artisans, 42000 Saint-Étienne',
    telephone: '04 77 XX XX XX',
    email: 'contact@durand-menuiserie.fr',
    site: 'www.durand-menuiserie.fr',
    description: 'Menuisier passionné par le travail du bois. Création sur mesure de mobilier et aménagements intérieurs.',
    image: null,
    certifications: ['Qualibat', 'Artisan d\'Art'],
    dateCreation: '2018-07-05'
  },
  
  // Artisans de Services
  {
    id: 4,
    nom: 'Sophie Petit',
    company: 'Salon Sophie',
    categorie: 'Services',
    categorieId: 2,
    specialite: 'Coiffure',
    specialiteId: 6,
    specialites: ['Coiffure femme', 'Coiffure homme', 'Coloration'],
    note: 4.7,
    nombreAvis: 45,
    ville: 'Lyon',
    departement: 'Rhône',
    codePostal: '69002',
    adresse: '12 rue Victor Hugo, 69002 Lyon',
    telephone: '04 78 XX XX XX',
    email: 'contact@salon-sophie.fr',
    site: 'www.salon-sophie.fr',
    description: 'Salon de coiffure proposant des prestations de qualité pour hommes et femmes. Spécialiste de la coloration végétale.',
    image: null,
    certifications: ['Brevet Professionnel Coiffure'],
    dateCreation: '2015-09-10'
  },
  {
    id: 5,
    nom: 'Thomas Bernard',
    company: 'Auto Repair',
    categorie: 'Services',
    categorieId: 2,
    specialite: 'Réparation automobile',
    specialiteId: 7,
    specialites: ['Mécanique générale', 'Diagnostic électronique', 'Entretien'],
    note: 4.6,
    nombreAvis: 38,
    ville: 'Clermont-Ferrand',
    departement: 'Puy-de-Dôme',
    codePostal: '63000',
    adresse: '5 avenue des Paulines, 63000 Clermont-Ferrand',
    telephone: '04 73 XX XX XX',
    email: 'contact@auto-repair.fr',
    site: 'www.auto-repair.fr',
    description: 'Garage automobile spécialisé dans la réparation et l\'entretien de véhicules toutes marques. Service rapide et de qualité.',
    image: null,
    certifications: ['Certification Automobile'],
    dateCreation: '2012-04-15'
  },
  {
    id: 6,
    nom: 'Julie Moreau',
    company: 'Clean & Net',
    categorie: 'Services',
    categorieId: 2,
    specialite: 'Nettoyage',
    specialiteId: 8,
    specialites: ['Nettoyage professionnel', 'Nettoyage écologique', 'Désinfection'],
    note: 4.8,
    nombreAvis: 29,
    ville: 'Annecy',
    departement: 'Haute-Savoie',
    codePostal: '74000',
    adresse: '18 rue du Lac, 74000 Annecy',
    telephone: '04 50 XX XX XX',
    email: 'contact@clean-net.fr',
    site: 'www.clean-net.fr',
    description: 'Entreprise de nettoyage professionnel pour particuliers et entreprises. Utilisation de produits écologiques et respectueux de l\'environnement.',
    image: null,
    certifications: ['Certification Qualipropre'],
    dateCreation: '2017-11-20'
  },
  
  // Artisans de Fabrication
  {
    id: 7,
    nom: 'Michel Lambert',
    company: 'Atelier du Bois',
    categorie: 'Fabrication',
    categorieId: 3,
    specialite: 'Ébénisterie',
    specialiteId: 9,
    specialites: ['Meubles sur mesure', 'Restauration', 'Marqueterie'],
    note: 4.9,
    nombreAvis: 41,
    ville: 'Lyon',
    departement: 'Rhône',
    codePostal: '69007',
    adresse: '45 rue de la Madeleine, 69007 Lyon',
    telephone: '04 78 XX XX XX',
    email: 'contact@atelier-du-bois.fr',
    site: 'www.atelier-du-bois.fr',
    description: 'Ébéniste d\'art spécialisé dans la création de meubles sur mesure et la restauration de mobilier ancien. Travail minutieux et respect des traditions.',
    image: null,
    certifications: ['Meilleur Ouvrier de France', 'Artisan d\'Art'],
    dateCreation: '2008-02-14'
  },
  {
    id: 8,
    nom: 'Claire Dubois',
    company: 'Terre & Feu',
    categorie: 'Fabrication',
    categorieId: 3,
    specialite: 'Poterie',
    specialiteId: 10,
    specialites: ['Poterie artisanale', 'Céramique', 'Objets décoratifs'],
    note: 4.7,
    nombreAvis: 35,
    ville: 'Valence',
    departement: 'Drôme',
    codePostal: '26000',
    adresse: '12 rue des Artisans, 26000 Valence',
    telephone: '04 75 XX XX XX',
    email: 'contact@terre-et-feu.fr',
    site: 'www.terre-et-feu.fr',
    description: 'Atelier de poterie artisanale proposant des pièces uniques et des collections limitées. Cours et stages pour tous niveaux.',
    image: null,
    certifications: ['Artisan d\'Art'],
    dateCreation: '2014-06-30'
  },
  {
    id: 9,
    nom: 'Antoine Mercier',
    company: 'Bijoux & Créations',
    categorie: 'Fabrication',
    categorieId: 3,
    specialite: 'Bijouterie',
    specialiteId: 11,
    specialites: ['Bijoux sur mesure', 'Joaillerie', 'Réparation'],
    note: 4.8,
    nombreAvis: 27,
    ville: 'Grenoble',
    departement: 'Isère',
    codePostal: '38000',
    adresse: '8 place Grenette, 38000 Grenoble',
    telephone: '04 76 XX XX XX',
    email: 'contact@bijoux-creations.fr',
    site: 'www.bijoux-creations.fr',
    description: 'Bijoutier-joaillier créant des pièces uniques et personnalisées. Travail des métaux précieux et des pierres.',
    image: null,
    certifications: ['Artisan d\'Art', 'CAP Art du Bijou'],
    dateCreation: '2011-09-05'
  },
  
  // Artisans de l'Alimentation
  {
    id: 10,
    nom: 'Paul Boulanger',
    company: 'Le Pain d\'Antan',
    categorie: 'Alimentation',
    categorieId: 4,
    specialite: 'Boulangerie',
    specialiteId: 12,
    specialites: ['Pain traditionnel', 'Viennoiseries', 'Pain bio'],
    note: 4.9,
    nombreAvis: 56,
    ville: 'Lyon',
    departement: 'Rhône',
    codePostal: '69003',
    adresse: '25 cours Lafayette, 69003 Lyon',
    telephone: '04 78 XX XX XX',
    email: 'contact@pain-antan.fr',
    site: 'www.pain-antan.fr',
    description: 'Boulangerie artisanale utilisant des farines biologiques et des méthodes traditionnelles. Spécialiste du levain naturel.',
    image: null,
    certifications: ['Artisan Boulanger', 'Agriculture Biologique'],
    dateCreation: '2013-05-15'
  },
  {
    id: 11,
    nom: 'Émilie Patissier',
    company: 'Douceurs & Gourmandises',
    categorie: 'Alimentation',
    categorieId: 4,
    specialite: 'Pâtisserie',
    specialiteId: 13,
    specialites: ['Pâtisseries fines', 'Gâteaux personnalisés', 'Chocolaterie'],
    note: 4.8,
    nombreAvis: 48,
    ville: 'Saint-Étienne',
    departement: 'Loire',
    codePostal: '42000',
    adresse: '12 rue des Martyrs, 42000 Saint-Étienne',
    telephone: '04 77 XX XX XX',
    email: 'contact@douceurs-gourmandises.fr',
    site: 'www.douceurs-gourmandises.fr',
    description: 'Pâtisserie artisanale proposant des créations originales et des classiques revisités. Utilisation de produits locaux et de saison.',
    image: null,
    certifications: ['Artisan Pâtissier'],
    dateCreation: '2016-10-12'
  },
  {
    id: 12,
    nom: 'Jacques Boucher',
    company: 'Boucherie du Terroir',
    categorie: 'Alimentation',
    categorieId: 4,
    specialite: 'Boucherie',
    specialiteId: 14,
    specialites: ['Viande locale', 'Charcuterie maison', 'Préparations bouchères'],
    note: 4.7,
    nombreAvis: 39,
    ville: 'Clermont-Ferrand',
    departement: 'Puy-de-Dôme',
    codePostal: '63000',
    adresse: '45 avenue des Paulines, 63000 Clermont-Ferrand',
    telephone: '04 73 XX XX XX',
    email: 'contact@boucherie-terroir.fr',
    site: 'www.boucherie-terroir.fr',
    description: 'Boucherie traditionnelle proposant des viandes de qualité issues d\'élevages locaux. Fabrication artisanale de charcuteries.',
    image: null,
    certifications: ['Artisan Boucher', 'Label Rouge'],
    dateCreation: '2010-03-28'
  }
];

export const mockLocations = [
  { id: 1, nom: 'Lyon', departement: 'Rhône', codePostal: '69000' },
  { id: 2, nom: 'Grenoble', departement: 'Isère', codePostal: '38000' },
  { id: 3, nom: 'Saint-Étienne', departement: 'Loire', codePostal: '42000' },
  { id: 4, nom: 'Clermont-Ferrand', departement: 'Puy-de-Dôme', codePostal: '63000' },
  { id: 5, nom: 'Annecy', departement: 'Haute-Savoie', codePostal: '74000' },
  { id: 6, nom: 'Valence', departement: 'Drôme', codePostal: '26000' }
];

export const mockReviews = [
  {
    id: 1,
    artisanId: 1,
    nom: 'Martin Dupuis',
    email: 'martin.dupuis@example.com',
    note: 5,
    commentaire: 'Excellent travail, rapide et efficace. Je recommande vivement !',
    date: '2023-05-15'
  },
  {
    id: 2,
    artisanId: 1,
    nom: 'Sophie Legrand',
    email: 'sophie.legrand@example.com',
    note: 4,
    commentaire: 'Très bon service, prix raisonnable. Seul petit bémol sur le délai un peu long.',
    date: '2023-04-22'
  },
  {
    id: 3,
    artisanId: 2,
    nom: 'Pierre Martin',
    email: 'pierre.martin@example.com',
    note: 5,
    commentaire: 'Travail impeccable, artisan très professionnel et à l\'écoute.',
    date: '2023-06-05'
  },
  {
    id: 4,
    artisanId: 2,
    nom: 'Julie Dubois',
    email: 'julie.dubois@example.com',
    note: 5,
    commentaire: 'Je suis très satisfaite de la prestation. Travail soigné et de qualité.',
    date: '2023-05-28'
  },
  {
    id: 5,
    artisanId: 3,
    nom: 'Thomas Leroy',
    email: 'thomas.leroy@example.com',
    note: 4,
    commentaire: 'Bon artisan, travail de qualité mais un peu cher.',
    date: '2023-04-10'
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'Sophie Durand',
    location: 'Lyon',
    text: 'Grâce à Trouve ton artisan, j\'ai pu trouver rapidement un électricien qualifié pour rénover l\'installation électrique de ma maison. Service impeccable !',
    rating: 5,
    image: null
  },
  {
    id: 2,
    name: 'Marc Lefevre',
    location: 'Grenoble',
    text: 'Je cherchais un menuisier spécialisé dans la rénovation de meubles anciens. La plateforme m\'a permis de trouver le professionnel idéal en quelques clics.',
    rating: 4,
    image: null
  },
  {
    id: 3,
    name: 'Julie Moreau',
    location: 'Saint-Étienne',
    text: 'Service client réactif et artisans de qualité. J\'ai pu comparer plusieurs devis pour mon projet de salle de bain et faire le meilleur choix.',
    rating: 5,
    image: null
  }
];

export const mockFAQs = [
  {
    id: 1,
    question: 'Comment trouver un artisan sur la plateforme ?',
    answer: 'Vous pouvez rechercher un artisan par catégorie de métier, par localisation ou en utilisant la barre de recherche. Filtrez ensuite les résultats selon vos critères spécifiques.'
  },
  {
    id: 2,
    question: 'Les artisans sont-ils vérifiés ?',
    answer: 'Oui, tous les artisans présents sur notre plateforme sont vérifiés. Nous contrôlons leurs qualifications, certifications et assurances pour garantir leur professionnalisme.'
  },
  {
    id: 3,
    question: 'Comment contacter un artisan ?',
    answer: 'Vous pouvez contacter un artisan directement depuis son profil en utilisant le formulaire de contact, par téléphone ou par email selon les coordonnées indiquées.'
  },
  {
    id: 4,
    question: 'Puis-je laisser un avis sur un artisan ?',
    answer: 'Oui, après avoir fait appel à un artisan via notre plateforme, vous pouvez laisser un avis et une note pour partager votre expérience avec la communauté.'
  },
  {
    id: 5,
    question: 'Le service est-il gratuit pour les particuliers ?',
    answer: 'Oui, l\'utilisation de la plateforme est entièrement gratuite pour les particuliers. Vous pouvez rechercher, contacter et demander des devis sans frais.'
  }
]; 