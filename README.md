# Trouve ton artisan

Application web permettant de mettre en relation les particuliers avec des artisans qualifiés de la région Auvergne-Rhône-Alpes.

## Présentation du projet

Ce projet a été développé pour la région Auvergne-Rhône-Alpes afin de mettre en valeur les artisans locaux et faciliter leur mise en relation avec les particuliers.

La plateforme permet de :
- Rechercher des artisans par catégorie, localisation ou mot-clé
- Consulter les profils détaillés des artisans
- Contacter directement les artisans
- Découvrir les spécialités par catégorie

## Fonctionnalités principales

- Interface utilisateur intuitive et responsive
- Recherche multicritères d'artisans
- Fiches détaillées des artisans avec coordonnées et spécialités
- Système de catégorisation des métiers
- Formulaire de contact
- Newsletter pour rester informé

## Technologies utilisées

- **Frontend** : React.js, SCSS, React Router, React Icons
- **Données** : JSON statique (pour la démonstration)
- **Styles** : SCSS avec architecture BEM

## Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)

## Installation et démarrage

1. Cloner le dépôt
```bash
git clone <url-du-depot>
cd trouve-ton-artisan
```

2. Installer les dépendances
```bash
cd frontend
npm install
```

3. Démarrer l'application en mode développement
```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

4. Construire l'application pour la production
```bash
npm run build
```

## Structure du projet

```
frontend/
├── public/                # Fichiers statiques
│   ├── assets/            # Images, icônes, etc.
│   └── index.html         # Page HTML principale
├── src/                   # Code source
│   ├── components/        # Composants React réutilisables
│   ├── context/           # Contextes React pour la gestion d'état
│   ├── data/              # Données fictives pour le développement
│   ├── pages/             # Pages de l'application
│   ├── services/          # Services pour les appels API
│   ├── styles/            # Fichiers SCSS
│   ├── App.jsx            # Composant principal
│   └── index.js           # Point d'entrée
└── package.json           # Dépendances et scripts
```

## Mesures de sécurité

Le projet implémente plusieurs mesures de sécurité :
- Validation des données entrantes
- Protection contre les attaques XSS
- Gestion sécurisée des formulaires
- Utilisation de HTTPS pour les communications

## Accessibilité

Le site est conçu pour être accessible à tous, conformément à la norme WCAG 2.1, avec une attention particulière portée à :
- La navigation au clavier
- Le contraste des couleurs
- La structure sémantique du HTML

## Liens

- [Maquettes Figma](lien-vers-vos-maquettes)
- [Site en ligne](lien-vers-votre-site-déployé)

## Auteur

Devco01
