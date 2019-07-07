// Imports
const Constants = require('../utils/Constants');
const Store = require('data-store');
const store = new Store({ path: Constants.jarvisConfigPath()});
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ConfigGCP = require('./ConfigGCP');
const ConfigGit = require('./ConfigGit');
const ConfigS3 = require('./ConfigS3');
const ConfigEB = require('./ConfigEB');
const Settings = require('../utils/Settings');

/*
 * Features
*/

// New Config
exports.new = async (type) => {

	// Check which type of config we are creating
	if (type === 'git') {
		await ConfigGit.new();
	} else if (type === 'gcp') {
		await ConfigGCP.new();
	} else if (type === 's3') {
		await ConfigS3.new();
	} else if (type === 'eb') {
		await ConfigEB.new();
	} else {
		throw 'Please enter a valid config type';
	}

};

// Switch config
exports.switch = async (type) => {

	// Check which type of config we are switching
	if (type === 'git') {
		await ConfigGit.activate();
	} else if (type === 'gcp') {
		await ConfigGCP.activate();
	} else if (type === 's3') {
		await ConfigS3.activate();
	} else if (type === 'eb') {
		await ConfigEB.activate();
	} else {
		throw 'Please enter a valid config type';
	}

};

// View config
exports.view = async (type) => {

	// Check which type of config we are switching
	if (type === 'git') {
		let configs = await exports.getFromStore(Constants.gitConfigsKey);
		await exports.display(configs, 'git');
	} else if (type === 'gcp') {
		let configs = await exports.getFromStore(Constants.gcpConfigsKey);
		await exports.display(configs, 'gcp');
	} else if (type === 's3') {
		let configs = await exports.getFromStore(Constants.s3ConfigsKey);
		await exports.display(configs, 's3');
	} else if (type === 'eb') {
		let configs = await exports.getFromStore(Constants.ebConfigsKey);
		await exports.display(configs, 'eb');
	} else if (type === 'all') {

		Log.spacer();
		Log.notice('Git Configs:');
		let configs = await exports.getFromStore(Constants.gitConfigsKey);
		await exports.display(configs, 'git');

		Log.spacer();
		Log.notice('GCP Configs:');
		configs = await exports.getFromStore(Constants.gcpConfigsKey);
		await exports.display(configs, 'gcp');

		Log.spacer();
		Log.notice('S3 Configs:');
		configs = await exports.getFromStore(Constants.s3ConfigsKey);
		await exports.display(configs, 's3');

	} else {
		throw 'Please enter a valid config type';
	}

};

// Update config
exports.update = async (type) => {

	// Check which type of config we are switching
	if (type === 'git') {
		await ConfigGit.update();
	} else if (type === 'gcp') {
		await ConfigGCP.update();
	} else if (type === 's3') {
		await ConfigS3.update();
	} else if (type === 'eb') {
		await ConfigEB.update();
	} else {
		throw 'Please enter a valid config type';
	}

};

// Delete config
exports.delete = async (type, config = null, reset = false) => {

	// Check which type of config we are switching
	if (type === 'git') {
		await ConfigGit.delete(config, reset);
	} else if (type === 'gcp') {
		await ConfigGCP.delete(config, reset);
	} else if (type === 's3') {
		await ConfigS3.delete(config, reset);
	} else if (type === 'eb') {
		await ConfigEB.delete(config, reset);
	} else {
		throw 'Please enter a valid config type';
	}

};

/*
 * Shared Config Functions
*/

// Delete all git configs
exports.deleteAllConfigs = async (type) => {

	// Log deleting all configs
	Log.spacer();
	Log.info(`Deleting all ${type} configs...`);

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check that there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Loop through all configs
		for (config of configs) {

		// Delete config
			await exports.delete(type, config, true);

		}

	}

	// Log deleted all configs
	Log.spacer();
	Log.success(`Deleted all ${type} configs...`);

};

exports.updateConfigProperty = async (config, key) => {

	if (key === 'region') {

 		let region = await exports.chooseAWSRegion('', `What would you like to update the region to? (${config[key]})`, config[key]);
		config[key] = region;

	} else {

		// Ask for the new property value
		let response = await Prompt.show({
			name: 'value',
			message: `What would you like to update the ${key} to? (${config[key]})`,
			required: false
		});

		// Check if the property was changed
		if (response.value !== '' && response.value !== null && response.value !== undefined) {

			// Update the property
			config[key] = response.value;

		}

	}

	// Return the update config
	return config;

};

// Display configs
exports.display = async (configs, type, keys = null) => {

	// Check if configs is empty
	if (configs === undefined || configs.length === 0) {

		Log.spacer();
		Log.notice(`There are currently no stored ${type} configs`);
		Log.spacer();

	} else {

		Log.spacer();

	  // Check if configs is not an array
		if (!Array.isArray(configs)) {

		// Turn config into an array
			configs = [configs];

		}

		// Loop through all configs
		configs.forEach((config) => {

			// Check if no keys have been passed
			if (keys === null) {

				// Check config type and populate keys array
				if (type === 'git') {
					keys = ['active', 'id', 'username', 'email', 'personalAccessToken', 'githubKeyTitle', 'githubKeyId'];
				} else if (type === 'gcp') {
					keys = ['active', 'id', 'account', 'project'];
				} else if (type === 's3') {
					keys = ['active', 'id', 'region', 'accessKey', 'secretAccessKey', 'bucket'];
				} else if (type === 'eb') {
					keys = ['active', 'id', 'region', 'accessKey', 'secretAccessKey'];
				} else {
					Log.error('Error displaying configs');
					throw 'Invalid config type';
				}

			}

			// Loop through keys
			keys.forEach((key) => {

				// Log the key
				Log.notice(`${key}: ${config[key]}`);

			});

			Log.spacer();

		});

	}

};

// Get data from store
exports.getFromStore = async (key) => {

	// Get the data from the store
	let data = await store.get(key);

	return data;

};

// Set data to store
exports.setToStore = async (key, data, inArray = false) => {

	// Check if data should be in an array
	if (inArray) {

		// Get the current stored data
		let currentData = await exports.getFromStore(key);

		// Check if there is any current data
		if (currentData === undefined || currentData.length === 0) {
			data = [data];
		} else {
			currentData.push(data);
	    data = currentData;
		}

	}

	// Store the data
	return await store.set(key, data);

};

// Check whether an id already exists in a list of configs
exports.idExists = async (configId, type) => {

	// Log checking id
	Log.spacer();
	Log.info(`Checking that ${configId} is unique...`);

	// Workout the key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get the configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Filter configs where any ids match
		let matchedConfigs = configs.filter((config) => {
  		return config.id === configId;
  	});

		// Check if there were any matches
		if (matchedConfigs.length !== 0 || configId === 'jarvis-dummy') {

			// Log that the id is not unique
			Log.notice(`${configId} is not a unique ${type} config id`);

			// Ask for a new config id
			let response = await Prompt.show({
				name: 'id',
				message: 'Please enter a new config id',
				required: true
			});

			return await exports.idExists(response.id, type);

		} else {
			Log.success(`${configId} is unique`);
			Log.spacer();
  		return configId;
		}

	} else {
		Log.success(`${configId} is unique`);
		Log.spacer();
		return configId;
	}

};

exports.activate = async (activeConfig, type) => {

	// Deactivate all configs
	await exports.deactivateAll(type);

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Log activating config
		Log.spacer();
  	Log.info(`Activating ${activeConfig.id} ${type} config...`);

		// Create an activated variable - this will allow us to check if the passed config matches and stored configs
		let activated = false;

		// Update configs
		configs = configs.map((config) => {

			// Check if this is the correct config
			if (activeConfig.id === config.id) {
  			// Change active property
  			config.active = true;
				activated = true;
			}

			// Return the updated config
			return config;

		});

		// Check if a config was activated
		if (activated) {

		  // Store updated configs
			await exports.setToStore(key, configs);

			// Log success
			Log.success(`Activated ${activeConfig.id} ${type} config...`);

		} else {
			Log.error(`Error activating ${type} config`);
			throw `No stored config with id ${activeConfig.id} found`;
		}

	} else {
		Log.error(`Error activating ${type} config`);
		throw `No stored ${type} configs found`;
	}

};

exports.deactivateAll = async (type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Log deactivating all configs
		Log.spacer();
  	Log.info(`De-Activating all ${type} configs...`);

		// Update configs
		configs = configs.map((config) => {

			// Change active property
			config.active = false;

			// Return the updated config
			return config;

		});

		// Store updated configs
		await exports.setToStore(key, configs);

		// Log success
		Log.success(`De-Activated all ${type} configs`);

	}

};

// Get active config
exports.getActive = async (type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Filter out the active config
		let config = configs.filter((config) => {
  		return config.active === true;
  	});

		// Get the config out of the array
		config = config[0];

		// Return the config
		return config;

	} else {
		Log.error(`Error getting active ${type} config`);
		throw `No stored ${type} configs found`;
	}

};

// Choose config
exports.chooseConfig = async (type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check that there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Log which config would you like
		Log.spacer();
		Log.notice('Which config would you like?');

		// Display configs
		await exports.display(configs, type, ['id']);

		// Ask which config to choose
		let response = await Prompt.show({
			name: 'id',
			message: 'Which config would you like?',
			required: true
		});

		// Get config
		let config = await exports.getConfig(response.id, type);

		// Return config
		return config;

	} else {
		Log.error(`Error choosing ${type} config`);
		throw `There are currently no stored ${type} configs`;
	}

};

// Get config
exports.getConfig = async (configId, type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check that there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Filter out the config that we want
		let config = configs.filter((config) => {
  		return config.id === configId;
  	});

		// Check that a config was found
		if (config.length !== 0) {

			// Take the config out of the array
			config = config[0];

			// Return the config
			return config;

		} else {
			Log.error(`Error getting ${type} config`);
			throw `No ${type} configs with id ${configId} found`;
		}

	} else {
		Log.error(`Error getting ${type} config`);
		throw `There are currently no stored ${type} configs`;
	}

};

// Update configs
exports.updateConfigs = async (updatedConfig, type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Log updating configs
		Log.spacer();
  	Log.info(`Updating ${updatedConfig.id} ${type} config...`);

		// Update configs
		configs = configs.map((config) => {

			// Check if this is the correct config
			if (updatedConfig.id === config.id) {
  			// Update
  			config = updatedConfig;
			}

			// Return the updated config
			return config;

		});

		// Store updated configs
		await exports.setToStore(key, configs);

		// Log success
		Log.success(`Updated ${updatedConfig.id} ${type} config...`);

	} else {
		Log.error(`Error updating ${type} config`);
		throw `No stored ${type} configs found`;
	}

};

// Delete config
exports.deleteConfig = async (deleteConfig, type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else if (type === 'eb') {
		key = Constants.ebConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Make sure there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Log deleting config
		Log.spacer();
		Log.info(`Deleting ${deleteConfig.id} config...`);

		// Filter out the config to be deleted
		let updatedConfigs = configs.filter((config) => {
			return config.id !== deleteConfig.id;
		});

		// Check that the config to delete matched a config and was removed
		if (updatedConfigs.length !== configs.length) {

			// Store updated configs
  		await exports.setToStore(key, updatedConfigs);

			// Log success
			Log.success(`Deleted ${deleteConfig.id} config`);

		} else {
			Log.error(`Error deleting ${deleteConfig.id}`);
			throw `No stored ${type} config with id ${deleteConfig.id} was found`;
		}

	} else {
		Log.error(`Error deleting ${deleteConfig.id}`);
		throw `No stored ${type} configs found`;
	}

};

// Check active config
exports.checkActiveConfig = async (type) => {

	// Check if active config should be checked
	let settings = await Settings.get();
	if (settings.checkActiveConfig) {

		// Log checking active config
		Log.spacer();
		Log.info(`Checking active ${type} config...`);

		// Get active config
		let config = await exports.getActive(type);

		// Set keys to display
		keys = ['active', 'id'];
		if (type === 'git') {
			keys.push('username');
			keys.push('email');
			keys.push('repo');
		} else if (type === 'gcp') {
			keys.push('account');
			keys.push('project');
		} else if (type === 's3') {
			keys.push('region');
			keys.push('bucket');
		} else if (type === 'eb') {
			keys.push('region');
		}

		// Display this config
		await exports.display(config, type, keys);

		// Ask if this is the correct config
		let response = await Prompt.show({
			name: 'answer',
			message: `Is this the correct ${type} config? Y/n`,
			required: true
		});

			// Check answer
		if (response.answer.toLowerCase() === 'y') {

			// Log checked
			Log.success(`Checked active ${type} config`);

		} else {

			// Switch configs
			if (type === 'git') {
				await ConfigGit.activate();
			} else if (type === 'gcp') {
				await ConfigGCP.activate();
			} else if (type === 's3') {
				await ConfigS3.activate();
			} else {
				throw 'Please enter a valid config type';
			}

		}

	}

};

// Choose aws region
exports.chooseAWSRegion = async (type, message = null, defaultRegion = null) => {

	// Format message
	if (message === null) {
		message = `${type} region`;
	}

	// Format required
	let required = false;
	if (defaultRegion === null) {
		required = true;
	}

	// Log all AWS regions
	Log.spacer();

	Constants.awsRegions.forEach((region) => {
		Log.notice(`${region.region} - ${region.description}`);
	});

	Log.spacer();

	// Ask for the region
	let response = await Prompt.show({
		name: 'region',
		message: message,
		required: required
	});

	// Get default region if not required
	if (!required && response.region === '') {
		response.region = defaultRegion;
	}

	// Check the region is valid
	let regions = Constants.awsRegions.filter((region) => {
		return response.region === region.region;
	});
	if (regions.length !== 0) {
		return response.region;
	} else {
		Log.spacer();
		Log.notice('Please choose a valid region');
		Log.spacer();
		return await exports.chooseAWSRegion(type, message);
	}

};
