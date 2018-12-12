-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: ScrumDB
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

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
-- Table structure for table `Groups`
--

DROP TABLE IF EXISTS `Groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Groups` (
  `groupID` int(2) NOT NULL,
  `nameGroup` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `userID` int(2) NOT NULL,
  KEY `userID` (`userID`),
  CONSTRAINT `Groups_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Groups`
--

LOCK TABLES `Groups` WRITE;
/*!40000 ALTER TABLE `Groups` DISABLE KEYS */;
INSERT INTO `Groups` VALUES (0,'A',1),(0,'B',2),(0,'C',3);
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
  `description` text NOT NULL,
  `projectID` int(2) NOT NULL,
  `hours` time NOT NULL,
  `orderHW` int(3) NOT NULL,
  `sprintID` int(2) NOT NULL,
  PRIMARY KEY (`homeworkID`),
  KEY `projectID` (`projectID`),
  KEY `sprintID` (`sprintID`),
  CONSTRAINT `Homework_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `Projects` (`projectID`),
  CONSTRAINT `Homework_ibfk_2` FOREIGN KEY (`sprintID`) REFERENCES `Sprints` (`sprintID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homework`
--

LOCK TABLES `Homework` WRITE;
/*!40000 ALTER TABLE `Homework` DISABLE KEYS */;
INSERT INTO `Homework` VALUES (1,'Crear estructura HTML',1,'02:00:00',0,1),(2,'Aplicar CSS a la estructura CSS',1,'02:00:00',0,1),(3,'Crear estructura de la base de datos.',2,'06:00:00',0,2),(4,'Crear página de Login para acceder con los usuarios creados en la base de datos.',2,'02:00:00',0,2);
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
  `nameProject` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `scrumMasterName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `productOwnerName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`projectID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Projects`
--

LOCK TABLES `Projects` WRITE;
/*!40000 ALTER TABLE `Projects` DISABLE KEYS */;
INSERT INTO `Projects` VALUES (1,'Quien es Quien','Juego que consiste en adivinar la carta oculta del servidor.','Juana','Andrea'),(2,'Gestor de Proyectos Scrum','Programa que nos ayudará a gestionar un proyecto Scrum','Juana','Andrea'),(3,'sin ','','Juana','Andrea'),(4,'condes','si tengo','Juana','Andrea'),(5,'prueba','','Juana','Andrea'),(6,'pruebac','con','Juana','Andrea'),(7,'domino','','Juana','Andrea');
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
  `groupName` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `projectID` int(2) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`scrumID`),
  KEY `homeworkID` (`homeworkID`),
  KEY `projectID` (`projectID`),
  CONSTRAINT `Scrum_ibfk_1` FOREIGN KEY (`homeworkID`) REFERENCES `Homework` (`homeworkID`),
  CONSTRAINT `Scrum_ibfk_2` FOREIGN KEY (`projectID`) REFERENCES `Projects` (`projectID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Scrum`
--

LOCK TABLES `Scrum` WRITE;
/*!40000 ALTER TABLE `Scrum` DISABLE KEYS */;
INSERT INTO `Scrum` VALUES (1,1,1,'A',1,0),(2,2,1,'A',1,0),(3,3,2,'B',2,0),(4,4,2,'B',2,0);
/*!40000 ALTER TABLE `Scrum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sprints`
--

DROP TABLE IF EXISTS `Sprints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sprints` (
  `sprintID` int(2) NOT NULL,
  `projectID` int(2) NOT NULL,
  `hours` time NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`sprintID`),
  KEY `projectID` (`projectID`),
  CONSTRAINT `Sprints_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `Projects` (`projectID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sprints`
--

LOCK TABLES `Sprints` WRITE;
/*!40000 ALTER TABLE `Sprints` DISABLE KEYS */;
INSERT INTO `Sprints` VALUES (1,1,'04:00:00','2018-12-20','2018-12-23'),(2,2,'08:00:00','2018-12-23','2019-01-23');
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
  `userID` int(2) NOT NULL,
  KEY `projectID` (`projectID`),
  KEY `userID` (`userID`),
  CONSTRAINT `UserBelongsToP_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `Projects` (`projectID`),
  CONSTRAINT `UserBelongsToP_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserBelongsToP`
--

LOCK TABLES `UserBelongsToP` WRITE;
/*!40000 ALTER TABLE `UserBelongsToP` DISABLE KEYS */;
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
  `nickname` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `passwd` varchar(512) DEFAULT NULL,
  `type` int(2) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'juanam','Juana','4844624d054a4ed71e03f4dbe54bb258d35acc5c20ecc1de742bad129783ae790a45cb9737bd1a662411168a433fca2493ba81a4df594d2316cf9c72b02326d3',1,'juanascrummaster@gmail.com'),(2,'andreat','Andrea','a71be7c534e52e708e98a9b37cefd82afe0a10070cc509477f452cce635b1b130bc81c07bb3f45528b7fb5a4b1cbd8f0a4f1087e0a3a00f32772a146912a24d9',2,'andreatproduct@gmail.com'),(3,'martaz','Marta','02267d2f757bb49b126634601c02192d5420d3c177f6bfd9e6951b6adf7cd0c41f247076bccb2c6edb0336d222ce446a551219525813911c9d39d2169e58df5c',3,'martadeveloper@gmail.com');
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

-- Dump completed on 2018-12-12 17:24:47
