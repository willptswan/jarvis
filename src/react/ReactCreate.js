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
	await Files.create(`./${componentName}/${componentName}.js`, Component.template(componentName, convertNameToCSSClass(componentName), settings.useSCSS));

	// Create tests
	await Files.create(`./${componentName}/${componentName}.test.js`, ComponentTest.template(componentName, convertNameToCSSClass(componentName), settings.useSCSS));

	if (settings.useSCSS) {

		// Create SCSS
		await Files.create(`./${componentName}/${componentName.toLowerCase()}.scss`, ComponentStyles.template(convertNameToCSSClass(componentName)));

	} else {

		// Create less
		await Files.create(`./${componentName}/${componentName.toLowerCase()}.less`, ComponentStyles.template(convertNameToCSSClass(componentName)));

	}

	// Create index
	await Files.create(`./${componentName}/index.js`, ComponentIndex.template(componentName));

	// Log finished
	Log.spacer();
	Log.success(`Finished creating ${componentName}`);

};

// Convert name to css class
function convertNameToCSSClass(componentName) {

	// Split name by uppercase
	let splitString = componentName.split(/(?=[A-Z])/);

	// Create class name
	let className = "";
	splitString.forEach((part, i) => {
		if (i === 0) {
			className += part;
		} else {
			className += `-${part}`;
		}
	});

	return className.toLowerCase();

}
