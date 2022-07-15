const path = require('path')

module.exports = {
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
    mode: 'none',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        path: path.resolve(__dirname, '/public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        devMiddleware: {
            publicPath: '/scripts/'
        }
    },
    devtool: 'source-map'
}