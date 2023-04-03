// Imports
const fs = require('fs');
const util = require('util');
const Log = require('./Log');

// Get folder contents
exports.getFolderContents = async (path) => {

	// Turn readdir into a promise
	const readdir = util.promisify(fs.readdir);

	// Get files in the directory
	let files = await readdir(path);

	let filesList = files.map((file) => {

		// Get the full file path
		let filePath;
		if (path[path.length - 1] === '/') {
			filePath = `${path}${file}`;
		} else {
			filePath = `${path}/${file}`;
		}

		return filePath;

	});

	return filesList;

};

// Check if a path is a file or a folder
exports.isFileOrFolder = async (path) => {

	// Turn lstat into a promise
	const lstat = util.promisify(fs.lstat);

	// Run lstat
	const stat = await lstat(path);

	// Check if the path is a file
	if (stat.isFile()) {
		return true;
	} else {
		return false;
	}

};

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
		Log.error(`Error replacing contents of ${file}`);
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
			Log.error(`Error deleting ${file}`);
			throw err;
		} else {
			return true;
		}

	} else {
		Log.error(`Error deleting ${file}`);
		throw `${file} doesn't exist`;
	}

};

// Load File
exports.load = async (fileName) => {

	let exists = await exports.exists(fileName);
	if (exists) {

		// Turn readFile into a promise
		const readFile = util.promisify(fs.readFile);

		try {

			// Read the file
			let file = await readFile(fileName, 'utf8');

			return file;

		} catch (error) {

			Log.error(`Error loading ${fileName}`);
			throw error;

		}

	} else {
		Log.error(`Error loading ${fileName}`);
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
		Log.error(`Error overwriting ${file}`);
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
			Log.error(`Error creating ${file}`);
			throw err;
		} else {
			Log.success(`Created ${file}`);
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
			Log.error(`Error appending to ${file}`);
			throw err;
		} else {
			Log.success(`Updated ${file}`);
			return true;
		}

	} else {
		Log.error(`Error appending to ${file}`);
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
			Log.error(`Error creating ${folder}`);
			throw err;
		} else {
			Log.success(`Created ${folder}`);
			return true;
		}

	}

};
