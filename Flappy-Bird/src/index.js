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
  if (localStorage.getItem("highscore") !== null) {
    highscore = localStorage.getItem("highscore");
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
  let a, b;
  for (i = 0; i < myObstacle.length; i++) {
    if (myBird.collisionDetect(myObstacle[i])) {
      gameOver();
      return;
    }
  }
  animationArea.clear();
  animationArea.frame++;
  if (animationArea.frame == 1 || eachInterval(150)) {
    a = animationArea.canvas.width;
    b = animationArea.canvas.height - 200;
    myObstacle.push(new obstacle(200, a, b));
  }
  myObstacle.forEach((obstacle) => {
    obstacle.x += -1;
    obstacle.obstacleUpdate();
   // console.log(obstacle);
  });
  gBackground.speedX = -1;
  gBackground.bgLoop();
  gBackground.print();
  myBird.birdMove();
  myBird.birdUpdate();
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

// function collisionDetect(obstacle) {
//   if (
//     obstacle.x + 60 > myBird.x + 45 &&
//     obstacle.y + 35 < myBird.y + 200 &&
//     obstacle.x + 45 < myBird.x + 60 &&
//     200 + obstacle.y > myBird.y + 35
//   ) {
//     // gameOver();
//     console.log("overrrrrrrrrr");
//   }
// }
