const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var resolve = function (dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  entry: './src/app.js',
  devServer: {
    contentBase: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};