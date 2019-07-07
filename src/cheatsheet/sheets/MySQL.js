// Sheet
exports.sheet = () => {

	return [
		{
			title: "Group",
			items: [
				{
					title: "GROUP BY Functions",
					values: [
						"AVG()",
						"BIT_AND()",
						"BIT_OR()",
						"BIT_XOR()",
						"COUNT(DISTINCT)",
						"COUNT()",
						"GROUP_CONCAT()",
						"MAX()",
						"MIN()",
						"STD()",
						"STDDEV_POP()",
						"STDDEV_SAMP()",
						"STDDEV()",
						"SUM()",
						"VAR_POP()",
						"VAR_SAMP()",
						"VARIANCE()"
					]
				}
			]
		},
		{
			title: "Information",
			items: [
				{
					title: "Information Functions",
					values: [
						"BENCHMARK()",
						"CHARSET()",
						"COERCIBILITY()",
						"COLLATION()",
						"CONNECTION_ID()",
						"CURRENT_USER(), CURRENT_USER",
						"DATABASE()",
						"FOUND_ROWS()",
						"LAST_INSERT_ID()",
						"ROW_COUNT()",
						"SCHEMA()",
						"SESSION_USER()",
						"SYSTEM_USER()",
						"USER()",
						"VERSION()"
					]
				}
			]
		},
		{
			title: "Data Types",
			items: [
				{
					title: "Types",
					values: [
						"CHAR - String (0 - 255)",
						"VARCHAR - String (0 - 255)",
						"TINYTEXT - String (0 - 255)",
						"TEXT - String (0 - 65,535)",
						"BLOB - String (0 - 65,535)",
						"MEDIUMTEXT - String (0 - 16,777,215)",
						"MEDIUMBLOB - String (0 - 16,777,215)",
						"LONGTEXT - String (0 - 4,294,967,295)",
						"LONGBLOB - String (0 - 4,294,967,295)",
						"TINYINT x - Integer (-128 to 127)",
						"SMALLINT x - Integer (-32,768 to 32,767)",
						"MEDIUMINT x - Integer (-8,388,608 to 8,388,607)",
						"INT x - Integer (-2,147,483,648 to 2,147,483,647)",
						"BIGINT x - Integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)",
						"FLOAT - Decimal (precise to 23 digits)",
						"DOUBLE - Decimal (24 to 53 digits)",
						'DECIMAL - "DOUBLE" stored as string',
						"DATE - YYYY-MM-DD",
						"DATETIME - YYYY-MM-DD HH:MM:SS",
						"TIMESTAMP - YYYYMM-DDH-HMMSS",
						"TIME - HH:MM:SS",
						"ENUM - One of preset options",
						"SET - Selection of preset options"
					]
				}
			]
		},
		{
			title: "Operators",
			items: [
				{
					title: "Assignment",
					values: [
						"=",
						":="
					]
				},
				{
					title: "Logical",
					values: [
						"AND, &&",
						"NOT, !",
						"||, OR",
						"XOR"
					]
				},
				{
					title: "Comparison",
					values: [
						"BETWEEN ... AND ...",
						"BINARY",
						"&",
						"~",
						"|",
						"^",
						"CASE",
						"DIV",
						"/",
						"<=>",
						"=",
						">=",
						">",
						"IS NOT NULL",
						"IS NOT",
						"IS NULL",
						"IS",
						"<<",
						"<=",
						"<",
						"LIKE",
						"-",
						"% or MOD",
						"NOT BETWEEN ... AND ...",
						"!=, <>",
						"NOT LIKE",
						"NOT REGEXP",
						"+",
						"REGEXP",
						">>",
						"RLIKE",
						"SOUNDS LIKE",
						"*",
						"-"
					]
				}
			]
		},
		{
			title: "Misc",
			items: [
				{
					title: "Misc Functions",
					values: [
						"DEFAULT()",
						"GET_LOCK()",
						"INET_ATON()",
						"INET_NTOA()",
						"IS_FREE_LOCK()",
						"IS_USED_LOCK()",
						"MASTER_POS_WAIT()",
						"NAME_CONST()",
						"RAND()",
						"RELEASE_LOCK()",
						"SLEEP()",
						"UUID_SHORT()",
						"UUID()",
						"VALUES()"
					]
				}
			]
		},
		{
			title: "String",
			items: [
				{
					title: "String Comparison",
					values: [
						"LIKE",
						"NOT LIKE",
						"STRCMP()"
					]
				},
				{
					title: "Regular Expressions",
					values: [
						"NOT REGEXP",
						"REGEXP",
						"RLIKE"
					]
				},
				{
					title: "String Functions",
					values: [
						"ASCII()",
						"BIN()",
						"BIT_LENGTH()",
						"CHAR_LENGTH()",
						"CHAR()",
						"CHARACTER_LENGTH()",
						"CONCAT_WS()",
						"CONCAT()",
						"ELT()",
						"EXPORT_SET()",
						"FIELD()",
						"FIND_IN_SET()",
						"FORMAT()",
						"HEX()",
						"INSERT()",
						"INSTR()",
						"LCASE()",
						"LEFT()",
						"LENGTH()",
						"LIKE",
						"LOAD_FILE()",
						"LOCATE()",
						"LOWER()",
						"LPAD()",
						"LTRIM()",
						"MAKE_SET()",
						"MATCH",
						"MID()",
						"NOT LIKE",
						"NOT REGEXP",
						"OCTET_LENGTH()",
						"ORD()",
						"POSITION()",
						"QUOTE()",
						"REGEXP",
						"REPEAT()",
						"REPLACE()",
						"REVERSE()",
						"RIGHT()",
						"RLIKE",
						"RPAD()",
						"RTRIM()",
						"SOUNDEX()",
						"SOUNDS LIKE",
						"SPACE()",
						"STRCMP()",
						"SUBSTR()",
						"SUBSTRING_INDEX()",
						"SUBSTRING()",
						"TRIM()",
						"UCASE()",
						"UNHEX()",
						"UPPER()"
					]
				}
			]
		},
		{
			title: "Numeric",
			items: [
				{
					title: "Arithmetic Operators",
					values: [
						"DIV",
						"/",
						"-",
						"% or MOD",
						"+",
						"*",
						"-"
					]
				},
				{
					title: "Mathematical Functions",
					values: [
						"ABS()",
						"ACOS()",
						"ASIN()",
						"ATAN2(), ATAN()",
						"ATAN()",
						"CEIL()",
						"CEILING()",
						"CONV()",
						"COS()",
						"COT()",
						"CRC32()",
						"DEGREES()",
						"EXP()",
						"FLOOR()",
						"LN()",
						"LOG10()",
						"LOG2()",
						"LOG()",
						"MOD()",
						"OCT()",
						"PI()",
						"POW()",
						"POWER()",
						"RADIANS()",
						"RAND()",
						"ROUND()",
						"SIGN()",
						"SIN()",
						"SQRT()",
						"TAN()",
						"TRUNCATE()"
					]
				}
			]
		},
		{
			title: "Encrypt",
			items: [
				{
					title: "Encryption Compression",
					values: [
						"AES_DECRYPT()",
						"AES_ENCRYPT()",
						"COMPRESS()",
						"DECODE()",
						"DES_DECRYPT()",
						"DES_ENCRYPT()",
						"ENCODE()",
						"ENCRYPT()",
						"MD5()",
						"OLD_PASSWORD()",
						"PASSWORD()",
						"SHA1(), SHA()",
						"SHA2()",
						"UNCOMPRESS()",
						"UNCOMPRESSED_LENGTH()"
					]
				}
			]
		},
		{
			title: "Date",
			items: [
				{
					title: "Date Time",
					values: [
						"ADDDATE()",
						"ADDTIME()",
						"CONVERT_TZ()",
						"CURDATE()",
						"CURRENT_DATE(), CURRENT_DATE",
						"CURRENT_TIME(), CURRENT_TIME",
						"CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP",
						"CURTIME()",
						"DATE_ADD()",
						"DATE_FORMAT()",
						"DATE_SUB()",
						"DATE()",
						"DATEDIFF()",
						"DAY()",
						"DAYNAME()",
						"DAYOFMONTH()",
						"DAYOFWEEK()",
						"DAYOFYEAR()",
						"EXTRACT()",
						"FROM_DAYS()",
						"FROM_UNIXTIME()",
						"GET_FORMAT()",
						"HOUR()",
						"LAST_DAY",
						"LOCALTIME(), LOCALTIME",
						"LOCALTIMESTAMP, LOCALTIMESTAMP()",
						"MAKEDATE()",
						"MAKETIME",
						"MICROSECOND()",
						"MINUTE()",
						"MONTH()",
						"MONTHNAME()",
						"NOW()",
						"PERIOD_ADD()",
						"PERIOD_DIFF()",
						"QUARTER()",
						"SEC_TO_TIME()",
						"SECOND()",
						"STR_TO_DATE()",
						"SUBDATE()",
						"SUBTIME()",
						"SYSDATE()",
						"TIME_FORMAT()",
						"TIME_TO_SEC()",
						"TIME()",
						"TIMEDIFF()",
						"TIMESTAMP()",
						"TIMESTAMPADD()",
						"TIMESTAMPDIFF()",
						"TO_DAYS()",
						"TO_SECONDS()",
						"UNIX_TIMESTAMP()",
						"UTC_DATE()",
						"UTC_TIME()",
						"UTC_TIMESTAMP()",
						"WEEK()",
						"WEEKDAY()",
						"WEEKOFYEAR()",
						"YEAR()",
						"YEARWEEK()"
					]
				}
			]
		}
	];
};
