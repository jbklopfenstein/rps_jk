var woolOwners = [
  {
	  "master": 1
  },
  {
  	"dame": 1
  },
  {
	"little boy": 1,
	"location": "down the lane"
  }
];

//var bags = haveYouAnyWool();

haveYouAnyWool = function() {
	var totalBags = woolOwners.length;
	return totalBags;
};
var bags = haveYouAnyWool();


function baabaaBlackSheep() {
	console.log("BaaBaa BlackSheep have you any wool?");
	if (bags > 0) {
		console.log("yes sir, yes sir " + bags + " bags full");
  }
}

function oneForMy() {
	for (var i = 0; i < 1; i++) {
		people = Object.keys(woolOwners[0]);
		var person = people.toString();
    dame = Object.keys(woolOwners[1]);
		console.log("one for my " + person);
    console.log("one for my " + dame);
	}
}

baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2]);
//var littleBoy = boy[2];

var whereHeLives = woolOwners[2].location;

console.log("one for the " + boy + " that lives " + whereHeLives);
