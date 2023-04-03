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
	Log.spacer();

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
	Log.spacer();

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
	Log.spacer();

	// React-init
	Log.info('react-init <projectName>', 1);
	Log.notice('Initialise a complete boilerplate react project', 1);
	Log.notice('By default, Jarvis will use LESS for all styles. If you would like to use SCSS, then update the useSCSS setting.', 1);
	Log.spacer();

	// React-create
	Log.info('react-create <componentName>', 1);
	Log.notice('Create a new boilerplate react component', 1);
	Log.notice('A CSS class will be created using the component name. If the component has multiple words with each letter capitalised then the class name will be split by hyphens.', 1);
	Log.notice('For example:', 1);
	Log.notice('Name: mycomponent - Class: mycomponent', 2);
	Log.notice('Name: myComponent - Class: my-component', 2);
	Log.notice('Name: MyComponent - Class: my-component', 2);
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
	Log.spacer();

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
	Log.spacer();

	// Gae-deploy
	Log.info('gae-deploy <version>', 1);
	Log.notice('Deploy a new version to Google App Engine', 1);
	Log.spacer();

	/*
	 * AWS
	*/
	Log.standard('AWS:');
	Log.spacer();

	// S3-upload
	Log.info('s3-upload <filePath> -p', 1);
	Log.notice('Upload a file to S3, multiple files can be uploaded by putting them in a folder', 1);
	Log.notice('Add -p to the command if you are passing the path to a folder but only want the contents of the folder to be uploaded', 1);
	Log.spacer();

	/*
	 * Site
	*/
	Log.standard('Site:');
	Log.spacer();

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
	Log.spacer();

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
	Log.spacer();

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
	Log.spacer();

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

	/*
	 * Project
	*/

	Log.standard('Project:');
	Log.spacer();

	// ProjectLines
	Log.info('project-lines [ignoreFiles]', 1);
	Log.notice('Count the lines of code in a project.', 1);
	Log.notice('To ignore specific files and folders add them to the command. For example:', 1);
	Log.notice('project-lines file1.js folder1/', 2);
	Log.notice('To ignore all files with a specific extension user the following syntax: (This will ignore all json files)', 1);
	Log.notice('project-lines ext.json', 2);
	Log.notice('If there is a .gitignore file in the same directory that you run the command then that will also be used to calculate what files to ignore.', 1);
	Log.spacer();

	// ProjectStats
	Log.info('project-stats [ignoreFiles]', 1);
	Log.notice('Display stats for a project.', 1);
	Log.notice('To ignore specific files and folders add them to the command. For example:', 1);
	Log.notice('project-lines file1.js folder1/', 2);
	Log.notice('To ignore all files with a specific extension user the following syntax: (This will ignore all json files)', 1);
	Log.notice('project-lines ext.json', 2);
	Log.notice('If there is a .gitignore file in the same directory that you run the command then that will also be used to calculate what files to ignore.', 1);

	// Spacer at the end
	Log.spacer();

};
