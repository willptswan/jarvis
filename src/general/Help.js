// Imports
const Log = require('../utils/Log');
const Constants = require('../utils/Constants');

// Handler
exports.handler = () => {

	// Title
	Log.spacer();
	Log.standard('Jarvis CLI Help');

	// Version
	Log.standard(`Version: ${Constants.version}`);
	Log.spacer();

	/*
   * General
  */
	Log.standard('General:');

	// Version
	Log.info('version', 1);
	Log.notice('Display the current version of Jarvis', 1);
	Log.spacer();

	// Help
	Log.info('help', 1);
	Log.notice('List all of the commands that Jarvis is capable of', 1);
	Log.spacer();

	// Reset
	Log.info('reset', 1);
	Log.notice('Reset Jarvis, this deletes all stored configs and resets all settings', 1);
	Log.spacer();

	/*
   * Config
  */
	Log.standard('Config:');

	// Config-new
	Log.info('config-new <type>', 1);
	Log.notice('Create and store a new config, valid arguments are git, gcp, s3, eb', 1);
	Log.spacer();

	// Config-delete
	Log.info('config-delete <type>', 1);
	Log.notice('Delete a stored config, valid arguments are git, gcp, s3, eb', 1);
	Log.spacer();

	// Config-update
	Log.info('config-update <type>', 1);
	Log.notice('Update a stored config, valid arguments are git, gcp, s3, eb', 1);
	Log.spacer();

	// Config-switch
	Log.info('config-switch <type>', 1);
	Log.notice('Switch between stored configs, valid arguments are git, gcp, s3, eb', 1);
	Log.spacer();

	// Config-view
	Log.info('config-view <type>', 1);
	Log.notice('View all stored configs, valid arguments are git, gcp, s3, eb, all', 1);
	Log.spacer();

	/*
   * React
  */
	Log.standard('React:');

	// React-init
	Log.info('react-init <projectName>', 1);
	Log.notice('Initialise a complete boilerplate react project', 1);
	Log.notice('By default, Jarvis will use LESS for all styles. If you would like to use SCSS, then update the useSCSS setting.', 1);
	Log.spacer();

	// React-create
	Log.info('react-create <componentName>', 1);
	Log.notice('Create a new boilerplate react component', 1);
	Log.notice('By default, Jarvis will use LESS for all styles. If you would like to use SCSS, then update the useSCSS setting.', 1);
	Log.spacer();

	// React-deploy
	Log.info('react-deploy <platform> <version>', 1);
	Log.notice('Deploy a react project, valid platforms are gae, eb', 1);
	Log.spacer();

	// React-build
	Log.info('react-build', 1);
	Log.notice('Build and run a project in the dev environment', 1);
	Log.spacer();

	/*
	 * Git
	*/
	Log.standard('Git:');

	// Git-push
	Log.info('git-push <version> [files]', 1);
	Log.notice('Add, commit, and push changes to GitHub', 1);
	Log.spacer();

	// Git-pull
	Log.info('git-pull', 1);
	Log.notice('Pull changes from a GitHub repo', 1);
	Log.spacer();

	// Git-clone
	Log.info('git-clone <repoName>', 1);
	Log.notice('Clone a repo from GitHub', 1);
	Log.spacer();

	// Git-init
	Log.info('git-init', 1);
	Log.notice('Initialise a git directory', 1);
	Log.spacer();

	/*
	 * GCP
	*/
	Log.standard('GCP:');

	// Gae-deploy
	Log.info('gae-deploy <version>', 1);
	Log.notice('Deploy a new version to Google App Engine', 1);
	Log.spacer();

	/*
	 * AWS
	*/
	Log.standard('AWS:');

	// S3-bundle-upload
	Log.info('s3-bundle-upload', 1);
	Log.notice('Upload the css and js bundle for a project to S3', 1);
	Log.spacer();

	// S3-upload
	Log.info('s3-upload <filePath> -p', 1);
	Log.notice('Upload a file to S3, multiple files can be uploaded by putting them in a folder', 1);
	Log.notice('Add -p to the command if you are passing the path to a folder but only want the contents of the folder to be uploaded', 1);
	Log.spacer();

	// Eb-init
	Log.info('eb-init <applicationName>', 1);
	Log.notice('Initialise an Elastic Beanstalk application and environment', 1);
	Log.spacer();

	// Eb-deploy
	Log.info('eb-deploy <version>', 1);
	Log.notice('Deploy an application to Elastic Beanstalk', 1);
	Log.spacer();

	/*
	 * Site
	*/
	Log.standard('Site:');

	// Site-open
	Log.info('site-open <site>', 1);
	Log.notice('Open a website in a new browser tab, you can pass the full url for the website', 1);
	Log.notice('You can also use the following short hand sites:', 1);
	Log.notice('so - Stack Overflow', 2);
	Log.notice('npm - NPM', 2);
	Log.notice('cocoa - CocoaPods', 2);
	Log.notice('g - Google', 2);
	Log.notice('awe - Awesome', 2);
	Log.notice('gh - GitHub', 2);
	Log.notice('css - CSS Tricks', 2);
	Log.notice('m - Medium', 2);
	Log.spacer();

	// Site-search
	Log.info('site-search <site>', 1);
	Log.notice('Search a website', 1);
	Log.notice('Valid sites are:', 1);
	Log.notice('so - Stack Overflow', 2);
	Log.notice('npm - NPM', 2);
	Log.notice('g - Google', 2);
	Log.notice('gh - GitHub', 2);
	Log.notice('css - CSS Tricks', 2);
	Log.notice('m - Medium', 2);
	Log.spacer();

	/*
	 * Settings
	*/
	Log.standard('Settings:');

	// Settings-update
	Log.info('settings-update', 1);
	Log.notice('Update the settings', 1);
	Log.spacer();

	// Settings-reset
	Log.info('settings-reset', 1);
	Log.notice('Reset settings to default values', 1);
	Log.spacer();

	// Settings-view
	Log.info('settings-view', 1);
	Log.notice('View all of your current settings', 1);
	Log.spacer();

	/*
	 * Cheat sheet
	*/
	Log.standard('Cheat Sheets:');

	// Cs
	Log.info('cs <type> [section]', 1);
	Log.notice('e.g. cs javascript basic-objects', 1);
	Log.notice('Display the cheat sheet for a language or framework, the section is optional', 1);
	Log.spacer();

	// Cs-types
	Log.info('cs-types', 1);
	Log.notice('Display the available cheat sheets', 1);
	Log.spacer();

	// Cs-sections
	Log.info('cs-sections <type>', 1);
	Log.notice('Display the available sections for a cheat sheet', 1);
	Log.spacer();

	/*
	 * Documentation
	*/

	Log.standard('Documentation:');

	// Documentation
	Log.info('documentation <type>', 1);
	Log.notice('Open documentation for a language, framework, or platform in your browser', 1);
	Log.spacer();

	// Documentation-list
	Log.info('documentation-list', 1);
	Log.notice('Display a list of all available documentation types', 1);
	Log.spacer();

	// Spacer at the end
	Log.spacer();

};
