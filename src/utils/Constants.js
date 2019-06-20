// App version
exports.version = '1.0.2';

// Blue log
exports.blueLog = '\x1b[36m%s\x1b[0m';

// Green log
exports.greenLog = '\x1b[32m%s\x1b[0m';

// Yellow log
exports.yellowLog = '\x1b[33m%s\x1b[0m';

// Red log
exports.redLog = '\x1b[31m%s\x1b[0m';

// Cyan log
exports.cyanLog = '\x1b[36m%s\x1b[0m';

// White log
exports.whiteLog = '\x1b[37m%s\x1b[0m';

// Store keys
exports.gitConfigsKey = "git-configs";
exports.gcpConfigsKey = "gcp-configs";
exports.s3ConfigsKey = "s3-configs";
exports.activeGitConfigKey = "active-git-config";
exports.activeGCPConfigKey = "active-gcp-config";
exports.activeS3ConfigKey = "active-s3-config";
exports.dummyGCPConfigSetKey = "dummy-gcp-isset";

// Website URLs
exports.sites = [
	{
		name: "CocoaPods",
		shortHand: "cocoa",
		url: "https://cocoapods.org/",
		search: false
	},
	{
		name: "NPM",
		shortHand: "npm",
		url: "https://www.npmjs.com/",
		search: "search?q="
	},
	{
		name: "Stack Overflow",
		shortHand: "so",
		url: "https://stackoverflow.com/",
		search: "search?q="
	},
	{
		name: "Google",
		shortHand: "g",
		url: "https://www.google.com/",
		search: "search?q="
	},
	{
		name: "Awesome",
		shortHand: "awe",
		url: "https://github.com/sindresorhus/awesome",
		search: false
	},
	{
		name: "GitHub",
		shortHand: "gh",
		url: "https://github.com/",
		search: "search?q="
	}
];

// Valid commands
exports.validCommands = [
	'help',
	'version',
	'reset',
	'config-new',
	'config-delete',
	'config-view',
	'config-update',
	'config-switch',
	'react-init',
	'react-create',
	'react-deploy',
	'react-build',
	'git-push',
	'git-pull',
	'git-clone',
	'git-init',
	'gae-deploy',
	's3-bundle-upload',
	'site-open',
	'site-search'
];
