function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  velocity = {x:0, y:0};
}

var particles = [];
var yValues = [];

var time = 0;
var gravity = 0.5;

Particle.prototype = {
  getVelocity: function(){
    var value = time * gravity;
    return value;
  },
  move: function(){
    getVelocity() == y;
    if (y >= 500){
      console.log("bottom");
    }
  }
};
var setTime = setInterval(function() {
    time ++;
}, 100);

for (var i = 0; i < 101; i++) {
  var newPar = new Particle(i, Math.floor(Math.random()*500));
  particles.push(newPar);
  setTime;
  console.log(particles[i].x);
  if (particles[i].y < 500) {
    yValues.push(particles[i].y);
  }
}
for (var i = 0; i < yValues.length; i++) {
  Particle.move;
}
