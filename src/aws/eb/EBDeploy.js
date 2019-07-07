// Imports
const Config = require('../../config/Config');
const Log = require('../../utils/Log');
const GitPush = require('../../git/GitPush');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async (version, pushGit = true) => {

	// Check active eb config
	await Config.checkActiveConfig('eb');

	// Get the active eb config
	let config = await Config.getActive('eb');

	// Push changes to github
	if (pushGit) {
		await GitPush.handler(version);
	}

	// Log deploying
	Log.spacer();
	Log.info(`Deploying ${version} to Elastic Beanstalk...`);

	// Deploy
	const { stdout, stderr } = await exec(`eb deploy prod --message "${version}"`);

	// Check if successfull
	if (stdout.includes('New application version was deployed')) {
		Log.success(`Deployed ${version} to Elastic Beanstalk`);
	} else {
		Log.error(`Error deploying ${version} to Elastic Beanstalk`);
		throw stdout;
	}

};
