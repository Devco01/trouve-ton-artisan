import express from 'express';
import { contactArtisan } from '../controllers/ContactController';
import { sensitiveRouteLimiter } from '../middlewares';

const router = express.Router();

// Route pour contacter un artisan (avec limitation de taux pour éviter le spam)
router.post('/artisan/:artisanId', sensitiveRouteLimiter, contactArtisan);

export default router; 