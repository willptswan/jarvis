// Imports
const Log = require('../utils/Log');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const GitPush = require('../git/GitPush');
const GAEDeploy = require('../gcp/GAEDeploy');
const S3BundleUpload = require('../aws/s3/S3BundleUpload');
const Config = require('../config/Config');
const Files = require('../utils/Files');
const EBDeploy = require('../aws/eb/EBDeploy');

exports.handler = async (version, platform) => {

	// Check that the platform is valid
	if (platform !== 'eb' && platform !== 'gae') {
		throw 'Invalid platform';
	}

	// Run tests
	await runTests();

	// Run production build
	await runProductionBuild();

	// Update index.html
	await updateIndexHTML();

	// Push to github
	await GitPush.handler(version);

	if (platform === 'gae') {

		// Deploy to gae
		await GAEDeploy.handler(version);

	} else if (platform === 'eb') {

		// Deploy to eb
		await EBDeploy.handler(version, false);

	}

	// Upload bundle to s3
	await S3BundleUpload.handler(true);

};

// Update index.html
async function updateIndexHTML() {

	// Check active s3 config
	await Config.checkActiveConfig('s3');

	// Get the active s3 config
	let config = await Config.getActive('s3');

	// Log updating
	Log.spacer();
	Log.info('Updating index.html...');

	// Update js
	await Files.replaceContents('./index.html', '/build/index.js', `https://${config.bucket}.s3.${config.region}.amazonaws.com/index.js.gz`);

	// Update css
	await Files.replaceContents('./index.html', '/build/index.css', `https://${config.bucket}.s3.${config.region}.amazonaws.com/index.css.gz`);

	// Log success
	Log.success('Updated index.html');

}

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
