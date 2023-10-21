module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
	},
	extends: ['airbnb'],
	rules: {
		'import/prefer-default-export': 'off',
		'no-tabs': 'off',
		indent: 'off',
	},
	env: {
		browser: true,
		node: true,
	},
};
