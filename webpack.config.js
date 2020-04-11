const path = require('path');

module.exports = {
	mode:      "development",
	entry:     path.resolve(__dirname, 'src', 'script.js'),
	devtool:   'inline-source-map',
	devServer: {
		contentBase:      [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'src')],
		liveReload:       true,
		watchContentBase: true,
		index:            'index.html',
		host: "192.168.80.108"
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader'
					}
				]
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
	},
	output:    {
		filename: "build.js",
		path:     path.resolve(__dirname, 'dist')
	}
};
