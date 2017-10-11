
function gratuity(amount){
	tip = amount * 0.2
	return tip
}

function totalWithGrat(amount){
	totalAmount = amount + gratuity(amount);
	return totalAmount
	
}
totalWithGrat(25.76)
console.log(totalAmount);
console.log("your total including gratuity is: " + "$"+totalAmount.toFixed(2))

