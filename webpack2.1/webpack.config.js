'use strict';

const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry:{
    app:["./app.js","./events.js","./vendor.js"],
  },
  output:{
    path:__dirname+"/dist",
    filename:"[name].bundle.js",
     publicPath: "/assets",            // New
  },
  devServer: {
   contentBase: __dirname + "/src",  // New
 },
}
