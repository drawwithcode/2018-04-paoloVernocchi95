var img;
function preload(){
  // put preload code here

}
var myCuteBall;
function setup() {
createCanvas(windowWidth, windowHeight);
myCuteBall = new Ball(width/2, height/2, 50);




}


function draw() {
  background(200);
  myCuteBall.move();
    myCuteBall.display();



}
function Ball(_x, _y, _diameter) {
  // Properties defined by constructor
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  // Hardcoded properties
  this.color = 'red';
  this.speedx = 1;
  this.speedy = 1;
  // Methods
var xDir=1;
var yDir=1;



  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
  this.move = function(){
  this.x +=(5*this.speedx*this.speedx/2+5*this.speedx)*xDir;
  this.y +=this.speedy *yDir;
  if (this.y>height || this.y<0) {
    yDir = yDir*(-1);
  }
  if (this.x>width || this.x<0) {
    xDir = xDir*(-1);
  }
}
}
