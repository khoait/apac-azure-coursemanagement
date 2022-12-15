/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const glob_entries = require("webpack-glob-entries");

module.exports = {
  entry: glob_entries("./src/entries/**/*.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "storm_/CourseManagement/js"),
    filename: "[name].js",
    // Set this to your namespace e.g. cds.ClientHooks
    library: ["Storm", "CourseManagement", "[name]"],
    libraryTarget: "var",
  },
};
