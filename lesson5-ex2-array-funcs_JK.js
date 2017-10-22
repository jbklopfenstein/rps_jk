var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var mike = players.find(function(fname){
  return fname.firstName === "Mike";
});  // <---closes the find function!! duh
console.log(mike);

var rbplayers = players.filter(function(position){
  return position.position === "RB";
});
console.log(rbplayers);

var lastNames = players.map(function(lname){
  return lname.lastName;
});
console.log(lastNames);

//full names of all RBs with more than 5 TDs
var FullmoreThanFive =
  players
    .filter(function(rbplayerswithfive){
      return rbplayerswithfive.position == "RB" && rbplayerswithfive.touchdowns > 5;
    })
    .map(function(player){
      return `${player.firstName} ${player.lastName}`;
      //return player.firstName + ' ' + player.lastName;
});
console.log(FullmoreThanFive);


var RBtouchdowns =
  players
    .filter(function(position){
      return position.position == "RB";
    })
    .reduce(function(total,rbtouchdowns){
      return total + rbtouchdowns.touchdowns;
    }, 0);
console.log(RBtouchdowns);
