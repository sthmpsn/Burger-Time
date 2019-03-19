const express = require('express');
require('dotenv').config();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

// Create express app instance.
var app = express();

// Tell express that the "public" folder is where all the static page info is located
app.use(express.static("public"));   

// Sets up the Express app to handle data parsing (middleware evaluates all incoming requests)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// Express Handlebars Template config
// ================================================================================
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" } ));
app.set("view engine", "handlebars");


// ================================================================================
// ROUTER
// ================================================================================
var routes = require("./controllers/burgersController");

//middleware that will intercept requests and route appropriately
app.use(routes);  


// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
