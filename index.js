#!/usr/bin/env node

// Packages
const Program = require('commander');

// Utils
const Prompt = require('./src/utils/Prompt');
const Constants = require('./src/utils/Constants');
const Log = require('./src/utils/Log');

// Source
const Help = require('./src/general/Help');
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
const SiteOpen = require('./src/site/SiteOpen');
const SiteSearch = require('./src/site/SiteSearch');
const Config = require('./src/config/Config');
const Reset = require('./src/general/Reset');

/*
 * General Commands
*/

// Version
Program
	.command('version')
	.action(async () => {

		Log.standard(`Version: ${Constants.version}`);
	});

// Help
Program
	.command('help')
	.action(() => {
		Help.handler();
	});

// Reset
Program
	.command('reset')
	.action(() => {
		Reset.handler().catch((err) => {
			Log.standard(err, 'error');
		});
	});

/*
 * Config Commands
*/

// New Config
Program
	.command('config-new <type>')
	.action((type) => {
		Config.new(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Delete config
Program
	.command('config-delete <type>')
	.action((type) => {
		Config.delete(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// View configs
Program
	.command('config-view <type>')
	.action((type) => {
		Config.view(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Update configs
Program
	.command('config-update <type>')
	.action((type) => {
		Config.update(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Switch configs
Program
	.command('config-switch <type>')
	.action((type) => {
		Config.switch(type.toLowerCase()).catch((err) => {
			Log.standard(err, 'error');
		});
	});


/*
 * React Commands
*/

// React-init
Program
	.command('react-init <projectName>')
	.action((projectName) => {
		ReactInit.handler(projectName).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// React-create
Program
	.command('react-create <componentName>')
	.action((componentName) => {
		ReactCreate.handler(componentName).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// React-deploy
Program
	.command('react-deploy <version>')
	.action((version) => {
		ReactDeploy.handler(version).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// React-build
Program
	.command('react-build')
	.action(() => {
		ReactBuild.handler().catch((err) => {
			Log.standard(err, 'error');
		});
	});

/*
 * Git Commands
*/

// Git-push
Program
	.command('git-push <version> [files...]')
	.action((version, files) => {
		GitPush.handler(version, files).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Git-pull
Program
	.command('git-pull')
	.action(() => {
		GitPull.handler().catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Git-clone
Program
	.command('git-clone <repoName>')
	.action((repoName) => {
		GitClone.handler(repoName).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Git-init
Program
	.command('git-init')
	.action(() => {
		GitInit.handler().catch((err) => {
			Log.standard(err, 'error');
		});
	});

/*
 * GCP Commands
*/

// Gae-deploy
Program
	.command('gae-deploy <version>')
	.action((version) => {
		GAEDeploy.handler(version).catch((err) => {
			Log.standard(err, 'error');
		});
	});

/*
 * AWS Commands
*/

// S3-bundle-upload
Program
	.command('s3-bundle-upload')
	.action(() => {
		S3BundleUpload.handler().catch((err) => {
			Log.standard(err, 'error');
		});
	});

/*
 * Site Commands
*/

// Site-open
Program
	.command('site-open <site>')
	.action((site) => {
		SiteOpen.handler(site).catch((err) => {
			Log.standard(err, 'error');
		});
	});

// Site-search
Program
	.command('site-search <site>')
	.action((site) => {
		SiteSearch.handler(site).catch((err) => {
			Log.standard(err, 'error');
		});
	});


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
