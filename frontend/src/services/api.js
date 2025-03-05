import axios from 'axios';
import { mockArtisans, mockCategories, mockReviews, mockLocations, mockSpecialties } from '../data/mockData';

// Mode développement sans backend
const USE_MOCK_DATA = true; // Mettre à true pour utiliser les données mockées directement

// Configuration de base d'Axios
const API = axios.create({
  baseURL: 'http://localhost:3001/api', // URL de base de l'API backend
  timeout: 1000, // Timeout réduit à 1 seconde pour basculer plus rapidement vers les données mockées
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Intercepteur pour gérer les erreurs globalement
API.interceptors.response.use(
  response => response,
  error => {
    // Gestion des erreurs globales
    console.error('Erreur API:', error);
    return Promise.reject(error);
  }
);

// Services pour les artisans
export const artisanService = {
  // Récupérer tous les artisans
  getAll: async (params = {}) => {
    if (USE_MOCK_DATA) {
      console.log('Utilisation des données mockées pour les artisans');
      // Filtrer les artisans si le paramètre featured est présent
      if (params.featured) {
        return mockArtisans.slice(0, params.limit || 4);
      }
      return mockArtisans;
    }
    
    try {
      const response = await API.get('/artisans', { params });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des artisans:', error);
      // Retourner les données mockées en cas d'erreur
      return mockArtisans;
    }
  },

  // Récupérer un artisan par son ID
  getById: async (id) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour l'artisan ${id}`);
      return mockArtisans.find(artisan => artisan.id === parseInt(id)) || null;
    }
    
    try {
      const response = await API.get(`/artisans/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'artisan ${id}:`, error);
      // Retourner l'artisan mocké correspondant à l'ID
      return mockArtisans.find(artisan => artisan.id === parseInt(id)) || null;
    }
  },

  // Rechercher des artisans
  search: async (query, category) => {
    if (USE_MOCK_DATA) {
      console.log('Utilisation des données mockées pour la recherche d\'artisans');
      let filteredArtisans = [...mockArtisans];
      
      if (query) {
        const searchTerm = query.toLowerCase();
        filteredArtisans = filteredArtisans.filter(artisan => 
          artisan.nom.toLowerCase().includes(searchTerm) || 
          artisan.company.toLowerCase().includes(searchTerm) ||
          artisan.description.toLowerCase().includes(searchTerm)
        );
      }
      
      if (category) {
        filteredArtisans = filteredArtisans.filter(artisan => 
          artisan.categorie.toLowerCase() === category.toLowerCase()
        );
      }
      
      return filteredArtisans;
    }
    
    try {
      const params = {};
      if (query) params.q = query;
      if (category) params.categorie = category;
      
      const response = await API.get('/artisans/search', { params });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche d\'artisans:', error);
      // Filtrer les artisans mockés selon les critères de recherche
      let filteredArtisans = [...mockArtisans];
      
      if (query) {
        const searchTerm = query.toLowerCase();
        filteredArtisans = filteredArtisans.filter(artisan => 
          artisan.nom.toLowerCase().includes(searchTerm) || 
          artisan.company.toLowerCase().includes(searchTerm) ||
          artisan.description.toLowerCase().includes(searchTerm)
        );
      }
      
      if (category) {
        filteredArtisans = filteredArtisans.filter(artisan => 
          artisan.categorie.toLowerCase() === category.toLowerCase()
        );
      }
      
      return filteredArtisans;
    }
  }
};

// Services pour les catégories
export const categoryService = {
  // Récupérer toutes les catégories
  getAll: async () => {
    if (USE_MOCK_DATA) {
      console.log('Utilisation des données mockées pour les catégories');
      return mockCategories;
    }
    
    try {
      const response = await API.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
      // Retourner les catégories mockées en cas d'erreur
      return mockCategories;
    }
  },

  // Récupérer une catégorie par son ID
  getById: async (id) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour la catégorie ${id}`);
      return mockCategories.find(category => category.id === parseInt(id)) || null;
    }
    
    try {
      const response = await API.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la catégorie ${id}:`, error);
      // Retourner la catégorie mockée correspondant à l'ID
      return mockCategories.find(category => category.id === parseInt(id)) || null;
    }
  },

  // Récupérer une catégorie par son slug
  getBySlug: async (slug) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour la catégorie avec slug ${slug}`);
      return mockCategories.find(category => category.slug === slug) || null;
    }
    
    try {
      const response = await API.get(`/categories/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la catégorie avec slug ${slug}:`, error);
      // Retourner la catégorie mockée correspondant au slug
      return mockCategories.find(category => category.slug === slug) || null;
    }
  },

  // Récupérer les artisans d'une catégorie
  getArtisans: async (categoryId) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour les artisans de la catégorie ${categoryId}`);
      const filteredArtisans = mockArtisans.filter(artisan => 
        artisan.categorieId === parseInt(categoryId) || 
        (artisan.categorie && mockCategories.find(cat => cat.id === parseInt(categoryId))?.nom === artisan.categorie)
      );
      console.log(`Catégorie ${categoryId}: ${filteredArtisans.length} artisans trouvés`);
      console.log('Artisans filtrés:', filteredArtisans);
      return filteredArtisans;
    }
    
    try {
      const response = await API.get(`/categories/${categoryId}/artisans`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des artisans de la catégorie ${categoryId}:`, error);
      // Filtrer les artisans mockés par catégorie
      const filteredArtisans = mockArtisans.filter(artisan => 
        artisan.categorieId === parseInt(categoryId) || 
        (artisan.categorie && mockCategories.find(cat => cat.id === parseInt(categoryId))?.nom === artisan.categorie)
      );
      console.log(`Catégorie ${categoryId} (après erreur): ${filteredArtisans.length} artisans trouvés`);
      return filteredArtisans;
    }
  }
};

// Services pour les avis
export const reviewService = {
  // Récupérer les avis d'un artisan
  getByArtisan: async (artisanId) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour les avis de l'artisan ${artisanId}`);
      return mockReviews.filter(review => review.artisanId === parseInt(artisanId));
    }
    
    try {
      const response = await API.get(`/artisans/${artisanId}/reviews`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des avis de l'artisan ${artisanId}:`, error);
      // Filtrer les avis mockés par artisan
      // Retourner les avis mockés pour cet artisan
      return mockReviews.filter(review => review.artisanId === parseInt(artisanId));
    }
  },

  // Ajouter un avis
  add: async (artisanId, reviewData) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour ajouter un avis à l'artisan ${artisanId}`);
      // Simuler l'ajout d'un avis
      const newReview = {
        id: mockReviews.length + 1,
        artisanId: parseInt(artisanId),
        ...reviewData,
        date: new Date().toISOString().split('T')[0]
      };
      // Dans un environnement réel, nous ajouterions cet avis à la base de données
      // Ici, nous retournons simplement le nouvel avis
      return newReview;
    }
    
    try {
      const response = await API.post(`/artisans/${artisanId}/reviews`, reviewData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de l'ajout d'un avis pour l'artisan ${artisanId}:`, error);
      // Simuler l'ajout d'un avis
      const newReview = {
        id: mockReviews.length + 1,
        artisanId: parseInt(artisanId),
        ...reviewData,
        date: new Date().toISOString().split('T')[0]
      };
      return newReview;
    }
  }
};

// Services pour les messages de contact
export const contactService = {
  // Envoyer un message de contact général
  send: async (contactData) => {
    if (USE_MOCK_DATA) {
      console.log('Utilisation des données mockées pour envoyer un message de contact');
      // Simuler l'envoi d'un message
      return { success: true, message: 'Message envoyé avec succès (simulation)' };
    }
    
    try {
      const response = await API.post('/contact', contactData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message de contact:', error);
      // Simuler une réponse positive
      return { success: true, message: 'Message envoyé avec succès (simulation)' };
    }
  },

  // Contacter un artisan spécifique
  contactArtisan: async (artisanId, contactData) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour contacter l'artisan ${artisanId}`);
      // Simuler l'envoi d'un message à un artisan
      return { success: true, message: 'Message envoyé à l\'artisan avec succès (simulation)' };
    }
    
    try {
      const response = await API.post(`/artisans/${artisanId}/contact`, contactData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de l'envoi du message à l'artisan ${artisanId}:`, error);
      // Simuler une réponse positive
      return { success: true, message: 'Message envoyé à l\'artisan avec succès (simulation)' };
    }
  }
};

// Services pour les lieux
export const locationService = {
  // Récupérer tous les lieux
  getAll: async () => {
    if (USE_MOCK_DATA) {
      console.log('Utilisation des données mockées pour les lieux');
      return mockLocations;
    }
    
    try {
      const response = await API.get('/locations');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des lieux:', error);
      // Retourner les lieux mockés
      return mockLocations;
    }
  }
};

// Services pour les spécialités
export const specialtyService = {
  // Récupérer toutes les spécialités
  getAll: async () => {
    if (USE_MOCK_DATA) {
      console.log('Utilisation des données mockées pour les spécialités');
      return mockSpecialties;
    }
    
    try {
      const response = await API.get('/specialties');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des spécialités:', error);
      // Retourner les spécialités mockées
      return mockSpecialties;
    }
  },
  
  // Récupérer les spécialités d'une catégorie
  getByCategory: async (categoryId) => {
    if (USE_MOCK_DATA) {
      console.log(`Utilisation des données mockées pour les spécialités de la catégorie ${categoryId}`);
      return mockSpecialties.filter(specialty => specialty.categorieId === parseInt(categoryId));
    }
    
    try {
      const response = await API.get(`/categories/${categoryId}/specialties`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des spécialités de la catégorie ${categoryId}:`, error);
      // Filtrer les spécialités mockées par catégorie
      return mockSpecialties.filter(specialty => specialty.categorieId === parseInt(categoryId));
    }
  }
};

// Créer un objet pour l'export par défaut
const apiServices = {
  artisanService,
  categoryService,
  reviewService,
  contactService,
  locationService,
  specialtyService
};

export default apiServices; 