const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
// const baseConfig = require('./webpack.base.config.js');
const baseConfig = require('./webpack.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: [new VueSSRServerPlugin()]
});