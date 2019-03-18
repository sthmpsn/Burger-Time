const express = require('express');
const exphbs = require('express-handlebars');
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
// Express Handlebars Template config
// ================================================================================
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));   //tell express that the "public" folder is where all the static page info is located

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
