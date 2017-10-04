var player1 = "mickey";
var player2 = "goofy";
var mickeyscore = 0;
var goofyscore = 0;

var weapons = ['rock', 'paper', 'scissors'];
var mickeyweaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
var goofyweaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %2];
console.log(player1 + " played " + mickeyweaponOfChoice);
console.log(player2 + " played " + goofyweaponOfChoice);

//while (mickeyscore || goofyscore < 3) {
  if(mickeyweaponOfChoice == 'rock' && goofyweaponOfChoice == 'rock'){
     console.log('tie, go again');
  }
  else if(mickeyweaponOfChoice == 'rock' && goofyweaponOfChoice == 'scissors') {
     goofyscore + 1;
     console.log(goofyscore);
  }

//}