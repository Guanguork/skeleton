'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: ['./src/client/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist', 'assets'),
      filename: 'bundle.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      },
      headers: {
        'X-Custom-Foo': 'bar'
      },
      port: 3000,
      proxy: [{
        context: ['/api', '/user'],
        target: 'http://localhost:8080'
      }]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'ye'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      //new BundleAnalyzerPlugin()
    ]
  };
};
