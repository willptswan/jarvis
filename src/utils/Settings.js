// Imports
const Constants = require('./Constants');
const Store = require('data-store');
const store = new Store({ path: Constants.jarvisConfigPath()});
const Prompt = require('./Prompt');
const Log = require('./Log');

// Init
exports.init = async () => {

	// Get settings
	let storedSettings = await store.get(Constants.settingsKey);

	// Declare settings
	let settings = {};

	// Check if settings have already been initialised
	if (storedSettings === undefined || storedSettings === null || storedSettings === {}) {

		/*
     * Init all settings
    */

		// Loop through settings
		let settingsKeys = Object.keys(Constants.defaultSettings);
		for (setting of settingsKeys) {

			// Ask for setting value
			let settingValue = await askForSetting(setting);
			settings[setting] = settingValue;

		}

		// Log storing settings
		Log.spacer();
		Log.info('Initialising settings...');

		// Store the settings
		await store.set(Constants.settingsKey, settings);

		// Log success
		Log.success('Initialised settings');
		Log.spacer();

	} else {

		/*
     * Init new settings
    */

		// Variable to hold if any settings have been initialised
		let settingsInitialised = false;

		// Loop through settings
		let settingsKeys = Object.keys(Constants.defaultSettings);
		for (setting of settingsKeys) {

			// Check if stored setting hasn't been initialised
			if (!storedSettings.hasOwnProperty(setting)) {

				// Ask for setting value
				let settingValue = await askForSetting(setting);
				settings[setting] = settingValue;

				// Set settings initialised
				settingsInitialised = true;

			} else {
				settings[setting] = storedSettings[setting];
			}

		}

		// Store new settings
		if (settingsInitialised) {

			// Log storing settings
			Log.spacer();
  		Log.info('Initialising new settings...');

  		// Store the settings
  		await store.set(Constants.settingsKey, settings);

  		// Log success
  		Log.success('Initialised new settings');
  		Log.spacer();

		}

	}

};

// Update
exports.update = async () => {

	// Get settings
	let storedSettings = await store.get(Constants.settingsKey);

	// Declare settings
	let settings = {};

	// Loop through settings
	let settingsKeys = Object.keys(storedSettings);
	for (setting of settingsKeys) {

		// Ask for setting value
		let settingValue = await askForSetting(setting, storedSettings);
		settings[setting] = settingValue;

	}

	// Log storing settings
	Log.spacer();
	Log.info('Updating settings...');

	// Store the settings
	await store.set(Constants.settingsKey, settings);

	// Log success
	Log.success('Updated new settings');
	Log.spacer();

};

// Reset
exports.reset = async () => {

	// Log resetting
	Log.spacer();
	Log.info('Resetting settings...');

	// Declare settings
	let settings = {};

	// Loop through settings
	let settingsKeys = Object.keys(Constants.defaultSettings);
	settingsKeys.forEach((setting) => {

		settings[setting] = Constants.defaultSettings[setting];

	});

	// Store settings
	store.set(Constants.settingsKey, settings);

	// Log success
	Log.success('Reset settings');

};

exports.get = async () => {

	let settings = await store.get(Constants.settingsKey);
	return settings;

};

exports.getSync = () => {
	let settings = store.get(Constants.settingsKey);
	return settings;
};

exports.view = async () => {

	// Log settings
	Log.spacer();
	Log.notice('Settings:');
	Log.spacer();

	// Get settings
	let settings = await store.get(Constants.settingsKey);

	// Loop through settings and display them
	let settingsKeys = Object.keys(settings);
	for (setting of settingsKeys) {
		Log.notice(`${setting}: ${settings[setting]}`);
	}

	// Spacer
	Log.spacer();

};

/*
 * Helper Functions
*/

// Ask for setting
async function askForSetting(setting, settings = null) {

	let defaultSetting = 'n';
	if (settings === null) {
		if (Constants.defaultSettings[setting]) {
			defaultSetting = 'y';
		}
	} else {
		if (settings[setting]) {
			defaultSetting = 'y';
		}
	}

	// Create message
	let message;
	if (setting === 'checkActiveConfig') {
		message = `Would you like Jarvis to always check the active config before carrying out a command? Y/n (${defaultSetting})`;
	} else if (setting === 'useSCSS') {
		message = `Would you like to use SCSS instead of LESS? Y/n (${defaultSetting})`;
	} else if (setting === 'autoCheckUpdates') {
		message = `Would you like Jarvis to automatically check for updates? Y/n (${defaultSetting})`;
	}

	// Ask for setting
	let response = await Prompt.show({
		name: 'answer',
		message: message,
		required: false
	});

	// Check answer
	if (response.answer.toLowerCase() === 'y') {
		return true;
	} else if (response.answer === '') {
		if (defaultSetting === 'y') {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}

}
