const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var resolve = function (local) {
  return path.join(__dirname, local);
}

module.exports = {
  entry: resolve('src/app.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
} 