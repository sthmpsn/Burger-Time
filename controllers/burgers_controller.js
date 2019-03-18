const express = require('express');

// Used for routing incoming access similar to when using "app"
const router = express.Router();    

// Import the burger models which is an object with methods referring to the ORM SQL methods
var burger = require('../models/burger');    


// ================================================================================
// ROUTES
// ================================================================================
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured] ,function(result){
        res.json({ id: result.insertId });
    });
});




// Export routes for server.js to use. Nicer to just export "router" as opposed to all the app.* routes individually
module.exports = router;