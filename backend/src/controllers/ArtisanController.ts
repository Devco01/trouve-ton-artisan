import { Request, Response } from 'express';
import { Artisan, Specialty, Category } from '../models';
import { Op } from 'sequelize';

export const getAllArtisans = async (req: Request, res: Response) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialty,
          include: [{ model: Category }]
        }
      ]
    });
    return res.status(200).json(artisans);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getArtisanById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const artisan = await Artisan.findByPk(id, {
      include: [
        {
          model: Specialty,
          include: [{ model: Category }]
        }
      ]
    });
    
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé' });
    }
    
    return res.status(200).json(artisan);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'artisan:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getArtisansByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialty,
          where: { categoryId },
          include: [{ model: Category }]
        }
      ]
    });
    
    return res.status(200).json(artisans);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans par catégorie:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getArtisansBySpecialty = async (req: Request, res: Response) => {
  try {
    const { specialtyId } = req.params;
    
    const artisans = await Artisan.findAll({
      where: { specialtyId },
      include: [
        {
          model: Specialty,
          include: [{ model: Category }]
        }
      ]
    });
    
    return res.status(200).json(artisans);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans par spécialité:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getFeaturedArtisans = async (req: Request, res: Response) => {
  try {
    const artisans = await Artisan.findAll({
      where: { isFeatured: true },
      include: [
        {
          model: Specialty,
          include: [{ model: Category }]
        }
      ],
      limit: 3
    });
    
    return res.status(200).json(artisans);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans à la une:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const searchArtisans = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Requête de recherche invalide' });
    }
    
    const artisans = await Artisan.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`
        }
      },
      include: [
        {
          model: Specialty,
          include: [{ model: Category }]
        }
      ]
    });
    
    return res.status(200).json(artisans);
  } catch (error) {
    console.error('Erreur lors de la recherche d\'artisans:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}; 