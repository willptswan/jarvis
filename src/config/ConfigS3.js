// Imports
const Config = require('./Config');
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Delete S3 config
exports.delete = async (config, reset) => {

	// Declare response
	let response = {};

	// Check if no config was passed
	if (config === null) {

		// Choose config to delete
		config = await Config.chooseConfig('s3');

		// Create check message depending on whether the config is active
		let message = `Are you sure you want to delete ${config.id}? Y/n`;
		if (config.active) {
			message = `${config.id} is currently active, are you sure you want to delete it? Y/n`;
		}

		// Ask if we want to continue
		response = await Prompt.show({
			name: 'answer',
			message: message,
			required: true
		});

	} else {
		response.answer = 'y';
	}

	// Check answer
	if (response.answer.toLowerCase() === 'y') {

		// Delete config
		await Config.deleteConfig(config, 's3');

		// Check if config was active and this isn't a reset
		if (config.active && !reset) {

			// Log activate another config
			Log.spacer();
			Log.notice('Please activate an S3 config');

			// Activate a new config
			await exports.activate();

		}

	} else {
		throw `config-delete aborted`;
	}

};

// Update S3 Config
exports.update = async () => {

	// Choose config to update
	let config = await Config.chooseConfig('s3');

	// Declare what keys can be updated
	let keys = ['region', 'accessKey', 'secretAccessKey', 'bucket'];

	// Loop through keys
	for (const key of keys) {

		// Update config property
		config = await Config.updateConfigProperty(config, key);

	}

	// Store the updated config
	await Config.updateConfigs(config, 's3');

	// Ask if we want to make this config active
	let response = await Prompt.show({
		name: 'answer',
		message: 'Would you like to make this config active? Y/n',
		required: true
	});

	// Check answer
	if (response.answer.toLowerCase() === 'y') {

		// Activate config
		await exports.activate(config.id);

	}

};

// Activate S3 Config
exports.activate = async (configId = null) => {

	// Get the config to activate
	let config;
	if (configId !== null) {

		// Get config
		config = await Config.getConfig(configId, 's3');

	} else {

		// Choose config
		config = await Config.chooseConfig('s3');

	}

	// Activate config
	await Config.activate(config, 's3');

};

// New S3 Config
exports.new = async () => {

	// De-activate all s3 configs
	await Config.deactivateAll('s3');

	// Init config object
	let config = {
		active: true
	};

	// Ask for an id
	let response = await Prompt.show({
		name: 'id',
		message: 'Config identifier',
		required: true
	});

	// Check if the id already exists
	let checkedId = await Config.idExists(response.id, 's3');
	config.id = checkedId;

	// Ask for the region and set it to the config
	let region = await Config.chooseAWSRegion('S3');
	config.region = region;

	// Ask for the access key and set it to the config
	response = await Prompt.show({
		name: 'accessKey',
		message: 'S3 access key',
		required: true
	});
	config.accessKey = response.accessKey;

	// Ask for the secret access key and set it to the config
	response = await Prompt.show({
		name: 'secretAccessKey',
		message: 'S3 secret access key',
		required: true
	});
	config.secretAccessKey = response.secretAccessKey;

	// Ask for the bucket name and set it to the config
	response = await Prompt.show({
		name: 'bucket',
		message: 'S3 bucket name',
		required: true
	});
	config.bucket = response.bucket;

	// Log storing s3 config
	Log.spacer();
	Log.info('Storing S3 config...');

	// Store
	await Config.setToStore(Constants.s3ConfigsKey, config, true);

	// Log success
	Log.success('Stored S3 config');

};
