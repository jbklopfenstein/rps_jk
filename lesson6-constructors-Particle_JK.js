function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  velocity = {x:0, y:0};
}

var particles = [];

for (var i = 0; i < 101; i++) {
  var newPar = new Particle(i, Math.floor(Math.random()*500));
  particles.push(newPar);
}
console.log(particles);
