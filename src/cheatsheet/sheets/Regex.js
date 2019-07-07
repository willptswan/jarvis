// Sheet
exports.sheet = () => {

	return [
		{
			title: "Anchors",
			items: [
				{
					title: "Anchors",
					values: [
						"^ - Start of string, or start of line in multi-line pattern",
						"\\A - Start of string",
						"$ - End of string, or end of line in multi-line pattern",
						"\\Z - End of string",
						"\\b - Word boundary",
						"\\B - Not word boundary",
						"\\< - Start of word",
						"\\> - End of word"
					]
				}
			]
		},
		{
			title: "String",
			items: [
				{
					title: "Replacement",
					values: [
						"$n - nth non-pa-ssive group",
						'$2 - "-xyz-" in /^(abc-(xy-z))$/',
						'$1 - "-xyz-" in /^(?:a-bc)-(xyz)$/',
						"$` - Before matched string",
						"$' - After matched string",
						"$+ - Last matched string",
						"$& - Entire matched string"
					]
				}
			]
		},
		{
			title: "Quantifiers",
			items: [
				{
					title: "Quantifiers",
					values: [
						"* - 0 or more",
						"+ - 1 or more",
						"? - 0 or 1",
						"{3} - Exactly 3",
						"{3,} - 3 or more",
						"{3,5} - 3, 4 or 5",
						"{,5} - 5 or less"
					]
				}
			]
		},
		{
			title: "Modifiers",
			items: [
				{
					title: "Modifiers",
					values: [
						"g - Global match",
						"i - Case-i-nse-nsitive",
						"m - Multiple lines",
						"s - Treat string as single line",
						"x - Allow comments and white space in pattern",
						"e - Evaluate replac-ement",
						"U - Ungreedy pattern"
					]
				}
			]
		},
		{
			title: "Character",
			items: [
				{
					title: "Character Classes",
					values: [
						"\\c - Control character",
						"\\s - White space",
						"\\S - Not white space",
						"\\d - Digit",
						"\\D - Not digit",
						"\\w - Word",
						"\\W - Not word",
						"\\x - Hexadecimal digit",
						"\\O - Octal digit"
					]
				},
				{
					title: "Special",
					values: [
						"\\n - New line",
						"\\r - Carriage return",
						"\\t - Tab",
						"\\v - Vertical tab",
						"\\f - Form feed",
						"\\xxx - Octal character xxx",
						"\\xhh - Hex character hh"
					]
				}
			]
		},
		{
			title: "POSIX",
			items: [
				{
					title: "POSIX",
					values: [
						"[:upper:] - Upper case letters",
						"[:lower:] - Lower case letters",
						"[:alpha:] - All letters",
						"[:alnum:] - Digits and letters",
						"[:digit:] - Digits",
						"[:xdigit:] - Hexadecimal digits",
						"[:punct:] - Punctu-ation",
						"[:blank:] - Space and tab",
						"[:space:] - Blank characters",
						"[:cntrl:] - Control characters",
						"[:graph:] - Printed characters",
						"[:print:] - Printed characters and spaces",
						"[:word:] - Digits, letters and underscore"
					]
				}
			]
		},
		{
			title: "Groups",
			items: [
				{
					title: "Groups Ranges",
					values: [
						". - Any character except new line (\\n)",
						"(a|b) - a or b",
						"(...) - Group",
						"(?:...) - Passive (non-c-apt-uring) group",
						"[abc] - Range (a or b or c)",
						"[^abc] - Not a or b or c",
						"[a-q] - Letter from a to q",
						"[A-Q] - Upper case letter from A to Q",
						"[0-7] - Digit from 0 to 7",
						"\\n - nth group/sub pattern"
					]
				}
			]
		},
		{
			title: "Assertions",
			items: [
				{
					title: "Assertions",
					values: [
						"?= - Lookahead assertion",
						"?! - Negative lookahead",
						"?<= - Lookbehind assertion",
						"?!= or ?<! - Negative lookbehind",
						"?> - Once only Subexpression",
						"?() - Condition [if then]",
						"?()| - Condition [if then else]",
						"?# - Comment"
					]
				}
			]
		}
	];
};
