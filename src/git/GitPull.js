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
	Log.spacer();
	Log.info(`Pulling changes from ${config.repo}...`);

	// Pull changes
	const { stdout, stderr } = await exec(`git pull git@github.com-${config.username}:${config.username}/${config.repo}.git`);

	// Check output
	if (stdout.includes('Updating')) {

		// Log success
		Log.success(`Pulled changes from ${config.repo}`);

	} else if (stdout.includes('Already up to date')) {

		// Log already update to date
		Log.notice(`Local repo is already up to date with ${config.repo}`);

	} else {
		throw stderr;
	}

};
