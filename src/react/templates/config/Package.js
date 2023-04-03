// Imports
const Config = require('../../../config/Config');

exports.template = async (projectName, useSCSS) => {

	// Get current active git config
	let gitConfig = await Config.getActive('git');

	// Work out style info
	let styleType = 'less';
	let styleLoader = 'less-loader';
	if (useSCSS) {
		styleType = 'node-sass';
		styleLoader = 'sass-loader';
	}

	return `{
  "name": "${projectName}",
  "version": "0.0.1",
  "license": "UNLICENSED",
  "private": true,
  "repository": {
    "type": "git",
    "url": "git@github.com-${gitConfig.username}:${gitConfig.username}/${gitConfig.repo}.git"
  },
  "scripts": {
		"start": "node server.js",
    "build": "NODE_ENV=development webpack serve --env dev",
    "build:prod": "NODE_ENV=production webpack --env prod",
    "test": "jest"
  },
  "devDependencies": {
		"@babel/core": "^7.16.5",
    "@babel/plugin-transform-runtime": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-react": "^7.16.5",
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.6",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "enzyme": "^3.11.0",
    "html-webpack-plugin": "^5.5.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^27.4.5",
    "mini-css-extract-plugin": "^2.4.5",
    "style-loader": "^3.3.1",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.2",
		"${styleType}": "latest",
    "${styleLoader}": "latest"
  },
  "dependencies": {
		"express": "^4.17.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1"
  }
}`;

};
