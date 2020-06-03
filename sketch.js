var snake;
var rez = 15;
var food;
var w, h;
var gameState = 0;
var play = 0;
var end = 1;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  w = floor(width / rez);
  h = floor(height / rez);
  foodLocation();
  gameState = play;

}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.yDir != 1) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.yDir != -1) {
    snake.setDir(0, 1);
  } else if (keyCode === LEFT_ARROW && snake.xDir != 1) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW && snake.xDir != -1) {
    snake.setDir(1, 0);
  }

}

function draw() {
  frameRate(6);
  background(0);
  scale(rez);
  fill(0, 255, 0);
  textSize(1);
  text("Blue=Snake   Red=Food   Don't hit yourself or the edges", 1, 26);
  if (snake.eat(food)) {
    foodLocation();
    snake.grow();
  }
  snake.update();
  snake.display();
  if (snake.gameOver()) {
    background(255, 0, 0)
    gameState = end;
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);
}