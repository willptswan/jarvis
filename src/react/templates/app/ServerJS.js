exports.template = () => {
	return `// Packages
const express = require('express');
const path = require('path');

// Setup app consts
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, './dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// Setup static dir
app.use(express.static(DIST_DIR));

// App route
app.get('*', function (request, response) {

	// Set headers
	response.set({
		'X-Powered-By': '*',
		'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
		'X-Frame-Options': 'SAMEORIGIN',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'same-origin'
	});

	// Return html
	response.sendFile(HTML_FILE);

});

// Run app
app.listen(port, function () {
	console.log('App listening on port: ' + port);
});`;
};
