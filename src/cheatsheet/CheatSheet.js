/*

Cheat sheets from http://overapi.com

*/

// Imports
const Log = require('../utils/Log');

// Sheet Imports
const ActionScript = require('./sheets/ActionScript');
const Characters = require('./sheets/Characters');
const CMake = require('./sheets/CMake');
const CSS = require('./sheets/CSS');
const Docker = require('./sheets/Docker');
const Drush = require('./sheets/Drush');
const ExpressJS = require('./sheets/ExpressJS');
const Git = require('./sheets/Git');
const HTML = require('./sheets/HTML');
const HTMLDOM = require('./sheets/HTMLDOM');
const HTTPStatus = require('./sheets/HTTPStatus');
const Javascript = require('./sheets/Javascript');
const JQuery = require('./sheets/JQuery');
const Linux = require('./sheets/Linux');
const ModRewrite = require('./sheets/ModRewrite');
const MongoShell = require('./sheets/MongoShell');
const MySQL = require('./sheets/MySQL');
const NodeJS = require('./sheets/NodeJS');
const PHP = require('./sheets/PHP');
const Python = require('./sheets/Python');
const Regex = require('./sheets/Regex');
const Ruby = require('./sheets/Ruby');
const SVN = require('./sheets/SVN');
const UnderscoreJS = require('./sheets/UnderscoreJS');

// Available sheets
exports.sheets = () => {

	return [
		{
			title: 'ActionScript',
			list: ActionScript
		},
		{
			title: 'Characters',
			list: Characters
		},
		{
			title: 'CMake',
			list: CMake
		},
		{
			title: 'CSS',
			list: CSS
		},
		{
			title: 'Docker',
			list: Docker
		},
		{
			title: 'Drush',
			list: Drush
		},
		{
			title: 'ExpressJS',
			list: ExpressJS
		},
		{
			title: 'Git',
			list: Git
		},
		{
			title: 'HTML',
			list: HTML
		},
		{
			title: 'HTMLDOM',
			list: HTMLDOM
		},
		{
			title: 'HTTPStatus',
			list: HTTPStatus
		},
		{
			title: 'Javascript',
			list: Javascript
		},
		{
			title: 'jQuery',
			list: JQuery
		},
		{
			title: 'Linux',
			list: Linux
		},
		{
			title: 'mod_rewrite',
			list: ModRewrite
		},
		{
			title: 'MongoShell',
			list: MongoShell
		},
		{
			title: 'MySQL',
			list: MySQL
		},
		{
			title: "NodeJS",
			list: NodeJS
		},
		{
			title: "PHP",
			list: PHP
		},
		{
			title: "Python",
			list: Python
		},
		{
			title: "Regex",
			list: Regex
		},
		{
			title: "Ruby",
			list: Ruby
		},
		{
			title: "SVN",
			list: SVN
		},
		{
			title: "UnderscoreJS",
			list: UnderscoreJS
		}
	];

};

// View all cheatsheet types
exports.types = async () => {

	let sheets = exports.sheets();

	Log.spacer();
	Log.notice('Available types:');

	sheets.forEach((sheet) => {
		Log.notice(sheet.title, 1);
	});

	Log.spacer();

};

// View all cheatsheet sections
exports.sections = async (type) => {

	// Check type
	let sheets = exports.sheets();
	let filteredSheet = sheets.filter((sheet) => {
		if (sheet.title.toLowerCase() === type.toLowerCase()) {
			return sheet;
		}
	});

	if (filteredSheet.length !== 0) {

		// Get the sheet
		let sheet = filteredSheet[0].list.sheet();

		Log.spacer();
		Log.notice(`Available ${type} sections:`);

		sheet.forEach((section) => {
			Log.notice(section.title, 1);
		});

		Log.spacer();

	} else {

		exports.types();

		throw 'Invalid cheatsheet type';

	}

};

// Display cheat sheet
exports.display = async (type, section) => {

	// Check type
	let sheets = exports.sheets();
	let filteredSheet = sheets.filter((sheet) => {
		if (sheet.title.toLowerCase() === type.toLowerCase()) {
			return sheet;
		}
	});

	if (filteredSheet.length !== 0) {

		// Get the sheet
		let sheet = filteredSheet[0].list.sheet();

		// Check if a section was passed
		if (section !== undefined) {

			// Check if the section is valid
			let filteredSection = sheet.filter((sheetSection) => {
				if (section.toLowerCase() === sheetSection.title.toLowerCase().split(" ").join("-")) {
					return sheetSection;
				}
			});

			if (filteredSection.length !== 0) {

				// Display section
				displaySection(filteredSection[0]);

			} else {

				exports.sections(type);

				throw `Invalid ${filteredSheet[0].title} section`;

			}

		} else {

			// Display all sections
			displayAll(sheet);

		}

	} else {

		exports.types();

		throw 'Invalid cheatsheet type';

	}


};

/*
 * Helper Functions
*/

// Display all
function displayAll(sheet) {

	// Loop through sections
	sheet.forEach((section) => {

		// Log title
		Log.spacer();
		Log.notice(`${section.title}:`);
		Log.spacer();

		// Loop through sub sections
		section.items.forEach((item) => {

			Log.notice(`${item.title}:`, 1);

			// Loop through values
			item.values.forEach((value) => {
				Log.notice(`${value}`, 2);
			});

			Log.spacer();

		});

	});

}

// Display section
function displaySection(section) {

	// Log the title
	Log.spacer();
	Log.notice(`${section.title}:`);

	// Loop through sub sections
	section.items.forEach((item) => {

		// Log the title
		Log.notice(`${item.title}:`, 1);

		// Loop through values
		item.values.forEach((value) => {
			Log.notice(`${value}`, 2);
		});

		Log.spacer();

	});

}
