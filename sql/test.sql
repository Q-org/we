/*
 MARIADB Backup
 Source Server Version: 10.6.4
 Source Database: qianxue_jc
 Date: 2024/10/29 19:16:22
 */
SET FOREIGN_KEY_CHECKS = 0;
-- ----------------------------
--  Table structure for `plogs`
-- ----------------------------
DROP TABLE IF EXISTS `plogs`;
CREATE TABLE `plogs` (
    `stamptime` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
    `createtime` datetime DEFAULT sysdate(6),
    `userId` varchar(100) DEFAULT NULL,
    `Function_Name` varchar(200) DEFAULT NULL,
    `number` int(6) DEFAULT NULL,
    `summary` mediumtext DEFAULT NULL,
    `parameter` mediumtext DEFAULT NULL,
    `SQL` mediumtext DEFAULT NULL,
    `parameters` longblob DEFAULT NULL,
    `expid` varchar(100) DEFAULT NULL,
    `missionid` varchar(100) DEFAULT NULL,
    `a_t` text DEFAULT NULL,
    `statu` longtext DEFAULT NULL,
    `table_name` text DEFAULT NULL,
    `key_names` blob DEFAULT NULL,
    `key_values` blob DEFAULT NULL,
    `field_names` blob DEFAULT NULL,
    `field_values` blob DEFAULT NULL,
    `rowids` blob DEFAULT NULL,
    `dblob` longblob DEFAULT NULL,
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `新键` varchar(200) DEFAULT md5(
        concat_ws('', `Function_Name`, `parameter`, `summary`)
    ),
    PRIMARY KEY (`id`),
    UNIQUE KEY `createtime_index` (`createtime`, `id`, `expid`) USING BTREE,
    UNIQUE KEY `userId_index` (`createtime`, `userId`, `id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1481812 DEFAULT CHARSET = utf8mb3 ROW_FORMAT = DYNAMIC;
-- ----------------------------
--  Records 
-- ----------------------------
-- ----------------------------
--  Trigger definition for `plogs`
-- ----------------------------
DELIMITER;
;
CREATE TRIGGER `insert_log` BEFORE
INSERT ON `plogs` FOR EACH ROW a_c_d_f :BEGIN IF @DISABLE_TRIGGERS IS NOT NULL THEN LEAVE a_c_d_f;
END IF;
SET new.createtime = now();
IF IFnull(new.parameter, '') = '' then
SET new.parameter = CONCAT_ws(
        ',',
        QUOTE(new.statu),
        QUOTE(new.key_names),
        QUOTE(new.key_values),
        QUOTE(new.field_names),
        QUOTE(new.field_values),
        quote(new.rowids)
    );
END IF;
END;
;
DELIMITER;
DELIMITER;
;
CREATE TRIGGER `update_b` BEFORE
UPDATE ON `plogs` FOR EACH ROW a_c_d_f :BEGIN IF @DISABLE_TRIGGERS IS NOT NULL
    OR @@FOREIGN_KEY_CHECKS = 0 THEN LEAVE a_c_d_f;
END IF;
END;
;
DELIMITER;