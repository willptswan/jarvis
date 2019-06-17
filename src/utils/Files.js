// Imports
const fs = require('fs');
const util = require('util');
const Log = require('./Log');

// Check if a file exists
exports.exists = (file) => {

	// Check if the file exists
	if (fs.existsSync(file)) {
		return true;
	} else {
		return false;
	}

};

// Replace Files Contents
exports.replaceContents = async (file, search, replacement) => {

	// Check if the file exists
	let exists = await exports.exists(file);
	if (exists) {

		// Load the file
		let fileContents = await exports.load(file);

		// Replace the contents
		fileContents = fileContents.replace(search, replacement);

		// Save the file
		await exports.overwrite(file, fileContents);

	} else {
		Log.standard(`Error replacing contents of ${file}`, 'error');
		throw `${file} doesn't exist`;
	}

};

// Delete File
exports.delete = async (file) => {

	// Check if the file exists
	let exists = await exports.exists(file);
	if (exists) {

		// Turn unlink into a promise
		const unlink = util.promisify(fs.unlink);

		// Delete the file
		const err = await unlink(file);

		// Check if there was an error
		if (err) {
			Log.standard(`Error deleting ${file}`, 'error');
			throw err;
		} else {
			return true;
		}

	} else {
		Log.standard(`Error deleting ${file}`, 'error');
		throw `${file} doesn't exist`;
	}

};

// Load File
exports.load = async (fileName) => {

	let exists = await exports.exists(fileName);
	if (exists) {

		// Turn readFile into a promise
		const readFile = util.promisify(fs.readFile);

		// Read the file
		let file = await readFile(fileName, 'utf8');

		// Check if there was an error
		if (file.includes('Error:')) {
			Log.standard(`Error loading ${fileName}`, 'error');
			throw file;
		} else {
			return file;
		}

	} else {
		Log.standard(`Error loading ${fileName}`, 'error');
		throw `${fileName} doesn't exist`;
	}

};

// Overwrite File
exports.overwrite = async (file, contents) => {

	// Turn writeFile into a promise
	const writeFile = util.promisify(fs.writeFile);

	// Overwrite the file
	const err = await writeFile(file, contents);

	// Check if there was an error
	if (err) {
		Log.standard(`Error overwriting ${file}`, 'error');
		throw err;
	} else {
		return true;
	}

};

// Create File
exports.create = async (file, contents) => {

	// Check if the file exists
	let exists = await exports.exists(file);
	if (exists) {
		throw `${file} already exists`;
	} else {

		// Turn appendFile into a promise
		const appendFile = util.promisify(fs.appendFile);

		// Create the file and append its contents
		const err = await appendFile(file, contents);

		// Check if there was an error
		if (err) {
			Log.standard(`Error creating ${file}`, 'error');
			throw err;
		} else {
			Log.standard(`Created ${file}`, 'success');
			return true;
		}

	}

};

// Append File
exports.append = async (file, contents) => {

	let exists = await exports.exists(file);
	if (exists) {

		// Turn append file into a promise
		const appendFile = util.promisify(fs.appendFile);

		// Append to files contents
		const err = await appendFile(file, contents);

		// Check if there was an error
		if (err) {
			Log.standard(`Error appending to ${file}`, 'error');
			throw err;
		} else {
			Log.standard(`Updated ${file}`, 'success');
			return true;
		}

	} else {
		Log.standard(`Error appending to ${file}`, 'error');
		throw `${file} doesn't exist`;
	}

};

// Make Directory
exports.makeDir = async (folder) => {

	// Check if the folder exists
	let exists = await exports.exists(folder);
	if (exists) {
		throw `Folder already exists: ${folder}`;
	} else {

		// Turn mkdir into a promise
		const mkdir = util.promisify(fs.mkdir);

		// Make the folder
		const err = await mkdir(folder);

		// Check if there was an error
		if (err) {
			Log.standard(`Error creating ${folder}`, 'error');
			throw err;
		} else {
			Log.standard(`Created ${folder}`, 'success');
			return true;
		}

	}

};
