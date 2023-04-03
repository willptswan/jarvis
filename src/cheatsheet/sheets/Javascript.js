// Sheet
exports.sheet = () => {

	return [
		{
			title: "RegExp",
			items: [
				{
					title: "Modifiers",
					values: [
						"i - Perform case-insensitive matching",
						"g - Perform a global match (find all matches rather than stopping after the first match)",
						"m - Perform multiline matching"
					]
				},
				{
					title: "Brackets",
					values: [
						"[abc] - Find any character between the brackets",
						"[^abc] - Find any character not between the brackets",
						"[0-9] - Find any digit from 0 to 9",
						"[A-Z] - Find any character from uppercase A to uppercase Z",
						"[a-z] - Find any character from lowercase a to lowercase z",
						"[A-z] - Find any character from uppercase A to lowercase z",
						"[adgk] - Find any character in the given set",
						"[^adgk] - Find any character outside the given set",
						"(red|blue|green) - Find any of the alternatives specified"
					]
				},
				{
					title: "Metacharacters",
					values: [
						". - Find a single character, except newline or line terminator",
						"\\w - Find a word character",
						"\\W - Find a non-word character",
						"\\d - Find a digit",
						"\\D - Find a non-digit character",
						"\\s - Find a whitespace character",
						"\\S - Find a non-whitespace character",
						"\\b - Find a match at the beginning/end of a word",
						"\\B - Find a match not at the beginning/end of a word",
						"\\0 - Find a NUL character",
						"\\n - Find a new line character",
						"\\f - Find a form feed character",
						"\\r - Find a carriage return character",
						"\\t - Find a tab character",
						"\\v - Find a vertical tab character",
						"\\xxx - Find the character specified by an octal number xxx",
						"\\xdd - Find the character specified by a hexadecimal number dd",
						"\\uxxxx - Find the Unicode character specified by a hexadecimal number xxxx"
					]
				},
				{
					title: "Quantifiers",
					values: [
						"n+ - Matches any string that contains at least one n",
						"n* - Matches any string that contains zero or more occurrences of n",
						"n? - Matches any string that contains zero or one occurrences of n",
						"n{X} - Matches any string that contains a sequence of X n's",
						"n{X,Y} - Matches any string that contains a sequence of X to Y n's",
						"n{X,} - Matches any string that contains a sequence of at least X n's",
						"n$ - Matches any string with n at the end of it",
						"^n - Matches any string with n at the beginning of it",
						"?=n - Matches any string that is followed by a specific string n",
						"?!n - Matches any string that is not followed by a specific string n"
					]
				},
				{
					title: "Properties",
					values: [
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
						"exec()",
						"test()"
					]
				}
			]
		},
		{
			title: "Basic Objects",
			items: [
				{
					title: "Array Properties",
					values: [
						"constructor",
						"length",
						"prototype"
					]
				},
				{
					title: "Array Methods",
					values: [
						"concat()",
						"indexOf()",
						"join()",
						"lastIndexOf()",
						"pop()",
						"push()",
						"reverse()",
						"shift()",
						"slice()",
						"sort()",
						"splice()",
						"toString()",
						"unshift()",
						"valueOf()"
					]
				},
				{
					title: "Boolean Properties",
					values: [
						"constructor",
						"prototype"
					]
				},
				{
					title: "Boolean Methods",
					values: [
						"toString()",
						"valueOf()"
					]
				},
				{
					title: "Math Properties",
					values: [
						"E",
						"LN2",
						"LN10",
						"LOG2E",
						"LOG10E",
						"PI",
						"SQRT1_2",
						"SQRT2"
					]
				},
				{
					title: "Math Methods",
					values: [
						"abs(x)",
						"acos(x)",
						"asin(x)",
						"atan(x)",
						"atan2(y,x)",
						"ceil(x)",
						"cos(x)",
						"exp(x)",
						"floor(x)",
						"log(x)",
						"max(x,y,z,...,n)",
						"min(x,y,z,...,n)",
						"pow(x,y)",
						"random()",
						"round(x)",
						"sin(x)",
						"sqrt(x)",
						"tan(x)"
					]
				},
				{
					title: "Number Properties",
					values: [
						"constructor",
						"MAX_VALUE",
						"MIN_VALUE",
						"NEGATIVE_INFINITY",
						"POSITIVE_INFINITY",
						"prototype"
					]
				},
				{
					title: "Number Methods",
					values: [
						"toExponential(x)",
						"toFixed(x)",
						"toPrecision(x)",
						"toString()",
						"valueOf()"
					]
				},
				{
					title: "String Properties",
					values: [
						"constructor",
						"length",
						"prototype"
					]
				},
				{
					title: "String Methods",
					values: [
						"charAt()",
						"charCodeAt()",
						"concat()",
						"fromCharCode()",
						"indexOf()",
						"lastIndexOf()",
						"match()",
						"replace()",
						"search()",
						"slice()",
						"split()",
						"substr()",
						"substring()",
						"toLowerCase()",
						"toUpperCase()",
						"valueOf()"
					]
				},
				{
					title: "String HTML Wrapper Methods",
					values: [
						"anchor()",
						"big()",
						"blink()",
						"bold()",
						"fixed()",
						"fontcolor()",
						"fontsize()",
						"italics()",
						"link()",
						"small()",
						"strike()",
						"sub()",
						"sup()"
					]
				},
				{
					title: "Global Properties",
					values: [
						"Infinity",
						"NaN",
						"undefined"
					]
				},
				{
					title: "Global Methods",
					values: [
						"decodeURI()",
						"decodeURIComponent()",
						"encodeURI()",
						"encodeURIComponent()",
						"escape()",
						"eval()",
						"isFinite()",
						"isNaN()",
						"Number()",
						"parseFloat()",
						"parseInt()",
						"String()",
						"unescape()"
					]
				}
			]
		},
		{
			title: "Date Object",
			items: [
				{
					title: "Date Properties",
					values: [
						"constructor",
						"prototype"
					]
				},
				{
					title: "Date Methods",
					values: [
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
						"toISOString()",
						"toJSON()",
						"toLocaleDateString()",
						"toLocaleTimeString()",
						"toLocaleString()",
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
			title: "Core DOM",
			items: [
				{
					title: "Nodelist Properties",
					values: [
						"length"
					]
				},
				{
					title: "Nodelist Methods",
					values: [
						"item()"
					]
				},
				{
					title: "NamedNodeMap Properties",
					values: [
						"length"
					]
				},
				{
					title: "NamedNodeMap Methods",
					values: [
						"getNamedItem()",
						"getNamedItemNS()",
						"item()",
						"removeNamedItem()",
						"removeNamedItemNS()",
						"setNamedItem()",
						"setNamedItemNS()"
					]
				},
				{
					title: "Document Properties",
					values: [
						"doctype",
						"documentElement",
						"documentURI",
						"domConfig",
						"implementation",
						"inputEncoding",
						"xmlEncoding",
						"xmlVersion"
					]
				},
				{
					title: "Document Methods",
					values: [
						"adoptNode(node)",
						"createAttribute()",
						"createAttributeNS(URI,name)",
						"createCDATASection()",
						"createComment()",
						"createDocumentFragment()",
						"createElement()",
						"createElementNS()",
						"createEntityReference()",
						"createProcessingInstruction()",
						"createTextNode()",
						"getElementById()",
						"getElementsByTagName()",
						"getElementsByName()",
						"querySelectorAll()",
						"querySelector()",
						"getElementsByTagNameNS()",
						"importNode()",
						"normalizeDocument()"
					]
				},
				{
					title: "Element Properties",
					values: [
						"schemaTypeInfo",
						"tagName"
					]
				},
				{
					title: "Element Methods",
					values: [
						"getAttribute()",
						"getAttributeNS()",
						"getAttributeNode()",
						"getAttributeNodeNS()",
						"getElementsByTagName()",
						"getElementsByTagNameNS()",
						"hasAttribute()",
						"hasAttributeNS()",
						"removeAttribute()",
						"removeAttributeNS()",
						"removeAttributeNode()",
						"setAttribute()",
						"setAttributeNS()",
						"setAttributeNode()",
						"setAttributeNodeNS()",
						"setIdAttribute()",
						"setIdAttributeNS()",
						"setIdAttributeNode()"
					]
				},
				{
					title: "Attr Properties",
					values: [
						"isId",
						"name",
						"ownerElement",
						"schemaTypeInfo",
						"specified",
						"value"
					]
				}
			]
		},
		{
			title: "Browser",
			items: [
				{
					title: "Window Properties",
					values: [
						"closed",
						"defaultStatus",
						"document",
						"frames",
						"history",
						"innerHeight",
						"innerWidth",
						"length",
						"location",
						"name",
						"navigator",
						"opener",
						"outerHeight",
						"outerWidth",
						"pageXOffset",
						"pageYOffset",
						"parent",
						"screen",
						"screenLeft",
						"screenTop",
						"screenX",
						"screenY",
						"self",
						"status",
						"top"
					]
				},
				{
					title: "Window Methods",
					values: [
						"alert()",
						"blur()",
						"clearInterval()",
						"clearTimeout()",
						"close()",
						"confirm()",
						"focus()",
						"moveBy()",
						"moveTo()",
						"open()",
						"print()",
						"prompt()",
						"resizeBy()",
						"resizeTo()",
						"scrollBy()",
						"scrollTo()",
						"setInterval()",
						"setTimeout()"
					]
				},
				{
					title: "Navigator Properties",
					values: [
						"appCodeName",
						"appName",
						"appVersion",
						"cookieEnabled",
						"platform",
						"userAgent"
					]
				},
				{
					title: "Navigator Methods",
					values: [
						"javaEnabled()",
						"registerContentHandler()",
						"registerProtocolHandler()"
					]
				},
				{
					title: "Screen Properties",
					values: [
						"availHeight",
						"availWidth",
						"colorDepth",
						"height",
						"pixelDepth",
						"width"
					]
				},
				{
					title: "History Properties",
					values: [
						"length"
					]
				},
				{
					title: "History Methods",
					values: [
						"back()",
						"forward()",
						"go()"
					]
				},
				{
					title: "Location Properties",
					values: [
						"hash",
						"host",
						"hostname",
						"href",
						"pathname",
						"port",
						"protocol",
						"search"
					]
				},
				{
					title: "Location Methods",
					values: [
						"assign()",
						"reload()",
						"replace()"
					]
				}
			]
		},
		{
			title: "DOM Events",
			items: [
				{
					title: "Mouse Events",
					values: [
						"click",
						"dblclick",
						"mousedown",
						"mousemove",
						"mouseover",
						"mouseout",
						"mouseup"
					]
				},
				{
					title: "Keyboard Events",
					values: [
						"keydown",
						"keypress",
						"keyup"
					]
				},
				{
					title: "Frame Events",
					values: [
						"abort",
						"error",
						"load",
						"resize",
						"scroll",
						"unload"
					]
				},
				{
					title: "Form Events",
					values: [
						"blur",
						"change",
						"focus",
						"reset",
						"select",
						"onsubmit"
					]
				},
				{
					title: "Event Object Constants",
					values: [
						"AT_TARGET",
						"BUBBLING_PHASE",
						"CAPTURING_PHASE"
					]
				},
				{
					title: "Event Object Properties",
					values: [
						"bubbles",
						"cancelable",
						"currentTarget",
						"eventPhase",
						"target",
						"timeStamp",
						"type"
					]
				},
				{
					title: "Event Object Methods",
					values: [
						"initEvent()",
						"preventDefault()",
						"stopPropagation()"
					]
				},
				{
					title: "EventTarget Object",
					values: [
						"addEventListener()",
						"dispatchEvent()",
						"removeEventListener()"
					]
				},
				{
					title: "EventListener Object",
					values: [
						"handleEvent()"
					]
				},
				{
					title: "MouseEvent KeyboardEvent Objects",
					values: [
						"altKey",
						"button",
						"clientX",
						"clientY",
						"ctrlKey",
						"keyIdentifier",
						"keyLocation",
						"metaKey",
						"relatedTarget",
						"screenX",
						"screenY",
						"shiftKey"
					]
				},
				{
					title: "MouseEvent KeyboardEvent Methods",
					values: [
						"initMouseEvent()",
						"initKeyboardEvent()"
					]
				}
			]
		},
		{
			title: "Graphics",
			items: [
				{
					title: "CanvasRenderingContext2D Methods",
					values: [
						"arc()",
						"arcTo()",
						"beginPath()",
						"bezierCurveTo()",
						"clearRect()",
						"clip()",
						"closePath()",
						"createImageData()",
						"createLinearGradient()",
						"createPattern()",
						"createRadialGradient()",
						"drawCustomFocusRing()",
						"drawImage()",
						"drawSystemFocusRing()",
						"fill()",
						"fillRect()",
						"fillText()",
						"getImageData()",
						"getLineDash()",
						"isPointInPath()",
						"lineTo()",
						"measureText()",
						"moveTo()",
						"putImageData()",
						"quadraticCurveTo()",
						"rect()",
						"restore()",
						"rotate()",
						"save()",
						"scale()",
						"scrollPathIntoView()",
						"setLineDash()",
						"setTransform()",
						"stroke()",
						"strokeRect()",
						"strokeText()",
						"transform()",
						"translate()"
					]
				}
			]
		},
		{
			title: "DOM Node",
			items: [
				{
					title: "Node Properties",
					values: [
						"attributes",
						"baseURI",
						"childNodes",
						"firstChild",
						"lastChild",
						"localName",
						"namespaceURI",
						"nextSibling",
						"nodeName",
						"nodeType",
						"nodeValue",
						"ownerDocument",
						"parentNode",
						"prefix",
						"previousSibling",
						"textContent"
					]
				},
				{
					title: "Node Methods",
					values: [
						"appendChild()",
						"cloneNode()",
						"compareDocumentPosition()",
						"getFeature(feature,version)",
						"getUserData(key)",
						"hasAttributes()",
						"hasChildNodes()",
						"insertBefore()",
						"isDefaultNamespace()",
						"isEqualNode()",
						"isSameNode()",
						"isSupported()",
						"lookupNamespaceURI()",
						"lookupPrefix()",
						"normalize()",
						"removeChild()",
						"replaceChild()",
						"setUserData(key,data,handler)"
					]
				},
				{
					title: "Node Types",
					values: [
						"1 - Element",
						"2 - Attr",
						"3 - Text",
						"4 - CDATASection",
						"5 - EntityReference",
						"6 - Entity",
						"7 - ProcessingInstruction",
						"8 - Comment",
						"9 - Document",
						"10 - DocumentType",
						"11 - DocumentFragment",
						"12 - Notation"
					]
				},
				{
					title: "nodeName Returns",
					values: [
						"Element",
						"Attr",
						"Text",
						"CDATASection",
						"EntityReference",
						"Entity",
						"ProcessingInstruction",
						"Comment",
						"Document",
						"DocumentType",
						"DocumentFragment",
						"Notation"
					]
				},
				{
					title: "nodeValue Returns",
					values: [
						"Element",
						"Attr",
						"Text",
						"CDATASection",
						"EntityReference",
						"Entity",
						"ProcessingInstruction",
						"Comment",
						"Document",
						"DocumentType",
						"DocumentFragment",
						"Notation"
					]
				}
			]
		}
	];
};
