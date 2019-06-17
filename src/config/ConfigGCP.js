// Imports
const Config = require('./Config');
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Delete GCP config
exports.delete = async (config, reset) => {

	// Declare response
	let response = {};

	// Check if no config was passed
	if (config === null) {

		// Choose config to delete
		config = await Config.chooseConfig('gcp');

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

		// Check jarvis-dummy config has been created
		await checkDummyConfig();

		// Activate jarvis-dummy gcloud config so that we can delete our gcp config
		const { stdout, stderr } = await exec(`gcloud config configurations activate jarvis-dummy`);

		// Check jarvis-dummy was activated
		if (!stderr.includes('Activated')) {
			Log.standard(`Error deleting ${config.id} config`, 'error');
			throw stderr;
		}

		// Delete gcloud config
		await deleteGCloudConfig(config);

		// Delete config
		await Config.deleteConfig(config, 'gcp');

		// Check if config was active and this isn't a reset
		if (config.active && !reset) {

			// Log activate another config
			Log.spaced('Please activate a gcp config', 'notice');

			// Activate a new config
			await exports.activate();

		}

	} else {
		throw `config-delete aborted`;
	}

};

// Update GCP Config
exports.update = async () => {

	// Choose config to update
	config = await Config.chooseConfig('gcp');

	// Activate config
	await exports.activate(config.id);

	// Declare what keys can be updated
	let keys = ['account', 'project'];

	// Loop through keys
	for (const key of keys) {

		// Update config property
		config = await Config.updateConfigProperty(config, key);

	}

	// Set account property
	await setConfigProperty('account', config.account);

	// Set project property
	await setConfigProperty('project', config.project);

	// Store the updated config
	await Config.updateConfigs(config, 'gcp');

};

// Activate GCP Config
exports.activate = async (configId = null) => {

	// Get the config to activate
	let config;
	if (configId !== null) {

		// Get config
		config = await Config.getConfig(configId, 'gcp');

	} else {

		// Choose config
		config = await Config.chooseConfig('gcp');

	}

	// Activate config
	await Config.activate(config, 'gcp');

	// Log activating gcloud config
	Log.spaced(`Activating ${config.id} gcloud config...`, 'info');

	// Activate the gcloud config
	const { stdout, stderr } = await exec(`gcloud config configurations activate ${config.id}`);

	// Check the config was activated
	if (stderr.includes('Activated')) {
		Log.standard(`Activated ${config.id} gcloud config...`, 'success');
	} else {
		throw `Failed to activate ${config.id} gcloud config`;
	}

};

// New GCP Config
exports.new = async () => {

	// Check if dummy config has already been created and create one if it hasn't
	await checkDummyConfig();

	// De-activate all gcp configs
	await Config.deactivateAll('gcp');

	// Init config object
	let config = {
		active: true
	};

	// Ask for a config id
	let response = await Prompt.show({
		name: 'id',
		message: 'Config identifier',
		required: true
	});

	// Check if the id already exists
	let checkedId = await Config.idExists(response.id, 'gcp');
	config.id = checkedId;

	// Ask for the gcp account email and set the response to the config object
	response = await Prompt.show({
		name: 'account',
		message: 'GCP account email',
		required: true
	});
	config.account = response.account;

	// Ask for the gcp project and set the response to the config object
	response = await Prompt.show({
		name: 'project',
		message: 'GCP project',
		required: true
	});
	config.project = response.project;

	// Create the config in the gcloud cli
	await createConfig(config);

	// Store the config
	Log.spaced('Storing config data...', 'info');
	await Config.setToStore(Constants.gcpConfigsKey, config, true);
	Log.standard('Stored config data', 'success');


};

/*
 * Helper Functions
*/

// Create config in the gcloud cli
async function createConfig(config) {

	// Log creating config
	Log.spaced(`Creating config ${config.id}...`, 'info');

	// Create config
	const { stdout, stderr } = await exec(`gcloud config configurations create ${config.id}`);

	// Check if the config was created
	if (stderr.includes('Created')) {

		// Log success
		Log.standard(`Created config ${config.id}`, 'success');

		// Set account property
		await setConfigProperty('account', config.account);

		// Set project property
		await setConfigProperty('project', config.project);

	} else {
		Log.standard(`Failed to create config ${config.id}`, 'error');
		throw stderr;
	}

}

// Set gcloud property
async function setConfigProperty(property, value) {

	// Log setting property
	Log.spaced(`Setting ${value} to config ${property}...`, 'info');

	// Set property
	const { stdout, stderr } = await exec(`gcloud config set ${property} ${value}`);

	// Check that the property was set
	if (stderr.includes('Updated property')) {
		Log.standard(`${value} set to config ${property}`, 'success');
	} else {
		Log.standard(`Failed to set ${value} to config ${property}`, 'error');
		throw stderr;
	}

}

// Check for dummy config
async function checkDummyConfig() {

	// Check the store to see if the dummy config has already been set
	let isset = await Config.getFromStore(Constants.dummyGCPConfigSetKey);

	if (isset !== true) {

		// Log initialising jarvis gcp config
  	Log.spaced('Initialising Jarvis GCP config...', 'info');

		// Create the dummy config
		const { stdout, stderr } = await exec('gcloud config configurations create jarvis-dummy');

		// Check if the config was created
		if (stderr.includes('Created')) {

			// Store that the config was created
			await Config.setToStore(Constants.dummyGCPConfigSetKey, true);

			// Log success
			Log.standard('Initialised Jarvis GCP config', 'success');

		} else {
			Log.standard('Error initialising Jarvis GCP config', 'error');
			throw stderr;
		}

	}

}

// Delete gcloud config
async function deleteGCloudConfig(config) {

	// Log deleting gcp config
	Log.spaced(`Deleting ${config.id} from gcloud config...`, 'info');

	// Delete
	const { stdout, stderr } = await exec(`gcloud config configurations delete ${config.id} --quiet`);

	// Check if there was an error
	if (stderr.includes('Deleted')) {

		// Log success
		Log.standard(`Deleted ${config.id} from gcloud config`, 'success');

	} else {
		throw stderr;
	}

}
