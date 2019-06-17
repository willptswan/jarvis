// Imports
const Log = require('../utils/Log');
const Files = require('../utils/Files');

// Templates
const Component = require('./templates/component/Component');
const ComponentTest = require('./templates/component/ComponentTest');
const ComponentLess = require('./templates/component/ComponentLess');
const ComponentIndex = require('./templates/component/ComponentIndex');

exports.handler = async (componentName) => {

	// Log creating component
	Log.spaced(`Creating ${componentName}...`, 'info');

	// Create component folder
	await Files.makeDir(`./${componentName}`);

	// Create component
	await Files.create(`./${componentName}/${componentName}.js`, Component.template(componentName, convertNameToCamel(componentName)));

	// Create tests
	await Files.create(`./${componentName}/${componentName}.test.js`, ComponentTest.template(componentName, convertNameToCamel(componentName)));

	// Create less
	await Files.create(`./${componentName}/${componentName.toLowerCase()}.less`, ComponentLess.template(convertNameToCamel(componentName)));

	// Create index
	await Files.create(`./${componentName}/index.js`, ComponentIndex.template(componentName));

	// Log finished
	Log.spaced(`Finished creating ${componentName}`, 'success');

};

// Convert name to camel case
function convertNameToCamel(componentName) {

	// Get first char
	let firstChar = componentName[0];

	// Lower case first char
	firstChar = firstChar.toLowerCase();

	// Remove first char from componentName
	componentName = componentName.substring(1);

	// Join everything back up
	return `${firstChar}${componentName}`;

}
