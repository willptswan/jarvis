// Imports
const Config = require('./Config');
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');
const Files = require('../utils/Files');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Delete Git config
exports.delete = async (config, reset) => {

	// Declare response
	let response = {};

	// Check if no config was passed
	if (config === null) {

		// Choose config to delete
		config = await Config.chooseConfig('git');

		// Create check message depending on whether the config is active
		let message = `Are you sure you want to delete ${config.id}? Y/n`;
		if (config.active) {
			message = `${config.id} is currently active, are you sure you want to delete it? Y/n`;
		}

		// Ask if we want to continue
		response = await Prompt.show({
			name: 'answer',
			message: message,
			required: true
		});

	} else {
		response.answer = 'y';
	}

	// Check answer
	if (response.answer.toLowerCase() === 'y') {

		// Delete old ssh config
  	await deleteSSHConfig(config);

		// Delete config
		await Config.deleteConfig(config, 'git');

		// Check if config was active and this isn't a reset
		if (config.active && !reset) {

			// Log activate another config
			Log.spacer();
			Log.notice('Please activate a git config');

			// Activate a new config
			await exports.activate();

		}

	} else {
		throw `config-delete aborted`;
	}

};

// Update Git Config
exports.update = async () => {

	// De-activate all git configs
	await Config.deactivateAll('git');

	// Choose config to update
	config = await Config.chooseConfig('git');

	// Save the old config
	let oldConfig = {};
	oldConfig.id = config.id;
	oldConfig.username = config.username;
	oldConfig.email = config.email;
	oldConfig.personalAccessToken = config.personalAccessToken;

	// Declare what keys can be updated
	let keys = ['username', 'email', 'personalAccessToken'];

	// Loop through keys
	for (const key of keys) {

		// Update config property
		config = await Config.updateConfigProperty(config, key);

	}

	// Create new github ssh key title
	let random = Math.random().toString(36).substring(6);
	let title = `Jarvis Generated Config ${config.id} ${random}`;
	config.githubKeyTitle = title;

	// Delete old ssh config
	await deleteSSHConfig(oldConfig);

	// Add updated config to ssh config
	await addNewSSHConfig(config);

	// Upload ssh to github
	let githubKeyId = await uploadGitHubSSH(config);
	config.githubKeyId = githubKeyId;

	// Store the updated config
	await Config.updateConfigs(config, 'git');

	// Activate config
	await exports.activate(config.id);

};

// New Git Config
exports.new = async () => {

	// De-activate all git configs
	await Config.deactivateAll('git');

	// Init config object
	let config = {
		active: true
	};

	// Ask for an id
	let response = await Prompt.show({
		name: 'id',
		message: 'Config identifier',
		required: true
	});

	// Check if the id already exists
	let checkedId = await Config.idExists(response.id, 'git');
	config.id = checkedId;

	// Ask for the username and set it to the config
	response = await Prompt.show({
		name: 'username',
		message: 'GitHub username',
		required: true
	});
	config.username = response.username;

	// Ask for the email and set it to the config
	response = await Prompt.show({
		name: 'email',
		message: 'GitHub email',
		required: true
	});
	config.email = response.email;

	// Ask for the personal access token and set it to the config
	response = await Prompt.show({
		name: 'personalAccessToken',
		message: 'GitHub personal access token',
		required: true
	});
	config.personalAccessToken = response.personalAccessToken;

	// Create github ssh key title
	let random = Math.random().toString(36).substring(6);
	let title = `Jarvis Generated Config ${config.id} ${random}`;
	config.githubKeyTitle = title;

	// Add config to ssh config
	await addNewSSHConfig(config);

	// Upload ssh to github
	let githubKeyId = await uploadGitHubSSH(config);
	config.githubKeyId = githubKeyId;

	// Log storing config
	Log.spacer();
	Log.info('Storing git config...');

	// Store config
	await Config.setToStore(Constants.gitConfigsKey, config, true);

	// Log stored
	Log.success('Stored git config');

	// Ask if we want to activate the new config
	response = await Prompt.show({
		name: 'answer',
		message: `Do you want to activate ${config.id}? Y/n`,
		required: true
	});

	// Check answer
	if (response.answer.toLowerCase() === 'y') {

		// Activate config
		await exports.activate(config.id);

	}

};

// Activate git config
exports.activate = async (configId = null, addOrigin = false) => {

	// Get the config to activate
	let config;
	if (configId !== null) {

		// Get config
		config = await Config.getConfig(configId, 'git');

	} else {

		// Choose config
		config = await Config.chooseConfig('git');

	}

	// Ask what repo we are working on
	let response = await Prompt.show({
		name: 'repo',
		message: 'What repo are you working on?',
		required: true
	});
	config.repo = response.repo;

	// Activate config
	await Config.activate(config, 'git');

	if (addOrigin) {

		// Add origin
		await addGitRemoteOrigin(config);

	}

	// Set local and global git config
	await setGlobalLocalGitConfigs(config);

	// Set git remote url
	await setGitRemoteURL(config);

};

/*
 * Helper Functions
*/

// Set remote url
async function setGitRemoteURL(config) {

	// Log setting remote url
	Log.spacer();
	Log.info('Setting git remote url...');

	// Set remote url
	const { stdout, stderr } = await exec(`git remote set-url origin git@github.com-${config.username}:${config.username}/${config.repo}.git`);

	// Check for errors
	if (stderr) {
		throw stderr;
	} else {
		Log.success('Set git remote url');
	}

}

// Set global and local git configs
async function setGlobalLocalGitConfigs(config) {

	// Log setting global and local configs
	Log.spacer();
	Log.info('Setting global and local git configs...');

	// Set global and local configs
	const { stdout, stderr } = await exec(`git config --global user.name ${config.username}; git config --global user.email ${config.email}; git config user.name ${config.username}; git config user.email ${config.email}`);

	// Check for errors
	if (stderr) {
		throw stderr;
	} else {
		Log.success('Updated global and local git configs');
	}

}

// Add git remote origin
async function addGitRemoteOrigin(config) {

	// Log adding remote origin
	Log.spacer();
	Log.info('Adding git remote origin...');

	// Add remote origin
	const { stdout, stderr } = await exec(`git remote add origin https://github.com/${config.username}/${config.repo}.git`);

	// Check for errors
	if (stderr) {
		throw stderr;
	} else {
		Log.success('Added git remote origin');
	}

}

// Check if in git directory
async function inGitDirectory(abort) {

	// Check if .git folder exists
	let exists = await Files.exists('./.git');

	if (!exists) {

		if (abort) {
			Log.error('You are not in a git directory');
			throw 'This command must be run in a git directory';
		}

	}

}

// Add new ssh config
async function addNewSSHConfig(config) {

	// Get root user path
	let rootPath = Constants.rootUserPath();

	// Create ssh folder
	await createSSHFolder(rootPath);

	// Generate ssh keys
	await generateSSHKeys(rootPath, config);

	// Update ssh config
	await updateSSHConfig(rootPath, config);

}

// Upload ssh to github
async function uploadGitHubSSH(config) {

	// Get root user path
	let rootPath = Constants.rootUserPath();

	// Log uploading public ssh key to github
	Log.spacer();
	Log.info('Uploading public SSH key to GitHub...');

	// Get public key from file
	let key = await Files.load(`${rootPath}.ssh/jarvis-github-${config.username}.pub`);

	// Format data for curl request
	let data = {
		title: config.githubKeyTitle,
		key: key
	};
	data = JSON.stringify(data);

	// Upload
	const { stdout, stderr } = await exec(`curl -u "${config.username}:${config.personalAccessToken}" --data '${data}' https://api.github.com/user/keys`);

	// Check that the key was uploaded
	if (stdout.includes("created_at")) {

		Log.success('Uploaded public SSH key to GitHub');

		// Convert the response to json so that we can get the id
  	let response = JSON.parse(stdout);

		return response.id;

	} else {
		Log.error('Error uploading public SSH key to GitHub');
		throw stdout;
	}

}

// Update ssh config
async function updateSSHConfig(rootPath, config) {

	// Create ssh config
	let sshConfig = `
# GitHub Account - Jarvis Config Id ${config.id}
Host github.com-${config.username}
	HostName github.com
	User git
	IdentityFile ~/.ssh/jarvis-github-${config.username}
	IdentitiesOnly yes
  `;

	// Check if a config file already exists
	let exists = await Files.exists(`${rootPath}.ssh/config`);
	if (!exists) {

		// Log creating ssh config
		Log.spacer();
		Log.info('Creating SSH config...');

		// Create config file
		await Files.create(`${rootPath}.ssh/config`, sshConfig);

	} else {

		// Log updating ssh config
		Log.spacer();
  	Log.info('Updating SSH config...');

		// Update config file
		await Files.append(`${rootPath}.ssh/config`, sshConfig);

	}

}

// Generate ssh keys
async function generateSSHKeys(rootPath, config) {

	// Log generating ssh keys
	Log.spacer();
	Log.info('Generating SSH keys...');

	// Generate keys
	const { stdout, stderr } = await exec(`ssh-keygen -t rsa -b 4096 -C "${config.email}" -f "${rootPath}.ssh/jarvis-github-${config.username}" -N ""`);

	// Check for errors
	if (stderr) {
		Log.error('Error generating SSH keys');
		throw stderr;
	} else {
		Log.success('Generated SSH keys');
	}

}

// Create ssh folder
async function createSSHFolder(rootPath) {

	// Check if a .ssh folder already exists
	let exists = await Files.exists(`${rootPath}.ssh`);
	if (!exists) {

		// Log create .ssh folder
		Log.spacer();
		Log.info(`Creating ${rootPath}.ssh folder...`);

		// Create folder
		await Files.makeDir(`${rootPath}.ssh`);

	}
}

// Delete ssh config
async function deleteSSHConfig(config) {

	// Get root user path
	let rootPath = Constants.rootUserPath();

	// Log deleting ssh keys
	Log.spacer();
	Log.info('Deleting SSH keys...');

	// Delete private key
	await Files.delete(`${rootPath}.ssh/jarvis-github-${config.username}`);

	// Delete public key
	await Files.delete(`${rootPath}.ssh/jarvis-github-${config.username}.pub`);

	// Log deleted ssh keys
	Log.success('Deleted SSH keys');

	// Log updating ssh config
	Log.spacer();
	Log.info('Removing old config from SSH config...');

	// Create the ssh config to be searched for
	let sshSearchConfig = `
# GitHub Account - Jarvis Config Id ${config.id}
Host github.com-${config.username}
	HostName github.com
	User git
	IdentityFile ~/.ssh/jarvis-github-${config.username}
	IdentitiesOnly yes
  `;

	// Delete config from ssh config
	await Files.replaceContents(`${rootPath}.ssh/config`, sshSearchConfig, '');

	// Log updated ssh config
	Log.success('Removed old config from SSH config...');

	// Delete key from GitHub
	await deleteGitHubSSH(config);

}

// Delete ssh key from github
async function deleteGitHubSSH(config) {

	// Log deleting ssh key from github
	Log.spacer();
	Log.info('Deleting public SSH key from GitHub...');

	// Delete
	const { stdout, stderr } = await exec(`curl -u "${config.username}:${config.personalAccessToken}" -X "DELETE" https://api.github.com/user/keys/${config.githubKeyId}`);

	// Check that the key was deleted
	if (stdout === '') {
		Log.success('Deleted public SSH key from GitHub');
	} else {
		Log.error('Error deleting public SSH key from GitHub');
		throw stdout;
	}

}
