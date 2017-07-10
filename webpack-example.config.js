var path = require('path');

module.exports = {
    entry: './example/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example')
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
