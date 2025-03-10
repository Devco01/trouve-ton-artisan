import { app, startServer } from './app';

// Démarrer le serveur en mode non-serverless
if (process.env.NODE_ENV !== 'production') {
  startServer();
}

// Exporter l'application pour Vercel
export default app; 