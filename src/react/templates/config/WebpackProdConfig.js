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
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Plugins
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const nodeEnvPlugin = new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('production')
});

const miniCssPlugin = new MiniCssExtractPlugin();

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
			use: [MiniCssExtractPlugin.loader,
				'css-loader',
				'${styleLoader}']
		}
	];
}

// Export config
module.exports = function(env) {

	return {
  	mode: "production",
  	entry: "./src/index.js",
  	output: outputConfig(),
  	plugins: [htmlPlugin,
			nodeEnvPlugin,
			miniCssPlugin],
  	module: {
  		rules: rulesConfig()
  	},
		devtool: "source-map"
	};

};
`;
};
