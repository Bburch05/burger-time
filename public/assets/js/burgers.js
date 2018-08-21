// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burgerDiv").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = {devoured : 1};
      // Send the PUT request.
      $.ajax("/api/burgers/" + id + "", {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#addBurger").on("submit", function(event) {
      event.preventDefault();
      if(!$("#newBurger").val().trim()){
        alert("Please enter a Burger Name")
      }
      else{
      var newBurger = {
        burgerName: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    });
  });
  