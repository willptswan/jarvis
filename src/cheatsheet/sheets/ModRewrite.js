// Sheet
exports.sheet = () => {

	return [
		{
			title: "Server Internals",
			items: [
				{
					title: "Server Internals",
					values: [
						"%{DOCUMENT_ROOT}",
						"%{SERVER_ADMIN}",
						"%{SERVER_NAME}",
						"%{SERVER_ADDR}",
						"%{SERVER_PORT}",
						"%{SERVER_PROTOCOL}",
						"%{SERVER_SOFTWARE}"
					]
				}
			]
		},
		{
			title: "Time",
			items: [
				{
					title: "Time",
					values: [
						"%{TIME_YEAR}",
						"%{TIME_MON}",
						"%{TIME_DAY}",
						"%{TIME_HOUR}",
						"%{TIME_MIN}",
						"%{TIME_SEC}",
						"%{TIME_WDAY}",
						"%{TIME}"
					]
				}
			]
		},
		{
			title: "RewriteRule Flags",
			items: [
				{
					title: "RewriteRule Flags",
					values: [
						"C - Chained with next rule",
						"CO=cookie - Set specified cookie",
						"E=var:-value - Set environmental variable “var” to “value”",
						"F - Forbidden (403 header)",
						"G - Gone no longer exists",
						"H=handler - Set handler",
						"L - Last stop processing rules",
						"N - Next continue processing",
						"NC - Case insensitive",
						"NE - Do not escape output",
						"NS - Ignore if subrequest",
						"P - Proxy",
						"PT - Pass through",
						"R[=code] - Redirect to new URL",
						"QSA - Append query string",
						"S=x - Skip next x rules",
						"T=mime-type - Set mime type"
					]
				}
			]
		},
		{
			title: "RegExp",
			items: [
				{
					title: "RegExp",
					values: [
						"^ - Start of string",
						"$ - End of string",
						". - Any single character",
						"(a|b) - a or b",
						"(...) - Group section",
						"[abc] - In range (a, b or c)",
						"[^abc] - Not in range",
						"\\s - White space",
						"a? - Zero or one of a",
						"a* - Zero or more of a",
						"a*? - Zero or more, ungreedy",
						"a+ - One or more of a",
						"a+? - One or more, ungreedy",
						"a{3} - Exactly 3 of a",
						"a{3,} - 3 or more of a",
						"a{,6} - Up to 6 of a",
						"a{3,6} - 3 to 6 of a",
						"a{3,6}? - 3 to 6 of a, ungreedy",
						"\\ - Escape character",
						"[:punct:] - Any punctuation symbol",
						"[:space:] - Any space character",
						"[:blank:] - Space or tab"
					]
				}
			]
		},
		{
			title: "Directives",
			items: [
				{
					title: "Directives",
					values: [
						"RewriteEngine",
						"RewriteOptions",
						"RewriteLog",
						"RewriteLogLevel",
						"RewriteLock",
						"RewriteMap",
						"RewriteBase",
						"RewriteCond",
						"RewriteRule"
					]
				}
			]
		},
		{
			title: "Special",
			items: [
				{
					title: "Special",
					values: [
						"%{API_VERSION}",
						"%{THE_REQUEST}",
						"%{REQUEST_URI}",
						"%{REQUEST_FILENAME}",
						"%{IS_SUBREQ}",
						"%{HTTPS}"
					]
				}
			]
		},
		{
			title: "Misc",
			items: [
				{
					title: "RewriteCond Flags",
					values: [
						"NC - Case insensitive",
						"OR - Combine with next rule using 'OR' instead of the default of 'AND'"
					]
				},
				{
					title: "Redirection Header Codes",
					values: [
						"301 - Moved permanently",
						"302 - Moved temporarily (default)"
					]
				},
				{
					title: "Sample Rule: Site Moved",
					values: [
						"RewriteCond %{HTTP_HOST} ^www.domain.com$ [NC]",
						"RewriteRule ^(.*)$ http://www.domain2.com/$1 [R=301,L] - Rewrites domain.com to domain2.com"
					]
				},
				{
					title: "Sample Rule: Temporary Page Move",
					values: [
						"RewriteRule ^page.html$ new_page.html [R,NC,L] - Rewrites domain.com/page.html to domain.com/new_page.html"
					]
				},
				{
					title: "Sample Rule: Nice URLs",
					values: [
						"RewriteRule ^([A-Za-z0-9]+)/?$ categories.php?name=$1 [L] - Rewrites domain.com/categoryname1/ to domain.com/categories.php?name=category-name1"
					]
				}
			]
		},
		{
			title: "HTTP Headers",
			items: [
				{
					title: "HTTP Headers",
					values: [
						"%{HTTP_USER_AGENT}",
						"%{HTTP_REFERER}",
						"%{HTTP_COOKIE}",
						"%{HTTP_FORWARDED}",
						"%{HTTP_HOST}",
						"%{HTTP_PROXY_CONNECTION}",
						"%{HTTP_ACCEPT}"
					]
				}
			]
		},
		{
			title: "Request",
			items: [
				{
					title: "Request",
					values: [
						"%{REMOTE_ADDR}",
						"%{REMOTE_HOST}",
						"%{REMOTE_PORT}",
						"%{REMOTE_USER}",
						"%{REMOTE_IDENT}",
						"%{REQUEST_METHOD}",
						"%{SCRIPT_FILENAME}",
						"%{PATH_INFO}",
						"%{QUERY_STRING}",
						"%{AUTH_TYPE}"
					]
				}
			]
		}
	];
};
