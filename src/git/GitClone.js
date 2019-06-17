// Imports
const Log = require('../utils/Log');
const Config = require('../config/Config');
const Prompt = require('../utils/Prompt');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async (repoName) => {

	// Check active git config
	await Config.checkActiveConfig('git');

	// Get the active git config
	let config = await Config.getActive('git');

	// Clone repo
	await cloneRepo(config);

};

// Clone repo
async function cloneRepo(config) {

	// Log cloning repo
	Log.spaced(`Cloning ${repoName}...`, 'info');

	// Clone repo
	const { stdout, stderr } = await exec(`git clone git@github.com-${config.username}:${config.username}/${repoName}.git`);

	// Check for errors
	if (stderr.includes('Cloning into')) {

		// Log success
		Log.standard(`Cloned ${repoName}`, 'success');

	} else {
		throw stderr;
	}

}
