// configuration files has to be in CommonJS module system
const path = require('path'); // built-in module
const webpack = require('webpack'); // installed module --> node_modules folder

module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.[contenthash:8].js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}