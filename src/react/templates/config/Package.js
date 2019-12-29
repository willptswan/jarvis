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
  "version": "1.0.0",
  "license": "UNLICENSED",
  "private": true,
  "repository": {
    "type": "git",
    "url": "git@github.com-${gitConfig.username}:${gitConfig.username}/${gitConfig.repo}.git"
  },
  "scripts": {
    "test": "jest",
    "build": "NODE_ENV=development webpack-dev-server --env.dev",
    "build:prod": "NODE_ENV=production webpack --env.prod -p",
		"start": "node server.js"
  },
  "devDependencies": {
		"@babel/core": "latest",
    "@babel/plugin-transform-runtime": "latest",
    "@babel/preset-env": "latest",
    "@babel/preset-react": "latest",
    "@babel/runtime": "latest",
    "aws-sdk": "latest",
    "babel-loader": "latest",
    "compression-webpack-plugin": "latest",
    "css-loader": "latest",
    "cssnano": "latest",
    "enzyme": "latest",
    "enzyme-adapter-react-16": "latest",
    "eslint": "latest",
    "identity-obj-proxy": "latest",
    "jest": "latest",
    "mini-css-extract-plugin": "latest",
    "optimize-css-assets-webpack-plugin": "latest",
    "style-loader": "latest",
    "webpack": "latest",
    "webpack-build-notifier": "latest",
    "webpack-cli": "latest",
    "webpack-dev-server": "latest",
		"${styleType}": "latest",
    "${styleLoader}": "latest"
  },
  "dependencies": {
		"express": "latest",
    "prop-types": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-helmet": "latest",
    "react-router-dom": "latest"
  }
}`;

};
