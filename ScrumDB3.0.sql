-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: ScrumDB3.0
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ScrumDB3.0`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ScrumDB3.0` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `ScrumDB3.0`;

--
-- Table structure for table `Groups`
--

DROP TABLE IF EXISTS `Groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Groups` (
  `groupID` int(2) NOT NULL AUTO_INCREMENT,
  `nameGroup` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `userID` int(2) NOT NULL,
  PRIMARY KEY (`groupID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Groups`
--

LOCK TABLES `Groups` WRITE;
/*!40000 ALTER TABLE `Groups` DISABLE KEYS */;
INSERT INTO `Groups` VALUES (1,'A',1),(2,'B',2),(3,'C',3),(4,'B',4);
/*!40000 ALTER TABLE `Groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Homework`
--

DROP TABLE IF EXISTS `Homework`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Homework` (
  `homeworkID` int(2) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `hours` time NOT NULL,
  `orderHW` int(3) NOT NULL,
  `sprintID` int(2) NOT NULL,
  `projectID` int(2) NOT NULL,
  PRIMARY KEY (`homeworkID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homework`
--

LOCK TABLES `Homework` WRITE;
/*!40000 ALTER TABLE `Homework` DISABLE KEYS */;
/*!40000 ALTER TABLE `Homework` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Projects`
--

DROP TABLE IF EXISTS `Projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Projects` (
  `projectID` int(2) NOT NULL AUTO_INCREMENT,
  `nameProject` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `scrumMasterName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productOwnerName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`projectID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Projects`
--

LOCK TABLES `Projects` WRITE;
/*!40000 ALTER TABLE `Projects` DISABLE KEYS */;
INSERT INTO `Projects` VALUES (1,'Quien es Quien','Juego de adivinar','Juana','Andrea'),(2,'Ajedrez','Juego de estrategia','Juana','Andrea'),(3,'Gestor de Proyectos','Gestor de proyectos Scrum','Juana','Andrea');
/*!40000 ALTER TABLE `Projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Scrum`
--

DROP TABLE IF EXISTS `Scrum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Scrum` (
  `scrumID` int(2) NOT NULL AUTO_INCREMENT,
  `homeworkID` int(2) NOT NULL,
  `groupID` int(2) NOT NULL,
  `groupName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `projectID` int(2) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`scrumID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Scrum`
--

LOCK TABLES `Scrum` WRITE;
/*!40000 ALTER TABLE `Scrum` DISABLE KEYS */;
/*!40000 ALTER TABLE `Scrum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sprints`
--

DROP TABLE IF EXISTS `Sprints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sprints` (
  `sprintID` int(2) NOT NULL AUTO_INCREMENT,
  `projectID` int(2) NOT NULL,
  `hours` time NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `number` int(2) NOT NULL,
  PRIMARY KEY (`sprintID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sprints`
--

LOCK TABLES `Sprints` WRITE;
/*!40000 ALTER TABLE `Sprints` DISABLE KEYS */;
/*!40000 ALTER TABLE `Sprints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserBelongsToP`
--

DROP TABLE IF EXISTS `UserBelongsToP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserBelongsToP` (
  `projectID` int(2) NOT NULL,
  `userID` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserBelongsToP`
--

LOCK TABLES `UserBelongsToP` WRITE;
/*!40000 ALTER TABLE `UserBelongsToP` DISABLE KEYS */;
INSERT INTO `UserBelongsToP` VALUES (1,1),(1,2),(1,3),(2,1),(2,2),(2,4),(3,1),(3,2),(3,3),(3,4);
/*!40000 ALTER TABLE `UserBelongsToP` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `userID` int(2) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `passwd` varchar(512) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `type` int(2) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'juanam','Juana','4844624d054a4ed71e03f4dbe54bb258d35acc5c20ecc1de742bad129783ae790a45cb9737bd1a662411168a433fca2493ba81a4df594d2316cf9c72b02326d3',1,'juana@gmail.com'),(2,'andreat','Andrea','a71be7c534e52e708e98a9b37cefd82afe0a10070cc509477f452cce635b1b130bc81c07bb3f45528b7fb5a4b1cbd8f0a4f1087e0a3a00f32772a146912a24d9',2,'andrea@gmail.com'),(3,'martaz','Marta','02267d2f757bb49b126634601c02192d5420d3c177f6bfd9e6951b6adf7cd0c41f247076bccb2c6edb0336d222ce446a551219525813911c9d39d2169e58df5c',3,'marta@gmail.com'),(4,'pedrol','Pedro','770862523822208e39bbef3333b2791eb3cd21c1c1a4b8704dc4b8b1f0db16765f56ebfb25d0dc1230809cb60eb35ed3805ab4581842fcc05664b83308db1dca',3,'pedro@gmail.com');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-13 14:26:59
