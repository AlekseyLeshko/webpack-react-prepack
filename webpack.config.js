const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrepackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  entry: [
    path.join(__dirname, './src/index.js')
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  plugins: [
    // new PrepackPlugin({
      // prepack: {
        // serialize: true,
      // },
    // }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
  ],
};

