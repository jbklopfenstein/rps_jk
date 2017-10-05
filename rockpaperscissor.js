var mickeyscore = 0;
var goofyscore = 0;
var weapons = ['rock', 'paper', 'scissors'];

while (mickeyscore || goofyscore < 3) {
  var mickeyweaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
  var goofyweaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %2];
  console.log("mickey played " + mickeyweaponOfChoice);
  console.log("goofy played " + goofyweaponOfChoice);

//tie scenarios
  if(mickeyweaponOfChoice == 'rock' && goofyweaponOfChoice == 'rock'){
     console.log('tie, go again');
  }
  else if(mickeyweaponOfChoice == 'paper' && goofyweaponOfChoice == 'paper'){
     console.log('tie, go again');
  }
  else if(mickeyweaponOfChoice == 'scissors' && goofyweaponOfChoice == 'scissors'){
     console.log('tie, go again');
  }
//mickey hand wins
  else if(mickeyweaponOfChoice == 'rock' && goofyweaponOfChoice == 'scissors'){
     mickeyscore = mickeyscore + 1;
     console.log("mickey has " + mickeyscore);
     console.log("...");
  }
  else if(mickeyweaponOfChoice == 'paper' && goofyweaponOfChoice == 'rock'){
     mickeyscore = mickeyscore + 1;
     console.log("mickey has " + mickeyscore);
     console.log("...");
  }
  else if(mickeyweaponOfChoice == 'scissors' && goofyweaponOfChoice == 'paper'){
     mickeyscore = mickeyscore + 1;
     console.log("mickey has " + mickeyscore);
     console.log("...");
  }
//goofy hand wins
  else if(mickeyweaponOfChoice == 'scissors' && goofyweaponOfChoice == 'rock'){
     goofyscore = goofyscore + 1;
     console.log("goofy has " + goofyscore);
     console.log("...");
  }
  else if(mickeyweaponOfChoice == 'rock' && goofyweaponOfChoice == 'paper'){
     goofyscore = goofyscore + 1;
     console.log("goofy has " + goofyscore);
     console.log("...");
  }
  else(mickeyweaponOfChoice == 'paper' && goofyweaponOfChoice == 'scissors');{
     goofyscore = goofyscore + 1;
     console.log("goofy has " + goofyscore);
     console.log("...");
  }
}

if (mickeyscore == 3) {
  console.log("mickey wins!");
}
else if (goofyscore == 3) {
  console.log("goofy wins!");
}