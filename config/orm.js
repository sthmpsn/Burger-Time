//Object Relation Model
var connection = require("./connection");


// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}




var orm = {
    //SQL Methods listed in here for the Models use
    selectAll: function(table, cb){
        //Logic to SELECT all from the MySQL database
        var queryString = "SELECT * FROM " +table+ ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);   //return the result to the functioned passed to the "cb" (callback)
        });

    },
    insertOne: function(table, cols, vals, cb){
        // Logic to INSERT an Item INTO the MySQL database
        var queryString = "INSERT INTO " +table;

        // The .toString() method will convert an array into comma separated values which is needed for the SQL statement
        queryString += " (";
        queryString += cols.toString();  // want on a separate line so string wrapper doesn't mess with the "toString()" method here
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);    // This will wrap the "vals" array values in "quotes" as needed for the SQL statement
        queryString += ") ";
        console.log(queryString + " NOTE: \"?\" equals => " +vals.toString());

        // passing the "vals" array will pass it to the SQL query where "?" are in place and wrapped in quotes
        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;