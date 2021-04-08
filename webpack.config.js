const path = require("path");

module.exports = {
  entry: [
    "./source/js/vendor/imask.js",
    "./source/js/vendor/smoothscroll-polyfill.js",
    "./source/js/modules/menu.js",
    "./source/js/modules/mask.js",
    "./source/js/modules/scroll.js"
  ],
  output: {
    filename: "script.js"
  },
  devtool: false
};
