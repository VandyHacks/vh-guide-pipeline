"use strict";

let path = require("path"),
  webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "/src/client"),
  entry: {
    "public/js/main": "./main.js",
    "mentor/js/main": "./main.js"
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.md$/,
        use: ["raw-loader"]
      }
    ]
  },
  plugins: []
};
