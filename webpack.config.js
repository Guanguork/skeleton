'use strict'

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    console.log(argv.mode)
    return {
        entry: [
            './src/index.js'
          ],
        output: {
            filename: 'bundle.[hash].js',
            path: path.resolve(__dirname, 'dist','assets')
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            //hot: true,
            //inline: true,
            contentBase: './src',
            //publicPath: '/'
        }
    }
}   