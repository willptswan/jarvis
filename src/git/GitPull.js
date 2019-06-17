// Imports
const Log = require('../utils/Log');
const Config = require('../config/Config');
const Prompt = require('../utils/Prompt');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async () => {

	// Check active git config
	await Config.checkActiveConfig('git');

	// Get the active git config
	let config = await Config.getActive('git');

	// Log pulling changes
	Log.spaced(`Pulling changes from ${config.repo}...`, 'info');

	// Pull changes
	const { stdout, stderr } = await exec(`git pull git@github.com-${config.username}:${config.username}/${config.repo}.git`);

	// Check output
	if (stdout.includes('Updating')) {

		// Log success
		Log.standard(`Pulled changes from ${config.repo}`, 'success');

	} else if (stdout.includes('Already up to date')) {

		// Log already update to date
		Log.standard(`Local repo is already up to date with ${config.repo}`, 'notice');

	} else {
		throw stderr;
	}

};
