import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { corsMiddleware, errorHandler } from './middlewares';

// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
const app = express();

// Middlewares de sécurité
app.use(helmet()); // Protection contre les vulnérabilités web courantes
app.use(corsMiddleware); // Configuration CORS

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Données mockées pour les catégories
const mockCategories = [
  { id: 1, nom: 'Bâtiment', slug: 'batiment', nombreArtisans: 3 },
  { id: 2, nom: 'Services', slug: 'services', nombreArtisans: 3 },
  { id: 3, nom: 'Fabrication', slug: 'fabrication', nombreArtisans: 3 },
  { id: 4, nom: 'Alimentation', slug: 'alimentation', nombreArtisans: 3 }
];

// Route de base pour tester l'API
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Trouve ton artisan fonctionnelle',
    status: 'online',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Routes API simplifiées pour Vercel
app.get('/api/categories', (req, res) => {
  res.json(mockCategories);
});

app.get('/api/categories/:id', (req, res) => {
  const category = mockCategories.find(cat => cat.id === parseInt(req.params.id));
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Catégorie non trouvée' });
  }
});

app.get('/api/artisans', (req, res) => {
  // Données mockées pour les artisans
  const mockArtisans = [
    {
      id: 1,
      nom: 'Jean Dupont',
      company: 'Dupont Électricité',
      categorie: 'Bâtiment',
      categorieId: 1,
      specialite: 'Électricité',
      specialiteId: 3,
      note: 4.8,
      nombreAvis: 24,
      ville: 'Lyon',
      departement: 'Rhône',
      codePostal: '69001'
    },
    {
      id: 2,
      nom: 'Marie Martin',
      company: 'Martin Plomberie',
      categorie: 'Bâtiment',
      categorieId: 1,
      specialite: 'Plomberie',
      specialiteId: 2,
      note: 4.9,
      nombreAvis: 32,
      ville: 'Grenoble',
      departement: 'Isère',
      codePostal: '38000'
    },
    {
      id: 3,
      nom: 'Pierre Durand',
      company: 'Durand Menuiserie',
      categorie: 'Bâtiment',
      categorieId: 1,
      specialite: 'Menuiserie',
      specialiteId: 4,
      note: 4.9,
      nombreAvis: 32,
      ville: 'Saint-Étienne',
      departement: 'Loire',
      codePostal: '42000'
    }
  ];
  
  // Filtrer par featured si demandé
  if (req.query.featured === 'true') {
    const featured = mockArtisans.filter(a => a.note >= 4.7).slice(0, parseInt(req.query.limit as string) || 3);
    return res.json(featured);
  }
  
  // Filtrer par catégorie si demandé
  if (req.query.categoryId) {
    const filtered = mockArtisans.filter(a => a.categorieId === parseInt(req.query.categoryId as string));
    return res.json(filtered);
  }
  
  res.json(mockArtisans);
});

app.get('/api/artisans/:id', (req, res) => {
  // Simuler un artisan spécifique
  res.json({
    id: parseInt(req.params.id),
    nom: 'Jean Dupont',
    company: 'Dupont Électricité',
    categorie: 'Bâtiment',
    categorieId: 1,
    specialite: 'Électricité',
    specialiteId: 3,
    note: 4.8,
    nombreAvis: 24,
    ville: 'Lyon',
    departement: 'Rhône',
    codePostal: '69001',
    adresse: '15 rue de la République, 69001 Lyon',
    telephone: '04 78 XX XX XX',
    email: 'contact@dupont-electricite.fr',
    site: 'www.dupont-electricite.fr',
    description: 'Électricien qualifié avec plus de 15 ans d\'expérience. Spécialisé dans les installations électriques résidentielles et commerciales.'
  });
});

// Middleware de gestion des erreurs
app.use(errorHandler);

// Port d'écoute
const PORT = process.env.PORT || 5000;

// Fonction pour démarrer le serveur
const startServer = async () => {
  try {
    // Démarrer le serveur sans tenter de se connecter à la base de données
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT} en mode ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Impossible de démarrer le serveur :', error);
  }
};

export { app, startServer }; 