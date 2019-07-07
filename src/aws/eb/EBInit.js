// Imports
const Config = require('../../config/Config');
const Log = require('../../utils/Log');
const Files = require('../../utils/Files');
const GitPush = require('../../git/GitPush');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async (applicationName, checkGitConfig = true) => {

	// Check active eb config
	await Config.checkActiveConfig('eb');

	// Get the active eb config
	let config = await Config.getActive('eb');

	// Run eb init
	await init(config, applicationName);

	// Create environment config file
	await createConfigFile();

	// Push elasticbeanstalk folder to github
	Log.spacer();
	Log.info('Pushing .ebextensions folder to github...');
	await GitPush.handler('0.0.1', ['.ebextensions'], checkGitConfig);

	// Create environment
	await createEnvironment();

};

// Run eb init
async function init(config, applicationName) {

	// Log initialising application
	Log.spacer();
	Log.info(`Initialising ${applicationName} application...`);

	// Run init
	const { stdout, stderr } = await exec(`eb init ${applicationName} --platform node.js --profile ${config.id} --region ${config.region}`);

	// Check that the application was initialised
	let exists = await Files.exists('./.elasticbeanstalk/config.yml');
	if (exists) {
		Log.success(`Initialised ${applicationName} application`);
	} else {
		throw 'Error initialising Elastic Beanstalk Application';
	}

}

// Create environment config file
async function createConfigFile() {

	// Log creating
	Log.spacer();
	Log.info('Creating environment config file...');

	// Format contents
	let contents = `option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm run start"`;

	await Files.makeDir('./.ebextensions');
	await Files.create('./.ebextensions/01_prod.config', contents);

}

// Create environment
async function createEnvironment() {

	// Log creating
	Log.spacer();
	Log.info('Creating environment (this may take a few minutes)...');

	// Create
	const { stdout, stderr } = await exec('eb create prod');

	// Check if successfull
	if (stdout.includes('Successfully launched environment')) {
		Log.success('Created environment');
	} else {
		Log.error('Error creating environment');
		throw stdout;
	}

}
