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
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, 'src', 'scss', 'node_modules')],
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }


};