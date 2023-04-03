// Imports
const Log = require('../utils/Log');
const Files = require('../utils/Files');
const parser = require('gitignore-parser');
const fs = require('fs');
const Chalk = require('chalk');
const Format = require('../utils/Format');

// Handler
exports.handler = async (ignoreFiles) => {

	// Init stats
	let stats = {
		lines: {
			total: 0,
			average: 0,
			max: {
				count: 0,
				file: ""
			},
			min: {
				count: 0,
				file: ""
			}
		},
		files: {
			total: 0,
			extensions: []
		}
	};

	Log.info(`Building ignore list...`);

	// Build ignore list
	ignoreFiles = await buildIgnoreList(ignoreFiles);

	Log.info(`Analysing project contents...`);

	// Get everything in root of project
	let projectContents = await buildProjectContentsArray('./', ignoreFiles);

	Log.info(`Counting lines...`);

	// Count code
	let linesResult = await countProjectCode(projectContents);

	// Update stats
	stats.lines.total = linesResult.totalCount;
	stats.lines.average = Math.round(linesResult.averageCountArray.reduce((a,b) => a + b, 0) / linesResult.averageCountArray.length);
	stats.lines.max = linesResult.maxLines;
	stats.lines.min = linesResult.minLines;

	Log.info('Counting files....');

	// Count files
	let filesResult = await countProjectFiles(projectContents);

	// Calculate percentages of files
	filesResult.extensions.forEach((extension, i) => {
		let percentage = (extension.count / filesResult.fileCount) * 100;
		extension["percentage"] = percentage.toFixed(2);
	});


	// Update stats
	stats.files.total = filesResult.fileCount;
	stats.files.extensions = filesResult.extensions;

	// Display stats
	displayStats(stats);

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
	if (gitignore) {
		if (gitignore.denies(item)) {
			ignore = true;
		}
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

// Total count
let totalCount = 0;
let averageCountArray = [];
let maxLines = {
	count: 0,
	file: ""
};
let minLines = {
	count: 9999999999999,
	file: ""
};

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
			averageCountArray.push(item.count);
			if (item.count > maxLines.count) {
				maxLines.count = item.count;
				maxLines.file = item.path;
			}
			if (item.count < minLines.count) {
				minLines.count = item.count;
				minLines.file = item.path;
			}

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
		totalCount: totalCount,
		averageCountArray: averageCountArray,
		maxLines: maxLines,
		minLines: minLines
	};

};

let resultObject = {
	extensions: [],
	fileCount: 0
};

// Count files
const countProjectFiles = async (contents) => {

	// Loop through files
	for (let item of contents) {

		if (item.type === "file") {

			// Update total file count
			resultObject.fileCount = resultObject.fileCount + 1;

			// Check the extension
			let itemSplit = item.path.split('.');
			let itemExtension = itemSplit[itemSplit.length - 1];

			// Check if exists in resultObject extensions
			let exists = resultObject.extensions.some(object => object.extension === itemExtension);
			if (exists) {

				// Update object
				let arrayIndex = resultObject.extensions.map(function(object) {return object.extension; }).indexOf(itemExtension);
				let updatedCount = resultObject.extensions[arrayIndex].count + 1;
				resultObject.extensions[arrayIndex].count = updatedCount;

			} else {

				// Create object
				resultObject.extensions.push({
					extension: itemExtension,
					count: 1
				});

			}

		} else {

			await countProjectFiles(item.contents);

		}

	}

	return resultObject;

};

// Display stats
const displayStats = (stats) => {

	Log.spacer();

	// Log lines
	console.log(`${Chalk.white.bgYellow(' Lines ')}${Chalk.yellow(`  Average Lines: ${Format.commaSeparateThousands(stats.lines.average)}`)}`);
	console.log(`${Chalk.white.bgYellow(' Lines ')}${Chalk.yellow(`  Max Lines: ${Format.commaSeparateThousands(stats.lines.max.count)} - ${stats.lines.max.file}`)}`);
	console.log(`${Chalk.white.bgYellow(' Lines ')}${Chalk.yellow(`  Min Lines: ${Format.commaSeparateThousands(stats.lines.min.count)} - ${stats.lines.min.file}`)}`);
	Log.spacer();
	console.log(`${Chalk.white.bgYellow(' Lines ')}${Chalk.yellow(`  Total Lines: ${Format.commaSeparateThousands(stats.lines.total)}`)}`);

	Log.spacer();

	// Log files
	stats.files.extensions.forEach((extension, i) => {
		console.log(`${Chalk.white.bgBlue(' Files ')}${Chalk.blue(`  .${extension.extension} files: ${Format.commaSeparateThousands(extension.count)} - ${extension.percentage}%`)}`);
	});
	Log.spacer();
	console.log(`${Chalk.white.bgBlue(' Files ')}${Chalk.blue(`  Total Files: ${Format.commaSeparateThousands(stats.files.total)}`)}`);

	Log.spacer();

};
