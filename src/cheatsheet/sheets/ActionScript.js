// Sheet
exports.sheet = () => {

	return [
		{
			title: "XML",
			items: [
				{
					title: "XML Properties",
					values: [
    				"ignoreComments",
    				"ignoreProcessingInstruction",
    				"ignoreWhitespace",
    				"prettyIndent",
    				"prettyPrinting"
    			],
				},
				{
					title: "XML Methods",
					values: [
    				"XML()",
    				"addNamespace()",
    				"appendChild()",
    				"attribute()",
    				"attributes()",
    				"child()",
    				"childIndex()",
    				"children()",
    				"comments()",
    				"contains()",
    				"copy()",
    				"defaultSettings()",
    				"descendants()",
    				"elements()",
    				"hasComplexContent()",
    				"hasOwnProperty()",
    				"hasSimpleContent()",
    				"inScopeNamespaces()",
    				"insertChildAfter()",
    				"insertChildBefore()",
    				"length()",
    				"localName()",
    				"name()",
    				"namespace()",
    				"namespaceDeclarations()",
    				"nodeKind()",
    				"normalize()",
    				"parent()",
    				"prependChild()",
    				"processingInstructions()",
    				"propertyIsEnumerable()",
    				"removeNamespace()",
    				"replace()",
    				"setChildren()",
    				"setLocalName()",
    				"setName()",
    				"setNamespace()",
    				"setSettings()",
    				"settings()",
    				"text()",
    				"toJSON()",
    				"toString()",
    				"toXMLString()",
    				"valueOf()"
    			]
				},
				{
					title: "XMLList",
					values: [
						"XMLList()",
						"attribute()",
						"attributes()",
						"child()",
						"children()",
						"comments()",
						"contains()",
						"copy()",
						"descendants()",
						"elements()",
						"hasComplexContent()",
						"hasOwnProperty()",
						"hasSimpleContent()",
						"length()",
						"normalize()",
						"parent()",
						"processingInstructions()",
						"propertyIsEnumerable()",
						"text()",
						"toString()",
						"toXMLString()",
						"valueOf()"
					]
				}
			]
		},
		{
			title: "Global",
			items: [
				{
					title: "Constants",
					values: [
						"Infinity",
						"-Infinity",
						"NaN",
						"undefined"
					]
				},
				{
					title: "Functions",
					values: [
						"Array",
						"Boolean",
						"decodeURI",
						"decodeURIComponent",
						"encodeURI",
						"encodeURIComponent",
						"escape",
						"int",
						"isFinite",
						"isNaN",
						"isXMLName",
						"Number",
						"Object",
						"parseFloat",
						"parseInt",
						"String",
						"trace",
						"uint",
						"unescape",
						"Vectory",
						"XML",
						"XMLList"
					]
				}
			]
		},
		{
			title: "Math",
			items: [
				{
					title: "Methods",
					values: [
						"abs()",
						"acos()",
						"asin()",
						"atan()",
						"atan2()",
						"ceil()",
						"cos()",
						"exp()",
						"floor()",
						"log()",
						"max()",
						"min()",
						"pow()",
						"random()",
						"round()",
						"sin()",
						"sqrt()",
						"tan()"
					]
				},
				{
					title: "Constants",
					values: [
						"E",
						"LN10",
						"LN2",
						"LOG10E",
						"LOG2E",
						"PI",
						"SQRT1_2",
						"SQRT2"
					]
				}
			]
		},
		{
			title: "Object Oriented",
			items: [
				{
					title: "Arguments",
					values: [
						"callee:Function",
						"length:Number"
					]
				},
				{
					title: "Boolean",
					values: [
						"Boolean()",
						"toString():String",
						"valueOf():Boolean"
					]
				},
				{
					title: "Function",
					values: [
						"apply()",
						"call()"
					]
				},
				{
					title: "Namespace",
					values: [
						"prefix",
						"uri",
						"Namespace()",
						"toString()",
						"valueOf()"
					]
				},
				{
					title: "Object",
					values: [
						"Object()",
						"hasOwnProperty()",
						"isPrototypeOf()",
						"propertyIsEnumerable()",
						"setPropertyIsEnumerable()",
						"toLocaleString()",
						"toString()",
						"valueOf()"
					]
				}
			]
		},
		{
			title: "QName",
			items: [
				{
					title: "QName",
					values: [
						"QName()",
						"toString()",
						"valueOf()",
						"localName",
						"uri"
					]
				}
			]
		},
		{
			title: "RegExp",
			items: [
				{
					title: "Properties",
					values: [
						"dotall",
						"extended",
						"global",
						"ignoreCase",
						"lastIndex",
						"multiline",
						"source"
					]
				},
				{
					title: "Methods",
					values: [
						"RegExp()",
						"exec()",
						"test()"
					]
				}
			]
		},
		{
			title: "Array",
			items: [
				{
					title: "Array",
					values: [
						"Array()",
						"concat():Array",
						"every():Boolean",
						"filter():Array",
						"forEach():void",
						"indexOf():int",
						"join():String",
						"lastIndexOf():int",
						"map():Array",
						"pop():*",
						"push():uint",
						"reverse():Array",
						"shift():*",
						"slice():Array",
						"some():Boolean",
						"sort():Array",
						"sortOn():Array",
						"splice():Array",
						"toLocaleString():String",
						"toString():String",
						"unshift():uint"
					]
				}
			]
		},
		{
			title: "Int",
			items: [
				{
					title: "Int",
					values: [
						"int()",
						"toExponential()",
						"toFixed()",
						"toPrecision()",
						"toString()",
						"valueOf()",
						"MAX_VALUE",
						"MIN_VALUE"
					]
				}
			]
		},
		{
			title: "Number",
			items: [
				{
					title: "Methods",
					values: [
						"Number()",
						"toExponential()",
						"toFixed()",
						"toPrecision()",
						"toString()",
						"valueOf()"
					]
				},
				{
					title: "Constants",
					values: [
						"MAX_VALUE",
						"MIN_VALUE",
						"NaN",
						"NEGATIVE_INFINITY",
						"POSITIVE_INFINITY"
					]
				}
			]
		},
		{
			title: "Vector",
			items: [
				{
					title: "Vector",
					values: [
						"Vector()",
						"concat()",
						"every()",
						"filter()",
						"forEach()",
						"indexOf()",
						"join()",
						"lastIndexOf()",
						"map()",
						"pop()",
						"push()",
						"reverse()",
						"shift()",
						"slice()",
						"some()",
						"sort()",
						"splice()",
						"toLocaleString()",
						"toString()",
						"unshift()"
					]
				}
			]
		},
		{
			title: "Date",
			items: [
				{
					title: "Properties",
					values: [
						"date",
						"dateUTC",
						"day",
						"dayUTC",
						"fullYear",
						"fullYearUTC",
						"hours",
						"hoursUTC",
						"milliseconds",
						"millisecondsUTC",
						"minutes",
						"minutesUTC",
						"month",
						"monthUTC",
						"seconds",
						"secondsUTC",
						"time",
						"timezoneOffset"
					]
				},
				{
					title: "Methods",
					values: [
						"Date()",
						"getDate()",
						"getDay()",
						"getFullYear()",
						"getHours()",
						"getMilliseconds()",
						"getMinutes()",
						"getMonth()",
						"getSeconds()",
						"getTime()",
						"getTimezoneOffset()",
						"getUTCDate()",
						"getUTCDay()",
						"getUTCFullYear()",
						"getUTCHours()",
						"getUTCMilliseconds()",
						"getUTCMinutes()",
						"getUTCMonth()",
						"getUTCSeconds()",
						"parse()",
						"setDate()",
						"setFullYear()",
						"setHours()",
						"setMilliseconds()",
						"setMinutes()",
						"setMonth()",
						"setSeconds()",
						"setTime()",
						"setUTCDate()",
						"setUTCFullYear()",
						"setUTCHours()",
						"setUTCMilliseconds()",
						"setUTCMinutes()",
						"setUTCMonth()",
						"setUTCSeconds()",
						"toDateString()",
						"toJSON()",
						"toLocaleDateString()",
						"toLocaleString()",
						"toLocaleTimeString()",
						"toString()",
						"toTimeString()",
						"toUTCString()",
						"UTC()",
						"valueOf()"
					]
				}
			]
		},
		{
			title: "String",
			items: [
				{
					title: "String",
					values: [
						"String()",
						"charAt()",
						"charCodeAt()",
						"concat()",
						"fromCharCode()",
						"indexOf()",
						"lastIndexOf()",
						"localeCompare()",
						"match()",
						"replace()",
						"search()",
						"slice()",
						"split()",
						"substr()",
						"substring()",
						"toLocaleUpperCase()",
						"toLocaleLowerCase()",
						"toLowerCase()",
						"toUpperCase()",
						"valueOf()"
					]
				}
			]
		},
		{
			title: "Error",
			items: [
				{
					title: "Error",
					values: [
						"errorID:int",
						"message:String",
						"name:String",
						'Error(message:String = "", id:int = 0)',
						"getStackTrace():String",
						"toString():String",
						"DefinitionError()",
						"EvalError()",
						'ArgumentError(message:String = "")',
						"RangeError()",
						"ReferenceError()",
						"SecurityError()",
						"SyntaxError()",
						"TypeError()",
						"URIError()",
						"VerifyError()"
					]
				}
			]
		},
		{
			title: "uint",
			items: [
				{
					title: "uint",
					values: [
						"uint()",
						"toExponential()",
						"toFixed()",
						"toPrecision()",
						"toString()",
						"valueOf()"
					]
				}
			]
		}
	];
};
