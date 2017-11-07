
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


// lorienolive [6:12 PM]
// added this Plain Text snippet
//
// var addbutton = document.getElementById('addButton')
// var list = document.querySelector('#todoList')
// var typedText = document.getElementById('newTodoInput')
// var listItems = document.getElementsByTagName('li');
// addbutton.addEventListener('click', function(event) {
//   var newTodoItem = document.createElement('li');
//   newTodoItem.innerHTML = typedText.value;
//   list.appendChild(newTodoItem);
//   typedText.value = ''
//  for (var i = 0; i < listItems.length; i++) {
//   listItems[i].onclick = function() {
//     this.remove();
//   }
//  }
// });
