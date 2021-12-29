let myBird;
let gBackground;
let myObstacle = [];
let speed = 2;
let score = 0;
let highscore = 0;
let scoreCounter = 0;
let die; //die sound
let hit; //hit sound
let wing; //wing sound
let point; //point sound

function startAnimation() {
  //initializing bird, obstacle , background and sounds
  animationArea.start();
  myBird = new bird();
  gBackground = new background();
  die = new sound("audio/die.wav");
  hit = new sound("audio/hit.wav");
  wing = new sound("audio/wing.wav");
  point = new sound("audio/point.wav");

  //checking highscore
  if (localStorage.getItem("highscore1") !== null) {
    highscore = localStorage.getItem("highscore1");
  }
}

let animationArea = {
  container: document.getElementById("canvas-container"),
  canvas: document.createElement("canvas"),
  start: function () {
    this.container.style.backgroundSize = "cover";
    this.container.style.height = "600px";
    this.canvas.width = 1000;
    this.canvas.height = 500;
    this.frame = 0;
    this.context = this.canvas.getContext("2d");
    this.container.append(this.canvas);
    this.interval = setInterval(updateAnimationArea, 20);
    document.body.addEventListener("keydown", handleClick); // for spacebar press
    document.body.addEventListener("keyup", handleClick1); //for space bar release
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateAnimationArea() {
  let a, b, minH, maxH, height, minG, maxG, gap;
  //checking collision
  for (i = 0; i < myObstacle.length; i++) {
    if (myBird.collisionDetect(myObstacle[i])) {
      hit.play();
      die.play();
      gameOver();
      return;
    }
  }
  animationArea.clear();
  animationArea.frame++;
  gBackground.speedX = -0.5;
  gBackground.bgLoop();
  gBackground.print();
  if (animationArea.frame == 1 || eachInterval(200)) {
    a = animationArea.canvas.width;
    minH = 80;
    maxH = 300;
    height = getRandom(minH, maxH);
    minG = 100;
    maxG = 200;
    gap = getRandom(minG, maxG);
    myObstacle.push(new obstacle(height, a, -2));
    myObstacle.push(new obstacle(a - height - gap, a, height + gap));
  }
  myObstacle.forEach((obstacle) => {
    obstacle.x += -1.8;
    obstacle.obstacleUpdate();
    obstacle.score();
  });

  myBird.birdMove();
  myBird.birdUpdate();
  scoreDisplay(850, 40);
  hScoreDisplay(30, 40);
}

//event handlers

function handleClick(event) {
  if (event.keyCode == "32") {
    myBird.gravity = -0.6;
    wing.play();
  }
}
function handleClick1(event) {
  if (event.keyCode == "32") {
    myBird.gravity = 0.3;
  }
}

//display score
function scoreDisplay(x, y) {
  animationArea.context.font = "25px Comic Sans MS";
  animationArea.context.fillText("Score: " + score, x, y);
}
function hScoreDisplay(x, y) {
  animationArea.context.font = "25px Comic Sans MS";
  animationArea.context.fillText("High Score: " + highscore, x, y);
}
