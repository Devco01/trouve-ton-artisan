import express from 'express';
import { 
  getAllSpecialties, 
  getSpecialtyById, 
  getSpecialtiesByCategory 
} from '../controllers/SpecialtyController';

const router = express.Router();

// Route pour récupérer toutes les spécialités
router.get('/', getAllSpecialties);

// Route pour récupérer une spécialité par son ID
router.get('/:id', getSpecialtyById);

// Route pour récupérer les spécialités par catégorie
router.get('/category/:categoryId', getSpecialtiesByCategory);

export default router; 