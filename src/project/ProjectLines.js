// Imports
const Log = require('../utils/Log');
const Files = require('../utils/Files');
const Format = require('../utils/Format');
const parser = require('gitignore-parser');
const fs = require('fs');
const Chalk = require('chalk');

// Handler
exports.handler = async (ignoreFiles) => {

	Log.info(`Building ignore list...`);

	// Build ignore list
	ignoreFiles = await buildIgnoreList(ignoreFiles);

	Log.info(`Analysing project contents...`);

	// Get everything in root of project
	let projectContents = await buildProjectContentsArray('./', ignoreFiles);

	Log.info(`Counting lines...`);

	// Count code
	let result = await countProjectCode(projectContents);

	// Display results
	Log.spacer();
	logProjectContents(result.contentsCounted);

	// Log total count
	Log.spacer();
	// Log.success(`Total Count: ${result.totalCount} lines`);
	console.log(`${Chalk.white.bgBlue(' Total ')}${Chalk.blue(`  ${Format.commaSeparateThousands(result.totalCount)} lines`)}`);
	Log.spacer();

};

// Build project contents array
const buildProjectContentsArray = async (folder, ignoreFiles) => {

	let contentsArray = [];

	// Get folder contents
	let folderContents = await Files.getFolderContents(folder);

	// Loop through folder contents
	for (const item of folderContents) {

		// Check if file
  	const isFile = await Files.isFileOrFolder(item);

	  // Check if we should ignore item
		let ignoring = await shouldIgnore(item, ignoreFiles);
		if (!ignoring) {

  		if (isFile) {

				// Add to array
				contentsArray.push({
					type: 'file',
					path: item,
					count: 0
				});

  		} else {

				let files = await buildProjectContentsArray(item, ignoreFiles);

				// Add to array
				contentsArray.push({
					type: 'folder',
					path: item,
					contents: files
				});

  		}

		}

	}

	return contentsArray;

};

// Log project contents
const logProjectContents = (contents, tab = 0) => {

	contents.forEach((item, i) => {

		if (item.type === "file") {
			Log.notice(`${item.path} - ${Format.commaSeparateThousands(item.count)} lines`, tab);
		} else {
			Log.notice(`${item.path}:`, tab);
			logProjectContents(item.contents, tab + 1);
		}

	});

};

// Total count
let totalCount = 0;

// Count code
const countProjectCode = async (contents) => {

	// Init array
	let contentsArray = [];

	for (let item of contents) {

		if (item.type === "file") {

			// Load file
  		let loadedFile = await Files.load(item.path);

  		// Split lines
  		loadedFile = loadedFile.split(/\r?\n/);

			// Update count
			item.count = loadedFile.length;
			totalCount = totalCount + item.count;

			// Add to array
			contentsArray.push(item);

		} else {

			let files = await countProjectCode(item.contents);

			// Update folder
			item.contents = files.contentsCounted;

			// Add to array
			contentsArray.push(item);

		}

	}

	return {
		contentsCounted: contentsArray,
		totalCount: totalCount
	};

};

let gitignore = null;

const buildIgnoreList = (ignoreFiles) => {

	// Add in default ignore files
	ignoreFiles.push('README.md');
	ignoreFiles.push('LICENSE');
	ignoreFiles.push('CHANGELOG.md');
	ignoreFiles.push('package.json');
	ignoreFiles.push('package-lock.json');
	ignoreFiles.push('.sass-lint.yml');
	ignoreFiles.push('.gitignore');
	ignoreFiles.push('.gcloudignore');
	ignoreFiles.push('.eslintrc');
	ignoreFiles.push('node_modules/');
	ignoreFiles.push('.git/');
	ignoreFiles.push('*.com');
	ignoreFiles.push('*.class');
	ignoreFiles.push('*.dll');
	ignoreFiles.push('*.exe');
	ignoreFiles.push('*.o');
	ignoreFiles.push('*.so');
	ignoreFiles.push('*.7z');
	ignoreFiles.push('*.dmg');
	ignoreFiles.push('*.gz');
	ignoreFiles.push('*.iso');
	ignoreFiles.push('*.jar');
	ignoreFiles.push('*.rar');
	ignoreFiles.push('*.tar');
	ignoreFiles.push('*.zip');
	ignoreFiles.push('*.log');
	ignoreFiles.push('*.sql');
	ignoreFiles.push('*.sqlite');
	ignoreFiles.push('.DS_Store');
	ignoreFiles.push('.Spotlight-V100');
	ignoreFiles.push('.Trashes');
	ignoreFiles.push('ehthumbs.db');
	ignoreFiles.push('Thumbs.db');

	// Check if there is a .gitignore file
	if (Files.exists('./.gitignore')) {

		// Parse gitignore
		gitignore = parser.compile(fs.readFileSync('.gitignore', 'utf8'));

	}

	// Split extensions from ignore files
	let files = [];
	let extensions = [];
	ignoreFiles.forEach((file, i) => {
		if (file.includes("ext.")) {
			extensions.push(file.replace('ext',''));
		} else {
			files.push(file);
		}
	});

	return {
		files: files,
		extensions: extensions
	};

};

// Should ignore
const shouldIgnore = async (item, ignoreFiles) => {

	// Init ignore
	let ignore = false;

	// Check if file
	const isFile = await Files.isFileOrFolder(item);

	// Sanitise item for check
	item = item.replace('./','');
	if (!isFile) {
		item = `${item}/`;
	}

	// Check against git ignore
	if (gitignore.denies(item)) {
		ignore = true;
	}

	// Check against ignoreFiles
	if (ignoreFiles.files.includes(item)) {
		ignore = true;
	}

	// Check against extensions
	ignoreFiles.extensions.forEach((extension, i) => {
		console.log(`${item} - ${extension}`);
		if (item.includes(extension)) {
			ignore = true;
		}
	});

	return ignore;

};
