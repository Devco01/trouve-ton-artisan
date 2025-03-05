import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './routes';
import sequelize from './config/database';
import { corsMiddleware, errorHandler, apiLimiter } from './middlewares';
import path from 'path';

// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
const app = express();

// Middlewares de sécurité
app.use(helmet()); // Protection contre les vulnérabilités web courantes
app.use(corsMiddleware); // Configuration CORS
app.use(apiLimiter); // Limitation du taux de requêtes

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes API
app.use('/api', routes);

// Servir les fichiers statiques en production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
  });
}

// Middleware de gestion des erreurs
app.use(errorHandler);

// Port d'écoute
const PORT = process.env.PORT || 5000;

// Fonction pour démarrer le serveur
const startServer = async () => {
  try {
    // Tester la connexion à la base de données
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie avec succès.');
    
    // Synchroniser les modèles avec la base de données (en développement uniquement)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('Modèles synchronisés avec la base de données.');
    }
    
    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
    process.exit(1);
  }
};

// Exporter l'application et la fonction de démarrage
export { app, startServer }; 