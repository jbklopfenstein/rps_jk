
document.getElementById("button").addEventListener('click', function () {
  var toDoList = document.querySelector('#list');
  var newThing = prompt("Add an item here");
  var newThingAdd = document.createElement('li');
  newThingAdd.innerHTML = newThing;
  toDoList.appendChild(newThingAdd);
});

var el = document.querySelector('li');
el.addEventListener('click', function(event){
	alert('clicked!');
})
