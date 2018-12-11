-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: demo_api
-- ------------------------------------------------------
-- Server version	8.0.12

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
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `taste_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'pizza',2),(2,'brownies',1),(8,'sushi',2),(9,'cheeseburgers',2),(10,'chicken nuggets',2),(11,'ice cream',1),(12,'cake',1),(19,'apple pie',1);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `foods_view`
--

DROP TABLE IF EXISTS `foods_view`;
/*!50001 DROP VIEW IF EXISTS `foods_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `foods_view` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `taste`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `health_check`
--

DROP TABLE IF EXISTS `health_check`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `health_check` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health_check`
--

LOCK TABLES `health_check` WRITE;
/*!40000 ALTER TABLE `health_check` DISABLE KEYS */;
INSERT INTO `health_check` VALUES (1,'MySQL Connection Working');
/*!40000 ALTER TABLE `health_check` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taste`
--

DROP TABLE IF EXISTS `taste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taste` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `taste` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taste`
--

LOCK TABLES `taste` WRITE;
/*!40000 ALTER TABLE `taste` DISABLE KEYS */;
INSERT INTO `taste` VALUES (1,'sweet'),(2,'savory');
/*!40000 ALTER TABLE `taste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test_user_1','tu1@test.com','c592df4a86933b92addc9842402ddf198c638ea9be58916ee6e3734e1e3152f8','test','user1'),(2,'test_user_2','tu2@test.com','93915a0a4bf8f634cb1856494dd4304472ad46b9827f541f76b6761c49cc55b0','test','user2'),(3,'test_user_3','tu3@test.com','072aa9e9fb9d5162e465d3321530463caecd59b156676fe3071997cdc1017816','test user','user3'),(4,'test_user_4','tu4@test.com','0c2e7ac34c9a4f2c9058223947a466a6a21159e2e9d9e2c6597e8b7d334ae907','test','user4');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_favorite_food`
--

DROP TABLE IF EXISTS `users_favorite_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_favorite_food` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_favorite_food`
--

LOCK TABLES `users_favorite_food` WRITE;
/*!40000 ALTER TABLE `users_favorite_food` DISABLE KEYS */;
INSERT INTO `users_favorite_food` VALUES (1,2,1),(2,3,19),(3,3,2),(4,3,9),(5,3,11),(6,1,11),(7,4,10),(8,4,8),(9,3,12),(10,3,8),(11,2,8);
/*!40000 ALTER TABLE `users_favorite_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `users_view`
--

DROP TABLE IF EXISTS `users_view`;
/*!50001 DROP VIEW IF EXISTS `users_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `users_view` AS SELECT 
 1 AS `id`,
 1 AS `username`,
 1 AS `email`,
 1 AS `first_name`,
 1 AS `last_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `users_with_food_view`
--

DROP TABLE IF EXISTS `users_with_food_view`;
/*!50001 DROP VIEW IF EXISTS `users_with_food_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `users_with_food_view` AS SELECT 
 1 AS `userId`,
 1 AS `username`,
 1 AS `email`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `foods`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'demo_api'
--

--
-- Dumping routines for database 'demo_api'
--
/*!50003 DROP FUNCTION IF EXISTS `formatCSL` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` FUNCTION `formatCSL`(
	_text TEXT
) RETURNS text CHARSET utf8
    NO SQL
BEGIN
	IF _text IS NULL THEN
		RETURN NULL;
	END IF;
	 
	SET _text = TRIM(_text);
	 
	WHILE INSTR(_text, ' ,') DO
		SET _text = REPLACE(_text, ' ,', ',');
	END WHILE;
	 
	WHILE INSTR(_text, ', ') DO
		SET _text = REPLACE(_text, ', ', ',');
	END WHILE;
	 
	RETURN _text;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_food_to_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `add_food_to_user`(
	IN userId INT,
	IN foodId INT,
    IN foodName VARCHAR(100)
)
BEGIN
	DECLARE userExists INT DEFAULT 0;
    DECLARE foodExists INT DEFAULT 0;
    DECLARE prefExists INT DEFAULT 0;

    SELECT COUNT(id) INTO userExists
		FROM demo_api.users 
        WHERE id = userID;
        
	SELECT COUNT(id) INTO foodExists
		FROM demo_api.food
        WHERE id = foodId AND name = foodName;
        
	SELECT COUNT(id) INTO prefExists
		FROM demo_api.users_favorite_food
        WHERE users_id = userId AND food_id = foodId;
	
    IF userExists > 0 AND foodExists > 0 AND prefExists = 0 THEN
		INSERT INTO demo_api.users_favorite_food (users_id, food_id)
			VALUES (userId, foodId);

		SELECT true AS success, 'Added food to user preferences' AS message;
	ELSEIF userExists > 0 AND foodExists > 0 AND prefExists > 0 THEN
		SELECT false AS success, 'Food preference already exists' AS message;
	ELSEIF userExists = 0 AND foodExists = 0 THEN
		SELECT false AS success, 'Neither user nor food exist' AS message;
	ELSEIF userExists = 0 AND foodExists > 0 THEN
		SELECT false AS success, 'User does not exist' AS message;
	ELSE
		SELECT false AS success, 'Food does not exist' AS message;
	END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_new_food` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `create_new_food`(
	IN name VARCHAR(100),
    IN taste VARCHAR(45)
)
BEGIN
	DECLARE foodExists INT DEFAULT 0;
    DECLARE newFoodId INT DEFAULT 0;
    DECLARE tasteId INT DEFAULT 0;
    DECLARE message VARCHAR(45) DEFAULT '';
    
    SELECT COUNT(f.id) INTO foodExists
	FROM demo_api.food f
	WHERE f.name = name;
    
    SELECT t.id INTO tasteId
    FROM demo_api.taste t
    WHERE t.taste = taste;

    IF foodExists = 0 AND tasteId != 0 THEN
		INSERT INTO demo_api.food (name, taste_id)
			VALUES(name, tasteID);
		
        SELECT LAST_INSERT_ID() INTO newFoodId;
		SET message = CONCAT(message, 'successful');
	ELSE
		IF foodExists > 0 THEN
			SET message = CONCAT(message, 'food already exists');
		END IF;
        
        IF tasteId = 0 AND foodExists > 0 THEN
			SET message = CONCAT(message, ' and ');
        END IF;
        
        IF tasteId = 0 THEN
			SET message = CONCAT(message, 'taste is not an acceptable value');
		END IF;
	END IF;

    SELECT newFoodId id, message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_new_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `create_new_user`(
	IN username VARCHAR(45), 
    IN email VARCHAR(45), 
    IN password VARCHAR(100), 
    IN firstname VARCHAR(45), 
    IN lastname VARCHAR(45)
)
BEGIN
	DECLARE userExists INT DEFAULT 0;
	DECLARE newUserId INT DEFAULT 0;

    SELECT COUNT(u.id) INTO userExists
    FROM demo_api.users u
    WHERE u.email = email AND u.username = username;
    
    IF userExists = 0 THEN
		INSERT INTO demo_api.users (username, email, password, first_name, last_name)
			VALUES (username, email, password, firstname, lastname);
        
		SELECT LAST_INSERT_ID() INTO newUserId;
	END IF;
    
    select newUserId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_food` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `delete_food`(
	IN foodId INT,
    IN foodName VARCHAR(200)
)
BEGIN
	DECLARE foodCount INT DEFAULT 0;
    DECLARE success BOOLEAN DEFAULT FALSE;
    DECLARE message VARCHAR(100);
    
    SELECT COUNT(f.id) INTO foodCount FROM demo_api.food f
		WHERE f.id = foodId AND f.name = foodName;
        
	IF foodCount > 0 THEN
		SET success = TRUE;
		SET message = 'food deleted';
        
        DELETE FROM demo_api.food
			WHERE food.id = foodId AND food.name = foodName;
        
        DELETE FROM demo_api.users_favorite_food
			WHERE users_favorite_food.food_id = foodId;
	ELSE
		SET message = 'food not found';
	END IF;

	SELECT success, message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `delete_user`(
    IN username VARCHAR(45),
    IN password VARCHAR(200)
)
BEGIN
	DECLARE userId INT DEFAULT 0;
    DECLARE success BOOLEAN DEFAULT FALSE;
    DECLARE message VARCHAR(100);
    
    SELECT u.id INTO userId FROM demo_api.users u
		WHERE u.username = userName AND u.password = password;
        
	IF userId > 0 THEN
		SET success = TRUE;
		SET message = 'user deleted';
        
        DELETE FROM demo_api.users
			WHERE users.username = username AND users.password = password;
        
        DELETE FROM demo_api.users_favorite_food
			WHERE users_favorite_food.users_id = userId;
	ELSE
		SET message = 'user not found';
    END IF;

	SELECT success, message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_food` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `update_food`(
	IN food VARCHAR(200),
    IN taste VARCHAR(45)
)
BEGIN
	DECLARE foodId INT DEFAULT 0;
    DECLARE tasteId INT DEFAULT 0;
    DECLARE success BOOLEAN DEFAULT FALSE;
    DECLARE message VARCHAR(100) DEFAULT '';
    
    SELECT f.id INTO foodId
	FROM demo_api.food f
	WHERE f.name = food;

    SELECT t.id INTO tasteId
    FROM demo_api.taste t
    WHERE t.taste = taste;

    IF foodId != 0 AND tasteId != 0 THEN
		UPDATE demo_api.food f
			SET f.name = food, f.taste_id = tasteId
			WHERE f.id = foodId;

		SET success = TRUE;
		SET message = CONCAT(message, 'successful');
	ELSE
		IF foodId = 0 THEN
			SET message = CONCAT(message, 'food does not exist');
		END IF;
        
        IF tasteId = 0 AND foodId = 0 THEN
			SET message = CONCAT(message, ' and ');
        END IF;
        
        IF tasteId = 0 THEN
			SET message = CONCAT(message, 'taste is not an acceptable value');
		END IF;
	END IF;

    SELECT success, message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`scott`@`localhost` PROCEDURE `update_user`(
	IN username VARCHAR(45), 
    IN email VARCHAR(45), 
    IN password VARCHAR(100), 
    IN firstname VARCHAR(45), 
    IN lastname VARCHAR(45)
)
BEGIN
	DECLARE valid INT DEFAULT 0;
    
    SELECT COUNT(id) INTO valid
    FROM demo_api.users u
    WHERE u.username = username AND u.password = password;
    
    IF valid > 0 THEN
		UPDATE demo_api.users u
		SET u.username = username,
			u.email = email,
            u.password = password,
            u.first_name = firstname,
            u.last_name = lastname
		WHERE u.username = username;

		SELECT TRUE AS status, "User Updated Successfully" AS message;
	ELSE 
		SELECT FALSE AS status, "Not Authorized" AS message;
	END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `foods_view`
--

/*!50001 DROP VIEW IF EXISTS `foods_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`scott`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `foods_view` AS select `f`.`id` AS `id`,`f`.`name` AS `name`,`t`.`taste` AS `taste` from (`food` `f` join `taste` `t` on((`t`.`id` = `f`.`taste_id`))) order by `f`.`id` asc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `users_view`
--

/*!50001 DROP VIEW IF EXISTS `users_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`scott`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `users_view` AS select `users`.`id` AS `id`,`users`.`username` AS `username`,`users`.`email` AS `email`,`users`.`first_name` AS `first_name`,`users`.`last_name` AS `last_name` from `users` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `users_with_food_view`
--

/*!50001 DROP VIEW IF EXISTS `users_with_food_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`scott`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `users_with_food_view` AS select `u`.`id` AS `userId`,`u`.`username` AS `username`,`u`.`email` AS `email`,`u`.`first_name` AS `first_name`,`u`.`last_name` AS `last_name`,group_concat(`f`.`name` separator ',') AS `foods` from ((`users` `u` left join `users_favorite_food` `uff` on((`uff`.`users_id` = `u`.`id`))) left join `food` `f` on((`uff`.`food_id` = `f`.`id`))) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-10 21:42:17
