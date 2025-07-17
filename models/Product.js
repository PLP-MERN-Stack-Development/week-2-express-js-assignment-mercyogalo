const express = require("express");
const mongoose = require("mongoose");


const productSchema=new mongoose.Schema({
    name:String,
    description: String,
    price:Number,
    category:String,
    inStock: {type: Boolean, default: true}
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;