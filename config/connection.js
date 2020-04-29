var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    root: "root",
    password: "passowrd",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId)
})


// exporting in it

module.exports = connection;