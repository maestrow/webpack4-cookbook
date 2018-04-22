const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

var resolve = function (dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};