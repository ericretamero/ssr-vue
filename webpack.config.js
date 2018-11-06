const webpack = require('webpack');
const merge = require('webpack-merge');
// const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/entry-client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
              {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ],
              },
        ]
    },
    plugins: [
        new VueSSRClientPlugin(),
        new VueLoaderPlugin()
    ]
};