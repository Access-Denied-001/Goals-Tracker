const path = require('path');
const common = require('./webpack.common');
const { default: merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devtool: 'inline-source-map',
});