var UserProfile = {
  name: "Ana",
  address: "111 abc lane",
  city: "Raleigh",
  state: "NC",
  zipcode: 27609,
  avatar: "pilot",
};
console.log(userProfile);

function getProfileUpdate() {
  var name = "Ana";
  var avatar = "robot";
  return avatar;
}

function updateProfile() {
  var updated = Object.assign({}, userProfile,{
    avatar: getProfileUpdate()
  });
  return updated
}
updateProfile();
console.log(updateProfile());

//
// try modifying to prompt for user input instead:


// var userProfile = {
//   name: "Ana",
//   address: "111 abc lane",
//   city: "Raleigh",
//   state: "NC",
//   zipcode: 27609,
//   avatar: "pilot",
// };
// console.log(userProfile);

// var update = prompt("What do you want to update?")

// if (
// function getProfileUpdate() {
//   var name = "Ana";
//   var avatar = "robot";
//   return avatar;
// }

// function updateProfile() {
//   var updated = Object.assign({}, userProfile,{
//     avatar: getProfileUpdate()
//   });
//   return updated
// }
// updateProfile();
// console.log(updateProfile());
