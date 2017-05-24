var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
      },
      {
       test: /\.css$/,
       loader: 'style-loader!css-loader?modules'//跟前面相比就在后面加上了?modules
     }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")//热加载插件
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
