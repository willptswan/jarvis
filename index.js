#!/usr/bin/env node

// Packages
const Program = require('commander');

// Utils
const Prompt = require('./src/utils/Prompt');
const Constants = require('./src/utils/Constants');
const Log = require('./src/utils/Log');
const Settings = require('./src/utils/Settings');
const Update = require('./src/utils/Update');

// Source
const Help = require('./src/general/Help');
const Reset = require('./src/general/Reset');

const GitClone = require('./src/git/GitClone');
const GitPull = require('./src/git/GitPull');
const GitInit = require('./src/git/GitInit');
const GitPush = require('./src/git/GitPush');

const ReactInit = require('./src/react/ReactInit');
const ReactCreate = require('./src/react/ReactCreate');
const ReactDeploy = require('./src/react/ReactDeploy');
const ReactBuild = require('./src/react/ReactBuild');

const GAEDeploy = require('./src/gcp/GAEDeploy');

const S3BundleUpload = require('./src/aws/s3/S3BundleUpload');
const S3Upload = require('./src/aws/s3/S3Upload');
const EBInit = require('./src/aws/eb/EBInit');
const EBDeploy = require('./src/aws/eb/EBDeploy');

const SiteOpen = require('./src/site/SiteOpen');
const SiteSearch = require('./src/site/SiteSearch');

const Config = require('./src/config/Config');

/*
 * General Commands
*/

// Version
Program
	.command('version')
	.action(async () => {
		await preCommand();
		Log.standard(`Version: ${Constants.version}`);
		await postCommand();
	});

// Help
Program
	.command('help')
	.action(async () => {
		await preCommand();
		Help.handler();
		await postCommand();
	});

// Reset
Program
	.command('reset')
	.action(async () => {
		await preCommand();
		Reset.handler().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * Config Commands
*/

// New Config
Program
	.command('config-new <type>')
	.action(async (type) => {
		await preCommand();
		Config.new(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Delete config
Program
	.command('config-delete <type>')
	.action(async (type) => {
		await preCommand();
		Config.delete(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// View configs
Program
	.command('config-view <type>')
	.action(async (type) => {
		await preCommand();
		Config.view(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Update configs
Program
	.command('config-update <type>')
	.action(async (type) => {
		await preCommand();
		Config.update(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Switch configs
Program
	.command('config-switch <type>')
	.action(async (type) => {
		await preCommand();
		Config.switch(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});


/*
 * React Commands
*/

// React-init
Program
	.command('react-init <projectName>')
	.action(async (projectName) => {
		await preCommand();
		ReactInit.handler(projectName).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// React-create
Program
	.command('react-create <componentName>')
	.action(async (componentName) => {
		await preCommand();
		ReactCreate.handler(componentName).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// React-deploy
Program
	.command('react-deploy <platform> <version>')
	.action(async (platform, version) => {
		await preCommand();
		ReactDeploy.handler(version, platform).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// React-build
Program
	.command('react-build')
	.action(async () => {
		await preCommand();
		ReactBuild.handler().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * Git Commands
*/

// Git-push
Program
	.command('git-push <version> [files...]')
	.action(async (version, files) => {
		await preCommand();
		GitPush.handler(version, files).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Git-pull
Program
	.command('git-pull')
	.action(async () => {
		await preCommand();
		GitPull.handler().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Git-clone
Program
	.command('git-clone <repoName>')
	.action(async (repoName) => {
		await preCommand();
		GitClone.handler(repoName).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Git-init
Program
	.command('git-init')
	.action(async () => {
		await preCommand();
		GitInit.handler().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * GCP Commands
*/

// Gae-deploy
Program
	.command('gae-deploy <version>')
	.action(async (version) => {
		await preCommand();
		GAEDeploy.handler(version).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * AWS Commands
*/

// S3-bundle-upload
Program
	.command('s3-bundle-upload')
	.action(async () => {
		await preCommand();
		S3BundleUpload.handler().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// S3-upload
Program
	.command('s3-upload <filePath>')
	.option('-p')
	.action(async (filePath, cmd) => {
		await preCommand();
		S3Upload.handler(filePath, cmd.P).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Eb-init
Program
	.command('eb-init <applicationName>')
	.action(async (applicationName) => {
		await preCommand();
		EBInit.handler(applicationName).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Eb-deploy
Program
	.command('eb-deploy <version>')
	.action(async (version) => {
		await preCommand();
		EBDeploy.handler(version).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * Site Commands
*/

// Site-open
Program
	.command('site-open <site>')
	.action(async (site) => {
		await preCommand();
		SiteOpen.handler(site).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Site-search
Program
	.command('site-search <site>')
	.action(async (site) => {
		await preCommand();
		SiteSearch.handler(site).catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * Settings Commands
*/

// Settings-update
Program
	.command('settings-update')
	.action(async () => {
		await preCommand();
		Settings.update().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Settings-reset
Program
	.command('settings-reset')
	.action(async () => {
		await preCommand();
		Settings.reset().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

// Settings-view
Program
	.command('settings-view')
	.action(async () => {
		await preCommand();
		Settings.view().catch((err) => {
			Log.standard(err, 'error');
		});
		await postCommand();
	});

/*
 * Helper Functions
*/

// Pre command
async function preCommand() {

	// Check if settings have been initialised and init them if they haven't
	await Settings.init().catch((err) => {
		Log.standard(err, 'error');
	});

}

// Post command
async function postCommand() {

	// Check for updates
	await Update.check().catch((err) => {
		Log.standard(err, 'error');
	});

}

/*
 * Program
*/

// Check that a valid command was provided
if (!process.argv.slice(2).length || !Constants.validCommands.includes(process.argv.slice(2)[0])) {
	Help.handler();
	process.exit();
}

// Parse Arguments
Program.parse(process.argv);
