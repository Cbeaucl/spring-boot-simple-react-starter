const path = require('path');
module.exports = {
    entry: './src/main/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./src/main/resources/static/built")
    },
    devtool: 'sourcemaps',
    cache: true,
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

};