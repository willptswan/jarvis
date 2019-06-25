// Imports
const Log = require('../utils/Log');
const Files = require('../utils/Files');
const Prompt = require('../utils/Prompt');
const Settings = require('../utils/Settings');
const GitInit = require('../git/GitInit');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ReactBuild = require('./ReactBuild');
const EBInit = require('../aws/eb/EBInit');

// Templates
const Container = require('./templates/app/Container');
const ContainerIndex = require('./templates/app/ContainerIndex');
const ContainerStyles = require('./templates/app/ContainerStyles');
const ContainerTest = require('./templates/app/ContainerTest');
const Head = require('./templates/app/Head');
const HeadIndex = require('./templates/app/HeadIndex');
const Home = require('./templates/app/Home');
const HomeIndex = require('./templates/app/HomeIndex');
const HomeStyles = require('./templates/app/HomeStyles');
const HomeTest = require('./templates/app/HomeTest');
const IndexHTML = require('./templates/app/IndexHTML');
const ServerJS = require('./templates/app/ServerJS');
const IndexLess = require('./templates/app/IndexLess');
const IndexSCSS = require('./templates/app/IndexSCSS');
const MainIndex = require('./templates/app/MainIndex');
const PageNotFound = require('./templates/app/PageNotFound');
const PageNotFoundIndex = require('./templates/app/PageNotFoundIndex');
const PageNotFoundStyles = require('./templates/app/PageNotFoundStyles');
const PageNotFoundTest = require('./templates/app/PageNotFoundTest');
const Variables = require('./templates/app/Variables');
const VariablesSCSS = require('./templates/app/VariablesSCSS');
const BabelRC = require('./templates/config/BabelRC');
const Enzyme = require('./templates/config/Enzyme');
const ESLintRC = require('./templates/config/ESLintRC');
const JestConfig = require('./templates/config/JestConfig');
const Package = require('./templates/config/Package');
const WebpackConfig = require('./templates/config/WebpackConfig');
const WebpackDevConfig = require('./templates/config/WebpackDevConfig');
const WebpackProdConfig = require('./templates/config/WebpackProdConfig');
const AppYaml = require('./templates/gae/AppYaml');
const GcloudIgnore = require('./templates/gae/GcloudIgnore');
const ChangeLog = require('./templates/git/ChangeLog');
const GitIgnore = require('./templates/git/GitIgnore');
const ReadMe = require('./templates/git/ReadMe');
const Environment = require('./templates/util/Environment');

// Handler
exports.handler = async (projectName) => {

	// Display initial steps
	await displayInitialSteps(projectName);

	// Init git
	await GitInit.handler();

	// Log starting initialising
	Log.spaced(`Initialising react project ${projectName}...`, 'info');

	// Get settings
	let settings = await Settings.get();

	// Create folders
	await createFolders(projectName);

	// Create config files
	await createConfigFiles(projectName, settings.useSCSS);

	// Create git files
	await createGitFiles(projectName);

	// Create app files
	await createAppFiles(projectName, settings.useSCSS);

	// Create util files
	await createUtilFiles(projectName);

	// Create gae files
	await createGaeFiles(projectName);

	// Create eb files
	await createEBFiles(projectName);

	// Execute package installs
	await executePackageInstalls(projectName);

	// Run tests
	await runTests(projectName);

	// Build and run
	await buildAndRun(projectName);

	// Display next steps
	await displayNextSteps(projectName);

};

// Display initial steps
async function displayInitialSteps(projectName) {

	// Check that an empty github repo has already been created
	Log.spaced('Please make sure that an empty repo has already been created on GitHub for this project.', 'notice');

	// Ask if we want to continue
	let response = await Prompt.show({
		name: 'answer',
		message: 'Do you want to continue? Y/n',
		required: true
	});

	// Check answer
	if (response.answer.toLowerCase() !== 'y') {
		throw `react-init ${projectName} aborted`;
	}

}

// Create Folders
async function createFolders(projectName) {

	// Log creating folders
	Log.spaced('Creating folders...', 'info');

	// Create build folder
	await Files.makeDir('./build');

	// Create src folder
	await Files.makeDir('./src');

	// Create components folder
	await Files.makeDir('./src/components');

	// Create Container folder
	await Files.makeDir('./src/components/Container');

	// Create Head folder
	await Files.makeDir('./src/components/Head');

	// Create views folder
	await Files.makeDir('./src/components/views');

	// Create Home folder
	await Files.makeDir('./src/components/views/Home');

	// Create PageNotFound folder
	await Files.makeDir('./src/components/views/PageNotFound');

	// Create utils folder
	await Files.makeDir('./src/utils');

}

// Create config files
async function createConfigFiles(projectName, useSCSS) {

	// Log creating config files
	Log.spaced('Creating config files...', 'info');

	// Create .babelrc
	await Files.create('./.babelrc', BabelRC.template());

	// Create .eslintrc
	await Files.create('./.eslintrc', ESLintRC.template());

	// Create jest.config.js
	await Files.create('./jest.config.js', JestConfig.template());

	// Create ./src/enzyme.js
	await Files.create('./src/enzyme.js', Enzyme.template());

	// Create package.json
	let packageTemplate = await Package.template(projectName, useSCSS);
	await Files.create('./package.json', packageTemplate);

	// Create webpack.config.js
	await Files.create('./webpack.config.js', WebpackConfig.template());

	// Create webpack.dev.config.js
	await Files.create('./webpack.dev.config.js', WebpackDevConfig.template(useSCSS));

	// Create webpack.prod.config.js
	await Files.create('./webpack.prod.config.js', WebpackProdConfig.template(useSCSS));

}

// Create git files
async function createGitFiles(projectName) {

	// Log creating git files
	Log.spaced('Creating git files...', 'info');

	// Create .gitignore
	await Files.create('./.gitignore', GitIgnore.template());

	// Create CHANGELOG.md
	await Files.create('./CHANGELOG.md', ChangeLog.template());

	// Create README.md
	await Files.create('./README.md', ReadMe.template(projectName));

}

// Create gae files
async function createGaeFiles(projectName) {

	// Ask if this project will be deployed to google app engine
	let response = await Prompt.show({
		name: 'answer',
		message: 'Will this project be deployed on Google App Engine? Y/n',
		required: true
	});

	// Check if answer was yes
	if (response.answer.toLowerCase() === 'y') {

		// Log creating gae files
		Log.spaced('Creating gae files...', 'info');

		// Create app.yaml
		await Files.create('./app.yaml', AppYaml.template());

		// Create .gcloudignore
		await Files.create('./.gcloudignore', GcloudIgnore.template());

	}

}

// Create elastic beanstalk files
async function createEBFiles(projectName) {

	// Ask if this project will be deployed to elastic beanstalk
	let response = await Prompt.show({
		name: 'answer',
		message: 'Will this project be deployed on AWS Elastic Beanstalk? Y/n',
		required: true
	});

	// Check if answer was yes
	if (response.answer.toLowerCase() === 'y') {

		await EBInit.handler(projectName, false);

	}

}

// Create app files
async function createAppFiles(projectName, useSCSS) {

	// Log creating app files
	Log.spaced('Creating app files...', 'info');

	// Create index.html
	await Files.create('./index.html', IndexHTML.template());

	// Create server.js
	await Files.create('./server.js', ServerJS.template());

	// Create ./src/index.js
	await Files.create('./src/index.js', MainIndex.template(useSCSS));

	if (useSCSS) {

		// Create ./src/index.scss
		await Files.create('./src/index.scss', IndexSCSS.template());

		// Create ./src/variables.scss
		await Files.create('./src/variables.scss', VariablesSCSS.template());

	} else {

		// Create ./src/index.less
		await Files.create('./src/index.less', IndexLess.template());

		// Create ./src/variables.less
		await Files.create('./src/variables.less', Variables.template());

	}

	// Create Container Component
	await createContainerComponent(projectName, useSCSS);

	// Create Head Component
	await createHeadComponent(projectName);

	// Create Home view component
	await createHomeViewComponent(projectName, useSCSS);

	// Create PageNotFound view component
	await createPageNotFoundViewComponent(projectName, useSCSS);

}

// Create container component
async function createContainerComponent(projectName, useSCSS) {

	// Create ./src/components/Container/Container.js
	await Files.create('./src/components/Container/Container.js', Container.template(useSCSS));

	// Create ./src/components/Container/Container.test.js
	await Files.create('./src/components/Container/Container.test.js', ContainerTest.template(useSCSS));

	if (useSCSS) {

		// Create ./src/components/Container/container.scss
		await Files.create('./src/components/Container/container.scss', ContainerStyles.template());

	} else {

		// Create ./src/components/Container/container.less
		await Files.create('./src/components/Container/container.less', ContainerStyles.template());

	}

	// Create ./src/components/Container/index.js
	await Files.create('./src/components/Container/index.js', ContainerIndex.template());

}

// Create head component
async function createHeadComponent(projectName) {

	// Create ./src/components/Head/Head.js
	await Files.create('./src/components/Head/Head.js', Head.template());

	// Create ./src/components/Head/index.js
	await Files.create('./src/components/Head/index.js', HeadIndex.template());

}

// Create home view component
async function createHomeViewComponent(projectName, useSCSS) {

	// Create ./src/components/views/Home/Home.js
	await Files.create('./src/components/views/Home/Home.js', Home.template(useSCSS));

	// Create ./src/components/views/Home/Home.test.js
	await Files.create('./src/components/views/Home/Home.test.js', HomeTest.template(useSCSS));

	if (useSCSS) {

		// Create ./src/components/views/Home/home.scss
		await Files.create('./src/components/views/Home/home.scss', HomeStyles.template());

	} else {

		// Create ./src/components/views/Home/home.less
		await Files.create('./src/components/views/Home/home.less', HomeStyles.template());

	}

	// Create ./src/components/views/Home/index.js
	await Files.create('./src/components/views/Home/index.js', HomeIndex.template());

}

// Create pagenotfound view component
async function createPageNotFoundViewComponent(projectName, useSCSS) {

	// Create ./src/components/views/PageNotFound/PageNotFound.js
	await Files.create('./src/components/views/PageNotFound/PageNotFound.js', PageNotFound.template(useSCSS));

	// Create ./src/components/views/PageNotFound/PageNotFound.test.js
	await Files.create('./src/components/views/PageNotFound/PageNotFound.test.js', PageNotFoundTest.template(useSCSS));

	if (useSCSS) {

		// Create ./src/components/views/PageNotFound/pagenotfound.scss
		await Files.create('./src/components/views/PageNotFound/pagenotfound.scss', PageNotFoundStyles.template());

	} else {

		// Create ./src/components/views/PageNotFound/pagenotfound.less
		await Files.create('./src/components/views/PageNotFound/pagenotfound.less', PageNotFoundStyles.template());

	}

	// Create ./src/components/views/PageNotFound/index.js
	await Files.create('./src/components/views/PageNotFound/index.js', PageNotFoundIndex.template());

}

// Create util files
async function createUtilFiles(projectName) {

	// Log creating util files
	Log.spaced('Creating util files...', 'info');

	// Create ./src/utils/Environment.js
	await Files.create('./src/utils/Environment.js', Environment.template());

}

// Execute package installs
async function executePackageInstalls(projectName) {

	// Log installing npm packages
	Log.spaced('Installing npm packages...', 'info');

	// Install npm packages
	const { stdout, stderr } = await exec('npm install');

	// Check if there were any errors
	if (stderr !== "" && stderr !== null && typeof(stderr) !== 'undefined') {

		// Check if error was warning
		if (stderr.includes('WARN')) {
			Log.standard(`NPM Warning: ${stderr}`, 'notice');
		} else {
			Log.standard(`NPM Error: ${stderr}`, 'error');
		}

	}

	// Check if packages were installed
	if (stdout.includes('added')) {
		Log.standard('Installed npm packages', 'success');
	}

}

// Run tests
async function runTests(projectName) {

	// Ask if tests should be run
	let response = await Prompt.show({
		name: 'answer',
		message: 'Would you like to run npm tests? Y/n',
		required: true
	});

	// Check if answer was yes
	if (response.answer.toLowerCase() === 'y') {

		// Log running npm tests
		Log.spaced('Running npm tests...', 'info');

		// Run tests
		const { stdout, stderr } = await exec('npm run test');

		// Log results
		Log.standard(stderr, 'notice');

	}

}

// Build and run
async function buildAndRun(projectName) {

	// Ask if we want to build and run
	let response = await Prompt.show({
		name: 'answer',
		message: `Would you like to build and run ${projectName}? Y/n`,
		required: true
	});

	// Check if answer was yes
	if (response.answer.toLowerCase() === 'y') {

		await ReactBuild.handler();

	}

}

// Display next steps
async function displayNextSteps(projectName) {

	Log.spaced(`${projectName} initialisation finished`, 'success');
	Log.standard('Next Steps:', 'notice');
	Log.tabbed('1. Set constants in src/utils/Environment.js', 'notice');
	Log.spacer();

}
