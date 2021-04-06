const path = require("path");

module.exports = {
  entry: [
    "./source/js/modules/menu.js",
    "./source/js/modules/mask.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'source/js'),
    // iife: true
  },
  devtool: false
};
