// <html>
// 	<body>
// 		<h2>Shopping List</h2>
// 		<ul id="list">
// 			<li>Ramen</li>
// 			<li>Coffee</li>
// 			<li>Poptarts</li>
// 			<li>Twinkies</li>
// 		</ul>
//     <script type="text/javascript" src="editingDOM.js">
//
//     </script>
//
// 	</body>
// </html>

// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
// 2. Remove 'Twinkies' from the list
// 3. Add an item 'Cheese Whiz'
// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
// 5. Add the class 'important' to the muscle milk item.

// var shoppingList = document.querySelector('ul').children
// //console.log(shoppingList);
// var shoppingArray = Array.from(shoppingList);
// console.log(shoppingArray);
// var coffee = shoppingArray[1].innerHTML;
// coffee.innerHTML = "Fair Trade Coffee";

var coffee = document.querySelector('#list').children[1]
coffee.innerHTML = "Fair Trade Coffee";

var twinkies = document.querySelector('#list').children[3];
twinkies.remove();
//document.querySelector('#list').remove(.children[3]);

var cheeseWhiz = document.createElement('li');
cheeseWhiz.innerHTML = "Cheese Whiz"
var shoppinglist = document.querySelector('#list');
shoppinglist.appendChild(cheeseWhiz)

coffee.remove();
var ramen = document.querySelector('#list').children[0];
ramen.remove();
var poptarts = document.querySelector('#list').children[2];
poptarts.remove();
cheeseWhiz.remove();
