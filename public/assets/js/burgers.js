$(function () {
  $(".change-devour").on("click", function (event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevour");

    let newBurgerState = {
      devoured: newDevour,
    };

    // Send the Put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState,
    }).then(function () {
      console.log("changed burger to ", newBurgerState);
      // Reload the page to update list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault to a submit event
    event.preventDefault();

    let newBurger = {
      name: $("#burg").val().trim(),
    };
    if (newBurger.name != "") {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("Created a new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      alert("Can't enter a blank burger");
    }
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("Deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
