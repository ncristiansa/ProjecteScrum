-- phpMyAdmin SQL Dump
-- version 4.0.10deb1ubuntu0.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 17-12-2018 a las 02:45:07
-- Versión del servidor: 5.5.62-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ScrumDB3.0`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Groups`
--

CREATE TABLE IF NOT EXISTS `Groups` (
  `groupID` int(2) NOT NULL,
  `nameGroup` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `userID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Groups`
--

INSERT INTO `Groups` (`groupID`, `nameGroup`, `userID`) VALUES
(1, 'A', 3),
(3, 'C', 3),
(2, 'B', 4),
(2, 'B', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Homework`
--

CREATE TABLE IF NOT EXISTS `Homework` (
  `homeworkID` int(2) NOT NULL AUTO_INCREMENT,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `hours` int(11) NOT NULL,
  `orderHW` int(3) NOT NULL,
  `sprintID` int(2) NOT NULL,
  `projectID` int(2) NOT NULL,
  PRIMARY KEY (`homeworkID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `Homework`
--

INSERT INTO `Homework` (`homeworkID`, `description`, `hours`, `orderHW`, `sprintID`, `projectID`) VALUES
(1, 'Configurarem les caracteristiques dels personatges a l''arxiu de configuracio config.txt', 1, 1, 1, 1),
(2, 'Les caracteristiques son finites i hi haura una per linia a l''arxiu de conf. Per exemple:', 1, 2, 1, 1),
(4, 'Les caracteristiques (ros, moreno, dona, ... ) i els noms d''arxiu no poden contenir espais (en tot cas, poseu un underscore "_").', 3, 5, 1, 1),
(5, 'Crear un boto amb el text: "Fes la pregunta" que en clicar-lo detecti quin combo box te la pregunta a realitzar y consulti en els atributs de la carta seleccionada pel servidor la respota y la imprimeixi per pantalla', 3, 13, 2, 1),
(6, 'La forma del tauler ha de ser rectangular, en vista vertical. ', 1, 14, 2, 1),
(7, 'En cas de que el boto "Fes la pregunta" generi un error per que hi ha mes d''un combo box "activat" a mes a mes de mostrar el missatge d''error ha de "resetejar" tots el combo box', 1, 16, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Projects`
--

CREATE TABLE IF NOT EXISTS `Projects` (
  `projectID` int(2) NOT NULL AUTO_INCREMENT,
  `nameProject` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `scrumMasterName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productOwnerName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`projectID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `Projects`
--

INSERT INTO `Projects` (`projectID`, `nameProject`, `description`, `scrumMasterName`, `productOwnerName`) VALUES
(1, 'Quien es Quien', 'Juego de adivinar', 'Juana', 'Andrea'),
(2, 'Ajedrez', 'Juego de estrategia', 'Juana', 'Andrea'),
(3, 'Gestor de Proyectos', 'Gestor de proyectos Scrum', 'Juana', 'Andrea');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Scrum`
--

CREATE TABLE IF NOT EXISTS `Scrum` (
  `scrumID` int(2) NOT NULL AUTO_INCREMENT,
  `homeworkID` int(2) NOT NULL,
  `groupID` int(2) NOT NULL,
  `groupName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `projectID` int(2) NOT NULL,
  PRIMARY KEY (`scrumID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Sprints`
--

CREATE TABLE IF NOT EXISTS `Sprints` (
  `sprintID` int(2) NOT NULL AUTO_INCREMENT,
  `projectID` int(2) NOT NULL,
  `hours` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `orderNumber` int(2) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`sprintID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `Sprints`
--

INSERT INTO `Sprints` (`sprintID`, `projectID`, `hours`, `startDate`, `endDate`, `orderNumber`, `status`) VALUES
(1, 1, 27, '2017-12-12', '2018-12-12', 1, 1),
(2, 1, 24, '2018-12-12', '2019-01-01', 2, 0),
(3, 2, 24, '2018-12-12', '2019-01-01', 2, 0),
(4, 2, 27, '2017-12-12', '2018-12-12', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UserBelongsToP`
--

CREATE TABLE IF NOT EXISTS `UserBelongsToP` (
  `projectID` int(2) NOT NULL,
  `userID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `UserBelongsToP`
--

INSERT INTO `UserBelongsToP` (`projectID`, `userID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 4),
(3, 1),
(3, 2),
(3, 3),
(3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `userID` int(2) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `passwd` varchar(512) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `type` int(2) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`userID`, `nickname`, `username`, `passwd`, `type`, `email`) VALUES
(1, 'juanam', 'Juana', '4844624d054a4ed71e03f4dbe54bb258d35acc5c20ecc1de742bad129783ae790a45cb9737bd1a662411168a433fca2493ba81a4df594d2316cf9c72b02326d3', 1, 'juana@gmail.com'),
(2, 'andreat', 'Andrea', 'a71be7c534e52e708e98a9b37cefd82afe0a10070cc509477f452cce635b1b130bc81c07bb3f45528b7fb5a4b1cbd8f0a4f1087e0a3a00f32772a146912a24d9', 2, 'andrea@gmail.com'),
(3, 'martaz', 'Marta', '02267d2f757bb49b126634601c02192d5420d3c177f6bfd9e6951b6adf7cd0c41f247076bccb2c6edb0336d222ce446a551219525813911c9d39d2169e58df5c', 3, 'marta@gmail.com'),
(4, 'pedrol', 'Pedro', '770862523822208e39bbef3333b2791eb3cd21c1c1a4b8704dc4b8b1f0db16765f56ebfb25d0dc1230809cb60eb35ed3805ab4581842fcc05664b83308db1dca', 3, 'pedro@gmail.com');

DELIMITER $$
--
-- Eventos
--
CREATE DEFINER=`Administrador`@`localhost` EVENT `checkSprintEndedStatus` ON SCHEDULE EVERY 1 DAY STARTS '2013-02-02 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE Sprints SET status = 0 WHERE CURRENT_DATE BETWEEN startDate AND endDate$$

CREATE DEFINER=`Administrador`@`localhost` EVENT `checkSprintActiveStatus` ON SCHEDULE EVERY 1 DAY STARTS '2013-02-02 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE Sprints SET status = 1 WHERE CURRENT_DATE BETWEEN startDate AND endDate$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
