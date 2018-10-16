var img;

function preload() {
  img = loadImage('immaginibasket/original2.jpg');
  // put preload code here
}
var basketBall;

function setup() {
  createCanvas( img.width * 1.6,img.height * 1.6);
  imageMode(CENTER);
  basketBall = new Ball(width / 2, height / 2, 40);
  rectMode(CENTER);
   cursor(HAND);


  // put setup code here

}

function draw() {
  image(img, width / 2, height / 2, img.width * 1.6, img.height * 1.6);
  basketBall.move();
  basketBall.display();
  noStroke();
  fill(255,0,0,0);
  rect(590, 254, 10, 100);//canestro
  rect(725,130,40,150);//tabellone
  rect(1220,600,100,700);//verticale
  rect(990,230,570,60);//orizzontale
    ellipse(mouseX,mouseY,30);

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
  if (this.y > 254-150 && this.y < 254+150 && this.x > 585 && this.x < 595 ) {//canestro
      xDir = xDir * (-0.2);
  }
  if (this.y > 130-75 && this.y < 130+75 && this.x > 705 && this.x < 745 ) {//tabellone
          xDir = xDir * (-0.2);
  }
  if (this.y > 600-350 && this.y < 600+350 && this.x > 1220-50 && this.x <1220+50) {//verticale
        xDir = xDir * (-1);
  }
  if (this.y > 230-30 && this.y < 230+30 && this.x >990-285 && this.x <990+285) {//orizzontale
        yDir = yDir * (-1);
  }
  if (this.y > mouseY-40 && this.y < mouseY+40 && this.x >mouseX-40 && this.x <mouseX+40) {//orizzontale
      this.speed=this.speed*(-1);

  }

}
}
