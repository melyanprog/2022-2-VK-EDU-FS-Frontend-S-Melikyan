"use strict";

const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
//const webpack = require("webpack");

//const SRC_PATH = path.resolve(__dirname, "src");
const BUILD_PATH = path.resolve(__dirname, "build");

module.exports = {
  //  context: SRC_PATH,
  entry: {
    index: "./src/js/index.js",
    chats: "./src/js/chats.js",
    dialog: "./src/js/dialog.js",
  },
  output: {
    path: BUILD_PATH,
    filename: "js/[name]bundle.js",
    chunkFilename: "[name]bundle.js",
  },
  module: {
    //strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        //include: SRC_PATH,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },

      {
        test: /\.css$/,
        //include: SRC_PATH,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
      chunks: ["chats"],
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
      chunks: ["dialog"],
    }),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/html/index.html",
      chunks: ["index"],
    }),
    new HTMLWebpackPlugin({
      filename: "chats.html",
      template: "./src/html/chats.html",
      chunks: ["chats"],
    }),
    new HTMLWebpackPlugin({
      filename: "dialog.html",
      template: "./src/html/dialog.html",
      chunks: ["dialog"],
    }),
  ],
};
