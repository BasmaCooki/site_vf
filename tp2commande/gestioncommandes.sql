-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Jeu 19 Décembre 2024 à 10:17
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `gestioncommandes`
--

-- --------------------------------------------------------

--
-- Structure de la table `tableclients`
--

CREATE TABLE IF NOT EXISTS `tableclients` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `date_inscription` date NOT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `tableclients`
--

INSERT INTO `tableclients` (`id_client`, `nom`, `prenom`, `email`, `date_inscription`) VALUES
(1, 'Dupont', 'Marie', 'marie.dupont@example.com', '2023-01-10'),
(2, 'Durand', 'Paul', '''paul.durand@example.com', '2023-02-20'),
(3, 'Martin', 'Alice', 'alice.martin@example.com', '2023-03-15');

-- --------------------------------------------------------

--
-- Structure de la table `tablecommandes`
--

CREATE TABLE IF NOT EXISTS `tablecommandes` (
  `id_commande` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `date_commande` date NOT NULL,
  `montant_total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_commande`),
  KEY `id_client` (`id_client`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `tablecommandes`
--

INSERT INTO `tablecommandes` (`id_commande`, `id_client`, `date_commande`, `montant_total`) VALUES
(1, 2, '2024-12-18', 200.00),
(7, 2, '2024-12-18', 244.00);

-- --------------------------------------------------------

--
-- Structure de la table `tabledetailscommandes`
--

CREATE TABLE IF NOT EXISTS `tabledetailscommandes` (
  `id_detail` int(11) NOT NULL AUTO_INCREMENT,
  `id_commande` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix_total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_detail`),
  KEY `id_commande` (`id_commande`,`id_produit`),
  KEY `id_produit` (`id_produit`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `tabledetailscommandes`
--

INSERT INTO `tabledetailscommandes` (`id_detail`, `id_commande`, `id_produit`, `quantite`, `prix_total`) VALUES
(1, 1, 1, 1, 1200.00),
(2, 1, 3, 5, 750.00);

-- --------------------------------------------------------

--
-- Structure de la table `tableproduits`
--

CREATE TABLE IF NOT EXISTS `tableproduits` (
  `id_produit` int(11) NOT NULL AUTO_INCREMENT,
  `nom_produit` varchar(255) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `tableproduits`
--

INSERT INTO `tableproduits` (`id_produit`, `nom_produit`, `prix`, `stock`) VALUES
(1, 'Ordinateur portable', 1200.00, 10),
(2, 'Smartphone', 800.00, 15),
(3, 'Casque audio', 150.00, 30),
(4, 'Clavier', 50.00, 50);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `tablecommandes`
--
ALTER TABLE `tablecommandes`
  ADD CONSTRAINT `tablecommandes_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `tableclients` (`id_client`);

--
-- Contraintes pour la table `tabledetailscommandes`
--
ALTER TABLE `tabledetailscommandes`
  ADD CONSTRAINT `tabledetailscommandes_ibfk_2` FOREIGN KEY (`id_commande`) REFERENCES `tablecommandes` (`id_commande`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tabledetailscommandes_ibfk_1` FOREIGN KEY (`id_produit`) REFERENCES `tableproduits` (`id_produit`);
