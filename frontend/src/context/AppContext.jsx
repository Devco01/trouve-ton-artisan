import React, { createContext, useState, useContext, useEffect } from 'react';
import { categoryService } from '../services/api';
import { specialtyService } from '../services/api';

// Création du contexte
const AppContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useAppContext = () => useContext(AppContext);

// Fournisseur du contexte
export const AppProvider = ({ children }) => {
  // État pour les catégories
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  // Fonction pour charger les catégories
  const loadCategories = async () => {
    try {
      setCategoriesLoading(true);
      const data = await categoryService.getAll();
      
      // Récupérer les spécialités pour chaque catégorie
      const categoriesWithSpecialties = await Promise.all(
        data.map(async (category) => {
          const specialties = await specialtyService.getByCategory(category.id);
          return {
            ...category,
            specialites: specialties
          };
        })
      );
      
      setCategories(categoriesWithSpecialties);
      setCategoriesError(null);
    } catch (error) {
      console.error('Erreur lors du chargement des catégories:', error);
      setCategoriesError('Impossible de charger les catégories');
      // Utiliser des données fictives en cas d'erreur
      setCategories([
        { id: 1, nom: 'Plomberie' },
        { id: 2, nom: 'Électricité' },
        { id: 3, nom: 'Menuiserie' },
        { id: 4, nom: 'Maçonnerie' },
        { id: 5, nom: 'Peinture' },
        { id: 6, nom: 'Chauffage' },
        { id: 7, nom: 'Réparation' }
      ]);
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Charger les catégories au montage du composant
  useEffect(() => {
    loadCategories();
  }, []);

  // Valeurs à fournir au contexte
  const contextValue = {
    // Données des catégories
    categories,
    categoriesLoading,
    categoriesError,
    refreshCategories: loadCategories,
    
    // Autres valeurs globales peuvent être ajoutées ici
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext; 