
//because I started using a function in the currentPhotoIndex
//key, it started working?...  if I just did currentPhotoIndex: this.photoList[0]
//it would error with photoList doesnt exist...

//to make this more useful:
// 1. use for loop on the photoList
//2. a counter for the currentPhotoIndex
// 3. and increment the counter or decrement the counter based on which
//  direction you're going in the slideshow(within the corresponding functions).
// and can use if i === list.length-1, then say 'end of slideshow', for example.

var slideshow = {
  photoList: ["mom","dad","family","pets"],
  //  currentPhotoIndex: this.photoList[0]; // can't call photoList this way.
  currentPhotoIndex: function currentPhoto(){
    //    photo = this.photoList[2]; // hard-sets current index
    photo = this.photoList[parseInt(Math.random()*10%4)]; // randomizes current index
    return photo;
  },
  nextPhoto: function nextPhoto(){
    if (this.currentPhotoIndex() === this.photoList[3]){
      console.log("End of slideshow");
    }
    else if (this.currentPhotoIndex() === this.photoList[2]){
      console.log("next photo is " + this.photoList[3]);
    }
    else if (this.currentPhotoIndex() === this.photoList[1]){
      console.log("next photo is " + this.photoList[2]);
    }
    else {
      console.log("next photo is " + this.photoList[1]);
    }
  },
  previousPhoto: function previousPhoto(){
    if (this.currentPhotoIndex() === this.photoList[3]){
      console.log("previous photo is " + this.photoList[2]);
    }
    else if (this.currentPhotoIndex() === this.photoList[2]){
      console.log("previous photo is " + this.photoList[1]);
    }
    else if (this.currentPhotoIndex() === this.photoList[1]){
      console.log("previous photo is " + this.photoList[0]);
    }
    else {
      console.log("Beginning of slideshow");
    }
  },
  getCurrentPhoto: function currentPhoto(){
    console.log("current photo is " + this.currentPhotoIndex());
 }
};
slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.previousPhoto();
