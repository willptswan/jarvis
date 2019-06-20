// Imports
const fs = require('fs');
const AWS = require('aws-sdk');
const Log = require('../../utils/Log');
const Config = require('../../config/Config');
const Prompt = require('../../utils/Prompt');
const Files = require('../../utils/Files');

exports.handler = async (ignoreConfigCheck = false) => {

	if (!ignoreConfigCheck) {
		// Check active s3 config
		await Config.checkActiveConfig('s3');
	}

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

	// Check if the files exists
	if (!Files.exists('./build/index.js.gz')) {
		throw 'Could not find ./build/index.js.gz';
	}

	if (!Files.exists('./build/index.css.gz')) {
		throw 'Could not find ./build/index.css.gz';
	}

	// Upload files
	await uploadFile(s3, './build/index.js.gz', 'index.js.gz');
	await uploadFile(s3, './build/index.css.gz', 'index.css.gz');

};

// Upload file
async function uploadFile(s3, path, name) {

	// Log uploading
	Log.spaced(`Uploading ${name}...`, 'info');

	// Work out the mime type
	let mime = "text/plain";
	if (name === "index.js.gz") {
		mime = "application/javascript";
	} else if (name === "index.css.gz") {
		mime = "text/css";
	} else {
		throw `${name} is an invalid file`;
	}

	// Upload the file
	const {err, data} = await s3.upload({
		Key: name,
		ContentType: mime,
		ContentEncoding: "gzip",
		CacheControl: "public, max-age=1296000",
		Body: fs.createReadStream(path),
		ACL: 'public-read'
	}).promise();

	// Check for any errors
	if (err) {
		Log.standard(`There was an error uploading ${name}`, 'error');
		throw err;
	} else {
		Log.standard(`${name} uploaded`, 'success');
	}

}
