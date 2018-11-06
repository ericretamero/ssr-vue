const path = require('path');

module.exports = {
    mode: "development",
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }

}