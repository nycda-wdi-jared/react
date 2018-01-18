var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
		'./client/app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './client/public/bundle.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx'],
		alias: {
			app: 'client/app',
			applicationStyles: 'client/app/styles/app.scss',
			actions: 'client/app/actions/actions.jsx',
			reducers: 'client/app/reducers/reducers.jsx',
			configureStore: 'client/app/store/configureStore.jsx'
		},
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'inline-source-map'
};