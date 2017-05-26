// var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
module.exports = {
    entry:'./src/app.js',
    output:{
        path: __dirname + "/dist",
        filename: 'js/[name].bundle.js'
    },
      module: {
        loaders:[
             {test: '/\.js$/', loader: 'babel-loader', options: {'presets': ['env']}}
        ]
      },
    plugins:[
     new HtmlWebpackPlugin({
       filename:"index.html",
       template: 'index.html',
       inject:'body',
     })]

}
