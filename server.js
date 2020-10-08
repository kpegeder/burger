const orm = require("./config/orm.js");

orm.select("burgers", function (result) {
  var data = result;
  console.log(data);
});

orm.insert(
  "burgers",
  ["burger_name", "devoured"],
  ["Impossible Burger", "false"],
  function (result) {
    var data = result;
    // console.log(data);
  }
);

condition = "id" + " = " + "2";
console.log(condition);

orm.update("burgers", { devoured: true }, condition, function (result) {
  var data = result;
  // console.log(data);
});
