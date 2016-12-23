
var webpack = require('webpack');
var fs = require('fs');

module.exports = {

    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: 'dist'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
    ]
}