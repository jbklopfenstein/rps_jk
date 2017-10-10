
groceryList = ["pop tarts","ramen","chips","salsa","coffee"]
groceryList.push("fruit loops")
console.log(grocerylist)

groceryList[4] = "fair trade coffee"
//grocerylist.unshift("fair trade coffee");
console.log(grocerylist)

groceryList[4] = "fair trade coffee"
groceryList.splice(2,2,"rice","beans")
console.log(grocerylist)

console.log(".............shopping cart.............")

shoppingCart = []

//shoppingcart = grocerylist.pop();

shoppingCart.push(groceryList.shift())
console.log(shoppingcart)