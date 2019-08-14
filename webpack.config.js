const path = require('path');

module.exports = {
	mode:      "development",
	entry:     path.resolve(__dirname, 'src', 'script.js'),
	devtool:   'inline-source-map',
	devServer: {
		contentBase:      [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'src')],
		liveReload:       true,
		watchContentBase: true,
		index:            'index.html'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
	},
	output:    {
		filename: "build.js",
		path:     path.resolve(__dirname, 'dist')
	}
};
