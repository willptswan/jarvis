// Imports
const Log = require('../utils/Log');
const ConfigGit = require('../config/ConfigGit');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async () => {

	// Log installing npm packages
	Log.spacer();
	Log.info('Initialising git...');

	// Init
	await runInit();

	// Switch git config - this makes sure we have the correct active config and repo
	await ConfigGit.activate(null, true);

};

// Run init
async function runInit() {

	const { stdout, stderr } = await exec('git init');

	// Check for error
	if (stderr) {
		Log.error('Error initialising git');
		throw stderr;
	} else {
		Log.success('Git initialised');
	}

}

