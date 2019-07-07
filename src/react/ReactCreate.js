// Imports
const Log = require('../utils/Log');
const Files = require('../utils/Files');
const Settings = require('../utils/Settings');

// Templates
const Component = require('./templates/component/Component');
const ComponentTest = require('./templates/component/ComponentTest');
const ComponentStyles = require('./templates/component/ComponentStyles');
const ComponentIndex = require('./templates/component/ComponentIndex');

exports.handler = async (componentName) => {

	// Get settings
	let settings = await Settings.get();

	// Log creating component
	Log.spacer();
	Log.info(`Creating ${componentName}...`);

	// Create component folder
	await Files.makeDir(`./${componentName}`);

	// Create component
	await Files.create(`./${componentName}/${componentName}.js`, Component.template(componentName, convertNameToCamel(componentName), settings.useSCSS));

	// Create tests
	await Files.create(`./${componentName}/${componentName}.test.js`, ComponentTest.template(componentName, convertNameToCamel(componentName), settings.useSCSS));

	if (settings.useSCSS) {

		// Create SCSS
		await Files.create(`./${componentName}/${componentName.toLowerCase()}.scss`, ComponentStyles.template(convertNameToCamel(componentName)));

	} else {

		// Create less
		await Files.create(`./${componentName}/${componentName.toLowerCase()}.less`, ComponentStyles.template(convertNameToCamel(componentName)));

	}

	// Create index
	await Files.create(`./${componentName}/index.js`, ComponentIndex.template(componentName));

	// Log finished
	Log.spacer();
	Log.success(`Finished creating ${componentName}`);

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
