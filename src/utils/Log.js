// Imports
const Chalk = require('chalk');

// Standard
exports.standard = (log, tabs = 0) => {
	console.log(`${getTabs(tabs)}${Chalk.white(log)}`);
};

// Info
exports.info = (log, tabs = 0) => {
	console.log(`${getTabs(tabs)}${Chalk.cyan(log)}`);
};

// Success
exports.success = (log, tabs = 0) => {
	console.log(`${getTabs(tabs)}${Chalk.green(log)}`);
};

// Notice
exports.notice = (log, tabs = 0) => {
	console.log(`${getTabs(tabs)}${Chalk.yellow(log)}`);
};

// Error
exports.error = (log, tabs = 0) => {
	console.log(`${Chalk.white.bgRed(' Error ')} ${getTabs(tabs)}${Chalk.redBright(log)}`);
};

// Debug
exports.debug = (log, tabs = 0) => {
	console.log(`${Chalk.white.bgMagenta(' Debug ')} ${getTabs(tabs)}${Chalk.magenta(log)}`);
};

// Spacer
exports.spacer = () => {
	console.log('');
};

/*
 * Helper Functions
*/

function getTabs(tabs) {

	let tabsString = '';

	switch (tabs) {
	case 1:
		tabsString = '  ';
		break;
	case 2:
		tabsString = '    ';
		break;
	case 3:
		tabsString = '      ';
		break;
	case 4:
		tabsString = '        ';
		break;
	default:
		tabsString = '';
	}

	return tabsString;

}
