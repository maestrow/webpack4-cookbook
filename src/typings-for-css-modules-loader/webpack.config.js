const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              importLoaders: 1,
              modules: true,
              namedExport: true,
              camelCase: true,
              sourceMap: true,
              localIdentName: "[name]_[local][hash:base64:5]",
              banner: "// *** Generated File - Do not Edit ***"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.WatchIgnorePlugin([
      /\.css\.d\.ts$/
    ])
  ]
};
