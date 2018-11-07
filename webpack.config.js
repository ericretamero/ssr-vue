const path = require('path');

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeExternals = require('webpack-node-externals');

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'

const target = TARGET_NODE
    ? 'server'
    : 'client'

module.exports = {
    mode: process.env.NODE_ENV,
    entry: `./src/entry-${target}`,
    target: TARGET_NODE ? 'node' : 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        libraryTarget: TARGET_NODE
            ? 'commonjs2'
            : undefined
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
        new VueLoaderPlugin(),
        TARGET_NODE
            ? new VueSSRServerPlugin()
            : new VueSSRClientPlugin()
    ],
    externals: TARGET_NODE ? nodeExternals({
        whitelist: /\.css$/
    }) : undefined,
};