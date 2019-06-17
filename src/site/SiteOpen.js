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
			Log.standard(`Opening ${siteInfo.name} in Chrome...`, 'info');

			// Set url
			url = siteInfo.url;

		}

	});

	// Check if any short hands were matched
	if (url === '') {
		Log.standard(`Opening ${site} in Chrome...`, 'info');
		url = site;
	}

	// Open the site
	await exec(`open -na "Google Chrome" --args "${url}"`);

};
