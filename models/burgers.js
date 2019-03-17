var orm = require("../config/orm");

var burger = {
    // Select/View all Items in the DB
    all: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    // Add a new Item to the DB
    create: function(cb){
        orm.insertOne();
    },
    // Update an Item in the DB
    update: function(cb){
        orm.updateOne();
    }
};

module.exports = burger;