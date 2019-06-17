// Imports
const prompt = require('prompt-async');
const Log = require('./Log');

// Show prompt
exports.show = async (config) => {

	// Check that the config has the values needed
	if (checkConfig(config)) {

		// Start prompt
		prompt.start();

		try {

			// Show prompt with passed config
			const response = await prompt.get({
				name: config.name,
				description: config.message,
				required: config.required
			});

			// Return the response
			return response;

		} catch (err) {
			Log.standard('Failed to show prompt', 'error');
			throw err;
		}

	}

};

function checkConfig(config) {

	// Set checks to false initially
	let nameCheck = false;
	let messageCheck = false;
	let requiredCheck = false;

	// Check name
	if (config.name !== '' && config.name !== null && typeof(config.name) !== 'undefined') {
		nameCheck = true;
	} else {
		Log.standard('Invalid name value in Prompt config', 'error');
	}

	// Check message
	if (config.message !== '' && config.message !== null && typeof(config.message) !== 'undefined') {
		messageCheck = true;
	} else {
		Log.standard('Invalid message value in Prompt config', 'error');
	}

	// Check required
	if (config.required === true || config.required === false) {
		requiredCheck = true;
	} else {
		Log.standard('Invalid required value in Prompt config', 'error');
	}

	// Check if all checks passed
	if (nameCheck && messageCheck && requiredCheck) {
		return true;
	} else {
		throw 'Invalid config passed to Prompt';
	}

}
