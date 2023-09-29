const path = require('path');
const dir_main = path.join(__dirname, 'main');
const dir_dist = path.join(__dirname, 'dist');

module.exports = {
    entry: path.join(dir_main, 'index.js'),
    output: {
        path: dir_dist,
        filename: 'index.bundle.js',
    },
    devServer: {
        static: path.resolve(dir_main),
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react']
                    },
                }
            }, {
                test: /\.css$/i,
                include: path.resolve(dir_main),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ]
    },
};
