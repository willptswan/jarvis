exports.template = (useSCSS) => {

	// Work out style info
	let styleExtension = /\.((le|c)ss)$/;
	let styleLoader = 'less-loader';
	if (useSCSS) {
		styleExtension = /\.(s(a|c)ss)$/;
		styleLoader = 'sass-loader';
	}

	return `// Packages
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Plugins
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const nodeEnvPlugin = new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('development')
});

// Output config
function outputConfig() {
	return {
		path: path.join(__dirname, 'dist'),
		filename: "[name].js"
	};
}

// Rules config
function rulesConfig() {
	return [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: ${styleExtension},
			use: ['style-loader',
				'css-loader',
				'${styleLoader}']
		}
	];
}

// Export config
module.exports = function(env) {

	return {
  	mode: "development",
  	entry: "./src/index.js",
  	output: outputConfig(),
  	plugins: [htmlPlugin,
			nodeEnvPlugin],
  	module: {
  		rules: rulesConfig()
  	},
  	devServer: {
  		historyApiFallback: true,
  	},
		devtool: "eval-source-map"
	};

};`;

};
