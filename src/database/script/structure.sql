CREATE DATABASE  IF NOT EXISTS `musimundos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `musimundos`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: musimundos
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

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
-- Table structure for table `albumes`
--

DROP TABLE IF EXISTS `albumes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `albumes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `id_artista` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_artista_idx` (`id_artista`),
  CONSTRAINT `id_artista` FOREIGN KEY (`id_artista`) REFERENCES `artistas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=348 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `artistas`
--

DROP TABLE IF EXISTS `artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artistas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=276 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `canciones`
--

DROP TABLE IF EXISTS `canciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `canciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `id_album` int(11) DEFAULT NULL,
  `id_tipo_de_medio` int(11) DEFAULT NULL,
  `id_genero` int(11) DEFAULT NULL,
  `compositor` varchar(255) DEFAULT NULL,
  `milisegundos` int(11) DEFAULT NULL,
  `bytes` bigint(20) DEFAULT NULL,
  `precio_unitario` decimal(3,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_album_idx` (`id_album`),
  KEY `id_tipo_de_medio_idx` (`id_tipo_de_medio`),
  KEY `id_genero_idx` (`id_genero`),
  CONSTRAINT `id_album` FOREIGN KEY (`id_album`) REFERENCES `albumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_genero` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_tipo_de_medio` FOREIGN KEY (`id_tipo_de_medio`) REFERENCES `tipos_de_medio` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3504 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `canciones_de_playlists`
--

DROP TABLE IF EXISTS `canciones_de_playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `canciones_de_playlists` (
  `id_playlist` tinyint(4) DEFAULT NULL,
  `id_cancion` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` tinyint(4) NOT NULL,
  `primer_nombre` varchar(9) DEFAULT NULL,
  `apellido` varchar(12) DEFAULT NULL,
  `empresa` varchar(48) DEFAULT NULL,
  `direccion` varchar(40) DEFAULT NULL,
  `ciudad` varchar(19) DEFAULT NULL,
  `estado_o_provincia` varchar(6) DEFAULT NULL,
  `pais` varchar(14) DEFAULT NULL,
  `codigo_postal` varchar(10) DEFAULT NULL,
  `telefono` varchar(19) DEFAULT NULL,
  `fax` varchar(18) DEFAULT NULL,
  `email` varchar(29) DEFAULT NULL,
  `id_representante` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `id` tinyint(4) NOT NULL,
  `apellido` varchar(8) DEFAULT NULL,
  `nombre` varchar(8) DEFAULT NULL,
  `titulo` varchar(19) DEFAULT NULL,
  `reporta_a` varchar(1) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `fecha_de_contratacion` date DEFAULT NULL,
  `direccion` varchar(27) DEFAULT NULL,
  `ciudad` varchar(10) DEFAULT NULL,
  `estado_o_provincia` varchar(2) DEFAULT NULL,
  `pais` varchar(6) DEFAULT NULL,
  `codigo_postal` varchar(7) DEFAULT NULL,
  `telefono` varchar(17) DEFAULT NULL,
  `fax` varchar(17) DEFAULT NULL,
  `email` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facturas` (
  `id` smallint(6) NOT NULL,
  `id_cliente` tinyint(4) DEFAULT NULL,
  `fecha_factura` date DEFAULT NULL,
  `direccion_de_facturacion` varchar(40) DEFAULT NULL,
  `ciudad_de_facturacion` varchar(19) DEFAULT NULL,
  `estado_o_provincia_de_facturacion` varchar(6) DEFAULT NULL,
  `pais_de_facturacion` varchar(14) DEFAULT NULL,
  `codigo_postal_de_facturacion` varchar(10) DEFAULT NULL,
  `total` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `items_de_facturas`
--

DROP TABLE IF EXISTS `items_de_facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items_de_facturas` (
  `id` smallint(6) NOT NULL,
  `id_factura` smallint(6) DEFAULT NULL,
  `id_cancion` smallint(6) DEFAULT NULL,
  `precio_unitario` decimal(3,2) DEFAULT NULL,
  `cantidad` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `playlists` (
  `id` tinyint(4) DEFAULT NULL,
  `nombre` varchar(26) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipos_de_medio`
--

DROP TABLE IF EXISTS `tipos_de_medio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipos_de_medio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-19 16:46:16
