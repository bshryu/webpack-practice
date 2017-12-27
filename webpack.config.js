var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [new webpack.optimize.UglifyJsPlugin()]
};