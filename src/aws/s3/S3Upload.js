// Imports
const fs = require('fs');
const AWS = require('aws-sdk');
const Log = require('../../utils/Log');
const Config = require('../../config/Config');
const Prompt = require('../../utils/Prompt');
const Files = require('../../utils/Files');
const Constants = require('../../utils/Constants');
const mime = require('mime');

// Handler
exports.handler = async (filePath, pullFiles = false) => {

	// Check if the file exists
	if (!Files.exists(filePath)) {
		throw `Could not find ${filePath}`;
	}

	// Check active s3 config
	await Config.checkActiveConfig('s3');

	// Get the active s3 config
	let config = await Config.getActive('s3');

	// Set up AWS
	AWS.config = new AWS.Config({
		region: config.region,
		accessKeyId: config.accessKey,
		secretAccessKey: config.secretAccessKey
	});

	// Set up S3
	let s3 = new AWS.S3({
		params: {Bucket: config.bucket}
	});

	// Check if the path is a file or a folder
	const isFile = await Files.isFileOrFolder(filePath);

	if (isFile) {
		await uploadFile(filePath, s3);
	} else {
		await uploadFolder(filePath, pullFiles, s3);
	}


};

/*
 * Helper Functions
*/

// Upload File
async function uploadFile(filePath, s3) {

	// Get the file name
	let fileName = filePath.replace(/^.*[\\\/]/, '');

	// Ask for the path on s3 that it should be uploaded to
	let s3Path = await askForPath(fileName);

	// Ask what ACL the file should have
	let s3ACL = await askForACL('file');

	// Create file object
	let file = {
		name: fileName,
		path: filePath,
		s3Path: `${s3Path}${fileName}`,
		acl: s3ACL
	};

	// Upload the file
	await upload(s3, file);

}

// Upload Folder
async function uploadFolder(filePath, pullFiles, s3, s3Path = null, s3ACL = null) {

	// Get the file name
	let folderName = "";
	if (!pullFiles) {
		folderName = filePath.replace(/^.*[\\\/]/, '') + "/";
	}

	if (s3Path === null) {

		// Ask for the path on s3 that it should be uploaded to
		s3Path = await askForPath(folderName);

	}

	if (s3ACL === null) {

		// Ask for the ACL
  	if (pullFiles) {
    	s3ACL = await askForACL('files');
  	} else {
  		s3ACL = await askForACL('folder');
  	}

	}

	// Get the folder name
	let fileParts = filePath.split('/');
	folderName = fileParts[fileParts.length - 1];

	// Get the files in the folder
	let files = await Files.getFolderContents(filePath);

	// Add the folder to the s3 path
	if (!pullFiles) {
		s3Path = `${s3Path}${folderName}/`;
	}

	// Loop through files
	for (file of files) {

	  // Check if the file is not a folder
		const isFile = await Files.isFileOrFolder(file);
		if (isFile) {

			// Get the file name
    	let fileName = file.replace(/^.*[\\\/]/, '');

			// Create file object
    	let fileObject = {
    		name: fileName,
    		path: file,
    		s3Path: `${s3Path}${fileName}`,
    		acl: s3ACL
    	};

    	// Upload the file
    	await upload(s3, fileObject);

		} else {

			// Upload folder
			await uploadFolder(file, false, s3, s3Path, s3ACL);

		}

	}

}

// Upload
async function upload(s3, file) {

	// Log uploading
	Log.spacer();
	Log.info(`Uploading ${file.name} to ${file.s3Path}...`);

	// Create the params object
	let params = {
		Key: file.s3Path,
		Body: fs.createReadStream(file.path),
		ContentType: getMIMEType(file.name),
		ACL: file.acl
	};

	// Check if the file is gzipped
	if (file.name.includes('.gz')) {
		params.ContentEncoding = "gzip";
	}
	// TODO: Add more content encoding checks

	// Upload the file
	const {err, data} = await s3.upload(params).promise();

	// Check for any errors
	if (err) {
		Log.error(`There was an error uploading ${file.name} to ${file.s3Path}`);
		throw err;
	} else {
		Log.success(`${file.name} uploaded to ${file.s3Path}`);
	}

}

// Ask for path
async function askForPath(fileName) {

	// Ask for the s3 path
	let response = await Prompt.show({
		name: 'path',
		message: `What path on S3 would you like ${fileName} to be uploaded to? (~/)`,
		required: false
	});
	let path = `${response.path}`;

	// Make sure that the last char of the path is /
	if (path !== '') {
		if (path[path.length - 1] !== '/') {
			path += '/';
		}
	}

	// Log the path
	Log.spacer();
	Log.notice(`~/${path}`);
	Log.spacer();

	// Ask if this is correct
	response = await Prompt.show({
		name: 'answer',
		message: 'Is this path correct? Y/n',
		required: true
	});

	// Check answer
	if (response.answer.toLowerCase() === 'y') {
		return path;
	} else {
		return await askForPath(fileName);
	}

}

// Ask for ACL
async function askForACL(type) {

	// Check the type and create message for prompt
	let message = '';
	if (type === 'file') {
		message = 'What ACL would you like the file to have? (private)';
	} else if (type === 'folder') {
		message = 'What ACL would you like the folder to have? (private)';
	} else if (type === 'files') {
		message = 'What ACL would you like the files to have? (private)';
	} else {
		throw 'Invalid type';
	}

	// Display valid ACLs
	Log.spacer();
	Constants.s3ACLs.forEach((acl) => {
		Log.notice(acl);
	});
	Log.spacer();

	// Ask for ACL
	let response = await Prompt.show({
		name: 'acl',
		message: message,
		required: false
	});

	// Check if the acl is empty and set the default
	if (response.acl === '') {
		response.acl = 'private';
	}

	// Check the response acl is valid
	if (Constants.s3ACLs.includes(response.acl)) {
		return response.acl;
	} else {
		Log.notice('Please enter a valid ACL');
		return await askForACL(type);
	}

}

// Get MIME type
function getMIMEType(file) {

	// Remove .gz extension
	if (file.includes('.gz')) {
		file = file.replace('.gz', '');
	}

	return mime.getType(file);

}
