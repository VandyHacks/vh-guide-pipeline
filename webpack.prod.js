"use strict";

let path = require("path"),
  webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "/src/client"),
  entry: "./main.js",
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js")
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
