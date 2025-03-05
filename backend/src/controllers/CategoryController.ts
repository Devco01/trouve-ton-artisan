import { Request, Response } from 'express';
import { Category } from '../models';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    
    if (!category) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }
    
    return res.status(200).json(category);
  } catch (error) {
    console.error('Erreur lors de la récupération de la catégorie:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}; 