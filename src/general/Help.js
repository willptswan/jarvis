// Imports
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');

// Handler
exports.handler = () => {

	// Title
	Log.spaced('Jarvis CLI Help');

	// Version
	Log.standard(`Version: ${Constants.version}`);
	Log.spacer();

	/*
   * General
  */
	Log.standard('General:');

	// Version
	Log.tabbed('version', 'info');
	Log.tabbed('Display the current version of Jarvis', 'notice');
	Log.spacer();

	// Help
	Log.tabbed('help', 'info');
	Log.tabbed('List all of the commands that Jarvis is capable of', 'notice');
	Log.spacer();

	// Reset
	Log.tabbed('reset', 'info');
	Log.tabbed('Reset Jarvis, this deletes all stored configs and resets all settings', 'notice');
	Log.spacer();

	/*
   * Config
  */
	Log.standard('Config:');

	// Config-new
	Log.tabbed('config-new <type>', 'info');
	Log.tabbed('Create and store a new config, valid arguments are git, gcp, s3', 'notice');
	Log.spacer();

	// Config-delete
	Log.tabbed('config-delete <type>', 'info');
	Log.tabbed('Delete a stored config, valid arguments are git, gcp, s3', 'notice');
	Log.spacer();

	// Config-update
	Log.tabbed('config-update <type>', 'info');
	Log.tabbed('Update a stored config, valid arguments are git, gcp, s3', 'notice');
	Log.spacer();

	// Config-switch
	Log.tabbed('config-switch <type>', 'info');
	Log.tabbed('Switch between stored configs, valid arguments are git, gcp, s3', 'notice');
	Log.spacer();

	// Config-view
	Log.tabbed('config-view <type>', 'info');
	Log.tabbed('View all stored configs, valid arguments are git, gcp, s3, all', 'notice');
	Log.spacer();

	/*
   * React
  */
	Log.standard('React:');

	// React-init
	Log.tabbed('react-init <projectName>', 'info');
	Log.tabbed('Initialise a complete boilerplate react project', 'notice');
	Log.spacer();

	// React-create
	Log.tabbed('react-create <componentName>', 'info');
	Log.tabbed('Create a new boilerplate react component', 'notice');
	Log.spacer();

	// React-deploy
	Log.tabbed('react-deploy <version>', 'info');
	Log.tabbed('Deploy a react project to Google App Engine', 'notice');
	Log.spacer();

	/*
	 * Git
	*/
	Log.standard('Git:');

	// Git-push
	Log.tabbed('git-push <version> [files]', 'info');
	Log.tabbed('Add, commit, and push changes to GitHub', 'notice');
	Log.spacer();

	// Git-pull
	Log.tabbed('git-pull', 'info');
	Log.tabbed('Pull changes from a GitHub repo', 'notice');
	Log.spacer();

	// Git-clone
	Log.tabbed('git-clone <repoName>', 'info');
	Log.tabbed('Clone a repo from GitHub', 'notice');
	Log.spacer();

	// Git-init
	Log.tabbed('git-init', 'info');
	Log.tabbed('Initialise a git directory', 'notice');
	Log.spacer();

	/*
	 * GCP
	*/
	Log.standard('GCP:');

	// Gae-deploy
	Log.tabbed('gae-deploy <version>', 'info');
	Log.tabbed('Deploy a new version to Google App Engine', 'notice');
	Log.spacer();

	/*
	 * AWS
	*/
	Log.standard('AWS:');

	// S3-bundle-upload
	Log.tabbed('s3-bundle-upload', 'info');
	Log.tabbed('Upload the css and js bundle for a project to s3', 'notice');
	Log.spacer();

	/*
	 * Site
	*/
	Log.standard('Site:');

	// Site-open
	Log.tabbed('site-open <site>', 'info');
	Log.tabbed('Open a website in a new browser tab, you can pass the full url for the website', 'notice');
	Log.tabbed('You can also use the following short hand sites:', 'notice');
	Log.tabbed('	so - Stack Overflow', 'notice');
	Log.tabbed('	npm - NPM', 'notice');
	Log.tabbed('	cocoa - CocoaPods', 'notice');
	Log.tabbed('	g - Google', 'notice');
	Log.tabbed('	awe - Awesome', 'notice');
	Log.tabbed('	gh - GitHub', 'notice');
	Log.spacer();

	// Site-search
	Log.tabbed('site-search <site>', 'info');
	Log.tabbed('Search a website', 'notice');
	Log.tabbed('Valid sites are:', 'notice');
	Log.tabbed('	so - Stack Overflow', 'notice');
	Log.tabbed('	npm - NPM', 'notice');
	Log.tabbed('	g - Google', 'notice');
	Log.tabbed('	gh - GitHub', 'notice');
	Log.spacer();

	Log.spacer();

	// Spacer at the end
	Log.spacer();

};
