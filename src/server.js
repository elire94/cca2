var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');


mongoose.connect();

var Item = new ItemSchema(
    {
        title: String,
        author: String,
        price: Number,
        seller: String,
        img:
            {data: Buffer, contentType: String}
    }
);

var Item = mongoose.model('Books', ItemSchema);