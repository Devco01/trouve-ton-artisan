import express from 'express';
import { getAllCategories, getCategoryById } from '../controllers/CategoryController';

const router = express.Router();

// Route pour récupérer toutes les catégories
router.get('/', getAllCategories);

// Route pour récupérer une catégorie par son ID
router.get('/:id', getCategoryById);

export default router; 