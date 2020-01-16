const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  entry: "./src/ESX150/ESX150.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build/webpacked"),
    filename: "[name]"
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
