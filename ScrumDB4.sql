-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 09-01-2019 a las 19:06:38
-- Versión del servidor: 5.7.24-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ScrumDB4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Groups`
--

CREATE TABLE `Groups` (
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

CREATE TABLE `Homework` (
  `homeworkID` int(2) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `hours` int(11) NOT NULL,
  `orderHW` int(3) NOT NULL,
  `sprintID` int(2) NOT NULL,
  `projectID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Homework`
--

INSERT INTO `Homework` (`homeworkID`, `description`, `hours`, `orderHW`, `sprintID`, `projectID`) VALUES
(1, 'Configurarem les caracteristiques dels personatges a l\'arxiu de configuracio config.txt', 1, 1, 1, 1),
(2, 'Les caracteristiques son finites i hi haura una per linia a l\'arxiu de conf. Per exemple:', 1, 2, 1, 1),
(4, 'Les caracteristiques (ros, moreno, dona, ... ) i els noms d\'arxiu no poden contenir espais (en tot cas, poseu un underscore \"_\").', 3, 3, 1, 1),
(5, 'Crear un boto amb el text: \"Fes la pregunta\" que en clicar-lo detecti quin combo box te la pregunta a realitzar y consulti en els atributs de la carta seleccionada pel servidor la respota y la imprimeixi per pantalla', 3, 4, 2, 1),
(6, 'La forma del tauler ha de ser rectangular, en vista vertical. ', 1, 5, 2, 1),
(7, 'En cas de que el boto \"Fes la pregunta\" generi un error per que hi ha mes d\'un combo box \"activat\" a mes a mes de mostrar el missatge d\'error ha de \"resetejar\" tots el combo box', 1, 6, 2, 1),
(9, 'Generar un formulario con DOM para que el usuario pueda registrarse y guardar su partida.', 2, 2, 4, 2),
(11, 'Generar un formulario con DOM para que el usuario pueda registrarse y guardar su partida.', 2, 2, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Projects`
--

CREATE TABLE `Projects` (
  `projectID` int(2) NOT NULL,
  `nameProject` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `scrumMasterName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productOwnerName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Projects`
--

INSERT INTO `Projects` (`projectID`, `nameProject`, `description`, `scrumMasterName`, `productOwnerName`) VALUES
(1, 'Quien es Quien', 'Juego de adivinar', 'Juana', 'Andrea'),
(2, 'Ajedrez', 'Juego de estrategia', 'Juana', 'Andrea'),
(3, 'Gestor de Proyectos', 'Gestor de proyectos Scrum', 'Juana', 'Andrea');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Sprints`
--

CREATE TABLE `Sprints` (
  `sprintID` int(2) NOT NULL,
  `projectID` int(2) NOT NULL,
  `hours` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `orderNumber` int(2) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Sprints`
--

INSERT INTO `Sprints` (`sprintID`, `projectID`, `hours`, `startDate`, `endDate`, `orderNumber`, `status`) VALUES
(1, 1, 27, '2017-12-10', '2018-12-12', 1, 0),
(2, 1, 24, '2018-12-12', '2019-01-31', 2, 1),
(3, 1, 24, '2018-12-12', '2019-01-01', 3, 2),
(4, 2, 27, '2017-12-04', '2018-12-12', 1, 0),
(5, 2, 24, '2019-02-02', '2019-02-28', 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UserBelongsToP`
--

CREATE TABLE `UserBelongsToP` (
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

CREATE TABLE `Users` (
  `userID` int(2) NOT NULL,
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `passwd` varchar(512) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `type` int(2) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`userID`, `nickname`, `username`, `passwd`, `type`, `email`) VALUES
(1, 'juanam', 'Juana', '4844624d054a4ed71e03f4dbe54bb258d35acc5c20ecc1de742bad129783ae790a45cb9737bd1a662411168a433fca2493ba81a4df594d2316cf9c72b02326d3', 1, 'juana@gmail.com'),
(2, 'andreat', 'Andrea', 'a71be7c534e52e708e98a9b37cefd82afe0a10070cc509477f452cce635b1b130bc81c07bb3f45528b7fb5a4b1cbd8f0a4f1087e0a3a00f32772a146912a24d9', 2, 'andrea@gmail.com'),
(3, 'martaz', 'Marta', '02267d2f757bb49b126634601c02192d5420d3c177f6bfd9e6951b6adf7cd0c41f247076bccb2c6edb0336d222ce446a551219525813911c9d39d2169e58df5c', 3, 'marta@gmail.com'),
(4, 'pedrol', 'Pedro', '770862523822208e39bbef3333b2791eb3cd21c1c1a4b8704dc4b8b1f0db16765f56ebfb25d0dc1230809cb60eb35ed3805ab4581842fcc05664b83308db1dca', 3, 'pedro@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Homework`
--
ALTER TABLE `Homework`
  ADD PRIMARY KEY (`homeworkID`);

--
-- Indices de la tabla `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`projectID`);

--
-- Indices de la tabla `Sprints`
--
ALTER TABLE `Sprints`
  ADD PRIMARY KEY (`sprintID`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Homework`
--
ALTER TABLE `Homework`
  MODIFY `homeworkID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `Projects`
--
ALTER TABLE `Projects`
  MODIFY `projectID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `Sprints`
--
ALTER TABLE `Sprints`
  MODIFY `sprintID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
