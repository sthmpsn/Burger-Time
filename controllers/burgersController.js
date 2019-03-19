const express = require('express');

// Used for routing incoming access similar to when using "app"
var router = express.Router();    

// Import the burger models which is an object with methods referring to the ORM SQL methods
var burger = require('../models/burger');    


// ================================================================================
// ROUTES
// ================================================================================
router.get("/", function(req, res){
    var burgersAvail = [];
    var burgersEaten = [];
    
    burger.all(function(data){
    
    data.forEach(burger => {
        if(burger.devoured == 1){
            burgersEaten.push(burger);
            console.log("Devoured: " +burger.burger_name);
        }
        else{
            burgersAvail.push(burger);
            console.log("Available: " +burger.burger_name);
        }
    });

        var hbsObject = {
            burgersAvail: burgersAvail,
            burgersEaten: burgersEaten
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.burger_name + " | " +req.body.devoured);
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured] ,function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " +req.params.id;
    console.log("condition: " + condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changeRows === 0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use. Nicer to just export "router" as opposed to all the app.* routes individually
module.exports = router;