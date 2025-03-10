# Trouve ton artisan

Plateforme dédiée aux artisans de la région Auvergne-Rhône-Alpes, permettant aux particuliers de trouver facilement un artisan et de le contacter.

## Présentation

Ce projet a été réalisé pour la région Auvergne-Rhône-Alpes afin de valoriser les artisans locaux et faciliter la mise en relation entre artisans et particuliers.

La plateforme permet de :
- Rechercher des artisans par catégorie ou par nom
- Consulter les fiches détaillées des artisans
- Contacter directement les artisans via un formulaire

## Démo en ligne

Le site est accessible à l'adresse suivante : [https://trouve-ton-artisan.vercel.app](https://trouve-ton-artisan.vercel.app)

**Note importante sur la version en ligne** : Pour des raisons de coût, la version déployée utilise des données fictives au lieu d'une base de données MySQL réelle. Le code est cependant entièrement fonctionnel et prêt à être connecté à une base de données MySQL en production.

## Technologies utilisées

### Frontend
- React.js
- Bootstrap
- Sass
- React Router

### Backend
- Node.js
- Express
- Sequelize
- MySQL/MariaDB
- TypeScript

## Prérequis

- Node.js (v14 ou supérieur)
- MySQL ou MariaDB
- npm ou yarn

## Installation

### Cloner le dépôt
```bash
git clone https://github.com/Devco01/trouve-ton-artisan
cd trouve-ton-artisan
```

### Installation du backend
```bash
cd backend
npm install
cp .env.example .env
# Modifier les valeurs dans le fichier .env selon votre environnement
```

### Création et alimentation de la base de données
```bash
npm run db:create
npm run db:seed
```

### Installation du frontend
```bash
cd ../frontend
npm install
cp .env.example .env
# Modifier les valeurs dans le fichier .env selon votre environnement
```

## Lancement en développement

### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
cd frontend
npm start
```

## Déploiement en production

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
# Déployer le contenu du dossier 'build' sur votre serveur web
```

## Structure du projet

```
trouve-ton-artisan/
├── backend/             # API Node.js
│   ├── src/             # Code source TypeScript
│   ├── dist/            # Code compilé JavaScript
│   └── database/        # Scripts SQL
├── frontend/            # Application React
│   ├── public/          # Fichiers statiques
│   └── src/             # Code source React
└── docs/                # Documentation
```

## Fonctionnalités

- Recherche d'artisans par catégorie
- Recherche d'artisans par nom
- Affichage des artisans du mois
- Consultation des fiches détaillées des artisans
- Formulaire de contact pour chaque artisan
- Pages légales (mentions légales, données personnelles, etc.)

## Accessibilité

Le site a été développé en suivant les normes WCAG 2.1 pour garantir son accessibilité à tous les utilisateurs, y compris les personnes en situation de handicap.

## Sécurité

Plusieurs mesures de sécurité ont été mises en place :
- Protection contre les injections SQL via Sequelize
- Limitation du taux de requêtes (rate limiting)
- Protection CORS
- Validation des données entrantes
- Utilisation de Helmet pour sécuriser les en-têtes HTTP

## Approche de déploiement

Pour ce projet, nous avons adopté une approche pragmatique pour le déploiement :

1. **Développement local complet** :
   - Développement du frontend et du backend avec une base de données MySQL locale
   - Tests complets de toutes les fonctionnalités en local

2. **Déploiement du frontend uniquement** :
   - Le frontend est déployé sur Vercel
   - Pour éviter les coûts d'hébergement d'une base de données MySQL en production, le frontend utilise des données fictives en mode production
   - Le code est conçu pour basculer automatiquement entre les données fictives (en production) et les appels API réels (en développement)

3. **Code prêt pour un déploiement complet** :
   - Le code du backend est entièrement fonctionnel et prêt à être déployé
   - Les scripts SQL pour la création et l'alimentation de la base de données sont inclus
   - La documentation explique comment déployer l'application complète


## Liens

1. Figma: https://www.figma.com/design/kLHXOK9VVOUTh47sIUWgIj/Trouve-ton-artisan---Maquettes?node-id=0-1&t=lRwW94Ovy7RFXEHD-1

2. Site en ligne: 

## Auteur

Devco01