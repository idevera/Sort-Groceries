$(document).ready(function() {
  $("form#list").submit(function(event) {
    var inputFood = $("input#food").val();
    var inputDrink = $("input#drink").val();

    var groceries = [inputFood, inputDrink];

    groceries.sort();

    var newList = groceries.map(function(meow) {
      return meow.toUpperCase();
    });

    newList.forEach(function(thing) {
        $("#output").append("<li>" + thing + "</li>");
    });

    event.preventDefault();
  });
});
