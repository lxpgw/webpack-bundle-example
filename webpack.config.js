var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		index: './index'
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[chunkhash].js'
	},

	module: {
		loaders:[
			{test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	}

};