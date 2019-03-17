const express = require('express');

// Used for routing incoming access similar to when using "app"
const router = express.Router();    

// Import the burger models which is an object with methods referring to the ORM SQL methods
var burger = require('../models/burgers');    


// ================================================================================
// ROUTES
// ================================================================================
router.get("/",function(req, res){
    burger.all(function(data){
        res.json(data);
    });

});






// Export routes for server.js to use. Nicer to just export "router" as opposed to all the app.* routes individually
module.exports = router;