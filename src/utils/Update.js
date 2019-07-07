// Imports
const Constants = require('./Constants');
const Store = require('data-store');
const store = new Store({ path: Constants.jarvisConfigPath()});
const Prompt = require('./Prompt');
const Log = require('./Log');
const Settings = require('./Settings');
const LatestVersion = require('latest-version');

// Check for updates
exports.check = async () => {

	// Check if updates should be automatically checked
	let settings = await Settings.get();
	if (settings.autoCheckUpdates) {

		// Check whether a check has already been done today
		let check = await shouldCheck();

		if (check) {

			// Log checking for updates
			Log.spacer();
			Log.info('Checking for updates...');

			// Get the latest version
			let latestVersion = await LatestVersion('@willptswan/jarvis');

			// Check latest version against current version
			if (latestVersion !== Constants.version) {

				// Log new version available
				Log.spacer();
				Log.notice(`Jarvis version ${latestVersion} is now availble`);
				Log.notice(`To update to the latest version run:`);
				Log.notice('npm install -g @willptswan/jarvis');

			}

			// Spacer
			Log.spacer();

		}



	}

};

// Check whether a check has already been done today
async function shouldCheck() {

	// Get today
	let today = new Date().getDay();

	// Get the day an update was last checked
	let lastChecked = await store.get(Constants.checkedUpdateKey);

	// Check if we have ever checked for an update
	if (lastChecked === undefined || lastChecked === null) {

		// Set today as last checked
		await store.set(Constants.checkedUpdateKey, today);

		return true;

	} else {

		// Check if an update was checked for today
		if (today === lastChecked) {
			return false;
		} else {

			// Set today as last checked
			await store.set(Constants.checkedUpdateKey, today);

			return true;

		}


	}

}
