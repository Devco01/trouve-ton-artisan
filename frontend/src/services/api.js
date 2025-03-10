import axios from 'axios';
import * as mockData from '../data/mockData';

// Déterminer si nous sommes en production ou en développement
const isProduction = process.env.NODE_ENV === 'production';

// URL de base de l'API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Créer une instance axios avec l'URL de base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Service pour les artisans
export const artisanService = {
  // Récupérer tous les artisans avec filtres optionnels
  getAll: async (params = {}) => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log('Using mock data for artisans');
      
      // Si on demande les artisans en vedette
      if (params.featured) {
        return mockData.featuredArtisans;
      }
      
      // Si on filtre par catégorie
      if (params.categoryId) {
        return mockData.getArtisansByCategory(params.categoryId);
      }
      
      // Si on recherche par nom
      if (params.query) {
        return mockData.searchArtisans(params.query);
      }
      
      // Sinon, retourner tous les artisans
      return mockData.artisans;
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get('/artisans', { params });
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des artisans:', error);
        throw error;
      }
    }
  },
  
  // Récupérer un artisan par son ID
  getById: async (id) => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log(`Using mock data for artisan ${id}`);
      return mockData.getArtisanById(id);
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get(`/artisans/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération de l'artisan ${id}:`, error);
        throw error;
      }
    }
  },
  
  // Récupérer les artisans par catégorie
  getByCategory: async (categoryId) => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log(`Using mock data for artisans in category ${categoryId}`);
      return mockData.getArtisansByCategory(categoryId);
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get(`/artisans/category/${categoryId}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération des artisans de la catégorie ${categoryId}:`, error);
        throw error;
      }
    }
  },
  
  // Rechercher des artisans
  search: async (query) => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log(`Using mock data for search: ${query}`);
      return mockData.searchArtisans(query);
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get(`/artisans/search?query=${query}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la recherche d'artisans avec la requête "${query}":`, error);
        throw error;
      }
    }
  },
  
  // Contacter un artisan
  contact: async (artisanId, contactData) => {
    if (isProduction) {
      // En production, simuler un envoi réussi
      console.log(`Mock contact to artisan ${artisanId}:`, contactData);
      return { success: true, message: 'Message envoyé avec succès (simulation)' };
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.post(`/contact/artisan/${artisanId}`, contactData);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de l'envoi du message à l'artisan ${artisanId}:`, error);
        throw error;
      }
    }
  }
};

// Service pour les catégories
export const categoryService = {
  // Récupérer toutes les catégories
  getAll: async () => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log('Using mock data for categories');
      return mockData.getAllCategories();
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get('/categories');
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        throw error;
      }
    }
  },
  
  // Récupérer une catégorie par son ID
  getById: async (id) => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log(`Using mock data for category ${id}`);
      return mockData.getCategoryById(id);
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get(`/categories/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération de la catégorie ${id}:`, error);
        throw error;
      }
    }
  }
};

// Service pour les spécialités
export const specialtyService = {
  // Récupérer toutes les spécialités
  getAll: async () => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log('Using mock data for specialties');
      return mockData.specialites;
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get('/specialties');
        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des spécialités:', error);
        throw error;
      }
    }
  },
  
  // Récupérer les spécialités par catégorie
  getByCategory: async (categoryId) => {
    if (isProduction) {
      // En production, utiliser les données fictives
      console.log(`Using mock data for specialties in category ${categoryId}`);
      return mockData.getSpecialtiesByCategory(categoryId);
    } else {
      // En développement, faire un appel API réel
      try {
        const response = await api.get(`/specialties/category/${categoryId}`);
        return response.data;
      } catch (error) {
        console.error(`Erreur lors de la récupération des spécialités de la catégorie ${categoryId}:`, error);
        throw error;
      }
    }
  }
};

export default api; 