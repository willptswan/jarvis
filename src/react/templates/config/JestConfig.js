exports.template = () => {
	return `module.exports = {
	automock: false,
	browser: true,
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./mocks/fileMock.js",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy"
	},
	moduleFileExtensions: [
		"js",
		"jsx"
	],
	moduleDirectories: [
		"node_modules"
	],
	transform: {
		"^.+\\.jsx?$": "./node_modules/babel-jest"
	},
	testRegex: ".*.test.js",
	verbose: true
};`;
};
