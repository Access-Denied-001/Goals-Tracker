const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.html'),
            template: path.resolve(__dirname, './src/template.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:   /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpe?g|gif)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/'
                      }
                    }
                ]
            },
            {
                test: /\.svg/,
                type: 'asset'
            },
            {
                test: /\.mp3$/,
                loader: 'asset'
            }
        ]
    }
}
