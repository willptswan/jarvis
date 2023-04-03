// Sheet
exports.sheet = () => {

	return [
		{
			title: "Status",
			items: [
				{
					title: "1XX",
					values: [
						"100 - Continue",
						"101 - Switching Protocols",
						"103 - Checkpoint"
					]
				},
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
				},
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
				},
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
				},
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
		},
		{
			title: "Basic Tags",
			items: [
				{
					title: "Basic",
					values: [
						"<!DOCTYPE>",
						"<html>",
						"<body>",
						"<h1>",
						"<h2>",
						"<h3>",
						"<h4>",
						"<h5>",
						"<h6>",
						"<p>",
						"<br />",
						"<hr />"
					]
				},
				{
					title: "Images",
					values: [
						"<img />",
						"<map>",
						"<area />"
					]
				},
				{
					title: "Links",
					values: [
						"<a>",
						"<link />"
					]
				},
				{
					title: "Lists",
					values: [
						"<ul>",
						"<ol>",
						"<li>",
						"<dir>",
						"<dl>",
						"<dt>",
						"<dd>",
						"<menu>"
					]
				}
			]
		},
		{
			title: "Formatting",
			items: [
				{
					title: "Format",
					values: [
						"<acronym>",
						"<abbr>",
						"<address>",
						"<b>",
						"<bdo>",
						"<big>",
						"<blockquote>",
						"<center>",
						"<cite>",
						"<code>",
						"<del>",
						"<dfn>",
						"<em>",
						"<font>",
						"<i>",
						"<ins>",
						"<kbd>",
						"<pre>",
						"<q>",
						"<s>",
						"<samp>",
						"<small>",
						"<strike>",
						"<strong>",
						"<sub>",
						"<sup>",
						"<tt>",
						"<u>",
						"<var>",
						"<xmp>"
					]
				}
			]
		},
		{
			title: "Forms Tables",
			items: [
				{
					title: "Forms",
					values: [
						"<form>",
						"<input />",
						"<textarea>",
						"<button>",
						"<select>",
						"<optgroup>",
						"<option>",
						"<label>",
						"<fieldset>",
						"<legend>"
					]
				},
				{
					title: "Tables",
					values: [
						"<table>",
						"<caption>",
						"<th>",
						"<tr>",
						"<td>",
						"<thead>",
						"<tbody>",
						"<tfoot>",
						"<col />",
						"<colgroup>"
					]
				},
				{
					title: "Frames",
					values: [
						"<frame />",
						"<frameset>",
						"<noframes>",
						"<iframe>"
					]
				}
			]
		},
		{
			title: "Other Tags",
			items: [
				{
					title: "Styles",
					values: [
						"<style>",
						"<div>",
						"<span>"
					]
				},
				{
					title: "Meta",
					values: [
						"<head>",
						"<title>",
						"<meta>",
						"<base />",
						"<basefont />"
					]
				},
				{
					title: "Programming",
					values: [
						"<script>",
						"<noscript>",
						"<applet>",
						"<object>",
						"<param />"
					]
				}
			]
		},
		{
			title: "Attributes",
			items: [
				{
					title: "Core",
					values: [
						"class",
						"id",
						"style",
						"title"
					]
				},
				{
					title: "Language",
					values: [
						"dir",
						"lang",
						"xml:lang"
					]
				},
				{
					title: "Keyboard",
					values: [
						"accesskey",
						"tabindex"
					]
				}
			]
		},
		{
			title: "Events",
			items: [
				{
					title: "Body",
					values: [
						"onload"
					]
				},
				{
					title: "Form",
					values: [
						"onblur",
						"onchange",
						"onfocus",
						"onreset",
						"onselect",
						"onsubmit"
					]
				},
				{
					title: "Image",
					values: [
						"onabort"
					]
				},
				{
					title: "Mouse",
					values: [
						"onclick",
						"ondblclick",
						"onmousedown",
						"onmousemove",
						"onmouseout",
						"onmouseover",
						"onmouseup"
					]
				}
			]
		}
	];
};
