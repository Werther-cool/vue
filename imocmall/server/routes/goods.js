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
