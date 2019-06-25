exports.template = () => {
	return `// Import Variables
@import './variables.scss';

@font-face {
  font-family: $font-family;
  font-display: auto;
  src: local($font-family), url(https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,700&display=swap) format('woff2');
}

body, html {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	min-width: $min-width;
}

/* START TEXT DEFAULTS */

* {
	font-family: $font-family;
  letter-spacing: $font-letter-spacing;
	font-weight: $font-weight-normal;
}

h1, h2, h3, h4, p, li, span {
	color: $grey-dark-colour;
}

p {
	line-height: 25px;
	font-size: 16px;
}

li {
	font-size: 16px;
  padding-bottom: 5px;
}

h1, h2, h3 {
	padding: 0;
	margin: 0;
}

h1, h4 {
	font-weight: $font-weight-bold !important;
}

h2, h3 {
	font-weight: $font-weight-normal !important;
}

h1 {
	font-size: 50px;
}

h2 {
	font-size: 35px;
}

h3, h4 {
	font-size: 20px;
}

a {
	text-decoration: none;
	color: $primary-colour;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
	-ms-transition: 0.3s;
  transition: 0.3s;
}

a:hover {
	color: $primary-dark-colour;
}

/* END TEXT DEFAULTS */

/* START INPUTS */

input, textarea {
  border: $grey-light-colour 1px solid;
  padding-left: 10px;
  padding-right: 10px;
}

input, textarea, button {
  width: calc(100% - 22px);
  font-size: 16px !important;
  outline: none;
  -webkit-border-radius: 4px;
 	-moz-border-radius: 4px;
	-ms-border-radius: 4px;
	border-radius: 4px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
	-ms-transition: 0.3s;
  transition: 0.3s;
}

input {
  height: 42px;
}

textarea {
  padding-top: 10px;
  padding-bottom: 10px;
}

input:hover, input:focus, input:active, textarea:hover, textarea:focus, textarea:active {
  border: $primary-light-colour 1px solid;
}

button {
  width: 100% !important;
  border: none;
  background-color: $primary-colour;
  color: $white-colour;
  cursor: pointer;
}

button:hover {
  background-color: $primary-light-colour;
}

/* END INPUTS */`;
};
