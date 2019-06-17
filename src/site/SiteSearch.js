// Imports
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const Prompt = require('../utils/Prompt');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async (site) => {

	// Work out website url
	let url = '';

	// Loop through all sites
	for (siteInfo of Constants.sites) {
	// Constants.sites.forEach((siteInfo) => {

		// Check if the site matches the short hand and the site can be searched
		if (site === siteInfo.shortHand && siteInfo.search !== false) {

			// Ask what to search
			let response = await Prompt.show({
				name: 'query',
				message: 'What would you like to search?',
				required: true
			});

			// Log opening
			Log.standard(`Searching ${siteInfo.name} in Chrome...`, 'info');

			// Set url
			url = `${siteInfo.url}${siteInfo.search}${response.query}`;

		}

	}// );

	// Check if any short hands were matched
	if (url === '') {
		throw 'Please pass a valid site to search';
	}

	await exec(`open -na "Google Chrome" --args "${url}"`);

};
