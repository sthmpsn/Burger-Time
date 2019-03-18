var orm = require("../config/orm");

var burger = {
    // Select/View all Items in the DB
    all: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    // Add a new Item to the DB. Pass the column and value to entries to be created as well as a call back
    // Note: cols and values will be passed in as arrays in order to pass multiple columns and values
    create: function(cols, vals, cb){
        // pass the table, columns, values, and call back function
        orm.insertOne("burgers", cols, vals, function(result){
            cb(result);
        });
    }
};

module.exports = burger;