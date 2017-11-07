// Exercise 2 - Working with Promises
// Using the API at http://jsonplaceholder.typicode.com/ create an app with the following functionality. Use Promises for everything.
// Login page - Display a login form asking user for a username.
// On Submit, look up the username entered by the user.
// If no user is found, display a detailed error message.
// If the user is found, store user object and render User's homepage
// User's homepage displays:
// User's name
// User's post titles
// User's albums


$("#button").on('click', function () {
  var userId = $('#userId');
  var nameData = new FormData();
  nameData.append( "json", JSON.stringify(userId) );

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    if (nameData in data ) {
      console.log("name exists")
    }
  });
})
