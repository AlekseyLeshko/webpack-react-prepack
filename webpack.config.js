const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, './src/index.js')
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.css'
    ],
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'react'
        ]
      }
    }]
  },

  devServer: {
    inline: true,
    port: 3333,
    contentBase: './dist',
    noInfo: true
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
};

