import { Request, Response } from 'express';
import { Specialty, Category } from '../models';

export const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const specialties = await Specialty.findAll({
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });
    return res.status(200).json(specialties);
  } catch (error) {
    console.error('Erreur lors de la récupération des spécialités:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getSpecialtyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const specialty = await Specialty.findByPk(id, {
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });
    
    if (!specialty) {
      return res.status(404).json({ message: 'Spécialité non trouvée' });
    }
    
    return res.status(200).json(specialty);
  } catch (error) {
    console.error('Erreur lors de la récupération de la spécialité:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getSpecialtiesByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const specialties = await Specialty.findAll({
      where: { categoryId },
      include: [{ model: Category, attributes: ['id', 'name'] }]
    });
    
    return res.status(200).json(specialties);
  } catch (error) {
    console.error('Erreur lors de la récupération des spécialités par catégorie:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}; 