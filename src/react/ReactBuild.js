// Imports
const Log = require('../utils/Log');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async () => {

	// Build and run
	await buildAndRun();

};

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
		Log.success(`Webpack is now serving and watching the project`);
		Log.notice('A new terminal window has been opened for this process');
	}

}
