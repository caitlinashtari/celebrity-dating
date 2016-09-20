//backend
var result;

//front end
$(document).ready(function() {
  $("form#profile").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


    if (gender === 'male' && age > 21) {
      result = "Beyonce";
    } else if (gender === 'male' && age === 21) {
      result = "Selena Gomez";
    } else {
      $('#under-21').show();
      $("#match").hide()
      $("#result").hide();
    }

    if (age >= 21) {
      $("#result").text(result);
      $("#match").show()
  }


  event.preventDefault();
  });
});
