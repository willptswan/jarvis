// Imports
const Config = require('../config/Config');
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async () => {

	// Log what resetting does
	Log.spaced('Resetting Jarvis will do the following:', 'notice');
	Log.spacer();
	Log.standard('- Delete all configs', 'notice');
	Log.standard('- Delete all settings', 'notice');
	Log.spaced('Note: jarvis-dummy gcloud config will not be deleted as there has to always been one active gcloud config', 'notice');
	Log.spacer();

	// Ask if we are sure we want to reset
	let response = await Prompt.show({
		name: 'answer',
		message: 'Are you sure you want to reset Jarvis? Y/n',
		required: true
	});

	// Check answer
	if (response.answer.toLowerCase() === 'y') {

		// Delete all git configs
		await Config.deleteAllConfigs('git');

		// Delete all s3 configs
		await Config.deleteAllConfigs('s3');

		// Delete all gcp configs
		await Config.deleteAllConfigs('gcp');

	} else {
		throw 'reset aborted';
	}

};
