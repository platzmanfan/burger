// dependencies

var express = require("express");
var exphbs = require("express-handlebars");


// creating local port and port online at server aswell
var PORT = process.env.PORT || 8080;

// getting an express function out of the express package
var app = express();

app.get('/', function (req, res) {
    res.render('index');
});



// like a body parses for the application
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// handlebars

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine" , "handlebars");



app.listen(PORT,function(){
    console.log("BURGER APP IS LISTENING ON PORT " + PORT);
})
