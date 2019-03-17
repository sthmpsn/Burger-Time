const express = require('express');
require('dotenv').config();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

// Create express app instance.
var app = express();

// Sets up the Express app to handle data parsing (middleware evaluates all incoming requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// ================================================================================
var routes = require("./controllers/burgers_controller");
app.use(routes);  //middleware that will intercept requests and route appropriately


// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
