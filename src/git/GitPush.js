// Imports
const Log = require('../utils/Log');
const Config = require('../config/Config');
const Prompt = require('../utils/Prompt');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.handler = async (version, files = null, checkGitConfig = true) => {

	if (checkGitConfig) {

		// Check active git config
		await Config.checkActiveConfig('git');

	}

	// Add files
	await addFiles(files);

	// Commmit changes
	await commitChanges(version);

	// Push
	await pushChanges();

};

// Push changes
async function pushChanges() {

	// Log pushing changes
	Log.spacer();
	Log.info('Pushing changes...');

	// Push changes
	const { stdout, stderr } = await exec('git push -u origin main');

	// Nothing really to check for here, if there is an error it will exit the process so just log success
	Log.success('Changes pushed');

}

// Commit changes
async function commitChanges(version) {

	// Log commiting version
	Log.spacer();
	Log.info(`Committing version ${version}...`);

	// Commit version
	const { stdout, stderr } = await exec(`git commit -m "${version}"`);

	// Check for errors
	if (stderr) {
		throw stderr;
	} else {
		Log.success(`Version ${version} committed`);
	}

}

// Add files
async function addFiles(files) {

	// Log adding files
	Log.spacer();
	Log.info('Adding files...');

	// Check if any files were passed
	let addFiles = '-A';
	if (files !== null && files.length !== 0) {
		addFiles = files.join(" ");
	}

	// Add all files
	const { stdout, stderr } = await exec(`git add ${addFiles}`);

	// Check for errors
	if (stderr) {
		throw stderr;
	} else {
		Log.success('Files added');
	}

}
