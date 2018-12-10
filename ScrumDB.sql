-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Temps de generació: 10-12-2018 a les 10:08:57
-- Versió del servidor: 5.7.24-0ubuntu0.16.04.1
-- Versió de PHP: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `ScrumDB`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `Groups`
--

CREATE TABLE `Groups` (
  `groupID` int(2) NOT NULL,
  `nameGroup` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `userID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Groups`
--

INSERT INTO `Groups` (`groupID`, `nameGroup`, `userID`) VALUES
(1, 'A', 1),
(2, 'B', 2),
(3, 'C', 3);

-- --------------------------------------------------------

--
-- Estructura de la taula `Homework`
--

CREATE TABLE `Homework` (
  `homeworkID` int(2) NOT NULL,
  `description` text NOT NULL,
  `projectID` int(2) NOT NULL,
  `hours` time NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sprintID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Homework`
--

INSERT INTO `Homework` (`homeworkID`, `description`, `projectID`, `hours`, `status`, `sprintID`) VALUES
(1, 'Crear estructura HTML', 1, '02:00:00', 0, 1),
(2, 'Aplicar CSS a la estructura CSS', 1, '02:00:00', 0, 1),
(3, 'Crear estructura de la base de datos.', 2, '06:00:00', 0, 2),
(4, 'Crear página de Login para acceder con los usuarios creados en la base de datos.', 2, '02:00:00', 0, 2);

-- --------------------------------------------------------

--
-- Estructura de la taula `Projects`
--

CREATE TABLE `Projects` (
  `projectID` int(2) NOT NULL,
  `nameProject` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `scrumMasterName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `productOwnerName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Projects`
--

INSERT INTO `Projects` (`projectID`, `nameProject`, `description`, `scrumMasterName`, `productOwnerName`, `startDate`, `endDate`) VALUES
(1, 'Quien es Quien', 'Juego que consiste en adivinar la carta oculta del servidor.', 'Juana', 'Andrea', '2018-12-20', '2019-01-20'),
(2, 'Gestor de Proyectos Scrum', 'Programa que nos ayudará a gestionar un proyecto Scrum', 'Juana', 'Andrea', '2018-12-21', '2019-01-21');

-- --------------------------------------------------------

--
-- Estructura de la taula `Scrum`
--

CREATE TABLE `Scrum` (
  `scrumID` int(2) NOT NULL,
  `homeworkID` int(2) NOT NULL,
  `groupID` int(2) NOT NULL,
  `groupName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `projectID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Scrum`
--

INSERT INTO `Scrum` (`scrumID`, `homeworkID`, `groupID`, `groupName`, `projectID`) VALUES
(1, 1, 1, 'A', 1),
(2, 2, 1, 'A', 1),
(3, 3, 2, 'B', 2),
(4, 4, 2, 'B', 2);

-- --------------------------------------------------------

--
-- Estructura de la taula `Sprints`
--

CREATE TABLE `Sprints` (
  `sprintID` int(2) NOT NULL,
  `projectID` int(2) NOT NULL,
  `hours` time NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `homeworkID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Sprints`
--

INSERT INTO `Sprints` (`sprintID`, `projectID`, `hours`, `startDate`, `endDate`, `homeworkID`) VALUES
(1, 1, '04:00:00', '2018-12-20', '2018-12-23', 1),
(2, 2, '08:00:00', '2018-12-23', '2019-01-23', 2);

-- --------------------------------------------------------

--
-- Estructura de la taula `Users`
--

CREATE TABLE `Users` (
  `userID` int(2) NOT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `passwd` varchar(512) DEFAULT NULL,
  `type` int(2) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Users`
--

INSERT INTO `Users` (`userID`, `nickname`, `username`, `passwd`, `type`, `email`) VALUES
(1, 'juanam', 'Juana', '4844624d054a4ed71e03f4dbe54bb258d35acc5c20ecc1de742bad129783ae790a45cb9737bd1a662411168a433fca2493ba81a4df594d2316cf9c72b02326d3', 1, 'juanascrummaster@gmail.com'),
(2, 'andreat', 'Andrea', 'a71be7c534e52e708e98a9b37cefd82afe0a10070cc509477f452cce635b1b130bc81c07bb3f45528b7fb5a4b1cbd8f0a4f1087e0a3a00f32772a146912a24d9', 2, 'andreatproduct@gmail.com'),
(3, 'martaz', 'Marta', '02267d2f757bb49b126634601c02192d5420d3c177f6bfd9e6951b6adf7cd0c41f247076bccb2c6edb0336d222ce446a551219525813911c9d39d2169e58df5c', 3, 'martadeveloper@gmail.com');

--
-- Indexos per taules bolcades
--

--
-- Index de la taula `Groups`
--
ALTER TABLE `Groups`
  ADD PRIMARY KEY (`groupID`);

--
-- Index de la taula `Homework`
--
ALTER TABLE `Homework`
  ADD PRIMARY KEY (`homeworkID`);

--
-- Index de la taula `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`projectID`);

--
-- Index de la taula `Scrum`
--
ALTER TABLE `Scrum`
  ADD PRIMARY KEY (`scrumID`);

--
-- Index de la taula `Sprints`
--
ALTER TABLE `Sprints`
  ADD PRIMARY KEY (`sprintID`);

--
-- Index de la taula `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `Groups`
--
ALTER TABLE `Groups`
  MODIFY `groupID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT per la taula `Projects`
--
ALTER TABLE `Projects`
  MODIFY `projectID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT per la taula `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
