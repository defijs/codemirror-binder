"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './src',
	externals: {
		codemirror: {
			root: 'CodeMirror',
            commonjs2: 'codemirror',
            commonjs: 'codemirror',
            amd: 'codemirror'
		}
	},
	output: {
		path: `${__dirname}/bundle`,
		filename: 'matreshka-binder-codemirror.min.js',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel']
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
	]
};
