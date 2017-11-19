var express = require('express');
var router = require('router');
var mongoose = require('mongoose');
var Goods = require('../models/goods');


mongoose.connect('mongodb://127.0.0.1:27107/dumall');

mongoose.connection.on("connected",function () {
    console.log("MongoDB connected success.");
})

mongoose.connection.on("error", function () {
    console.log("MongoDB connected fail.")
  });

mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected disconnected.")
});

// 查询商品列表数据
router.get("/list",function(req,res,next){
    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.parma("pageSize"));
    let priceLevel = req.param("priceLevel");
    let sort = req.param("sort");
    let skip = (page-1)*pageSize;
    var priceGt = '',priceLte = '';
    let param = {};
    if(priceLevel!="all"){
        switch(priceLevel){
            case '0':priceGt = 0;priceLte=100;break;
            case '1':priceGt = 100;priceLte=500;break;
            case '2':priceGt = 500;priceLte=1000;break;
            case '3':priceGt = 1000;priceLte=5000;break;
        }
        parmas = {
            salePrice:{
                $gt = priceGt,
                $lte = priceLte
            }
        }
    }

    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
    goodsModel.sort({'salePrice':sort});
    goodsModel.exec(function (err,doc) {
        if (err) {
            res.json({
                status:"1",
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
})

// 加入到购物车
router.post("/addCart",function (req,res,next) {
    var userId = "10000007777",productId = req.body.productId;
        
})























