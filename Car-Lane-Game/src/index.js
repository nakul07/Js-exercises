let myCar;
let laneBackground;
let myObstacle = [];
let speed = 3;
let obstaclePosition = [60, 220, 385];
let score = 0;

function startAnimation() {
  animationArea.start();
  myCar = new car();
  laneBackground = new background(speed);
  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * obstaclePosition.length);
    myObstacle.push(new obstacle(speed, obstaclePosition[randomIndex]));
    scoreCalc(myObstacle);
  }, 2000);
}

var animationArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 700;
    this.canvas.height = 600;
    this.canvas.addEventListener("keydown", handleClick);
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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

  scoreDisplay();
}

function handleClick(event) {
  if (event.keyCode == "37") {
    myCar.moveLeft();
    console.log("moved left");
  }
}

function scoreCalc(obstacle) {
  setTimeout(function () {}, 2000);
  for (let i = 0; i < obstacle.length; i++) {
    if (obstacle[i].y > animationArea.canvas.height + 2) {
      score++;
    }
  }
}

function scoreDisplay() {
  animationArea.context.font = "50px Comic Sans MS";
  animationArea.context.fillText(score, 570, 100);
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
function gameOver() {
  clearInterval(animationArea.interval);
}
