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

h1, h2, h3, h4, h5, p, li, span {
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

h1, h2, h3, h4, h5, h6 {
	padding: 0;
	margin: 0;
}

a {
	text-decoration: none;
	color: $primary-light-colour;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
	-ms-transition: 0.3s;
  transition: 0.3s;
}

a:visited, a:hover, a:focus, a:active, a:focus {
  text-decoration: none;
  color: $primary-light-colour;
}

a:hover {
  text-decoration: none;
	color: $primary-colour;
}

/* END TEXT DEFAULTS */`;
};
