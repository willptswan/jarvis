// Sheet
exports.sheet = () => {

	return [
		{
			title: "Table",
			items: [
				{
					title: "Object Collections",
					values: [
						"cells",
						"rows",
						"tBodies"
					]
				},
				{
					title: "Properties",
					values: [
						"caption",
						"cellPadding",
						"cellSpacing",
						"frame",
						"rules",
						"summary",
						"tFoot",
						"tHead"
					]
				},
				{
					title: "Methods",
					values: [
						"createCaption()",
						"createTFoot()",
						"createTHead()",
						"deleteCaption()",
						"deleteRow()",
						"deleteTFoot()",
						"deleteTHead()",
						"insertRow()"
					]
				},
				{
					title: "TD TH Properties",
					values: [
						"abbr",
						"axis",
						"cellIndex",
						"ch",
						"chOff",
						"colSpan",
						"headers",
						"rowSpan",
						"vAlign"
					]
				},
				{
					title: "TR Properties",
					values: [
						"abbr",
						"axis",
						"cellIndex",
						"ch",
						"chOff",
						"colSpan",
						"headers",
						"rowSpan",
						"vAlign"
					]
				}
			]
		},
		{
			title: "Events",
			items: [
				{
					title: "Mouse",
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
					title: "Keyboard",
					values: [
						"keydown",
						"keypress",
						"keyup"
					]
				},
				{
					title: "Frame",
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
					title: "Form",
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
					title: "EventTarget",
					values: [
						"addEventListener()",
						"dispatchEvent()",
						"removeEventListener()"
					]
				},
				{
					title: "EventListener",
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
			title: "HTML",
			items: [
				{
					title: "Elements Properties",
					values: [
						"accessKey",
						"className",
						"clientHeight",
						"clientWidth",
						"dir",
						"id",
						"innerHTML",
						"lang",
						"offsetHeight",
						"offsetLeft",
						"offsetParent",
						"offsetTop",
						"offsetWidth",
						"scrollHeight",
						"scrollLeft",
						"scrollTop",
						"scrollWidth",
						"style",
						"tabIndex",
						"title"
					]
				},
				{
					title: "Elements Methods",
					values: [
						"toString()"
					]
				},
				{
					title: "Document Properties",
					values: [
						"anchors",
						"applets",
						"body",
						"cookie",
						"documentMode",
						"domain",
						"forms",
						"images",
						"lastModified",
						"links",
						"readyState",
						"referrer",
						"title",
						"URL"
					]
				},
				{
					title: "Document Methods",
					values: [
						"close()",
						"getElementsByName()",
						"open()",
						"write()",
						"writeln()"
					]
				},
				{
					title: "HTML Object Properties",
					values: [
						"align",
						"archive",
						"border",
						"code",
						"codeBase",
						"codeType",
						"data",
						"declare",
						"form",
						"height",
						"hspace",
						"name",
						"standby",
						"type",
						"useMap",
						"vspace",
						"width"
					]
				},
				{
					title: "Area Object Properties",
					values: [
						"alt",
						"coords",
						"shape",
						"target"
					]
				},
				{
					title: "Base Object Properties",
					values: [
						"href",
						"hash",
						"host",
						"hostname",
						"href",
						"noHref",
						"pathname",
						"port",
						"protocol",
						"search"
					]
				},
				{
					title: "Body Object Properties",
					values: [
						"aLink",
						"background",
						"bgColor",
						"link",
						"text",
						"vLink"
					]
				},
				{
					title: "Frame Object Properties",
					values: [
						"align",
						"contentDocument",
						"frameBorder",
						"height",
						"longDesc",
						"marginHeight",
						"marginWidth",
						"name",
						"noResize",
						"scrolling",
						"src",
						"width"
					]
				},
				{
					title: "Meta Properties",
					values: [
						"content",
						"httpEquiv",
						"name",
						"scheme"
					]
				}
			]
		},
		{
			title: "Input",
			items: [
				{
					title: "Button Properties",
					values: [
						"disabled",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Checkbox Properties",
					values: [
						"disabled",
						"checked",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "File Properties",
					values: [
						"disabled",
						"accept",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Hidden Properties",
					values: [
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Password Properties",
					values: [
						"defaultValue",
						"disabled",
						"form",
						"maxLength",
						"name",
						"readOnly",
						"size",
						"type",
						"value"
					]
				},
				{
					title: "Password Methods",
					values: [
						"select()"
					]
				},
				{
					title: "Radio Properties",
					values: [
						"checked",
						"defaultChecked",
						"disabled",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Reset Properties",
					values: [
						"disabled",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Submit Properties",
					values: [
						"disabled",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Text Properties",
					values: [
						"defaultValue",
						"disabled",
						"form",
						"maxLength",
						"name",
						"readOnly",
						"size",
						"type",
						"value"
					]
				},
				{
					title: "Text Methods",
					values: [
						"select()"
					]
				}
			]
		},
		{
			title: "Elements",
			items: [
				{
					title: "Anchor Object Properties",
					values: [
						"charset",
						"href",
						"hreflang",
						"name",
						"rel",
						"rev",
						"target",
						"type"
					]
				},
				{
					title: "Button Object Properties",
					values: [
						"disabled",
						"form",
						"name",
						"type",
						"value"
					]
				},
				{
					title: "Form Object Properties",
					values: [
						"acceptCharset",
						"action",
						"enctype",
						"length",
						"method",
						"name",
						"target"
					]
				},
				{
					title: "Form Object Methods",
					values: [
						"reset()",
						"submit()"
					]
				},
				{
					title: "Form Object Events",
					values: [
						"onreset",
						"onsubmit"
					]
				},
				{
					title: "Image Object Properties",
					values: [
						"align",
						"alt",
						"border",
						"complete",
						"height",
						"hspace",
						"longDesc",
						"lowsrc",
						"name",
						"src",
						"useMap",
						"vspace",
						"width"
					]
				},
				{
					title: "Image Object Events",
					values: [
						"onabort",
						"onerror",
						"onload"
					]
				},
				{
					title: "Link Properties",
					values: [
						"charset",
						"href",
						"hreflang",
						"media",
						"rel",
						"rev",
						"type"
					]
				},
				{
					title: "Option Properties",
					values: [
						"defaultSelected",
						"disabled",
						"form",
						"index",
						"selected",
						"text",
						"value"
					]
				},
				{
					title: "Select Properties",
					values: [
						"disabled",
						"form",
						"length",
						"multiple",
						"name",
						"selectedIndex",
						"size",
						"type"
					]
				},
				{
					title: "Select Methods",
					values: [
						"add()",
						"remove()"
					]
				},
				{
					title: "Textarea Properties",
					values: [
						"cols",
						"defaultValue",
						"disabled",
						"form",
						"name",
						"readOnly",
						"rows",
						"type",
						"value"
					]
				}
			]
		},
		{
			title: "Style",
			items: [
				{
					title: "Background Properties",
					values: [
						"background",
						"backgroundAttachment",
						"backgroundColor",
						"backgroundImage",
						"backgroundPosition",
						"backgroundRepeat"
					]
				},
				{
					title: "Border Outline Properties",
					values: [
						"border",
						"borderBottom",
						"borderBottomColor",
						"borderBottomStyle",
						"borderBottomWidth",
						"borderColor",
						"borderLeft",
						"borderLeftColor",
						"borderLeftStyle",
						"borderLeftWidth",
						"borderRight",
						"borderRightColor",
						"borderRightStyle",
						"borderRightWidth",
						"borderStyle",
						"borderTop",
						"borderTopColor",
						"borderTopStyle",
						"borderTopWidth",
						"borderWidth",
						"outline",
						"outlineColor",
						"outlineStyle",
						"outlineWidth"
					]
				},
				{
					title: "Generated Content Properties",
					values: [
						"content",
						"counterIncrement",
						"counterReset"
					]
				},
				{
					title: "List Properties",
					values: [
						"listStyle",
						"listStyleImage",
						"listStylePosition",
						"listStyleType"
					]
				},
				{
					title: "Margin Padding Properties",
					values: [
						"margin",
						"marginBottom",
						"marginLeft",
						"marginRight",
						"marginTop",
						"padding",
						"paddingBottom",
						"paddingLeft",
						"paddingRight",
						"paddingTop"
					]
				},
				{
					title: "Misc Properties",
					values: [
						"cssText"
					]
				},
				{
					title: "Positioning Properties",
					values: [
						"bottom",
						"clear",
						"clip",
						"cssFloat",
						"cursor",
						"display",
						"height",
						"left",
						"maxHeight",
						"maxWidth",
						"minHeight",
						"minWidth",
						"overflow",
						"position",
						"right",
						"top",
						"verticalAlign",
						"visibility",
						"width",
						"zIndex"
					]
				},
				{
					title: "Printing Properties",
					values: [
						"orphans",
						"pageBreakAfter",
						"pageBreakBefore",
						"pageBreakInside",
						"widows"
					]
				},
				{
					title: "Table Properties",
					values: [
						"borderCollapse",
						"borderSpacing",
						"captionSide",
						"emptyCells",
						"tableLayout"
					]
				},
				{
					title: "Text Properties",
					values: [
						"color",
						"direction",
						"font",
						"fontFamily",
						"fontSize",
						"fontSizeAdjust",
						"fontStyle",
						"fontVariant",
						"fontWeight",
						"letterSpacing",
						"lineHeight",
						"quotes",
						"textAlign",
						"textDecoration",
						"textIndent",
						"textShadow",
						"textTransform",
						"unicodeBidi",
						"whiteSpace",
						"wordSpacing"
					]
				}
			]
		}
	];
};
