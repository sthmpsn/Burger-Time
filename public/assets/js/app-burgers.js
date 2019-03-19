// $(document).ready(function(){
$(function(){
    
    console.log("Loaded: app-burgers.js");

    // POST DATA
    $("#btn-add-burger").on("click", function(event){
        console.log("Button Add burger clicked");


        var newBurger = {
            burger_name: $("#txtBoxBurger").val().trim(),
            devoured: 0
        };

        if (newBurger.burger_name){
            $.ajax({
                url: "/api/burgers",
                type: "POST",
                data: newBurger
            }).then(
                function(){
                    console.log("Added new burger: " + newBurger.burger_name);
                    location.reload();
                }
            );

        }
        else{
            console.log("Plase enter a value for the burger name");
            return;
        }

    });
    

    // PUT DATA - Eat Burger
    $(".eat-burger").on("click", function(event){
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: 1
        };

        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("Updated Devoured State of Burger ID:" + id );
                location.reload();
            }
        );
    })

    // PUT DATA - Purchase Again
    $(".purchase-burger").on("click", function(event){
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: 0
        };

        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("Updated Devoured State of Burger ID:" + id );
                location.reload();
            }
        );
    })


    // DELETE DATA - Delete Burger from DB
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax({
            url: "/api/burgers/" + id, 
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted Burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




});
