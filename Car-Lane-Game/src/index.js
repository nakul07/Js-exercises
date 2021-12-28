let myCar;
let laneBackground;
let myObstacle = [];
let speed = 2;
let obstaclePosition = [60, 220, 385];
let score = 0;
let highscore = 0;

function startAnimation() {
  animationArea.start();
  myCar = new car();
  laneBackground = new background(speed);
  myObstacle.push(new obstacle(speed, -300));
  myObstacle.push(new obstacle(speed, -100));
  // myObstacle.push(new obstacle(speed, -500));
  if (localStorage.getItem("highscore") !== null) {
    highscore = localStorage.getItem("highscore");
  }
}

let animationArea = {
  container: document.getElementById("canvas-container"),
  canvas: document.createElement("canvas"),
  start: function () {
    this.container.style.backgroundImage = "url('images/city.jpeg')";
    this.container.style.backgroundSize = "cover";
    this.container.style.height = window.screen.height + "px";
    this.canvas.width = 500;
    this.canvas.height = 600;
    document.body.addEventListener("keydown", handleClick);
    this.context = this.canvas.getContext("2d");
    this.container.append(this.canvas);
    this.interval = setInterval(updateAnimationArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateAnimationArea() {
  animationArea.clear();
  laneBackground.print();
  myCar.carUpdate();
  myObstacle.forEach((obstacle) => {
    obstacle.moveObstacles();
    obstacle.obstacleUpdate();
    collisionDetect(obstacle);
  });
  scoreDisplay(380, 40);
  hScoreDisplay(30, 40);
  //console.log(myObstacle);
}

function handleClick(event) {
  if (event.keyCode == "37") {
    myCar.moveLeft();
  } else if (event.keyCode == "39") {
    myCar.moveRight();
  }
}

//score calculator
function scoreCalc() {
  setTimeout(function () {}, 2000);
  for (let i = 0; i < myObstacle.length; i++) {
    if (myObstacle[i].y > animationArea.canvas.height + 2) {
      score++;
    }
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

function collisionDetect(obstacle) {
  if (
    //width of car = w = 60
    //height of car = h = 95
    obstacle.x + 60 > myCar.x &&
    obstacle.y < myCar.y + 95 &&
    obstacle.x < myCar.x + 60 &&
    95 + obstacle.y > myCar.y
  ) {
    gameOver();
  }
}
