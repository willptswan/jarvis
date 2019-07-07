// Imports
const path = require('path');
const os = require('os');

// App version
exports.version = '1.2.0';

// Root User Path
exports.rootUserPath = () => {

	if (process.platform === exports.osWindows) {
		return `${os.homedir()}\\`;
	} else {
		return `${os.homedir()}/`;
	}

};

// Jarvis Config Path
exports.jarvisConfigPath = () => {

	return `${exports.rootUserPath()}jarvis.json`;

};

// Operating systems
exports.osMac = 'darwin';
exports.osWindows = 'win32';
exports.osLinux = 'linux';

// Store keys
exports.gitConfigsKey = "git-configs";
exports.gcpConfigsKey = "gcp-configs";
exports.s3ConfigsKey = "s3-configs";
exports.ebConfigsKey = "eb-configs";
exports.dummyGCPConfigSetKey = "dummy-gcp-isset";
exports.settingsKey = "settings";
exports.checkedUpdateKey = "checked-update";

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
	},
	{
		name: "CSS Tricks",
		shortHand: "css",
		url: "https://css-tricks.com/",
		search: "?s="
	},
	{
		name: "Medium",
		shortHand: "m",
		url: "https://medium.com/",
		search: "search?q="
	}
];

// Valid S3 ACLs
exports.s3ACLs = [
	'private',
	'public-read',
	'public-read-write',
	'aws-exec-read',
	'authenticated-read',
	'bucket-owner-read',
	'bucket-owner-full-control'
];

// Valid AWS regions
exports.awsRegions = [
	{
		region: 'us-east-2',
		description: 'US East (Ohio)',
	},
	{
		region: 'us-east-1',
		description: 'US East (N. Virginia)',
	},
	{
		region: 'us-west-1',
		description: 'US West (N. California)',
	},
	{
		region: 'us-west-2',
		description: 'US West (Oregon)',
	},
	{
		region: 'ap-east-1',
		description: 'Asia Pacific (Hong Kong)',
	},
	{
		region: 'ap-south-1',
		description: 'Asia Pacific (Mumbai)',
	},
	{
		region: 'ap-northeast-3',
		description: 'Asia Pacific (Osaka-Local)',
	},
	{
		region: 'ap-northeast-2',
		description: 'Asia Pacific (Seoul)',
	},
	{
		region: 'ap-southeast-1',
		description: 'Asia Pacific (Singapore)',
	},
	{
		region: 'ap-southeast-2',
		description: 'Asia Pacific (Sydney)',
	},
	{
		region: 'ap-northeast-1',
		description: 'Asia Pacific (Tokyo)',
	},
	{
		region: 'ca-central-1',
		description: 'Canada (Central)',
	},
	{
		region: 'cn-north-1',
		description: 'China (Beijing)',
	},
	{
		region: 'cn-northwest-1',
		description: 'China (Ningxia)',
	},
	{
		region: 'eu-central-1',
		description: 'EU (Frankfurt)',
	},
	{
		region: 'eu-west-1',
		description: 'EU (Ireland)',
	},
	{
		region: 'eu-west-2',
		description: 'EU (London)',
	},
	{
		region: 'eu-west-3',
		description: 'EU (Paris)',
	},
	{
		region: 'eu-north-1',
		description: 'EU (Stockholm)',
	},
	{
		region: 'sa-east-1',
		description: 'South America (São Paulo)',
	},
	{
		region: 'us-gov-east-1',
		description: 'AWS GovCloud (US-East)',
	},
	{
		region: 'us-gov-west-1',
		description: 'AWS GovCloud (US)',
	},
];

// Default settings
exports.defaultSettings = {
	checkActiveConfig: true,
	useSCSS: false,
	autoCheckUpdates: true,
};

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
	's3-upload',
	'site-open',
	'site-search',
	'settings-update',
	'settings-reset',
	'settings-view',
	'eb-init',
	'eb-deploy',
	'cs',
	'cs-types',
	'cs-sections',
	'documentation',
	'documentation-list'
];
