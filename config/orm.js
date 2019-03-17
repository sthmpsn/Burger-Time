//Object Relation Model
var connection = require("./connection");

var orm = {
    //SQL Methods listed in here to use
    selectAll: function(table, cb){
        console.log("Logic to SELECT all from the MySQL database");
        var queryString = "SELECT * FROM " +table+ ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);   //return the result to the functioned passed to the "cb" (callback)
        });

    },
    insertOne: function(){
        console.log("Logic to INSERT an Item INTO the MySQL database");

    },
    updateOne: function(){
        console.log("Logic to UPDATE an Item in the the MySQL database");

    }
};

module.exports = orm;