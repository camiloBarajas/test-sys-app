-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-09-2020 a las 21:42:07
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `NUME_DOC` int(18) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`NUME_DOC`, `NOMBRE`, `DIRECCION`) VALUES
(1212, 'hshahsa', 'sasas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_factura`
--

CREATE TABLE `estados_factura` (
  `CODI_ESTADO` int(2) NOT NULL,
  `DESCRIPCION` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados_factura`
--

INSERT INTO `estados_factura` (`CODI_ESTADO`, `DESCRIPCION`) VALUES
(12, 'sasa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `ID_FACTURA` int(18) NOT NULL,
  `NUME_DOC` int(18) NOT NULL,
  `CODI_ESTADO` int(2) NOT NULL,
  `VALOR_FAC` int(18) NOT NULL,
  `FECHA_FAC` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`ID_FACTURA`, `NUME_DOC`, `CODI_ESTADO`, `VALOR_FAC`, `FECHA_FAC`) VALUES
(1, 1212, 12, 100, '2020-09-10 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`NUME_DOC`);

--
-- Indices de la tabla `estados_factura`
--
ALTER TABLE `estados_factura`
  ADD PRIMARY KEY (`CODI_ESTADO`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`ID_FACTURA`),
  ADD KEY `NUME_DOC` (`NUME_DOC`),
  ADD KEY `CODI_ESTADO` (`CODI_ESTADO`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`CODI_ESTADO`) REFERENCES `estados_factura` (`CODI_ESTADO`) ON UPDATE CASCADE,
  ADD CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`NUME_DOC`) REFERENCES `clientes` (`NUME_DOC`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
