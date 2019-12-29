// Imports
const Log = require('../utils/Log');
const Files = require('../utils/Files');
const Config = require('../config/Config');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async () => {

	// Update index.html
	await updateIndexHTML();

	// Build and run
	await buildAndRun();

};

// Update index.html
async function updateIndexHTML() {

	// Check active s3 config
	await Config.checkActiveConfig('s3');

	// Get the active s3 config
	let config = await Config.getActive('s3');

	// Log updating
	Log.spacer();
	Log.info('Updating index.html...');

	// Update js
	await Files.replaceContents('./index.html', `https://${config.bucket}.s3.${config.region}.amazonaws.com/index.js.gz`, '/build/index.js');

	// Update css
	await Files.replaceContents('./index.html', `https://${config.bucket}.s3.${config.region}.amazonaws.com/index.css.gz`, '/build/index.css');

	// Log success
	Log.success('Updated index.html', 'success');

}

// Build and run
async function buildAndRun() {

	// Log build and running
	Log.spacer();
	Log.info(`Building and running project...`);

	// Build and run
	// Note: This is mac specific
	const { stdout, stderr } = await exec(`osascript -e 'tell application "Terminal" to do script "cd ${process.cwd()}; npm run build;"'`);

	// Check that there was no error
	if (stderr !== "" && stderr !== null && typeof(stderr) !== 'undefined') {
		Log.error(stderr);
	} else {
		Log.success(`Webpack is now serving and watching project`);
		Log.notice('A new terminal window has been opened for this process');
	}

}
