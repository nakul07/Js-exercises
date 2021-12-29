let myBird;
let gBackground;
let myObstacle = [];
let speed = 2;
let score = 0;
let highscore = 0;

function startAnimation() {
  animationArea.start();
  myBird = new bird();
  gBackground = new background();
  if (localStorage.getItem("highscore1") !== null) {
    highscore = localStorage.getItem("highscore1");
  }
}

let animationArea = {
  container: document.getElementById("canvas-container"),
  canvas: document.createElement("canvas"),
  start: function () {
    // this.container.style.backgroundImage = "url('images/city.jpeg')";
    this.container.style.backgroundSize = "cover";
    this.container.style.height = "600px";
    this.canvas.width = 1000;
    this.canvas.height = 500;
    this.frame = 0;
    this.context = this.canvas.getContext("2d");
    this.container.append(this.canvas);
    this.interval = setInterval(updateAnimationArea, 20);
    document.body.addEventListener("keydown", handleClick);
    document.body.addEventListener("keyup", handleClick1);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateAnimationArea() {
  let a, b, minH, maxH, height, minG, maxG, gap;
  for (i = 0; i < myObstacle.length; i++) {
    if (myBird.collisionDetect(myObstacle[i])) {
      gameOver();
      return;
    }
  }
  animationArea.clear();
  animationArea.frame++;
  gBackground.speedX = -0.3;
  gBackground.bgLoop();
  gBackground.print();
  if (animationArea.frame == 1 || eachInterval(250)) {
    a = animationArea.canvas.width;
    minH = 80;
    maxH = 300;
    height = Math.floor(Math.random() * (maxH - minH + 1) + minH);
    minG = 100;
    maxG = 200;
    gap = Math.floor(Math.random() * (maxG - minG + 1) + minG);
    myObstacle.push(new obstacle(height, a, -2));
    myObstacle.push(new obstacle(a - height - gap, a, height + gap));
  }
  myObstacle.forEach((obstacle) => {
    obstacle.x += -1.5;
    obstacle.obstacleUpdate();
    obstacle.score();
  });

  myBird.birdMove();
  myBird.birdUpdate();
  //myBall.angle += (1 * Math.PI) / 180;
  scoreDisplay(860, 40);
  hScoreDisplay(30, 40);
}

function handleClick(event) {
  if (event.keyCode == "32") {
    myBird.gravity = -0.6;
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
