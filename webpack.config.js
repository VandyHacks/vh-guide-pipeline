/* Copyright G. Hemingway, 2018 - All rights reserved */
"use strict";

let path = require("path"),
  webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "/src/client"),
  entry: "./main.js",
  mode: "development",
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: []
};
