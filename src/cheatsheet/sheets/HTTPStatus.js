// Sheet
exports.sheet = () => {

	return [
		{
			title: "1XX",
			items: [
				{
					title: "1XX",
					values: [
						"100 - Continue",
						"101 - Switching Protocols",
						"103 - Checkpoint"
					]
				}
			]
		},
		{
			title: "2XX",
			items: [
				{
					title: "2XX",
					values: [
						"200 - OK",
						"201 - Created",
						"202 - Accepted",
						"203 - Non-Authoritative Information",
						"204 - No Content",
						"205 - Reset Content",
						"206 - Partial Content"
					]
				}
			]
		},
		{
			title: "3XX",
			items: [
				{
					title: "3XX",
					values: [
						"300 - Multiple Choices",
						"301 - Moved Permanently",
						"302 - Found",
						"303 - See Other",
						"304 - Not Modified",
						"306 - Switch Proxy",
						"307 - Temporary Redirect",
						"308 - Resume Incomplete"
					]
				}
			]
		},
		{
			title: "4XX",
			items: [
				{
					title: "4XX",
					values: [
						"400 - Bad Request",
						"401 - Unauthorized",
						"402 - Payment Required",
						"403 - Forbidden",
						"404 - Not Found",
						"405 - Method Not Allowed",
						"406 - Not Acceptable",
						"407 - Proxy Authentication Required",
						"408 - Request Timeout",
						"409 - Conflict",
						"410 - Gone",
						"411 - Length Required",
						"412 - Precondition Failed",
						"413 - Request Entity Too Large",
						"414 - Request-URI Too Long",
						"415 - Unsupported Media Type",
						"416 - Requested Range Not Satisfiable",
						"417 - Expectation Failed"
					]
				}
			]
		},
		{
			title: "5XX",
			items: [
				{
					title: "5XX",
					values: [
						"500 - Internal Server Error",
						"501 - Not Implemented",
						"502 - Bad Gateway",
						"503 - Service Unavailable",
						"504 - Gateway Timeout",
						"505 - HTTP Version Not Supported",
						"511 - Network Authentication Required"
					]
				}
			]
		}
	];
};
