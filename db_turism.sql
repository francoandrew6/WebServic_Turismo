/*
SQLyog Ultimate v9.02 
MySQL - 5.6.21 : Database - db_turism
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_turism` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_turism`;

/*Table structure for table `archivo` */

DROP TABLE IF EXISTS `archivo`;

CREATE TABLE `archivo` (
  `id_Archivo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `content_Type` varchar(128) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `contenido` binary(1) DEFAULT NULL,
  `id_Usuario` int(11) DEFAULT NULL,
  `id_Lugar_Turistico` int(11) DEFAULT NULL,
  `id_Hotel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Archivo`),
  KEY `FK_archivohotel` (`id_Hotel`),
  KEY `FK_archivoturist` (`id_Lugar_Turistico`),
  KEY `FK_archivousua` (`id_Usuario`),
  CONSTRAINT `FK_archivohotel` FOREIGN KEY (`id_Hotel`) REFERENCES `hotel` (`id_Hotel`),
  CONSTRAINT `FK_archivoturist` FOREIGN KEY (`id_Lugar_Turistico`) REFERENCES `lugar_turistico` (`id_Lugar_Turistico`),
  CONSTRAINT `FK_archivousua` FOREIGN KEY (`id_Usuario`) REFERENCES `usuario` (`id_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `archivo` */

/*Table structure for table `bitacora` */

DROP TABLE IF EXISTS `bitacora`;

CREATE TABLE `bitacora` (
  `id_Bitacora` int(11) NOT NULL AUTO_INCREMENT,
  `evento` varchar(128) DEFAULT NULL,
  `usuario` varchar(128) DEFAULT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  PRIMARY KEY (`id_Bitacora`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `bitacora` */

/*Table structure for table `comentario` */

DROP TABLE IF EXISTS `comentario`;

CREATE TABLE `comentario` (
  `id_Comentario` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(128) DEFAULT NULL,
  `punteo` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `id_Usuario` int(11) DEFAULT NULL,
  `id_Lugar_Turistico` int(11) DEFAULT NULL,
  `id_Hotel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Comentario`),
  KEY `FK_comentariousua` (`id_Usuario`),
  KEY `FK_comentarioturist` (`id_Lugar_Turistico`),
  KEY `FK_comentariohotel` (`id_Hotel`),
  CONSTRAINT `FK_comentariohotel` FOREIGN KEY (`id_Hotel`) REFERENCES `hotel` (`id_Hotel`),
  CONSTRAINT `FK_comentarioturist` FOREIGN KEY (`id_Lugar_Turistico`) REFERENCES `lugar_turistico` (`id_Lugar_Turistico`),
  CONSTRAINT `FK_comentariousua` FOREIGN KEY (`id_Usuario`) REFERENCES `usuario` (`id_Usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `comentario` */

insert  into `comentario`(`id_Comentario`,`descripcion`,`punteo`,`fecha`,`id_Usuario`,`id_Lugar_Turistico`,`id_Hotel`) values (1,'Un buen lugar para ir lo recomiendo',5,'2013-04-05 07:35:08',1,1,1);

/*Table structure for table `departamento` */

DROP TABLE IF EXISTS `departamento`;

CREATE TABLE `departamento` (
  `id_Departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `descripcion` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id_Departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `departamento` */

insert  into `departamento`(`id_Departamento`,`nombre`,`descripcion`) values (1,'Guatemala','departamento de Guatemala');

/*Table structure for table `hotel` */

DROP TABLE IF EXISTS `hotel`;

CREATE TABLE `hotel` (
  `id_Hotel` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `descripcion` varchar(128) DEFAULT NULL,
  `direccion` varchar(128) DEFAULT NULL,
  `id_Departamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Hotel`),
  KEY `FK_hotel` (`id_Departamento`),
  CONSTRAINT `FK_hotel` FOREIGN KEY (`id_Departamento`) REFERENCES `departamento` (`id_Departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `hotel` */

insert  into `hotel`(`id_Hotel`,`nombre`,`descripcion`,`direccion`,`id_Departamento`) values (1,'Luna','un hotel','Guatemala',1);

/*Table structure for table `lugar_turistico` */

DROP TABLE IF EXISTS `lugar_turistico`;

CREATE TABLE `lugar_turistico` (
  `id_Lugar_Turistico` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `descripcion` varchar(128) DEFAULT NULL,
  `direccion` varchar(128) DEFAULT NULL,
  `id_Departamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Lugar_Turistico`),
  KEY `FK_lugar_turistico` (`id_Departamento`),
  CONSTRAINT `FK_lugar_turistico` FOREIGN KEY (`id_Departamento`) REFERENCES `departamento` (`id_Departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `lugar_turistico` */

insert  into `lugar_turistico`(`id_Lugar_Turistico`,`nombre`,`descripcion`,`direccion`,`id_Departamento`) values (1,'Kaminal Juyu','un centro turistico',NULL,1);

/*Table structure for table `mensaje` */

DROP TABLE IF EXISTS `mensaje`;

CREATE TABLE `mensaje` (
  `id_Mensaje` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` varchar(128) DEFAULT NULL,
  `asunto` varchar(128) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `id_Usuario` int(11) DEFAULT NULL,
  `id_Municipio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Mensaje`),
  KEY `FK_mensaje` (`id_Municipio`),
  KEY `FK_mensajeusua` (`id_Usuario`),
  CONSTRAINT `FK_mensaje` FOREIGN KEY (`id_Municipio`) REFERENCES `municipio` (`id_Municipio`),
  CONSTRAINT `FK_mensajeusua` FOREIGN KEY (`id_Usuario`) REFERENCES `usuario` (`id_Usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `mensaje` */

insert  into `mensaje`(`id_Mensaje`,`mensaje`,`asunto`,`fecha`,`id_Usuario`,`id_Municipio`) values (1,'Ayuda','Ayuda','2013-04-05 07:35:08',1,1);

/*Table structure for table `municipio` */

DROP TABLE IF EXISTS `municipio`;

CREATE TABLE `municipio` (
  `id_Municipio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `direccion` varchar(128) DEFAULT NULL,
  `id_Departamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Municipio`),
  KEY `FK_municipio` (`id_Departamento`),
  CONSTRAINT `FK_municipio` FOREIGN KEY (`id_Departamento`) REFERENCES `departamento` (`id_Departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `municipio` */

insert  into `municipio`(`id_Municipio`,`nombre`,`direccion`,`id_Departamento`) values (1,'Guatemela','Guatemala',1);

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `id_Rol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `descripcion` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id_Rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `rol` */

insert  into `rol`(`id_Rol`,`nombre`,`descripcion`) values (1,'Administrador','Puede administrar cualquier cosa.'),(2,'Usuario','Puede usar la aplicacion.');

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `correo` varchar(128) DEFAULT NULL,
  `nick` varchar(128) DEFAULT NULL,
  `contraseña` varchar(128) DEFAULT NULL,
  `direccion` varchar(128) DEFAULT NULL,
  `telefono` int(128) DEFAULT NULL,
  `id_Rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Usuario`),
  KEY `FK_usuario` (`id_Rol`),
  CONSTRAINT `FK_usuario` FOREIGN KEY (`id_Rol`) REFERENCES `rol` (`id_Rol`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `usuario` */

insert  into `usuario`(`id_Usuario`,`nombre`,`correo`,`nick`,`contraseña`,`direccion`,`telefono`,`id_Rol`) values (1,'Emmanuel Franco','emma@gmail.com','emma','123','Guatemala',54554163,1);

/* Procedure structure for procedure `sp_autenticarUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_autenticarUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_autenticarUsuario`(IN _correo varchar(128),in _contraseña varchar(128))
BEGIN
	select nombre,correo,nick from usuario where usuario.`correo`=_correo and usuario.`contraseña`=md5(_contraseña);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_listaUsuarios` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_listaUsuarios` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listacontactos`(in _id_Rol int)
BEGIN
	SELECT usuario.id_Usuario,usuario.nombre,usuario.correo,usuario.nick,usuario.direccion,usuario.nombre,usuario.telefono,rol.nombre AS  rol,rol.id_Rol FROM usuario 
	LEFT JOIN rol ON rol.id_Rol=usuario.id_Rol 
	where rol.id_Rol=_id_Rol;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_registroUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_registroUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_registroUsuario`(IN _nombre varchar(128),IN _correo varchar(128),in _nick varchar(128),_contraseña varchar(128),in _direccion varchar(128),in _telefono int(11),in _rol int)
BEGIN
	insert into usuario values(null,_nombre,_correo,_nick,md5(_contraseña),_direccion,_telefono,2);
    END */$$
DELIMITER ;


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
