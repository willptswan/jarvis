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
			Log.error(`Error deleting ${config.id} config`);
			throw stderr;
		}

		// Delete gcloud config
		await deleteGCloudConfig(config);

		// Delete config
		await Config.deleteConfig(config, 'gcp');

		// Check if config was active and this isn't a reset
		if (config.active && !reset) {

			// Log activate another config
			Log.spacer();
			Log.notice('Please activate a gcp config');

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
	let config = await Config.chooseConfig('gcp');

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
	Log.spacer();
	Log.info(`Activating ${config.id} gcloud config...`);

	// Activate the gcloud config
	const { stdout, stderr } = await exec(`gcloud config configurations activate ${config.id}`);

	// Check the config was activated
	if (stderr.includes('Activated')) {
		Log.success(`Activated ${config.id} gcloud config...`);
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
	Log.spacer();
	Log.info('Storing config data...');
	await Config.setToStore(Constants.gcpConfigsKey, config, true);
	Log.success('Stored config data');

	// Log in
	await loginToGcloud();

};

/*
 * Helper Functions
*/

// Log in to gcloud
async function loginToGcloud() {

	// Log logging in
	Log.spacer();
	Log.info('Logging into gcloud...');

	// Log in
	const { stdout, stderr } = await exec('gcloud auth login --quiet');

	// Log success
	Log.success('Logged into gcloud');

}

// Create config in the gcloud cli
async function createConfig(config) {

	// Log creating config
	Log.spacer();
	Log.info(`Creating config ${config.id}...`);

	// Create config
	const { stdout, stderr } = await exec(`gcloud config configurations create ${config.id}`);

	// Check if the config was created
	if (stderr.includes('Created')) {

		// Log success
		Log.success(`Created config ${config.id}`);

		// Set account property
		await setConfigProperty('account', config.account);

		// Set project property
		await setConfigProperty('project', config.project);

	} else {
		Log.error(`Failed to create config ${config.id}`);
		throw stderr;
	}

}

// Set gcloud property
async function setConfigProperty(property, value) {

	// Log setting property
	Log.spacer();
	Log.info(`Setting ${value} to config ${property}...`);

	// Set property
	const { stdout, stderr } = await exec(`gcloud config set ${property} ${value}`);

	// Check that the property was set
	if (stderr.includes('Updated property')) {
		Log.success(`${value} set to config ${property}`);
	} else {
		Log.error(`Failed to set ${value} to config ${property}`);
		throw stderr;
	}

}

// Check for dummy config
async function checkDummyConfig() {

	// Check the store to see if the dummy config has already been set
	let isset = await Config.getFromStore(Constants.dummyGCPConfigSetKey);

	if (isset !== true) {

		// Log initialising jarvis gcp config
		Log.spacer();
  	Log.info('Initialising Jarvis GCP config...');

		// Create the dummy config
		const { stdout, stderr } = await exec('gcloud config configurations create jarvis-dummy');

		// Check if the config was created
		if (stderr.includes('Created')) {

			// Store that the config was created
			await Config.setToStore(Constants.dummyGCPConfigSetKey, true);

			// Log success
			Log.success('Initialised Jarvis GCP config');

		} else {
			Log.error('Error initialising Jarvis GCP config');
			throw stderr;
		}

	}

}

// Delete gcloud config
async function deleteGCloudConfig(config) {

	// Log deleting gcp config
	Log.spacer();
	Log.info(`Deleting ${config.id} from gcloud config...`);

	// Delete
	const { stdout, stderr } = await exec(`gcloud config configurations delete ${config.id} --quiet`);

	// Check if there was an error
	if (stderr.includes('Deleted')) {

		// Log success
		Log.success(`Deleted ${config.id} from gcloud config`);

	} else {
		throw stderr;
	}

}
