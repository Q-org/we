DECLARE CONTINUE HANDLER FOR SQLSTATE '23000',
    SQLSTATE '42000',
    SQLSTATE '42S22',
    SQLSTATE 'HY000' -- ,SQLSTATE	'22007'
    bl :BEGIN GET DIAGNOSTICS CONDITION 1 @`sqlstate` = RETURNED_SQLSTATE,
    @errno = MYSQL_ERRNO,
    @text = MESSAGE_TEXT;
SET @`sqlstate` = JSON_OBJECT(
        'sqlstate',
        @`sqlstate`,
        'errno',
        @errno,
        'text',
        @text
    );
SET @`errsql` = CONCAT_WS(';', @sql_body, @audit_stmt);
SET @funcid = CONCAT_WS(' ', ' SignIn'),
    @pp = CONCAT_WS(
        ',',
        QUOTE(IFNULL(`userInfo`, NULL))
    );
CALL `Audit_3`(
    COLUMN_create(
        'm',
        @funcid,
        'pp',
        @pp,
        'SQL',
        @`errsql`,
        'err',
        @`sqlstate`,
        'l',
        1
    )
);
END;
SET @`errsql` = CONCAT_WS(';', @sql_body, @audit_stmt);
SET @funcid = CONCAT_WS(' ', ' SignIn'),
    @pp = CONCAT_WS(
        ',',
        QUOTE(IFNULL(`userInfo`, NULL))
    );
INSERT INTO plogs (Function_Name, parameter)
VALUES (@funcid, @pp);
SET result =(
        SELECT JSON_OBJECT(
                'userId',
                u.userId,
                'password',
                MD5(concat_ws('', `password`, u.userId))
            )
        FROM prisma.`user` AS u
        WHERE u.userId = userId
    );
--   SELECT userId,`password`,null,'prisma';
-- 	LEAVE login_label;
IF not FOUND_ROWS() THEN
SET @login_stmt = null;
CALL funcSysLongin(
    10,
    userId,
    MD5(concat_ws('', `password`, userId)),
    null,
    'prisma'
);
CASE
    WHEN @login_stmt REGEXP '^\\s*SELECT\\s+["\']无此用户' THEN
    set err = '无此用户';
SIGNAL SQLSTATE '45000'
SET MYSQL_ERRNO = 1234,
    MESSAGE_TEXT = '无此用户';
ELSE -- 迁移
EXECUTE immediate moveSql;
END CASE
;
END IF;
SELECT @login_stmt AS result;