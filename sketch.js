var a = 200; // x location of speedball is when dropped on the axis
var b = 0; // y location of where speedball is dropped on the axis
var speedBall = 0; // speed of speedball
var gravity = 0.1; // how fast ball drops, used a small number since accerleration increases over time which increases the speed

var x = 0; // x position for triangle


var speedTri = 40; //how fast Triangle goes
var speedQuad = 10; //how fast Quad goes

var circleX; // variable for x on my circle
var xspeed = 10; //how fast yellow circle moves
var z = 0; // x location where car moves
var v = 100; // y location where car moves
var speed = 1; // speed of car

function setup() {
  createCanvas(400, 400); // how big canvas is
  circleX = 0; // x coordinate for circle is set to 0
}




function draw() {
  //If the mouse is on the left side of the screen, draw a blue background, otherwise draw a red background.
  if (mouseX < width / 2) {
    background(0, 27, 255);
  } else {
    background(255, 40, 61);
  }




  //Draws a rectangle with a fill color of orange and moves around at any given xy coordinate
  stroke(0);
  fill(255, 83, 13);
  rect(mouseX, mouseY, 100, 200);

  move();
  display();

  fill(255, 179, 55); //Fills the circle with a yellow color
  stroke(255); //outline of circle is white
  ellipse(circleX, height / 2, 32, 32); //how big the circle is

  circleX = circleX + xspeed; //calculates speed

  if (circleX > width) { // when circleX reaches the edge of the canvas reverse circleX xspeed by -10
    xspeed = -10
  }

  if (circleX < 0) { //when circleX is less than 0 on the x axis, increase it's speed by 10
    xspeed = 10;

  }


  // Draw the ball
  fill(210, 41, 232); //color purple
  noStroke();
  ellipse(a, b, 40, 40); // how big circle is 
  b = b + speedBall; //add speed to location of speedball
  speedBall = speedBall + gravity; //add gravity to speedball

  // To bounce, if b is greater than height, multiply speedBall by -.7
  if (b > height) { 
    speedBall = speedBall * -.7;
    y = height;
  }




  //Draws a quadrilatoral with a fill color of pink
  fill(255, 135, 153);
  quad(x, 25, 100, 75, 100, 225, 100, 275);



  x = x + speedTri ; //speedTri; //add the current speed to x
  if ((x > width) || (x < 0)) {
    speedTri = speedTri * -1; // If the triangle reaches either edge, multiply the speed by -1 to reverse speed and turn around
  }

  //Draws a triangle with a fill color of yellow
  stroke(0);
  fill(255, 248, 13);
  triangle(x, 350, 300, 400, 400, 400);

  //Draws a circle with a fill color of blue

  fill(8, 19, 255);
  ellipseMode(CENTER);
  ellipse(100, 375, 50, 50);

  //Draws a line with a color of black
  stroke(0, 0, 0);
  strokeWeight(9);
  line(100, 125, 150, 125);

  //Draws a line with a color of green
  stroke(0, 255, 68);
  strokeWeight(3);
  line(150, 250, 100, 375);

  if (keyIsPressed) { // draw a green line when d key is pressed
    if ((key == 'd'))
      line(20, 40, 100, 20);
dldld
    if ((key == 'l')) // when l key is pressed draw green line
      line(80, 90, 110, 75);
  }

  //Draws a line with a color of red
  stroke(255, 0, 0);
  strokeWeight(6);
  line(250, 250, 350, 375);


  function move() {
    z+= random(1,20)
    
    if (z > width) { // when z is greater than the width, z equals 0
      z = 0;
    }
  }

  function display() {
    fill(85, 235, 255); // fill color of ellipse is baby blue
    ellipse(z, v, 55, 55); // dimentions of rect
  }
}