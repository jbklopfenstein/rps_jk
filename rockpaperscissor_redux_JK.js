hands = ["rock","paper","scissors"];
function getHand2(){
  hand = hands[parseInt(Math.random()*10%3)];
  return hand;
}
//getHand();

function getHand1(){
  hand = hands[parseInt(Math.random()*10%3)];
  return hand;
}

var playerOne = {
  name: "Ryan",
  playerhand: getHand1(),
  score: 0
}
var playerTwo = {
  name: "Ana",
  playerhand: getHand2(),
  score: 0
}

console.log(getHand1())
console.log(getHand2())

function playRound(a, b){
  a = playerOne.playerhand
  b = playerTwo.playerhand
//tie scenarios
  if(a == 'rock' && b == 'rock'){
     console.log('tie, go again');
  }
  else if(a == 'paper' && b == 'paper'){
     console.log('tie, go again');
  }
  else if(a == 'scissors' && b == 'scissors'){
     console.log('tie, go again');
  }
//playerOne hand wins
  else if(a == 'rock' && b == 'scissors'){
     playerOne.score = playerOne.score + 1;
     console.log("playerOne wins, points = " + playerOne.score);
     console.log("...");
  }
  else if(a == 'paper' && b == 'rock'){
     playerOne.score = playerOne.score + 1;
     console.log("playerOne wins, points = " + playerOne.score);
     console.log("...");
  }
  else if(a == 'scissors' && b == 'paper'){
     playerOne.score = playerOne.score + 1;
     console.log("playerOne wins, points = " + playerOne.score);
     console.log("...");
  }
//playerTwo hand wins
  else if(a == 'scissors' && b == 'rock'){
     playerTwo.score = playerTwo.score + 1;
     console.log("playerTwo wins, points = " + playerTwo.score);
     console.log("...");
  }
  else if(a == 'rock' && b == 'paper'){
     playerTwo.score = playerTwo.score + 1;
     console.log("playerTwo wins, points =  " + playerTwo.score);
     console.log("...");
  }
  else(a == 'paper' && b == 'scissors');{
     playerTwo.score = playerTwo.score + 1;
     console.log("playerTwo wins, points = " + playerTwo.score);
     console.log("...");
  }
  
}
//playRound()

function playGame(playUntil){
    while(playerOne.score < playUntil && playerTwo.score < playUntil){
            playRound()
    }
}
playGame(5)

