// Imports
const Log = require('../utils/Log');
const Prompt = require('../utils/Prompt');
const Constants = require('../utils/Constants');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// List available documentations
exports.list = async (type) => {

	// Get lists
	let lists = [
		{
			title: "Languages",
			list: exports.languages()
		},
		{
			title: "Frameworks",
			list: exports.frameworks()
		},
		{
			title: "Platforms",
			list: exports.platforms()
		}
	];

	// Loop through and display
	lists.forEach((group) => {

		Log.spacer();
		Log.notice(`${group.title}:`);

		group.list.forEach((documentation) => {

			Log.notice(`${documentation.name} - ${documentation.type}`, 1);

		});

	});

	Log.spacer();

};

// View documentation
exports.view = async (type) => {

	// Check that the type is in a list
	let documentation = await isAvailable(type);

	// Check if documentation was found
	if (documentation !== false) {

		// Log opening
		Log.spacer();
		Log.info(`Opening ${documentation.name} documentation in default browser...`);

		// Open the documentation
		if (process.platform === Constants.osMac) {
			await exec(`open "${documentation.url}"`);
		} else if (process.platform === Constants.osWindows) {
			await exec(`explorer "${documentation.url}"`);
		} else if (process.platform === Constants.linux) {
			await exec(`xdg-open "${documentation.url}"`);
		}

	} else {

		Log.notice('Use the documentation-list command to view all available documentation');
		Log.error('Please pass a valid documentation type');
		throw 'Invalid documentation type';

	}

};

/*
 * Helper Functions
*/
async function isAvailable(type) {

	// Lowercase type
	type = type.toLowerCase();

	// Get lists
	let languages = exports.languages();
	let frameworks = exports.frameworks();
	let platforms = exports.platforms();

	// Get matching languages
	let languagesMatched = languages.filter((language) => {
		return type === language.name.toLowerCase();
	});

	// Get matching frameworks
	let frameworksMatched = frameworks.filter((framework) => {
		return type === framework.name.toLowerCase();
	});

	// Get matching platforms
	let platformsMatched = platforms.filter((platform) => {
		return type === platform.name.toLowerCase();
	});

	// Check for no matches
	if (languagesMatched.length === 0 && frameworksMatched.length === 0 && platformsMatched.length === 0) {
		return false;
	} else {
		return await chooseDocumentation(languagesMatched, frameworksMatched, platformsMatched);
	}

}

async function chooseDocumentation(languages, frameworks, platforms) {

	// Check if only one language
	if (languages.length === 1 && frameworks.length === 0 && platforms.length === 0) {
		return languages[0];
	}

	// Check if only one framework
	if (languages.length === 0 && frameworks.length === 1 && platforms.length === 0) {
		return frameworks[0];
	}

	// Check if only one platform
	if (languages.length === 0 && frameworks.length === 0 && platforms.length === 1) {
		return platforms[0];
	}

	// Create a new array of all matches
	let matches = [];
	matches.push({
		title: "Languages",
		matches: languages
	});
	matches.push({
		title: "Frameworks",
		matches: frameworks
	});
	matches.push({
		title: "Platforms",
		matches: platforms
	});

	// Match id variable
	let matchId = 0;

	// Matches array with id
	let matchesWithId = [];

	// Display all matches
	matches.forEach((group) => {

		// Check if the group has matches
		if (group.matches.length !== 0) {

			// Log title
			Log.spacer();
			Log.notice(`${group.title}:`);

			// Loop through matches
			group.matches.forEach((match) => {

				// Display match
				Log.notice(`${matchId}: ${match.name} - ${match.type}`, 1);

				// Add match to the new array
				matchesWithId[matchId] = match;

				// Increment the match id
				matchId++;

			});

		}

	});

	// Ask which match is correct
	let response = await Prompt.show({
		name: "index",
		message: `Which documentation would you like to view? 0-${matchesWithId.length - 1}`,
		required: true
	});

	// Check the index entered is valid
	if (response.index >= 0 && response.index <= (matchesWithId.length - 1)) {
		return matchesWithId[response.index];
	} else {
		return await chooseDocumentation(languages, frameworks, platforms);
	}

}

/*
 * Lists
*/

// List of langauges and their documentation URL
exports.languages = () => {
	return [
		{
			name: "ABAP",
			type: "Language",
			url: "https://developers.sap.com/topics/abap-platform.html"
		},
		{
			name: "ActionScript",
			type: "Language",
			url: "https://www.adobe.com/devnet/actionscript.html"
		},
		{
			name: "Ada",
			type: "Language",
			url: "https://www.adacore.com/documentation"
		},
		{
			name: "APL",
			type: "Language",
			url: "https://tryapl.org"
		},
		{
			name: "ASP.NET",
			type: "Language",
			url: "https://docs.microsoft.com/en-gb/dotnet/"
		},
		{
			name: "C",
			type: "Language",
			url: "https://docs.microsoft.com/en-us/cpp/c-language/c-language-reference?view=vs-2019"
		},
		{
			name: "C++",
			type: "Language",
			url: "https://devdocs.io/cpp/"
		},
		{
			name: "C#",
			type: "Language",
			url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
		},
		{
			name: "CSS",
			type: "Language",
			url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
		},
		{
			name: "Sass",
			type: "Language",
			url: "https://sass-lang.com/documentation"
		},
		{
			name: "SCSS",
			type: "Language",
			url: "https://sass-lang.com/documentation"
		},
		{
			name: "LESS",
			type: "Language",
			url: "http://lesscss.org"
		},
		{
			name: "Erlang",
			type: "Language",
			url: "https://www.erlang.org/docs"
		},
		{
			name: "Elixir",
			type: "Language",
			url: "https://elixir-lang.org/docs.html"
		},
		{
			name: "F#",
			type: "Language",
			url: "https://docs.microsoft.com/en-us/dotnet/fsharp/"
		},
		{
			name: "Go",
			type: "Language",
			url: "https://golang.org/doc/"
		},
		{
			name: "Haskell",
			type: "Language",
			url: "https://www.haskell.org/documentation/"
		},
		{
			name: "HTML",
			type: "Language",
			url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
		},
		{
			name: "Java",
			type: "Language",
			url: "https://docs.oracle.com/en/java/"
		},
		{
			name: "JavaScript",
			type: "Language",
			url: "https://developer.mozilla.org/bm/docs/Web/JavaScript"
		},
		{
			name: "NodeJS",
			type: "Language",
			url: "https://nodejs.org/en/docs/"
		},
		{
			name: "Lisp",
			type: "Language",
			url: "https://lisp-lang.org/learn/"
		},
		{
			name: "ObjectiveC",
			type: "Language",
			url: "https://developer.apple.com/documentation/objectivec"
		},
		{
			name: "OCaml",
			type: "Language",
			url: "https://ocaml.org/docs/"
		},
		{
			name: "Perl",
			type: "Language",
			url: "https://www.perl.org/docs.html"
		},
		{
			name: "PHP",
			type: "Language",
			url: "https://www.php.net/manual/en/"
		},
		{
			name: "Python",
			type: "Language",
			url: "https://www.python.org/doc/"
		},
		{
			name: "R",
			type: "Language",
			url: "https://cran.r-project.org/manuals.html"
		},
		{
			name: "RubyOnRails",
			type: "Language",
			url: "https://guides.rubyonrails.org"
		},
		{
			name: "Scala",
			type: "Language",
			url: "https://docs.scala-lang.org"
		},
		{
			name: "Swift",
			type: "Language",
			url: "https://swift.org/documentation/"
		},
		{
			name: "VisualBasic",
			type: "Language",
			url: "https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/"
		},
		{
			name: "XML",
			type: "Language",
			url: "https://docs.oc.tc"
		},
		{
			name: "Rust",
			type: "Language",
			url: "https://doc.rust-lang.org/reference/index.html"
		},
		{
			name: "Kotlin",
			type: "Language",
			url: "https://kotlinlang.org/docs/reference/"
		},
		{
			name: "Ruby",
			type: "Language",
			url: "https://ruby-doc.org"
		},
		{
			name: "TypeScript",
			type: "Language",
			url: "https://www.typescriptlang.org/docs/home.html"
		}
	];
};

// List of frameworks and their documentation URL
exports.frameworks = () => {
	return [
		{
			name: "Bootstrap",
			type: "HTML CSS JS Framework",
			url: "https://getbootstrap.com/docs/4.3/getting-started/introduction/"
		},
		{
			name: "jQuery",
			type: "JavaScript UI Library",
			url: "https://api.jquery.com"
		},
		{
			name: "lodash",
			type: "JavaScript Utility Library",
			url: "https://lodash.com/docs"
		},
		{
			name: "request",
			type: "Javascript HTTP Request Client",
			url: "https://github.com/request/request"
		},
		{
			name: "chalk",
			type: "NodeJS CLI Library",
			url: "https://github.com/request/request"
		},
		{
			name: "react",
			type: "JavaScript UI Library",
			url: "https://reactjs.org/docs/getting-started.html"
		},
		{
			name: "express",
			type: "NodeJS Web Framework",
			url: "https://expressjs.com/en/guide/routing.html"
		},
		{
			name: "commander",
			type: "NodeJS CLI Library",
			url: "http://tj.github.io/commander.js/"
		},
		{
			name: "moment",
			type: "JavaScript Date Library",
			url: "https://momentjs.com/docs/"
		},
		{
			name: "debug",
			type: "JavaScript Debugging Utility",
			url: "https://github.com/visionmedia/debug"
		},
		{
			name: "prop-types",
			type: "React Type Checking Utility",
			url: "https://github.com/facebook/prop-types"
		},
		{
			name: "react-dom",
			type: "React DOM Entry Point Package",
			url: "https://www.npmjs.com/package/react-dom"
		},
		{
			name: "async",
			type: "JavaScript Asynchronous Utility",
			url: "https://caolan.github.io/async/v3/"
		},
		{
			name: "bluebird",
			type: "JavaScript Promise Library",
			url: "http://bluebirdjs.com/docs/getting-started.html"
		},
		{
			name: "fs-extra",
			type: "NodeJS File System Library",
			url: "https://github.com/jprichardson/node-fs-extra"
		},
		{
			name: "tslib",
			type: "TypeScript Helper Library",
			url: "https://github.com/Microsoft/tslib"
		},
		{
			name: "axios",
			type: "JavaScript HTTP Client",
			url: "https://github.com/axios/axios"
		},
		{
			name: "underscore",
			type: "JavaScript Utility Library",
			url: "https://underscorejs.org"
		},
		{
			name: "uuid",
			type: "JavaScript RFC4122 UUID Generator",
			url: "https://github.com/kelektiv/node-uuid"
		},
		{
			name: "mkdirp",
			type: "NodeJS mkdir Utility",
			url: "https://github.com/substack/node-mkdirp"
		},
		{
			name: "classnames",
			type: "JavaScript Class Names Utility",
			url: "https://www.npmjs.com/package/classnames"
		},
		{
			name: "vue",
			type: "JavaScript UI Library",
			url: "https://vuejs.org/v2/guide/"
		},
		{
			name: "body-parser",
			type: "NodeJS Middleware",
			url: "https://github.com/expressjs/body-parser"
		},
		{
			name: "yargs",
			type: "NodeJS Argument Parsing Library",
			url: "https://github.com/yargs/yargs"
		},
		{
			name: "webpack",
			type: "JavaScript Module Bundler",
			url: "https://webpack.js.org/concepts/"
		},
		{
			name: "glob",
			type: "JavaScript Glob Library",
			url: "https://github.com/isaacs/node-glob"
		},
		{
			name: "rxjs",
			type: "JavaScript Reactive Extensions",
			url: "https://rxjs.dev/api"
		},
		{
			name: "colors",
			type: "NodeJS CLI Library",
			url: "https://github.com/Marak/colors.js"
		},
		{
			name: "inquirer",
			type: "NodeJS CLI Library",
			url: "https://github.com/SBoudrias/Inquirer.js#documentation"
		},
		{
			name: "minimist",
			type: "NodeJS Argument Parser",
			url: "https://github.com/substack/minimist"
		},
		{
			name: "babel-core",
			type: "Babel Compiler Core",
			url: "https://www.npmjs.com/package/babel-core"
		},
		{
			name: "core-js",
			type: "JavaScript Modular Library",
			url: "https://github.com/zloirock/core-js"
		},
		{
			name: "aws-sdk",
			type: "JavaScript AWS SDK",
			url: "https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/"
		},
		{
			name: "dotenv",
			type: "NodeJS Environment Variables",
			url: "https://github.com/motdotla/dotenv"
		},
		{
			name: "yeoman-generator",
			type: "JavaScript Generator System",
			url: "https://yeoman.github.io/generator/"
		},
		{
			name: "redux",
			type: "JavaScript State Container",
			url: "https://redux.js.org/introduction/getting-started"
		},
		{
			name: "tensorflow",
			type: "Machine Learning Framework",
			url: "https://github.com/tensorflow/tensorflow"
		},
		{
			name: "Kibana",
			type: "ElasticSearch Dashboard",
			url: "https://github.com/elastic/kibana"
		}
	];
};

// List of platforms and their documentation URL
exports.platforms = () => {
	return [
		{
			name: "Apache",
			type: "Server",
			url: "https://httpd.apache.org/docs/"
		},
		{
			name: "Nginx",
			type: "Server",
			url: "https://docs.nginx.com/"
		},
		{
			name: "Kubernetes",
			type: "Container Orchestration",
			url: "https://kubernetes.io/docs/home/"
		},
		{
			name: "Docker",
			type: "Containers",
			url: "https://docs.docker.com/"
		},
		{
			name: "Git",
			type: "Version Control",
			url: "https://git-scm.com/doc"
		},
		{
			name: "Heroku",
			type: "Cloud Platform",
			url: "https://devcenter.heroku.com/"
		},
		{
			name: "Azure",
			type: "Cloud Platform",
			url: "https://docs.microsoft.com/en-gb/azure/"
		},
		{
			name: "GoogleCloud",
			type: "Cloud Platform",
			url: "https://cloud.google.com/docs/"
		},
		{
			name: "AWS",
			type: "Cloud Platform",
			url: "https://docs.aws.amazon.com/index.html?nc2=h_ql_doc"
		},
		{
			name: "MySQL",
			type: "Database",
			url: "https://dev.mysql.com/doc/"
		},
		{
			name: "PostgreSQL",
			type: "Database",
			url: "https://www.postgresql.org/docs/"
		},
		{
			name: "MongoDB",
			type: "Database",
			url: "https://docs.mongodb.com/"
		},
		{
			name: "Redis",
			type: "Data Store",
			url: "https://redis.io/documentation"
		},
		{
			name: "ApacheSpark",
			type: "Unified Analytics Engine",
			url: "https://spark.apache.org/docs/latest/"
		},
		{
			name: "ElasticSearch",
			type: "RESTful Search Engine",
			url: "https://github.com/elastic/elasticsearch"
		},
		{
			name: "CockroachDB",
			type: "Database",
			url: "https://www.cockroachlabs.com/docs/stable/"
		},
		{
			name: "Joomla",
			type: "Content Management System",
			url: "https://docs.joomla.org/Main_Page"
		}
	];
};
