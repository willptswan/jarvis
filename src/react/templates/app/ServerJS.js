exports.template = () => {
	return `// Imports
const express = require('express');
const path = require('path');

// Constants
const app = express();
const port = process.env.PORT || 8080;

// Handle all routes with index.html
app.get('*', function (request, response) {
	response.sendFile(path.resolve(__dirname, 'index.html'));
});

// Listen
app.listen(port);
console.log(\`Listening on port \${port}\`);`;
};
