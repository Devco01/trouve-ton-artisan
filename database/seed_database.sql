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

-- Insertion des artisans
INSERT INTO artisans (nom, prenom, email, telephone, adresse, code_postal, ville, description, site_web, note, id_specialite) VALUES
-- Plombiers
('Dupont', 'Jean', 'jean.dupont@email.com', '0472123456', '15 rue de la République', '69001', 'Lyon', 'Plombier expérimenté spécialisé dans les installations sanitaires et le dépannage d\'urgence.', 'www.plomberie-dupont.fr', 4.5, 1),
('Martin', 'Sophie', 'sophie.martin@email.com', '0476987654', '8 avenue Gambetta', '38000', 'Grenoble', 'Plombière qualifiée proposant des solutions écologiques pour vos installations.', 'www.eco-plomberie-martin.fr', 4.8, 1),
-- Électriciens
('Petit', 'Thomas', 'thomas.petit@email.com', '0437654321', '25 rue Garibaldi', '69003', 'Lyon', 'Électricien certifié pour tous vos travaux d\'installation et de mise aux normes.', 'www.electricite-petit.fr', 4.2, 2),
('Leroy', 'Marie', 'marie.leroy@email.com', '0477123456', '12 rue de la Paix', '42000', 'Saint-Étienne', 'Électricienne spécialisée dans les installations domotiques et les économies d\'énergie.', 'www.domotique-leroy.fr', 4.7, 2),
-- Menuisiers
('Bernard', 'Pierre', 'pierre.bernard@email.com', '0474567890', '5 rue des Artisans', '69100', 'Villeurbanne', 'Menuisier traditionnel travaillant le bois massif pour des créations sur mesure.', 'www.menuiserie-bernard.fr', 4.9, 3),
('Moreau', 'Claire', 'claire.moreau@email.com', '0475123456', '18 boulevard des Alpes', '26000', 'Valence', 'Menuisière spécialisée dans la restauration de meubles anciens et la création contemporaine.', 'www.moreau-menuiserie.fr', 4.6, 3),
-- Maçons
('Dubois', 'Antoine', 'antoine.dubois@email.com', '0478901234', '7 rue du Commerce', '69002', 'Lyon', 'Maçon expérimenté pour tous vos travaux de construction et rénovation.', 'www.maconnerie-dubois.fr', 4.3, 4),
('Lefebvre', 'Julie', 'julie.lefebvre@email.com', '0473456789', '22 avenue Jean Jaurès', '63000', 'Clermont-Ferrand', 'Maçonne spécialisée dans les techniques traditionnelles et écologiques.', 'www.eco-maconnerie-lefebvre.fr', 4.4, 4),
-- Peintres
('Roux', 'Michel', 'michel.roux@email.com', '0472345678', '9 rue Molière', '69006', 'Lyon', 'Peintre en bâtiment proposant des finitions soignées et des conseils en décoration.', 'www.peinture-roux.fr', 4.1, 5),
('Fournier', 'Émilie', 'emilie.fournier@email.com', '0479876543', '14 rue de la Liberté', '74000', 'Annecy', 'Peintre décoratrice spécialisée dans les techniques anciennes et les enduits naturels.', 'www.deco-fournier.fr', 4.8, 5),
-- Coiffeurs
('Girard', 'Stéphane', 'stephane.girard@email.com', '0472234567', '30 rue Victor Hugo', '69002', 'Lyon', 'Coiffeur visagiste proposant des coupes tendance et personnalisées.', 'www.coiffure-girard.fr', 4.6, 6),
('Bonnet', 'Céline', 'celine.bonnet@email.com', '0476543210', '5 place Grenette', '38000', 'Grenoble', 'Coiffeuse spécialisée dans les colorations naturelles et les soins capillaires bio.', 'www.bio-coiffure-bonnet.fr', 4.9, 6),
-- Esthéticiennes
('Lambert', 'Nathalie', 'nathalie.lambert@email.com', '0474678901', '12 rue de la République', '69001', 'Lyon', 'Esthéticienne proposant des soins du visage et du corps personnalisés.', 'www.esthetique-lambert.fr', 4.7, 7),
('Faure', 'Isabelle', 'isabelle.faure@email.com', '0477890123', '8 rue des Jardins', '42000', 'Saint-Étienne', 'Esthéticienne spécialisée dans les techniques de bien-être et les soins naturels.', 'www.bien-etre-faure.fr', 4.5, 7),
-- Mécaniciens
('Mercier', 'David', 'david.mercier@email.com', '0478123456', '45 avenue Berthelot', '69007', 'Lyon', 'Mécanicien automobile toutes marques avec 20 ans d\'expérience.', 'www.garage-mercier.fr', 4.2, 8),
('Blanc', 'Julien', 'julien.blanc@email.com', '0475678901', '18 rue de l\'Industrie', '26000', 'Valence', 'Mécanicien spécialisé dans les véhicules anciens et de collection.', 'www.retro-garage-blanc.fr', 4.8, 8);

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