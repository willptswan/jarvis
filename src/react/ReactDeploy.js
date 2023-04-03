// Imports
const Log = require('../utils/Log');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const GitPush = require('../git/GitPush');
const GAEDeploy = require('../gcp/GAEDeploy');

exports.handler = async (version, platform) => {

	// Check that the platform is valid
	if (platform !== 'gae') {
		throw 'Invalid platform';
	}

	// Run tests
	await runTests();

	// Run production build
	await runProductionBuild();

	// Push to github
	await GitPush.handler(version);

	if (platform === 'gae') {

		// Deploy to gae
		await GAEDeploy.handler(version);

	}

};

// Run tests
async function runTests() {

	// Log running npm tests
	Log.spacer();
	Log.info('Running npm tests...');

	// Run tests
	const { stdout, stderr } = await exec('npm run test');

	// Log results
	Log.notice(stderr);

}

// Run production build
async function runProductionBuild() {

	// Log running production build
	Log.spacer();
	Log.info('Running production build...');

	// Build
	const { stdout, stderr } = await exec('npm run build:prod');

	// Check for errors
	if (stderr.includes('Exit status')) {
		Log.error('Error running production build');
		throw stderr;
	} else {
		Log.success('Production build completed');
	}

}
