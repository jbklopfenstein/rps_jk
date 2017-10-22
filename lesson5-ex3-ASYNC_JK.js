var slideshow = {
  photoList: ["mom","dad","family","pets"],
  currentPhotoIndex: 0,
  currentPhoto: function() {
    console.log("current photo is " + this.photoList[this.currentPhotoIndex])
  },
  nextPhoto: function() {
    for (var i = 0; i < this.photoList.length; i++) {
      console.log("the current photo is " + this.photoList[i])
      this.currentPhotoIndex ++

      if (this.currentPhotoIndex === this.photoList.length){
        console.log(this.photoList[this.currentPhotoIndex] + " End of slideshow")
      }
    }
  },
  prevPhoto: function() {
    for (var i = 3; i >= 0; i--) {
      console.log("the current photo is " + this.photoList[i])
      this.currentPhotoIndex --

      if (this.currentPhotoIndex === 0){
        console.log(this.photoList[0] + " Beginning of slideshow")
      }
    }
  },

  playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }

  // play: this.playInterval = setTimeout(function() {
  //   this.nextPhoto()
  // }.bind(this), 2000), //this doesnt work bc this is binding the this from here to the this                        //of the function but want to bind this from here to the this of the                        //nextPhoto function!!!!

  // pause: function(){
  //   clearInterval(this.playInterval);
  // }.bind(this);
}

slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.currentPhoto();
slideshow.play();
//slideshow.pause();
