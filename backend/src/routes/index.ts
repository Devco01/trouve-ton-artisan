import express from 'express';
import categoryRoutes from './categoryRoutes';
import specialtyRoutes from './specialtyRoutes';
import artisanRoutes from './artisanRoutes';
import contactRoutes from './contactRoutes';

const router = express.Router();

// Routes pour les catégories
router.use('/categories', categoryRoutes);

// Routes pour les spécialités
router.use('/specialties', specialtyRoutes);

// Routes pour les artisans
router.use('/artisans', artisanRoutes);

// Routes pour le contact
router.use('/contact', contactRoutes);

export default router; 