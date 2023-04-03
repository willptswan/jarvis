// Imports
const Log = require('../utils/Log');
const Config = require('../config/Config');
const Prompt = require('../utils/Prompt');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.handler = async (version) => {

	// Check active gcp config
	await Config.checkActiveConfig('gcp');

	// Get the active gcp config
	let config = await Config.getActive('gcp');

	// Deploy
	await deploy(version);

};

// Deploy
async function deploy(version) {

	// Swap . for - in version
	version = version.split('.').join('-');

	// Log deploying
	Log.spacer();
	Log.info(`Deploying ${version} (this may take a few minutes)...`);

	// Deploy
	const { stdout, stderr } = await exec(`gcloud app deploy app.yaml -v ${version} --quiet`);

	// Log success - process will exit if error
	Log.success(`${version} deployed`);

}
