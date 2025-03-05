import cors from 'cors';

// Configuration CORS pour sécuriser l'API
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://trouve-ton-artisan.fr', 'https://www.trouve-ton-artisan.fr'] 
    : 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 heures en secondes
};

export const corsMiddleware = cors(corsOptions); 