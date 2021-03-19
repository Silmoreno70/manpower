-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.14-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para manpower
CREATE DATABASE IF NOT EXISTS `manpower` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `manpower`;

-- Volcando estructura para tabla manpower.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `employee_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `job` varchar(50) DEFAULT NULL,
  `age` varchar(2) NOT NULL,
  `imss` varchar(11) NOT NULL,
  `clabe` varchar(18) NOT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `curp` (`curp`),
  UNIQUE KEY `imss` (`imss`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla manpower.employee: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`employee_id`, `name`, `last_name`, `curp`, `job`, `age`, `imss`, `clabe`) VALUES
	(1, 'Jose', 'Lopez Lopez', 'LOLJ950312HGTRLT04', 'Cajero', '25', 'MODS1234567', '123456789009876543'),
	(4, 'Arturo', 'Gonzalez', 'ARGO871208MHGTRR09', 'Cajero', '23', 'MNJU1232342', '123234543456534789');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- Volcando estructura para tabla manpower.user
CREATE TABLE IF NOT EXISTS `user` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `password` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla manpower.user: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`name`, `email`, `user_id`, `password`, `last_name`) VALUES
	('Julio', 'julio@gmail.com', 1, '123456', 'Perez');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
