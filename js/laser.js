function Laser(sPos, angle) {
  this.pos = createVector(sPos.x, sPos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);

  this.update = function() {
    this.pos.add(this.vel)
  }

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }

  this.hits = function(asteroid) {
    let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    return d < asteroid.r ? true : false;
  }

  this.offscreen = function() {
    return this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0 ? true : false;
  }
}
