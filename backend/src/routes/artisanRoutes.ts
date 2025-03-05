import express from 'express';
import { 
  getAllArtisans, 
  getArtisanById, 
  getArtisansByCategory, 
  getArtisansBySpecialty,
  getFeaturedArtisans,
  searchArtisans
} from '../controllers/ArtisanController';

const router = express.Router();

// Route pour récupérer tous les artisans
router.get('/', getAllArtisans);

// Route pour rechercher des artisans
router.get('/search', searchArtisans);

// Route pour récupérer les artisans à la une
router.get('/featured', getFeaturedArtisans);

// Route pour récupérer les artisans par catégorie
router.get('/category/:categoryId', getArtisansByCategory);

// Route pour récupérer les artisans par spécialité
router.get('/specialty/:specialtyId', getArtisansBySpecialty);

// Route pour récupérer un artisan par son ID
router.get('/:id', getArtisanById);

export default router; 