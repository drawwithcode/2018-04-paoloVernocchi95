function preload(){
  // put preload code here
}
/*var myBall = {};
var secondBall = {};*/
var balls = [];
function setup() {

  createCanvas(windowWidth, windowHeight);

  var ballNumber = 70;
  for (var i=0; i<ballNumber;i++) {
    var myBall = new Ball(random(0,width),random(0,height),10);

    balls.push(myBall);
  }
  /*  var myEdge = edgeFromArea(100);
    console.log(myEdge);*/
  /*myBall = new Ball(150, 200, 60);
  secondBall= new Ball (100,500,50);
  myBall.diameter = 50;
  myBall.color = ('green');
  myBall.speed=8;
  secondBall.speed=3;
  myBall.display();*/
}

function draw() {
  for (var j=0; j<balls.length;j++){
    balls[j].move();
    balls[j].display();
    balls[j].color = color(random(255),random(255),random(255));
  }
/*  myBall.move();
  myBall.display();
  secondBall.move();
  secondBall.display();*/
}
//my object
function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'Orange'//(random(0,275),random(0,275),random(0,275));
  this.speed = 2;
  var yDir=random(0,5);
  var xDir=random(0,5);

  this.display = function(){
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
  this.move = function(){
    this.x +=this.speed*xDir;
    this.y +=this.speed *yDir;
    if (this.y>height || this.y<0) {
      yDir = yDir*(-1);
    }
    if (this.x>width || this.x<0) {
      xDir = xDir*(-1);
    }
  }

}
