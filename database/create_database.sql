-- Script de création de la base de données pour le projet "Trouve ton artisan"
-- Version 1.0

-- Création de la base de données
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_ton_artisan;

-- Table des catégories
CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    icone VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table des spécialités
CREATE TABLE IF NOT EXISTS specialites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    id_categorie INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_categorie) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Table des artisans
CREATE TABLE IF NOT EXISTS artisans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telephone VARCHAR(20),
    adresse VARCHAR(255),
    code_postal VARCHAR(10),
    ville VARCHAR(100),
    description TEXT,
    site_web VARCHAR(255),
    note DECIMAL(2,1) DEFAULT 0.0,
    id_specialite INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_specialite) REFERENCES specialites(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Table des avis
CREATE TABLE IF NOT EXISTS avis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    commentaire TEXT,
    note INT NOT NULL CHECK (note BETWEEN 1 AND 5),
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_artisan INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_artisan) REFERENCES artisans(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Table des utilisateurs
CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    sujet VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_artisan INT,
    status ENUM('nouveau', 'en_cours', 'traite') DEFAULT 'nouveau',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_artisan) REFERENCES artisans(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Table des abonnés à la newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Création des index pour optimiser les recherches
CREATE INDEX idx_artisans_specialite ON artisans(id_specialite);
CREATE INDEX idx_artisans_ville ON artisans(ville);
CREATE INDEX idx_specialites_categorie ON specialites(id_categorie);
CREATE INDEX idx_avis_artisan ON avis(id_artisan);
CREATE INDEX idx_contacts_artisan ON contacts(id_artisan); 