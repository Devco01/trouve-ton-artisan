-- Script d'alimentation de la base de données pour le projet "Trouve ton artisan"
-- Version 1.0

USE trouve_ton_artisan;

-- Insertion des catégories
INSERT INTO categories (nom, description, icone) VALUES
('Bâtiment', 'Professionnels du secteur du bâtiment et de la construction', 'FaHardHat'),
('Services', 'Prestataires de services divers pour particuliers et entreprises', 'FaHandsHelping'),
('Fabrication', 'Artisans spécialisés dans la fabrication et la création d\'objets', 'FaTools'),
('Alimentation', 'Métiers de bouche et production alimentaire artisanale', 'FaUtensils');

-- Insertion des spécialités
INSERT INTO specialites (nom, description, id_categorie) VALUES
-- Bâtiment
('Plomberie', 'Installation et réparation de systèmes de plomberie', 1),
('Électricité', 'Installation et maintenance de systèmes électriques', 1),
('Menuiserie', 'Travail du bois pour l\'aménagement intérieur et extérieur', 1),
('Maçonnerie', 'Construction et rénovation de structures en pierre, brique ou béton', 1),
('Peinture', 'Travaux de peinture intérieure et extérieure', 1),
-- Services
('Coiffure', 'Services de coiffure pour hommes, femmes et enfants', 2),
('Esthétique', 'Soins esthétiques et de beauté', 2),
('Réparation automobile', 'Entretien et réparation de véhicules', 2),
('Couture', 'Création et retouche de vêtements', 2),
('Photographie', 'Services photographiques pour événements et portraits', 2),
-- Fabrication
('Ébénisterie', 'Création de meubles et objets en bois précieux', 3),
('Poterie', 'Fabrication d\'objets en céramique', 3),
('Bijouterie', 'Création de bijoux artisanaux', 3),
('Verrerie', 'Travail du verre pour objets décoratifs et utilitaires', 3),
('Ferronnerie', 'Création d\'objets en fer forgé', 3),
-- Alimentation
('Boulangerie', 'Fabrication de pain et viennoiseries', 4),
('Pâtisserie', 'Création de gâteaux et desserts', 4),
('Boucherie', 'Préparation et vente de viandes', 4),
('Fromagerie', 'Fabrication et affinage de fromages', 4),
('Chocolaterie', 'Création de chocolats artisanaux', 4);

-- Insertion des artisans basée sur l'image fournie
INSERT INTO artisans (nom, email, site_web, note, ville, description, id_specialite) VALUES
('Boucherie Dumont', 'boucherie.dumont@gmail.com', '', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend...', 18), -- Boucherie
('Au pain chaud', 'aupainchaud@hotmail.com', '', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend...', 16), -- Boulangerie
('Chocolaterie Labbé', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend...', 20), -- Chocolaterie
('Traiteur Truchon', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend...', 4), -- Alimentation
('Salon Salmons', 'c.salmons@live.com', '', 5.0, 'Évian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend...', 6), -- Coiffure
('Mont Blanc Électricité', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend...', 2), -- Électricité
-- Continuer avec les autres artisans de l'image...

-- Insertion des avis
INSERT INTO avis (commentaire, note, id_artisan) VALUES
('Excellent travail, rapide et efficace. Je recommande vivement !', 5, 1),
('Intervention rapide et de qualité. Prix raisonnable.', 4, 1),
('Très professionnelle et à l\'écoute. Travail impeccable.', 5, 2),
('Service de qualité, mais délai un peu long.', 4, 2),
('Travail soigné et conseils pertinents. Je suis très satisfait.', 4, 3),
('Excellente prestation, dans les délais et le budget prévus.', 5, 4),
('Artisan passionné et méticuleux. Résultat parfait !', 5, 5),
('Très bon travail de restauration sur mes meubles anciens.', 5, 6),
('Chantier bien mené, propre et dans les délais.', 4, 7),
('Construction de qualité avec de bons conseils.', 4, 8),
('Finitions impeccables et respect des délais.', 4, 9),
('Travail soigné et conseils déco très utiles.', 5, 10),
('Coupe parfaite et ambiance agréable.', 5, 11),
('Très bonne expérience, coiffeur à l\'écoute.', 4, 12),
('Soins relaxants et efficaces. Je recommande !', 5, 13),
('Prestation de qualité dans un cadre agréable.', 4, 14),
('Réparation rapide et efficace. Tarifs honnêtes.', 4, 15),
('Excellent travail sur ma voiture de collection.', 5, 16);

-- Insertion des utilisateurs (mot de passe : "password" hashé)
INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe, role) VALUES
('Admin', 'System', 'admin@trouve-ton-artisan.fr', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('User', 'Test', 'user@exemple.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user');

-- Insertion des contacts
INSERT INTO contacts (nom, email, sujet, message, id_artisan) VALUES
('Durand', 'client@email.com', 'Demande de devis', 'Bonjour, je souhaiterais obtenir un devis pour des travaux de plomberie dans ma salle de bain.', 1),
('Martin', 'autre.client@email.com', 'Question technique', 'Bonjour, pouvez-vous me dire si vous installez des systèmes de chauffage écologiques ?', 2),
('Petit', 'nouveau.client@email.com', 'Disponibilité', 'Bonjour, je voudrais savoir si vous êtes disponible la semaine prochaine pour une intervention urgente.', 3);

-- Insertion des abonnés à la newsletter
INSERT INTO newsletter_subscribers (email) VALUES
('abonne1@email.com'),
('abonne2@email.com'),
('abonne3@email.com'),
('abonne4@email.com'),
('abonne5@email.com'); 