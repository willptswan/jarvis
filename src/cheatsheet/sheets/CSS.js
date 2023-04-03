// Sheet
exports.sheet = () => {

	return [
		{
			title: "Animation",
			items: [
				{
					title: "Animation",
					values: [
						"@keyframes",
						"animation",
						"animation-name",
						"animation-duration",
						"animation-timing-function",
						"animation-delay",
						"animation-fill-mode",
						"animation-iteration-count",
						"animation-direction",
						"animation-play-state"
					]
				},
				{
					title: "2D-3D Transform",
					values: [
						"transform",
						"transform-origin",
						"transform-style",
						"perspective",
						"perspective-origin",
						"backface-visibility"
					]
				},
				{
					title: "Transition",
					values: [
						"transition",
						"transition-property",
						"transition-duration",
						"transition-timing-function",
						"transition-delay"
					]
				}
			]
		},
		{
			title: "Box Model",
			items: [
				{
					title: "Margin",
					values: [
						"margin",
						"margin-bottom",
						"margin-left",
						"margin-right",
						"margin-top"
					]
				},
				{
					title: "Padding",
					values: [
						"padding",
						"padding-bottom",
						"padding-left",
						"padding-right",
						"padding-top"
					]
				},
				{
					title: "Dimension",
					values: [
						"height",
						"width",
						"max-height",
						"max-width",
						"min-height",
						"min-width"
					]
				},
				{
					title: "Border Outline",
					values: [
						"border",
						"border-bottom",
						"border-bottom-color",
						"border-bottom-style",
						"border-bottom-width",
						"border-color",
						"border-left",
						"border-left-color",
						"border-left-style",
						"border-left-width",
						"border-right",
						"border-right-color",
						"border-right-style",
						"border-right-width",
						"border-style",
						"border-top",
						"border-top-color",
						"border-top-style",
						"border-top-width",
						"border-width",
						"outline",
						"outline-color",
						"outline-style",
						"outline-width",
						"border-bottom-left-radius",
						"border-bottom-right-radius",
						"border-image",
						"border-image-outset",
						"border-image-repeat",
						"border-image-slice",
						"border-image-source",
						"border-image-width",
						"border-radius",
						"border-top-left-radius",
						"border-top-right-radius",
						"box-decoration-break",
						"box-shadow"
					]
				}
			]
		},
		{
			title: "Selectors",
			items: [
				{
					title: "Basic",
					values: [
						".class",
						"#id",
						"*",
						"element",
						"element,element",
						"element element",
						"element>element",
						"element+element",
						"[attribute]",
						"[attribute=value]",
						"[attribute~=value]",
						"[attribute|=value]",
						"element1~element2",
						"[attribute^=value]",
						"[attribute$=value]",
						"[attribute*=value]"
					]
				},
				{
					title: "Pseudo",
					values: [
						":link",
						":visited",
						":active",
						":hover",
						":focus",
						":first-letter",
						":first-line",
						":first-child",
						":before",
						":after",
						":lang(language)",
						":first-of-type",
						":last-of-type",
						":only-of-type",
						":only-child",
						":nth-child(n)",
						":nth-last-child(n)",
						":nth-of-type(n)",
						":last-child",
						":not",
						":root",
						":empty",
						":target",
						":enabled",
						":disabled",
						":checked",
						"::selection"
					]
				}
			]
		},
		{
			title: "Style",
			items: [
				{
					title: "Background",
					values: [
						"background",
						"background-attachment",
						"background-color",
						"background-image",
						"background-position",
						"background-repeat",
						"background-clip",
						"background-origin",
						"background-size"
					]
				},
				{
					title: "Color",
					values: [
						"color-profile",
						"opacity",
						"rendering-intent"
					]
				},
				{
					title: "Font",
					values: [
						"font",
						"font-family",
						"font-size",
						"font-style",
						"font-variant",
						"font-weight",
						"@font-face",
						"font-size-adjust",
						"font-stretch"
					]
				},
				{
					title: "Positioning",
					values: [
						"bottom",
						"clear",
						"clip",
						"cursor",
						"display",
						"float",
						"left",
						"overflow",
						"position",
						"right",
						"top",
						"visibility",
						"z-index"
					]
				}
			]
		},{
			title: "Page",
			items: [
				{
					title: "Page Media Content",
					values: [
						"bookmark-label",
						"bookmark-level",
						"bookmark-target",
						"float-offset",
						"hyphenate-after",
						"hyphenate-before",
						"hyphenate-character",
						"hyphenate-lines",
						"hyphenate-resource",
						"hyphens",
						"image-resolution",
						"marks",
						"string-set"
					]
				},
				{
					title: "Generated Content",
					values: [
						"content",
						"counter-increment",
						"counter-reset",
						"quotes",
						"crop",
						"move-to",
						"page-policy"
					]
				},
				{
					title: "Page Media",
					values: [
						"fit",
						"fit-position",
						"image-orientation",
						"page",
						"size"
					]
				}
			]
		},
		{
			title: "Elements",
			items: [
				{
					title: "Hyperlink",
					values: [
						"target",
						"target-name",
						"target-new",
						"target-position"
					]
				},
				{
					title: "Text",
					values: [
						"color",
						"direction",
						"letter-spacing",
						"line-height",
						"text-align",
						"text-decoration",
						"text-indent",
						"text-transform",
						"unicode-bidi",
						"vertical-align",
						"white-space",
						"word-spacing",
						"text-outline",
						"text-overflow",
						"text-shadow",
						"text-wrap",
						"word-break",
						"word-wrap"
					]
				},
				{
					title: "List",
					values: [
						"list-style",
						"list-style-image",
						"list-style-position",
						"list-style-type"
					]
				},
				{
					title: "Table",
					values: [
						"border-collapse",
						"border-spacing",
						"caption-side",
						"empty-cells",
						"table-layout"
					]
				},
				{
					title: "Marquee",
					values: [
						"marquee-direction",
						"marquee-play-count",
						"marquee-speed",
						"marquee-style"
					]
				}
			]
		},
		{
			title: "Misc",
			items: [
				{
					title: "Print",
					values: [
						"orphans",
						"page-break-after",
						"page-break-before",
						"page-break-inside",
						"widows"
					]
				},
				{
					title: "Speech",
					values: [
						"mark",
						"mark-after",
						"mark-before",
						"phonemes",
						"rest",
						"rest-after",
						"rest-before",
						"voice-balance",
						"voice-duration",
						"voice-pitch",
						"voice-pitch-range",
						"voice-rate",
						"voice-stress",
						"voice-volume"
					]
				},
				{
					title: "User Interface",
					values: [
						"appearance",
						"box-sizing",
						"icon",
						"nav-down",
						"nav-index",
						"nav-left",
						"nav-right",
						"nav-up",
						"outline-offset",
						"resize"
					]
				}
			]
		},
		{
			title: "CSS3 Box",
			items: [
				{
					title: "Box",
					values: [
						"overflow-x",
						"overflow-y",
						"overflow-style",
						"rotation"
					]
				},
				{
					title: "Flexible Box",
					values: [
						"box-align",
						"box-direction",
						"box-flex",
						"box-flex-group",
						"box-lines",
						"box-ordinal-group",
						"box-orient",
						"box-pack"
					]
				},
				{
					title: "Linebox",
					values: [
						"alignment-adjust",
						"alignment-baseline",
						"baseline-shift",
						"dominant-baseline",
						"drop-initial-after-adjust",
						"drop-initial-after-align",
						"drop-initial-before-adjust",
						"drop-initial-before-align",
						"drop-initial-size",
						"drop-initial-value",
						"inline-box-align",
						"line-stacking",
						"line-stacking-ruby",
						"line-stacking-shift",
						"line-stacking-strategy",
						"text-height"
					]
				},
				{
					title: "Multi Column",
					values: [
						"column-count",
						"column-fill",
						"column-gap",
						"column-rule",
						"column-rule-color",
						"column-rule-style",
						"column-rule-width",
						"column-span",
						"column-width",
						"columns"
					]
				}
			]
		},
		{
			title: "FlexBox",
			items: [
				{
					title: "Order",
					values: [
						"flex-direction",
						"flex-wrap",
						"flex-flow",
						"order"
					]
				},
				{
					title: "Alignment",
					values: [
						"justify-content",
						"align-items",
						"align-self",
						"align-content"
					]
				},
				{
					title: "Flexibility",
					values: [
						"flex-grow",
						"flex-shrink",
						"flex-basis"
					]
				}
			]
		}
	];
};
