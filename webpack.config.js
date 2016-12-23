
module.exports = {

    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: 'lib'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}