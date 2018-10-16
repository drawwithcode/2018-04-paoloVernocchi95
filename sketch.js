var img;
var a = 0;

function preload() {
  img = loadImage('immaginibasket/original2.jpg');
  myFont = loadFont('arcadeclassic/ARCADECLASSIC.TTF');
  song = loadSound('arcadeclassic/NBA Theme Tune.mp3');
  // put preload code here
}
var basketBall;

function setup() {
  createCanvas(img.width * 1.6, img.height * 1.6);
  imageMode(CENTER);
  basketBall = new Ball(300, 300, 40);
  rectMode(CENTER);
  cursor(HAND);
  //song.play();
  //song.loop()


  // put setup code here

}

function draw() {

  image(img, width / 2, height / 2, img.width * 1.6, img.height * 1.6);
  basketBall.move();
  basketBall.display();
  noStroke();
  fill(255, 0, 0);
  rect(590, 254, 10, 100); //canestro
  rect(725, 130, 40, 120); //tabellone
  rect(1220, 600, 100, 700); //verticale
  rect(990, 230, 570, 60); //orizzontale
  rect(650, 260, 100, 100); //punto
  rect(700, 280, 40, 70); //sottocanestro dx
  rect(600, 300, 50, 20); //sottocanestro sx
  rect(600, 200, 50, 20); //sopracanestro sx


  rect(mouseX, mouseY, 100, 30);

}

function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = (3, 4, 5); //(random(0,275),random(0,275),random(0,275));
  this.speed = 3;
  var yDir = 2;
  var xDir = 2;



  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
    push()
    rotate(frameCount);
    fill(242, 151, 55);
    line(_x - _diameter / 2, _y - _diameter / 2, _x + _diameter / 2, _y + _diameter / 2);
    pop();
  }
  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;
    if (this.y > 830 || this.y < 20) {
      yDir = yDir * (-1);
    }
    if (this.x > img.width * 1.6 || this.x < 0) {
      xDir = xDir * (-1);
    }
    if (this.y > 254 - 150 && this.y < 254 + 150 && this.x > 585 && this.x < 595) { //canestro
      xDir = xDir * (-0.2);
    }
    if (this.y > 130 - 60 && this.y < 130 + 60 && this.x > 725 - 20 && this.x < 725 + 20) { //tabellone
      xDir = xDir * (-0.2);
    }
    if (this.y > 600 - 350 && this.y < 600 + 350 && this.x > 1220 - 50 && this.x < 1220 + 50) { //verticale
      xDir = xDir * (-1);
    }
    if (this.y > 230 - 30 && this.y < 230 + 30 && this.x > 990 - 285 && this.x < 990 + 285) { //orizzontale
      yDir = yDir * (-1);
    }

    if (this.y > 280 - 35 && this.y < 280 + 35 && this.x > 700 - 35 && this.x < 700 + 35) { //sotto canestro dx
      yDir = yDir * (-1);
      xDir = xDir * (-1);
    }
    if (this.y > 300 - 10 && this.y < 300 + 10 && this.x > 600 - 25 && this.x < 600 + 25) { //sotto canestro sx
      yDir = yDir * (-1);
      xDir = xDir * (-1);
    }
    if (this.y > 200 - 10 && this.y < 200 + 10 && this.x > 600 - 25 && this.x < 600 + 25) { //spra canestro
      this.x += -3;
      this.y += 3;
    }
    if (this.y > 210 && this.y < 310 && this.x > 650 - 60 && this.x < 650 + 60) { //orizzontale
      fill(275);
      textFont(myFont);
      textSize(36);
      text('You Score', width / 2, height / 2);
      a += 2;
      text('TOTAL SCORE --> ' + a, 500, 500);
    }
    if (this.y > mouseY - 50 && this.y < mouseY -25 && this.x > mouseX - 50 && this.x < mouseX + 50) { //cursore
      yDir = -2;


    //  xDir = -2;
    }
     if (this.y > mouseY - 25 && this.y < mouseY  && this.x > mouseX - 50 && this.x < mouseX + 50) {
      yDir = -4;

    //   xDir = -4;
    }
     if (this.y > mouseY  && this.y < mouseY+25  && this.x > mouseX - 50 && this.x < mouseX + 50) {
      yDir = 4;

    //   xDir = 4;
    }
     if (this.y > mouseY+25  && this.y < mouseY+50  && this.x > mouseX - 50 && this.x < mouseX + 50) {
      yDir = 2;
    
    //   xDir = 2;
    }
  }
}
