// Imports
const Config = require('./Config');
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const Files = require('../utils/Files');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Delete EB config
exports.delete = async (config, reset) => {

	// Declare response
	let response = {};

	// Check if no config was passed
	if (config === null) {

		// Choose config to delete
		config = await Config.chooseConfig('eb');

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

		// Remove credentials from credentials file
		await removeCredentials(config);

		// Remove config from config file
		await removeConfig(config);

		// Delete config
		await Config.deleteConfig(config, 'eb');

		// Check if config was active and this isn't a reset
		if (config.active && !reset) {

			// Log activate another config
			Log.spacer();
			Log.notice('Please activate an eb config');

			// Activate a new config
			await exports.activate();

		}

	} else {
		throw `config-delete aborted`;
	}

};

// Update EB config
exports.update = async () => {

	// De-activate all eb configs
	await Config.deactivateAll('eb');

	// Choose config to update
	config = await Config.chooseConfig('eb');

	// Save the old config
	let oldConfig = {};
	oldConfig.id = config.id;
	oldConfig.region = config.region;
	oldConfig.accessKey = config.accessKey;
	oldConfig.secretAccessKey = config.secretAccessKey;

	// Declare what keys can be updated
	let keys = ['region', 'accessKey', 'secretAccessKey'];

	// Loop through keys
	for (const key of keys) {

		// Update config property
		config = await Config.updateConfigProperty(config, key);

	}

	// Update credentials file
	await updateCredentialsFile(config, oldConfig);

	// Update config file
	await updateConfigFile(config, oldConfig);

	// Update .elasticbeanstalk/config.yml
	await updateEBConfig(config, oldConfig);

	// Store the updated config
	await Config.updateConfigs(config, 'eb');

	// Activate config
	await exports.activate(config.id);

};

// Activate EB config
exports.activate = async (configId = null) => {

	// Get the config to activate
	let config;
	if (configId !== null) {

		// Get config
		config = await Config.getConfig(configId, 'eb');

	} else {

		// Choose config
		config = await Config.chooseConfig('eb');

	}

	// Activate config
	await Config.activate(config, 'eb');

};

// New EB config
exports.new = async () => {

	// Log warning
	Log.spacer();
	Log.notice('Elastic Beanstalk configs require your AWS IAM user to have the following roles:');
	Log.notice('- ElasticLoadBalancingFullAccess', 1);
	Log.notice('- AWSElasticBeanstalkFullAccess', 1);
	Log.spacer();

	// Ask to continue
	let response = await Prompt.show({
		name: 'answer',
		message: 'Do you want to continue? Y/n',
		required: true
	});

	// Check answer
	if (response.answer.toLowerCase() !== 'y') {
		throw 'config-new eb aborted';
	}

	// De-activate all EB configs
	await Config.deactivateAll('eb');

	// Init config object
	let config = {
		active: true
	};

	// Ask for an id
	response = await Prompt.show({
		name: 'id',
		message: 'Config identifier',
		required: true
	});

	// Check if the id already exists
	let checkedId = await Config.idExists(response.id, 'eb');
	config.id = checkedId;

	// Ask for region
	let region = await Config.chooseAWSRegion('Elastic Beanstalk');
	config.region = region;

	// Ask for the access key
	response = await Prompt.show({
		name: 'accessKey',
		message: 'Elastic Beanstalk access key',
		required: true
	});
	config.accessKey = response.accessKey;

	// Ask for the secret access key
	response = await Prompt.show({
		name: 'secretAccessKey',
		message: 'Elastic Beanstalk secret access key',
		required: true
	});
	config.secretAccessKey = response.secretAccessKey;

	// Append config to credentials file
	await appendCredentialsFile(config);

	// Append config to config file
	await appendConfigFile(config);

	// Log storing EB config
	Log.spacer();
	Log.info('Storing Elastic Beanstalk config...');

	// Store
	await Config.setToStore(Constants.ebConfigsKey, config, true);

	// Log success
	Log.success('Stored Elastic Beanstalk config');

};

/*
 * Helper functions
*/

// Remove credentials from credentials file
async function removeCredentials(config) {

	// Format contents
	let search = `[${config.id}]
aws_access_key_id=${config.accessKey}
aws_secret_access_key=${config.secretAccessKey}`;

	// Log replacing
	Log.spaced('Removing credentials from credentials file...', 'info');

	// Replace credentials in credentials file
	await Files.replaceContents(`${Constants.rootUserPath()}.aws/credentials`, search, '');

	// Log success
	Log.success('Removed credentials from credentials file');

}

// Remove config from config file
async function removeConfig(config) {

	// Format contents
	let search = `[${config.id}]
region=${config.region}`;

	// Log replacing
	Log.spacer();
	Log.info('Removing config from config file...');

	// Replace config in config file
	await Files.replaceContents(`${Constants.rootUserPath()}.aws/config`, search, '');

	// Log success
	Log.success('Removed config from config file');

}

// Update .elasticbeanstalk/config.yml
async function updateEBConfig(config, oldConfig) {

	// Check if the file exists
	let exists = Files.exists(`./.elasticbeanstalk/config.yml`);

	if (exists) {

		// Ask if it should be updated
		let response = await Prompt.show({
			name: 'answer',
			message: 'Would you like to update the region in ./.elasticbeanstalk/config.yml? Y/n',
			required: true
		});

		// Check answer
		if (response.answer.toLowerCase() === 'y') {

			let search = `default_region: ${oldConfig.region}`;
			let replace = `default_region: ${config.region}`;

			// Log updating
			Log.spacer();
    	Log.info('Updating ./.elasticbeanstalk/config.yml file...');

    	// Update credentials file
    	await Files.replaceContents(`./.elasticbeanstalk/config.yml`, search, replace);

    	// Log success
    	Log.success('Updated ./.elasticbeanstalk/config.yml file');

		}

	}

}

// Update credentials file
async function updateCredentialsFile(config, oldConfig) {

	// Format old contents
	let contentsOld = `[${config.id}]
aws_access_key_id=${oldConfig.accessKey}
aws_secret_access_key=${oldConfig.secretAccessKey}`;

	// Format new contents
	let contents = `[${config.id}]
aws_access_key_id=${config.accessKey}
aws_secret_access_key=${config.secretAccessKey}`;

	// Log updating
	Log.spacer();
	Log.info('Updating credentials file...');

	// Update credentials file
	await Files.replaceContents(`${Constants.rootUserPath()}.aws/credentials`, contentsOld, contents);

	// Log success
	Log.success('Updated credentials file');

}

// Update config file
async function updateConfigFile(config, oldConfig) {

	// Format old contents
	let contentsOld = `
[${config.id}]
region=${oldConfig.region}

  `;

	// Format new contents
	let contents = `
[${config.id}]
region=${config.region}

  `;

	// Log updating
	Log.spacer();
	Log.info('Updating config file...');

	// Update config file
	await Files.replaceContents(`${Constants.rootUserPath()}.aws/config`, contentsOld, contents);

	// Log success
	Log.success('Updated config file');

}

// Append config file
async function appendConfigFile(config) {

	// Create AWS folder
	await createAWSFolder();

	// Format contents
	let contents = `
[${config.id}]
region=${config.region}

  `;

	// Check if the config file exists
	let exists = await Files.exists(`${Constants.rootUserPath()}.aws/config`);

	if (exists) {

		// Log updating config file
		Log.spacer();
		Log.info('Updating config file...');

		await Files.append(`${Constants.rootUserPath()}.aws/config`, contents);

	} else {

		// Create credentials file
		Log.spacer();
		Log.info('Creating config file...');

		await Files.create(`${Constants.rootUserPath()}.aws/config`, contents);

	}

}

// Update credentials file
async function appendCredentialsFile(config) {

	// Create AWS folder
	await createAWSFolder();

	// Format contents
	let contents = `
[${config.id}]
aws_access_key_id=${config.accessKey}
aws_secret_access_key=${config.secretAccessKey}

  `;

	// Check if the credentials file exists
	let exists = await Files.exists(`${Constants.rootUserPath()}.aws/credentials`);

	if (exists) {

		// Log updating credentials file
		Log.spacer();
		Log.info('Updating credentials file...');

		await Files.append(`${Constants.rootUserPath()}.aws/credentials`, contents);

	} else {

		// Create credentials file
		Log.spacer();
		Log.info('Creating credentials file...');

		await Files.create(`${Constants.rootUserPath()}.aws/credentials`, contents);

	}


}

// Check aws folder exists
async function createAWSFolder() {

	// Check if the .aws folder doesn't exist
	let exists = await Files.exists(`${Constants.rootUserPath()}.aws/`);

	if (!exists) {

		// Log creating .aws folder
		Log.spacer();
		Log.info(`Creating ${Constants.rootUserPath()}.aws...`);

		// Create .aws folder
		await Files.makeDir(`${Constants.rootUserPath()}.aws`);

	}

}
