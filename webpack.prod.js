const path = require('path');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css',
        })
    ]
});
