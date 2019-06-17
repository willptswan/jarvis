exports.template = () => {
	return `// Imports
var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(env) {

	return {
		mode: 'production',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'index.js',
			publicPath: '/build'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				},
				{
					test: /\.less$/,
					use: [{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
		            mode: 'local',
		            localIdentName: '[path][name]__[local]--[hash:base64:5]',
		          },
						}
					},
					{
						loader: 'less-loader',
		     	options: {
		      	javascriptEnabled: true,
		    	},
					}]
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new MiniCssExtractPlugin({
				filename: "index.css",
			}),
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor: require('cssnano'),
				cssProcessorPluginOptions: {
					preset: ['default',
						{ discardComments: { removeAll: true } }],
				},
				canPrint: true
			}),
			new CompressionPlugin({
				filename: "[path].gz[query]",
				algorithm: "gzip",
				test: /\.js$|\.css$|\.html$/,
			})
		],
		watch: false,
		devtool: "none"
	};
};
`;
};
