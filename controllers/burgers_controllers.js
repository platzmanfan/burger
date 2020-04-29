
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
router.post("api/burgers", function(req,res){
    burger.insertOne(["id","burger_name","devoured"],
    [req.body.id, req.body.burger_name, req.body.devoured], function(response){
        res.json({id: response.resultId})
    });
});
router.put("api/burgers/:id", function(req,res){
    var condition = "id" +req.params.id;
    console.log(" + "+ condition);
    burger.updateOne({
        devoured:req.body.devoured
    },condition, function(response){
        if (response.changedRows == 0){
            return res.status(404).end();
        }
        else {
        return res.status(202).end();
        }
    });
});
