// Imports
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async (site) => {

	// Work out website url
	let url = '';

	// Loop through all sites
	Constants.sites.forEach((siteInfo) => {

		// Check if the site matches the short hand
		if (site === siteInfo.shortHand) {

			// Log opening
			Log.info(`Opening ${siteInfo.name} in default browser...`);

			// Set url
			url = siteInfo.url;

		}

	});

	// Check if any short hands were matched
	if (url === '') {
		Log.info(`Opening ${site} in default browser...`);
		url = site;
	}

	// Open the site
	if (process.platform === Constants.osMac) {
		await exec(`open "${url}"`);
	} else if (process.platform === Constants.osWindows) {
		await exec(`explorer "${url}"`);
	} else if (process.platform === Constants.linux) {
		await exec(`xdg-open "${url}"`);
	}

};
