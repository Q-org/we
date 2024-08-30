) AS b
FROM acc_standard_1 AS a
    INNER JOIN acc_standard_n AS b ON a.missionId = b.missionId
WHERE 1 -- && a.missionId = 'qianxue-11110909544661332'
