
// requriring express

var express = require("express");

// requering burger.js with the mysql methods

var burger = require("../models/burger.js");


var router = express.Router();

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index",handlebarsObject);
    });
});
router.post()
