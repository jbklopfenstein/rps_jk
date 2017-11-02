$("#button").on('click', function () {
  var toDoList = $('#list');
  var newThing = prompt("Add an item here");
  var newThingAdd = $('.li');
  $("#newThingAdd").html(newThing);
  $('#list').append(newThingAdd);
});

var el = document.querySelector('li');
el.addEventListener('click', function(event){
	alert('clicked!');
})
