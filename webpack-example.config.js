const path = require('path');

module.exports = {
    entry: './example/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development'
};
