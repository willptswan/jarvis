// Imports
const Constants = require('./Constants');

// Standard log
exports.standard = (log, type = 'default') => {

	console.log(getColour(type), log);

};

// Tabbed log
exports.tabbed = (log, type = 'default') => {

	console.log(getColour(type), `    ${log}`);

};

// Spaced out log
exports.spaced = (log, type = 'default') => {

	console.log('');
	console.log(getColour(type), log);

};

// Spacer
exports.spacer = () => {
	console.log('');
};

function getColour(type) {

	let colour;

	switch (type) {

	case 'info':
		colour = Constants.blueLog;
		break;

	case 'success':
		colour = Constants.greenLog;
		break;

	case 'error':
		colour = Constants.redLog;
		break;

	case 'notice':
		colour = Constants.yellowLog;
		break;

	default:
		colour = Constants.whiteLog;

	}

	return colour;

}
