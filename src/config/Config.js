// Imports
const Constants = require('../utils/Constants');
const Store = require('data-store');
const store = new Store({ path: Constants.jarvisConfigPath()});
const Prompt = require('../utils/Prompt');
const Log = require('../utils/Log');
const Files = require('../utils/Files');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Settings = require('../utils/Settings');
const ConfigGit = require('./ConfigGit');
const ConfigGCP = require('./ConfigGCP');
const ConfigS3 = require('./ConfigS3');

/*
 * Features
*/

// New Config
exports.new = async (type) => {

	// Check which type of config we are creating
	if (type === 'git') {
		await exports.ConfigGit.new();
	} else if (type === 'gcp') {
		await exports.ConfigGCP.new();
	} else if (type === 's3') {
		await exports.ConfigS3.new();
	} else {
		throw 'Please enter a valid config type';
	}

};

// Switch config
exports.switch = async (type) => {

	// Check which type of config we are switching
	if (type === 'git') {
		await exports.ConfigGit.activate();
	} else if (type === 'gcp') {
		await exports.ConfigGCP.activate();
	} else if (type === 's3') {
		await exports.ConfigS3.activate();
	} else {
		throw 'Please enter a valid config type';
	}

};

// View config
exports.view = async (type) => {

	// Check which type of config we are switching
	if (type === 'git') {
		let configs = await exports.getFromStore(Constants.gitConfigsKey);
		await exports.display(configs, 'git');
	} else if (type === 'gcp') {
		let configs = await exports.getFromStore(Constants.gcpConfigsKey);
		await exports.display(configs, 'gcp');
	} else if (type === 's3') {
		let configs = await exports.getFromStore(Constants.s3ConfigsKey);
		await exports.display(configs, 's3');
	} else if (type === 'all') {

		Log.spacer();
		Log.notice('Git Configs:');
		let configs = await exports.getFromStore(Constants.gitConfigsKey);
		await exports.display(configs, 'git');

		Log.spacer();
		Log.notice('GCP Configs:');
		configs = await exports.getFromStore(Constants.gcpConfigsKey);
		await exports.display(configs, 'gcp');

		Log.spacer();
		Log.notice('S3 Configs:');
		configs = await exports.getFromStore(Constants.s3ConfigsKey);
		await exports.display(configs, 's3');

	} else {
		throw 'Please enter a valid config type';
	}

};

// Update config
exports.update = async (type) => {

	// Check which type of config we are switching
	if (type === 'git') {
		await exports.ConfigGit.update();
	} else if (type === 'gcp') {
		await exports.ConfigGCP.update();
	} else if (type === 's3') {
		await exports.ConfigS3.update();
	} else {
		throw 'Please enter a valid config type';
	}

};

// Delete config
exports.delete = async (type, config = null, reset = false) => {

	// Check which type of config we are switching
	if (type === 'git') {
		await exports.ConfigGit.delete(config, reset);
	} else if (type === 'gcp') {
		await exports.ConfigGCP.delete(config, reset);
	} else if (type === 's3') {
		await exports.ConfigS3.delete(config, reset);
	} else {
		throw 'Please enter a valid config type';
	}

};

/*
 * Shared Config Functions
*/

// Delete all git configs
exports.deleteAllConfigs = async (type) => {

	// Log deleting all configs
	Log.spacer();
	Log.info(`Deleting all ${type} configs...`);

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check that there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Loop through all configs
		for (config of configs) {

			// Delete config
			await exports.delete(type, config, true);

		}

	}

	// Log deleted all configs
	Log.spacer();
	Log.success(`Deleted all ${type} configs...`);

};

exports.updateConfigProperty = async (config, key) => {

	if (key === 'region') {

 		let region = await exports.chooseAWSRegion('', `What would you like to update the region to? (${config[key]})`, config[key]);
		config[key] = region;

	} else {

		// Ask for the new property value
		let response = await Prompt.show({
			name: 'value',
			message: `What would you like to update the ${key} to? (${config[key]})`,
			required: false
		});

		// Check if the property was changed
		if (response.value !== '' && response.value !== null && response.value !== undefined) {

			// Update the property
			config[key] = response.value;

		}

	}

	// Return the update config
	return config;

};

// Display configs
exports.display = async (configs, type, keys = null) => {

	// Check if configs is empty
	if (configs === undefined || configs.length === 0) {

		Log.spacer();
		Log.notice(`There are currently no stored ${type} configs`);
		Log.spacer();

	} else {

		Log.spacer();

	  // Check if configs is not an array
		if (!Array.isArray(configs)) {

			// Turn config into an array
			configs = [configs];

		}

		// Loop through all configs
		configs.forEach((config) => {

			// Check if no keys have been passed
			if (keys === null) {

				// Check config type and populate keys array
				if (type === 'git') {
					keys = ['active', 'id', 'username', 'email', 'personalAccessToken', 'githubKeyTitle', 'githubKeyId'];
				} else if (type === 'gcp') {
					keys = ['active', 'id', 'account', 'project'];
				} else if (type === 's3') {
					keys = ['active', 'id', 'region', 'accessKey', 'secretAccessKey', 'bucket'];
				} else {
					Log.error('Error displaying configs');
					throw 'Invalid config type';
				}

			}

			// Loop through keys
			keys.forEach((key) => {

				// Log the key
				Log.notice(`${key}: ${config[key]}`);

			});

			Log.spacer();

		});

	}

};

// Get data from store
exports.getFromStore = async (key) => {

	// Get the data from the store
	let data = await store.get(key);

	return data;

};

// Set data to store
exports.setToStore = async (key, data, inArray = false) => {

	// Check if data should be in an array
	if (inArray) {

		// Get the current stored data
		let currentData = await exports.getFromStore(key);

		// Check if there is any current data
		if (currentData === undefined || currentData.length === 0) {
			data = [data];
		} else {
			currentData.push(data);
	    data = currentData;
		}

	}

	// Store the data
	return await store.set(key, data);

};

// Check whether an id already exists in a list of configs
exports.idExists = async (configId, type) => {

	// Log checking id
	Log.spacer();
	Log.info(`Checking that ${configId} is unique...`);

	// Workout the key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get the configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Filter configs where any ids match
		let matchedConfigs = configs.filter((config) => {
  		return config.id === configId;
  	});

		// Check if there were any matches
		if (matchedConfigs.length !== 0 || configId === 'jarvis-dummy') {

			// Log that the id is not unique
			Log.notice(`${configId} is not a unique ${type} config id`);

			// Ask for a new config id
			let response = await Prompt.show({
				name: 'id',
				message: 'Please enter a new config id',
				required: true
			});

			return await exports.idExists(response.id, type);

		} else {
			Log.success(`${configId} is unique`);
			Log.spacer();
  		return configId;
		}

	} else {
		Log.success(`${configId} is unique`);
		Log.spacer();
		return configId;
	}

};

exports.activate = async (activeConfig, type) => {

	// Deactivate all configs
	await exports.deactivateAll(type);

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Log activating config
		Log.spacer();
  	Log.info(`Activating ${activeConfig.id} ${type} config...`);

		// Create an activated variable - this will allow us to check if the passed config matches and stored configs
		let activated = false;

		// Update configs
		configs = configs.map((config) => {

			// Check if this is the correct config
			if (activeConfig.id === config.id) {
  			// Change active property
  			config.active = true;
				activated = true;
			}

			// Return the updated config
			return config;

		});

		// Check if a config was activated
		if (activated) {

		  // Store updated configs
			await exports.setToStore(key, configs);

			// Log success
			Log.success(`Activated ${activeConfig.id} ${type} config...`);

		} else {
			Log.error(`Error activating ${type} config`);
			throw `No stored config with id ${activeConfig.id} found`;
		}

	} else {
		Log.error(`Error activating ${type} config`);
		throw `No stored ${type} configs found`;
	}

};

exports.deactivateAll = async (type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Log deactivating all configs
		Log.spacer();
  	Log.info(`De-Activating all ${type} configs...`);

		// Update configs
		configs = configs.map((config) => {

			// Change active property
			config.active = false;

			// Return the updated config
			return config;

		});

		// Store updated configs
		await exports.setToStore(key, configs);

		// Log success
		Log.success(`De-Activated all ${type} configs`);

	}

};

// Get active config
exports.getActive = async (type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Filter out the active config
		let config = configs.filter((config) => {
  		return config.active === true;
  	});

		// Get the config out of the array
		config = config[0];

		// Return the config
		return config;

	} else {
		Log.error(`Error getting active ${type} config`);
		throw `No stored ${type} configs found`;
	}

};

// Choose config
exports.chooseConfig = async (type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check that there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Log which config would you like
		Log.spacer();
		Log.notice('Which config would you like?');

		// Display configs
		await exports.display(configs, type, ['id']);

		// Ask which config to choose
		let response = await Prompt.show({
			name: 'id',
			message: 'Which config would you like?',
			required: true
		});

		// Get config
		let config = await exports.getConfig(response.id, type);

		// Return config
		return config;

	} else {
		Log.error(`Error choosing ${type} config`);
		throw `There are currently no stored ${type} configs`;
	}

};

// Get config
exports.getConfig = async (configId, type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check that there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Filter out the config that we want
		let config = configs.filter((config) => {
  		return config.id === configId;
  	});

		// Check that a config was found
		if (config.length !== 0) {

			// Take the config out of the array
			config = config[0];

			// Return the config
			return config;

		} else {
			Log.error(`Error getting ${type} config`);
			throw `No ${type} configs with id ${configId} found`;
		}

	} else {
		Log.error(`Error getting ${type} config`);
		throw `There are currently no stored ${type} configs`;
	}

};

// Update configs
exports.updateConfigs = async (updatedConfig, type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Check if there are any configs
	if (configs !== undefined && configs.length !== 0) {

		// Log updating configs
		Log.spacer();
  	Log.info(`Updating ${updatedConfig.id} ${type} config...`);

		// Update configs
		configs = configs.map((config) => {

			// Check if this is the correct config
			if (updatedConfig.id === config.id) {
  			// Update
  			config = updatedConfig;
			}

			// Return the updated config
			return config;

		});

		// Store updated configs
		await exports.setToStore(key, configs);

		// Log success
		Log.success(`Updated ${updatedConfig.id} ${type} config...`);

	} else {
		Log.error(`Error updating ${type} config`);
		throw `No stored ${type} configs found`;
	}

};

// Delete config
exports.deleteConfig = async (deleteConfig, type) => {

	// Work out key
	let key;
	if (type === 'git') {
		key = Constants.gitConfigsKey;
	} else if (type === 'gcp') {
		key = Constants.gcpConfigsKey;
	} else if (type === 's3') {
		key = Constants.s3ConfigsKey;
	} else {
		throw 'Invalid config type';
	}

	// Get all configs
	let configs = await exports.getFromStore(key);

	// Make sure there are configs
	if (configs !== undefined && configs.length !== 0) {

		// Log deleting config
		Log.spacer();
		Log.info(`Deleting ${deleteConfig.id} config...`);

		// Filter out the config to be deleted
		let updatedConfigs = configs.filter((config) => {
			return config.id !== deleteConfig.id;
		});

		// Check that the config to delete matched a config and was removed
		if (updatedConfigs.length !== configs.length) {

			// Store updated configs
  		await exports.setToStore(key, updatedConfigs);

			// Log success
			Log.success(`Deleted ${deleteConfig.id} config`);

		} else {
			Log.error(`Error deleting ${deleteConfig.id}`);
			throw `No stored ${type} config with id ${deleteConfig.id} was found`;
		}

	} else {
		Log.error(`Error deleting ${deleteConfig.id}`);
		throw `No stored ${type} configs found`;
	}

};

// Check active config
exports.checkActiveConfig = async (type) => {

	// Check if active config should be checked
	let settings = await Settings.get();
	if (settings.checkActiveConfig) {

		// Log checking active config
		Log.spacer();
		Log.info(`Checking active ${type} config...`);

		// Get active config
		let config = await exports.getActive(type);

		// Set keys to display
		keys = ['active', 'id'];
		if (type === 'git') {
			keys.push('username');
			keys.push('email');
			keys.push('repo');
		} else if (type === 'gcp') {
			keys.push('account');
			keys.push('project');
		} else if (type === 's3') {
			keys.push('region');
			keys.push('bucket');
		}

		// Display this config
		await exports.display(config, type, keys);

		// Ask if this is the correct config
		let response = await Prompt.show({
			name: 'answer',
			message: `Is this the correct ${type} config? Y/n`,
			required: true
		});

		// Check answer
		if (response.answer.toLowerCase() === 'y') {

			// Log checked
			Log.success(`Checked active ${type} config`);

		} else {

			// Switch configs
			if (type === 'git') {
				await ConfigGit.activate();
			} else if (type === 'gcp') {
				await ConfigGCP.activate();
			} else if (type === 's3') {
				await ConfigS3.activate();
			} else {
				throw 'Please enter a valid config type';
			}

		}

	}

};

// Choose aws region
exports.chooseAWSRegion = async (type, message = null, defaultRegion = null) => {

	// Format message
	if (message === null) {
		message = `${type} region`;
	}

	// Format required
	let required = false;
	if (defaultRegion === null) {
		required = true;
	}

	// Log all AWS regions
	Log.spacer();

	Constants.awsRegions.forEach((region) => {
		Log.notice(`${region.region} - ${region.description}`);
	});

	Log.spacer();

	// Ask for the region
	let response = await Prompt.show({
		name: 'region',
		message: message,
		required: required
	});

	// Get default region if not required
	if (!required && response.region === '') {
		response.region = defaultRegion;
	}

	// Check the region is valid
	let regions = Constants.awsRegions.filter((region) => {
		return response.region === region.region;
	});
	if (regions.length !== 0) {
		return response.region;
	} else {
		Log.spacer();
		Log.notice('Please choose a valid region');
		Log.spacer();
		return await exports.chooseAWSRegion(type, message);
	}

};

/*
 * Git Config Functions
*/

exports.ConfigGit = {
	delete: async (config, reset) => {

		// Declare response
		let response = {};

		// Check if no config was passed
		if (config === null) {

			// Choose config to delete
			config = await exports.chooseConfig('git');

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
	  	await exports.deleteSSHConfig(config);

			// Delete config
			await exports.deleteConfig(config, 'git');

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

	},
	update: async () => {

		// De-activate all git configs
		await exports.deactivateAll('git');

		// Choose config to update
		let config = await exports.chooseConfig('git');

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
			config = await exports.updateConfigProperty(config, key);

		}

		// Create new github ssh key title
		let random = Math.random().toString(36).substring(6);
		let title = `Jarvis Generated Config ${config.id} ${random}`;
		config.githubKeyTitle = title;

		// Delete old ssh config
		await exports.deleteSSHConfig(oldConfig);

		// Add updated config to ssh config
		await exports.addNewGitSSHConfig(config);

		// Upload ssh to github
		let githubKeyId = await exports.uploadGitHubSSH(config);
		config.githubKeyId = githubKeyId;

		// Store the updated config
		await exports.updateConfigs(config, 'git');

		// Activate config
		await exports.activate(config.id);

	},
	new: async () => {

		// De-activate all git configs
		await exports.deactivateAll('git');

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
		let checkedId = await exports.idExists(response.id, 'git');
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
		await exports.addNewSSHConfig(config);

		// Upload ssh to github
		let githubKeyId = await exports.uploadGitHubSSH(config);
		config.githubKeyId = githubKeyId;

		// Log storing config
		Log.spacer();
		Log.info('Storing git config...');

		// Store config
		await exports.setToStore(Constants.gitConfigsKey, config, true);

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

	},
	activate: async (configId = null, addOrigin = false) => {

		// Get the config to activate
		let config;
		if (configId !== null) {

			// Get config
			config = await exports.getConfig(configId, 'git');

		} else {

			// Choose config
			config = await exports.chooseConfig('git');

		}

		// Ask what repo we are working on
		let response = await Prompt.show({
			name: 'repo',
			message: 'What repo are you working on?',
			required: true
		});
		config.repo = response.repo;

		// Activate config
		await exports.activate(config, 'git');

		if (addOrigin) {

			// Add origin
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

		// Set local and global git config
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

		// Set git remote url
		Log.spacer();
		Log.info('Setting git remote url...');

		// Set remote url
		const { stdoutRU, stderrRU } = await exec(`git remote set-url origin git@github.com-${config.username}:${config.username}/${config.repo}.git`);

		// Check for errors
		if (stderrRU) {
			throw stderrRU;
		} else {
			Log.success('Set git remote url');
		}

	}
};

// Add new ssh config
exports.addNewSSHConfig = async (config) => {

	// Get root user path
	let rootPath = Constants.rootUserPath();

	// Create ssh folder
	// Check if a .ssh folder already exists
	let exists = await Files.exists(`${rootPath}.ssh`);
	if (!exists) {

		// Log create .ssh folder
		Log.spacer();
		Log.info(`Creating ${rootPath}.ssh folder...`);

		// Create folder
		await Files.makeDir(`${rootPath}.ssh`);

	}

	// Generate ssh keys
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

	// Update ssh config
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
	let configExists = await Files.exists(`${rootPath}.ssh/config`);
	if (!configExists) {

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

};

// Upload ssh to github
exports.uploadGitHubSSH = async (config) => {

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

};

// Delete ssh config
exports.deleteSSHConfig = async (config) => {

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

};

/*
 * GCP Config Functions
*/

exports.ConfigGCP = {
	delete: async (config, reset) => {

		// Declare response
		let response = {};

		// Check if no config was passed
		if (config === null) {

			// Choose config to delete
			config = await exports.chooseConfig('gcp');

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

			// Check jarvis-dummy config has been created
			await exports.checkGCPDummyConfig();

			// Activate jarvis-dummy gcloud config so that we can delete our gcp config
			const { stdout, stderr } = await exec(`gcloud config configurations activate jarvis-dummy`);

			// Check jarvis-dummy was activated
			if (!stderr.includes('Activated')) {
				Log.error(`Error deleting ${config.id} config`);
				throw stderr;
			}

			// Delete gcloud config
			Log.spacer();
			Log.info(`Deleting ${config.id} from gcloud config...`);

			// Delete
			const { stdoutD, stderrD } = await exec(`gcloud config configurations delete ${config.id} --quiet`);

			// Check if there was an error
			if (stderrD.includes('Deleted')) {

				// Log success
				Log.success(`Deleted ${config.id} from gcloud config`);

			} else {
				throw stderrD;
			}

			// Delete config
			await exports.deleteConfig(config, 'gcp');

			// Check if config was active and this isn't a reset
			if (config.active && !reset) {

				// Log activate another config
				Log.spacer();
				Log.notice('Please activate a gcp config');

				// Activate a new config
				await exports.activate();

			}

		} else {
			throw `config-delete aborted`;
		}

	},
	update: async () => {

		// Choose config to update
		let config = await exports.chooseConfig('gcp');

		// Activate config
		await exports.activate(config.id);

		// Declare what keys can be updated
		let keys = ['account', 'project'];

		// Loop through keys
		for (const key of keys) {

			// Update config property
			config = await exports.updateConfigProperty(config, key);

		}

		// Set account property
		await exports.setGCPConfigProperty('account', config.account);

		// Set project property
		await exports.setGCPConfigProperty('project', config.project);

		// Store the updated config
		await exports.updateConfigs(config, 'gcp');

	},
	activate: async (configId = null) => {

		// Get the config to activate
		let config;
		if (configId !== null) {

			// Get config
			config = await exports.getConfig(configId, 'gcp');

		} else {

			// Choose config
			config = await exports.chooseConfig('gcp');

		}

		// Activate config
		await exports.activate(config, 'gcp');

		// Log activating gcloud config
		Log.spacer();
		Log.info(`Activating ${config.id} gcloud config...`);

		// Activate the gcloud config
		const { stdout, stderr } = await exec(`gcloud config configurations activate ${config.id}`);

		// Check the config was activated
		if (stderr.includes('Activated')) {
			Log.success(`Activated ${config.id} gcloud config...`);
		} else {
			throw `Failed to activate ${config.id} gcloud config`;
		}

	},
	new: async () => {

		// Check if dummy config has already been created and create one if it hasn't
		await exports.checkGCPDummyConfig();

		// De-activate all gcp configs
		await exports.deactivateAll('gcp');

		// Init config object
		let config = {
			active: true
		};

		// Ask for a config id
		let response = await Prompt.show({
			name: 'id',
			message: 'Config identifier',
			required: true
		});

		// Check if the id already exists
		let checkedId = await exports.idExists(response.id, 'gcp');
		config.id = checkedId;

		// Ask for the gcp account email and set the response to the config object
		response = await Prompt.show({
			name: 'account',
			message: 'GCP account email',
			required: true
		});
		config.account = response.account;

		// Ask for the gcp project and set the response to the config object
		response = await Prompt.show({
			name: 'project',
			message: 'GCP project',
			required: true
		});
		config.project = response.project;

		// Create the config in the gcloud cli
		Log.spacer();
		Log.info(`Creating config ${config.id}...`);

		// Create config
		const { stdout, stderr } = await exec(`gcloud config configurations create ${config.id}`);

		// Check if the config was created
		if (stderr.includes('Created')) {

			// Log success
			Log.success(`Created config ${config.id}`);

			// Set account property
			await exports.setGCPConfigProperty('account', config.account);

			// Set project property
			await exports.setGCPConfigProperty('project', config.project);

		} else {
			Log.error(`Failed to create config ${config.id}`);
			throw stderr;
		}

		// Store the config
		Log.spacer();
		Log.info('Storing config data...');
		await exports.setToStore(Constants.gcpConfigsKey, config, true);
		Log.success('Stored config data');

		// Log in
		Log.spacer();
		Log.info('Logging into gcloud...');

		// Log in
		const { stdoutLI, stderrLI } = await exec('gcloud auth login --quiet');

		// Log success
		Log.success('Logged into gcloud');

	}
};

// Set gcloud property
exports.setGCPConfigProperty = async (property, value) => {

	// Log setting property
	Log.spacer();
	Log.info(`Setting ${value} to config ${property}...`);

	// Set property
	const { stdout, stderr } = await exec(`gcloud config set ${property} ${value}`);

	// Check that the property was set
	if (stderr.includes('Updated property')) {
		Log.success(`${value} set to config ${property}`);
	} else {
		Log.error(`Failed to set ${value} to config ${property}`);
		throw stderr;
	}

};

// Check for dummy config
exports.checkGCPDummyConfig = async () => {

	// Check the store to see if the dummy config has already been set
	let isset = await exports.getFromStore(Constants.dummyGCPConfigSetKey);

	if (isset !== true) {

		// Log initialising jarvis gcp config
		Log.spacer();
  	Log.info('Initialising Jarvis GCP config...');

		// Create the dummy config
		const { stdout, stderr } = await exec('gcloud config configurations create jarvis-dummy');

		// Check if the config was created
		if (stderr.includes('Created')) {

			// Store that the config was created
			await exports.setToStore(Constants.dummyGCPConfigSetKey, true);

			// Log success
			Log.success('Initialised Jarvis GCP config');

		} else {
			Log.error('Error initialising Jarvis GCP config');
			throw stderr;
		}

	}

};

/*
 * S3 Config Functions
*/

exports.ConfigS3 = {
	delete: async (config, reset) => {

		// Declare response
		let response = {};

		// Check if no config was passed
		if (config === null) {

			// Choose config to delete
			config = await exports.chooseConfig('s3');

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

			// Delete config
			await exports.deleteConfig(config, 's3');

			// Check if config was active and this isn't a reset
			if (config.active && !reset) {

				// Log activate another config
				Log.spacer();
				Log.notice('Please activate an S3 config');

				// Activate a new config
				await exports.activate();

			}

		} else {
			throw `config-delete aborted`;
		}

	},
	update: async () => {

		// Choose config to update
		let config = await exports.chooseConfig('s3');

		// Declare what keys can be updated
		let keys = ['region', 'accessKey', 'secretAccessKey', 'bucket'];

		// Loop through keys
		for (const key of keys) {

			// Update config property
			config = await exports.updateConfigProperty(config, key);

		}

		// Store the updated config
		await exports.updateConfigs(config, 's3');

		// Ask if we want to make this config active
		let response = await Prompt.show({
			name: 'answer',
			message: 'Would you like to make this config active? Y/n',
			required: true
		});

		// Check answer
		if (response.answer.toLowerCase() === 'y') {

			// Activate config
			await exports.activate(config.id);

		}

	},
	activate: async (configId = null) => {

		// Get the config to activate
		let config;
		if (configId !== null) {

			// Get config
			config = await exports.getConfig(configId, 's3');

		} else {

			// Choose config
			config = await exports.chooseConfig('s3');

		}

		// Activate config
		await exports.activate(config, 's3');

	},
	new: async () => {

		// De-activate all s3 configs
		await exports.deactivateAll('s3');

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
		let checkedId = await exports.idExists(response.id, 's3');
		config.id = checkedId;

		// Ask for the region and set it to the config
		let region = await exports.chooseAWSRegion('S3');
		config.region = region;

		// Ask for the access key and set it to the config
		response = await Prompt.show({
			name: 'accessKey',
			message: 'S3 access key',
			required: true
		});
		config.accessKey = response.accessKey;

		// Ask for the secret access key and set it to the config
		response = await Prompt.show({
			name: 'secretAccessKey',
			message: 'S3 secret access key',
			required: true
		});
		config.secretAccessKey = response.secretAccessKey;

		// Ask for the bucket name and set it to the config
		response = await Prompt.show({
			name: 'bucket',
			message: 'S3 bucket name',
			required: true
		});
		config.bucket = response.bucket;

		// Log storing s3 config
		Log.spacer();
		Log.info('Storing S3 config...');

		// Store
		await exports.setToStore(Constants.s3ConfigsKey, config, true);

		// Log success
		Log.success('Stored S3 config');

	}
};
/*
// Add new ssh config
exports.addNewSSHConfig = async (config) => {

	// Get root user path
	let rootPath = Constants.rootUserPath();

	// Create ssh folder
	await createSSHFolder(rootPath);

	// Generate ssh keys
	await generateSSHKeys(rootPath, config);

	// Update ssh config
	await updateSSHConfig(rootPath, config);

}

// Create ssh folder
exports.createSSHFolder = async (rootPath) => {

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

// Generate ssh keys
exports.generateSSHKeys = async (rootPath, config) => {

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

// Update ssh config
exports.updateSSHConfig = async (rootPath, config) => {

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

}*/