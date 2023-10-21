const path = require('path');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const dir_main = path.join(__dirname, 'main');
const dir_dist = path.join(__dirname, 'dist');

module.exports = {
	entry: path.join(dir_main, 'index.jsx'),
	output: {
		path: dir_dist,
		filename: 'index.bundle.js',
	},
	devServer: {
		static: path.resolve(dir_main),
		port: 3000,
		//open: true,
		hot: true,
	},
	plugins: [
		new Dotenv(),
		new ESLintPlugin(),
		// new webpack.ProvidePlugin({
		// 	myGlobalVar: path.resolve(__dirname, 'global.js'),
		// }),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve(dir_main),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
};
