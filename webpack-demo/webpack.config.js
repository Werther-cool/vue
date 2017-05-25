// var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
module.exports = {
    entry:
    {
      main:'./src/script/main.js',
      a:'./src/script/a.js',
      b:'./src/script/b.js',
      c:'./src/script/c.js',
    },
    output:{
        path: __dirname + "/dist",
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins:[
     new HtmlWebpackPlugin({
       filename:"a.html",
       template: 'index.html',
       inject:false,
       title:'webpack is a',
       chunks:['main','a'],
       minify:{
         removeComments:true,
         collapseWhitespace:true
       }
     }),
     new HtmlWebpackPlugin({
       filename:"b.html",
       template: 'index.html',
       inject:false,
       title:'webpack is b',
       chunks:['main','b']
     }),
     new HtmlWebpackPlugin({
       filename:"c.html",
       template: 'index.html',
       inject:false,
       title:'webpack is c',
       chunks:['main','c']
     })
    ]
}
