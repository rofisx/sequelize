-- Adminer 4.8.1 MySQL 5.5.5-10.3.32-MariaDB-0ubuntu0.20.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `rofi_edu` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `rofi_edu`;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `image_url` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`id`, `users_id`, `name`, `price`, `stock`, `status`, `image_url`, `createdAt`, `updatedAt`) VALUES
(4,	2,	'Laptop Axioo',	9000000,	7,	0,	NULL,	'2021-12-29 15:03:46',	'2021-12-29 15:03:46'),
(6,	2,	'Laptop MSI',	19000000,	7,	0,	NULL,	'2021-12-29 16:02:48',	'2021-12-29 16:02:48'),
(7,	2,	'Laptop Asus',	17000000,	10,	0,	NULL,	'2021-12-29 16:03:08',	'2021-12-29 16:03:08'),
(8,	2,	'Laptop Lenovo',	7000000,	10,	0,	NULL,	'2021-12-29 16:03:21',	'2021-12-29 16:04:29'),
(9,	2,	'Laptop Logitech',	7000000,	10,	0,	NULL,	'2021-12-29 16:03:37',	'2021-12-29 16:03:37');

-- 2021-12-29 16:31:09
