import axios from 'axios';
import { mockArtisans, mockCategories, mockSpecialties, Fr } from '../data/mockData';

// Forcer l'utilisation des données fictives même en développement
// Mettez cette variable à false si vous voulez utiliser l'API réelle en développement
const USE_MOCK_DATA = true;

// URL de base de l'API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Créer une instance axios avec l'URL de base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonctions utilitaires pour les données mockées
const getFeaturedArtisans = () => {
  return mockArtisans.filter(artisan => artisan.note >= 4.7).slice(0, 3);
};

const getArtisansByCategory = (categoryId) => {
  return mockArtisans.filter(artisan => 
    artisan.categorieId === parseInt(categoryId) || 
    (artisan.categorie && mockCategories.find(cat => cat.id === parseInt(categoryId))?.nom === artisan.categorie)
  );
};

const searchArtisansInMock = (query) => {
  const searchTerm = query.toLowerCase();
  return mockArtisans.filter(artisan => 
    artisan.nom.toLowerCase().includes(searchTerm) || 
    (artisan.company && artisan.company.toLowerCase().includes(searchTerm)) ||
    (artisan.ville && artisan.ville.toLowerCase().includes(searchTerm)) ||
    (artisan.specialite && artisan.specialite.toLowerCase().includes(searchTerm))
  );
};

const getArtisanById = (id) => {
  return mockArtisans.find(artisan => artisan.id === parseInt(id));
};

const getAllCategories = () => {
  return mockCategories;
};

const getCategoryById = (id) => {
  return mockCategories.find(category => category.id === parseInt(id));
};

const getSpecialtiesByCategory = (categoryId) => {
  return mockSpecialties.filter(specialty => specialty.categorieId === parseInt(categoryId));
};

// Service pour les artisans
export const artisanService = {
  // Récupérer tous les artisans avec filtres optionnels
  getAll: async (params = {}) => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log('Using mock data for artisans');
      
      // Si on demande les artisans en vedette
      if (params.featured) {
        return getFeaturedArtisans();
      }
      
      // Si on filtre par catégorie
      if (params.categoryId) {
        return getArtisansByCategory(params.categoryId);
      }
      
      // Si on recherche par nom
      if (params.query) {
        return searchArtisansInMock(params.query);
      }
      
      // Sinon, retourner tous les artisans
      return mockArtisans;
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get('/artisans', { params });
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des artisans:', error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log('Fallback to mock data for artisans');
        
        if (params.featured) {
          return getFeaturedArtisans();
        }
        
        if (params.categoryId) {
          return getArtisansByCategory(params.categoryId);
        }
        
        if (params.query) {
          return searchArtisansInMock(params.query);
        }
        
        return mockArtisans;
      }
    }
  },
  
  // Récupérer un artisan par son ID
  getById: async (id) => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log(`Using mock data for artisan ${id}`);
      return getArtisanById(id);
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get(`/artisans/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération de l'artisan ${id}:`, error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log(`Fallback to mock data for artisan ${id}`);
        return getArtisanById(id);
      }
    }
  },
  
  // Récupérer les artisans par catégorie
  getByCategory: async (categoryId) => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log(`Using mock data for artisans in category ${categoryId}`);
      return getArtisansByCategory(categoryId);
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get(`/artisans/category/${categoryId}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération des artisans de la catégorie ${categoryId}:`, error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log(`Fallback to mock data for artisans in category ${categoryId}`);
        return getArtisansByCategory(categoryId);
      }
    }
  },
  
  // Rechercher des artisans
  search: async (query) => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log(`Using mock data for search: ${query}`);
      return searchArtisansInMock(query);
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get(`/artisans/search?query=${query}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la recherche d'artisans avec la requête "${query}":`, error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log(`Fallback to mock data for search: ${query}`);
        return searchArtisansInMock(query);
      }
    }
  },
  
  // Contacter un artisan
  contact: async (artisanId, contactData) => {
    if (USE_MOCK_DATA) {
      // Simuler un envoi réussi
      console.log(`Mock contact to artisan ${artisanId}:`, contactData);
      return { success: true, message: 'Message envoyé avec succès (simulation)' };
    } else {
      // Faire un appel API réel
      try {
        const response = await api.post(`/contact/artisan/${artisanId}`, contactData);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de l'envoi du message à l'artisan ${artisanId}:`, error);
        // En cas d'erreur, simuler un envoi réussi
        console.log(`Fallback to mock contact to artisan ${artisanId}`);
        return { success: true, message: 'Message envoyé avec succès (simulation)' };
      }
    }
  }
};

// Service pour les catégories
export const categoryService = {
  // Récupérer toutes les catégories
  getAll: async () => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log('Using mock data for categories');
      return getAllCategories();
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get('/categories');
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log('Fallback to mock data for categories');
        return getAllCategories();
      }
    }
  },
  
  // Récupérer une catégorie par son ID
  getById: async (id) => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log(`Using mock data for category ${id}`);
      return getCategoryById(id);
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get(`/categories/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération de la catégorie ${id}:`, error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log(`Fallback to mock data for category ${id}`);
        return getCategoryById(id);
      }
    }
  }
};

// Service pour les spécialités
export const specialtyService = {
  // Récupérer toutes les spécialités
  getAll: async () => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log('Using mock data for specialties');
      return mockSpecialties;
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get('/specialties');
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des spécialités:', error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log('Fallback to mock data for specialties');
        return mockSpecialties;
      }
    }
  },
  
  // Récupérer les spécialités par catégorie
  getByCategory: async (categoryId) => {
    if (USE_MOCK_DATA) {
      // Utiliser les données fictives
      console.log(`Using mock data for specialties in category ${categoryId}`);
      return getSpecialtiesByCategory(categoryId);
    } else {
      // Faire un appel API réel
      try {
        const response = await api.get(`/specialties/category/${categoryId}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération des spécialités de la catégorie ${categoryId}:`, error);
        // En cas d'erreur, utiliser les données fictives comme fallback
        console.log(`Fallback to mock data for specialties in category ${categoryId}`);
        return getSpecialtiesByCategory(categoryId);
      }
    }
  }
};

export default api; 