var img;

function preload() {
  img = loadImage('immaginibasket/original.jpg');
  // put preload code here
}
var basketBall;

function setup() {
  createCanvas( img.width * 1.6,img.height * 1.6);
  imageMode(CENTER);
  basketBall = new Ball(width / 2, height / 2, 40);
  rectMode(CENTER);


  // put setup code here

}

function draw() {
  image(img, width / 2, height / 2, img.width * 1.6, img.height * 1.6);
  basketBall.move();
  basketBall.display();
  fill(0);
  rect(590, 254, 10, 80);

}

function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = (3, 4, 5); //(random(0,275),random(0,275),random(0,275));
  this.speed = 3;
  var yDir =2;
  var xDir = 2;

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;
    if (this.y >830 || this.y < 20)  {
      yDir = yDir * (-1);
    }
    if (this.x >img.width * 1.6 || this.x <0) {
    xDir = xDir * (-1);
  }
   if (this.y > 214 && this.y < 294 && this.x > 585 && this.x < 595 ) {
        this.speed = this.speed * (-1);
  }
