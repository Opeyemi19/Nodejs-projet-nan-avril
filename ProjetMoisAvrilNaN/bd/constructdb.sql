-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 25 avr. 2019 à 19:33
-- Version du serveur :  10.1.32-MariaDB
-- Version de PHP :  7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `constructdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `constructeur_maison`
--

CREATE TABLE `constructeur_maison` (
  `id` int(11) NOT NULL,
  `Nom_constructeur` varchar(100) NOT NULL,
  `Localisation` text NOT NULL,
  `description` longtext NOT NULL,
  `LogoConstr1` varchar(255) NOT NULL,
  `date_Creat_Constr` date NOT NULL,
  `Nbre_Agence` int(11) NOT NULL,
  `imageConstr1` varchar(255) NOT NULL,
  `imageConstr2` varchar(255) NOT NULL,
  `imageConstr3` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `constructeur_maison`
--

INSERT INTO `constructeur_maison` (`id`, `Nom_constructeur`, `Localisation`, `description`, `LogoConstr1`, `date_Creat_Constr`, `Nbre_Agence`, `imageConstr1`, `imageConstr2`, `imageConstr3`, `created_at`) VALUES
(1, 'SIPIM', 'Situe a Abidjan dans la commune de Trechville non loin de mairie a la rue 12', 'Cette societe est specialise dans la construction de maison et elle fait la fierte de plusieur famille avec ces couts et sa conformite', 'LogoConstr1-1556211131002.jpg', '1997-04-01', 3, 'imageConstr1-1556211131008.jpg', 'imageConstr2-1556211131024.jpg', 'imageConstr3-1556211131026.jpg', '2019-04-25 16:52:11'),
(2, 'BATIM CI', 'Situe a ccocdy precisement a Angre avenue 3 non loin du marche KOKOVICO', 'Cette societe est specialise dans la construction de maison et elle fait la fierte de plusieur famille avec ces couts et sa conformite. Nous serons ravis que vous faites votre choix', 'LogoConstr1-1556211380391.png', '1994-04-09', 5, 'imageConstr1-1556211380393.jpg', 'imageConstr2-1556211380401.jpg', 'imageConstr3-1556211380461.jpg', '2019-04-25 16:56:20'),
(3, 'INTERBAT CI', 'Situe au Plateau dans la commune des affaires vers la rue du commercce', 'Cette societe est specialise dans la construction de maison et elle fait la fierte de plusieur famille avec ces couts et sa conformite. Nous serons ravis que vous faites votre choix et cela va pour votre bien etre', 'LogoConstr1-1556211542001.jpg', '2008-04-03', 6, 'imageConstr1-1556211542002.JPG', 'imageConstr2-1556211542009.jpg', 'imageConstr3-1556211542009.jpg', '2019-04-25 16:59:02');

-- --------------------------------------------------------

--
-- Structure de la table `contact_constructeur`
--

CREATE TABLE `contact_constructeur` (
  `id` int(11) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Telephone` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Localisation_Projet` varchar(255) NOT NULL,
  `Question_Poser` text NOT NULL,
  `constructeur_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `Created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `contact_constructeur`
--

INSERT INTO `contact_constructeur` (`id`, `FullName`, `Telephone`, `Email`, `Localisation_Projet`, `Question_Poser`, `constructeur_id`, `user_id`, `Created_at`) VALUES
(1, 'Ope', '53637', 'sodik@gmail.com', 'Bouake', 'prise d ibfos', NULL, NULL, '2019-04-24 18:38:02'),
(2, 'riki', '2525252', 'ssodi@gmail.com', 'sssgsgsgs', 'gsgsgsgsgssgs', NULL, NULL, '2019-04-24 19:06:43'),
(4, 'Koadi fa', '52627228', 's@gmail.com', 'korhogo', 'une maison de pur entretien', NULL, 3, '2019-04-25 05:31:24'),
(5, 'tqtqtqt', '22222288', 'sodik@gmail.com', 'yeeyeyey', 'djjjfjfjfjfjfj', NULL, 3, '2019-04-25 05:36:28'),
(6, 'Fofana Korotoumou', '2346781', 'korotoum@yahoo.fr', 'Abobo', 'J\' ai besoin d\'un constructeur peut etre qui se trouve a Abobo pour faire une a nalyse de  mon terrain et si possible construire cela a ma faveur.', 2, 2, '2019-04-25 17:04:29');

-- --------------------------------------------------------

--
-- Structure de la table `infos_model`
--

CREATE TABLE `infos_model` (
  `id` int(11) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Telephone` varchar(255) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Lieu_habitation` varchar(150) NOT NULL,
  `modele_id` int(11) DEFAULT NULL,
  `User_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `infos_model`
--

INSERT INTO `infos_model` (`id`, `FullName`, `Telephone`, `Email`, `Lieu_habitation`, `modele_id`, `User_id`, `created_at`) VALUES
(3, 'Riki', '5637373', 'ssodi@gmail.com', 'Adjame', NULL, NULL, '2019-04-23 03:46:26'),
(4, 'Opeye', '5161616', 'sodikfatyo@gmail.com', 'cocody', NULL, NULL, '2019-04-24 05:39:57'),
(5, 'Kouadi Yao', '5676388', 'koej@gmail.com', 'Adjame', 2, 2, '2019-04-25 17:05:57');

-- --------------------------------------------------------

--
-- Structure de la table `model_maison`
--

CREATE TABLE `model_maison` (
  `id` int(11) NOT NULL,
  `Nom_maison` varchar(150) NOT NULL,
  `Superficie_maison` double NOT NULL,
  `Nbre_chambres` int(11) NOT NULL,
  `Image1` varchar(255) NOT NULL,
  `Image2` varchar(255) NOT NULL,
  `Image3` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Prix` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `model_maison`
--

INSERT INTO `model_maison` (`id`, `Nom_maison`, `Superficie_maison`, `Nbre_chambres`, `Image1`, `Image2`, `Image3`, `Description`, `Prix`, `created_at`) VALUES
(1, 'Villa V', 100, 5, 'Image1-1556210310860.JPG', 'Image2-1556210310867.jpg', 'Image3-1556210310873.jpg', 'Cettte est tres cool avoir pour une famille Globalise.', '15447388', '2019-04-25 16:38:30'),
(2, 'Duplex', 120, 7, 'Image1-1556210486736.jpg', 'Image2-1556210486737.jpg', 'Image3-1556210486738.jpg', 'C\' est de grande Taille avec un famille bien structure et un environnement confort.', '267890533', '2019-04-25 16:41:26'),
(3, 'Petit Chateau', 300, 8, 'Image1-1556210673331.jpg', 'Image2-1556210673339.jpg', 'Image3-1556210673340.jpg', 'Le petit chateau est tres interresant pour y vivre , car il est bon de se faire du plaisir quand on a les moyens de le faire n\' hesitez.', '4415627737', '2019-04-25 16:44:33');

-- --------------------------------------------------------

--
-- Structure de la table `projet_const`
--

CREATE TABLE `projet_const` (
  `id` int(11) NOT NULL,
  `FullName` varchar(250) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `phoneNumber` varchar(150) NOT NULL,
  `ville_projet` varchar(150) NOT NULL,
  `commune_projet` varchar(150) NOT NULL,
  `quartier_projet` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projet_const`
--

INSERT INTO `projet_const` (`id`, `FullName`, `Email`, `phoneNumber`, `ville_projet`, `commune_projet`, `quartier_projet`, `created_at`, `user_id`) VALUES
(1, 'Fatayo Opeyemi', 'sodik@gmail.com', '46048829', 'Abengourou', 'Abengourou commune', 'Dioulaboubou', '2019-04-25 17:07:19', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('2QtsOjKA6ALNLwRHo8xm5wi5qhI7oznZ', 1556220721, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('FsOSDeNJiumy2M92jRLEs4MOOe4NMmic', 1556265738, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),
('Komg7zmDVBSWWfus-zwPjCb6FBSyQKl3', 1556220721, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('LwOy1qZB-DkGrJXZnZXBRccwCHpZvm97', 1556284682, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('NfnCxmzBevjUNQ6ZPMw0d7ZirHtyN4Qp', 1556220721, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('OIOUmovv6hvIUOLOxjtxUCdNERKeTopD', 1556284682, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('UIS2Ow4aizQ8qA6l6Lv6JEENavODzVyD', 1556289072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"errors\":[{\"location\":\"body\",\"param\":\"date_Creat_Constr\",\"msg\":\"Le champ Date est vide\",\"value\":\"\"},{\"location\":\"body\",\"param\":\"Nbre_Agence\",\"msg\":\"Ce champ Nombre Agence est vide ou n est pas un nombre\",\"value\":\"\"}],\"succes\":false,\"flash\":{},\"passport\":{}}'),
('VreEmX-19QhdulQ5_eyvSy6cnbIlWWIm', 1556220721, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('WMAX_HXeslubLL-sdSusHJU2G8RSZybN', 1556284681, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('YUeWCUFoO-yMyXz05Fq-9V0Li8oi2zXz', 1556220721, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('_fiQs9kSkLcBvNa9DqUZVs38Qrs6uFkl', 1556284682, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('kbZyXYkRtPq9jqfA9yg2IiIR5Or7e6Kk', 1556285087, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{},\"succes\":true}'),
('mggXqDn9iLVmld8LpZm3Luz9AJ6ClheQ', 1556221325, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"error\":[\"Missing credentials\",\"Missing credentials\",\"Missing credentials\"]},\"passport\":{\"user\":3}}'),
('norbUvXRt604A4LnsxuTIYkIlj6915hq', 1556299023, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":2},\"succes\":true}'),
('rZ_TPJbD4IlsZzyMmjoaiPVKCLBADwqn', 1556292958, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":2}}'),
('siYH59GO2P3-0ZFVpVRpp3Log2Cf88RN', 1556220721, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('xFz5BqWX6V7pdijQhjoX5Jb31YyMkM8Y', 1556225357, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":2},\"errors\":null,\"succes\":true}'),
('z8YbodXG3S7WZeZdr0X6xsGlMFbM8i5a', 1556284682, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('zdoUtCg6HmxYNsjrtvaY8eRdXf_lxx3G', 1556284682, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `username` varchar(100) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Lieu_Habitation` varchar(200) NOT NULL,
  `statut` int(11) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `Email`, `password`, `Lieu_Habitation`, `statut`, `Created_at`) VALUES
(2, 'Sodik Fatayo Aderemi', 'fatayo', 'sodikfatyo@gmail.com', '$2a$10$c9e4wIR17kn7nIIn.JkuIOzLIIjnY6KClBQQr7LXNOaXnfK/xo8D2', 'Adjame', 1, '2019-04-23 13:23:59'),
(3, 'riki sodik', 'riki', 'rik@gmail.com', '$2a$10$uzZudetvHVHa7kZT8cPYZeuER9yfEk7mZiF9dLnB5RRGhZ2ix0fSi', 'Koumassi', 0, '2019-04-24 19:28:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `constructeur_maison`
--
ALTER TABLE `constructeur_maison`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact_constructeur`
--
ALTER TABLE `contact_constructeur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUser` (`user_id`),
  ADD KEY `Fk_construc` (`constructeur_id`);

--
-- Index pour la table `infos_model`
--
ALTER TABLE `infos_model`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_model1` (`modele_id`),
  ADD KEY `FK_model2` (`User_id`);

--
-- Index pour la table `model_maison`
--
ALTER TABLE `model_maison`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projet_const`
--
ALTER TABLE `projet_const`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fk_projet_const` (`user_id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `constructeur_maison`
--
ALTER TABLE `constructeur_maison`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `contact_constructeur`
--
ALTER TABLE `contact_constructeur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `infos_model`
--
ALTER TABLE `infos_model`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `model_maison`
--
ALTER TABLE `model_maison`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `projet_const`
--
ALTER TABLE `projet_const`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contact_constructeur`
--
ALTER TABLE `contact_constructeur`
  ADD CONSTRAINT `FkUser` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `Fk_construc` FOREIGN KEY (`constructeur_id`) REFERENCES `constructeur_maison` (`id`);

--
-- Contraintes pour la table `infos_model`
--
ALTER TABLE `infos_model`
  ADD CONSTRAINT `FK_model1` FOREIGN KEY (`modele_id`) REFERENCES `model_maison` (`id`),
  ADD CONSTRAINT `FK_model2` FOREIGN KEY (`User_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `projet_const`
--
ALTER TABLE `projet_const`
  ADD CONSTRAINT `Fk_projet_const` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
