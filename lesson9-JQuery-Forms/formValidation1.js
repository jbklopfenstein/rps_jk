// Create a Form and add validations using jQuery
// Utilize the html and css provided below
// Create a function that will fire when the submit <button> is clicked
// Make sure the function loaded after the DOM


$(document).ready(function() {

  $("#submit").on('click', function() {

    var name = $("#name");
    var email = $("#email");
    var message = $("#message");
    var phone = $("#phone");

    var required = [name, email, phone];

    for (var i = 0; i < required.length; i++) {
      if (required[i].val() === "") {
        $(message).text("Please Fill Out Required Fields").addClass(
          'warning');
        required[i].prev().addClass('warning');
      } else {
        required[i].prev().removeClass('warning');
      }
    }

    if (!$("#form label").hasClass('warning')) {
      $("#form")[0].remove();
      $("#pre-form h2").text("Thanks for your feedback!")
    }

  });
});
