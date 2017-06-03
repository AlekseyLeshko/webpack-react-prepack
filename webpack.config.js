const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
};

