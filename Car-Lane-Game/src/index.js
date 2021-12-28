let myCar;
let laneBackground;
let myObstacle = [];
let speed = 5;
let obstaclePosition = [60, 220, 385];
let score = 0;
let index = 2;

function startAnimation() {
  animationArea.start();
  myCar = new car();
  laneBackground = new background(speed);
  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * obstaclePosition.length);
    myObstacle.push(new obstacle(speed, obstaclePosition[randomIndex]));
  }, 2000);
}

var animationArea = {
  container: document.getElementById("canvas-container"),
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 700;
    this.canvas.height = 600;
    this.canvas.addEventListener("keydown", handleClick);
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
  scoreCalc();
  scoreDisplay();
}

function handleClick(event) {
  if (event.key === "37") {
    myCar.moveLeft();
    console.log("moved left");
  }
}

//score calculator
function scoreCalc() {
  setTimeout(function () {}, 2000);
  for (let i = 0; i < myCar.length; i++) {
    if (myCar[i].y > animationArea.canvas.height + 2) {
      score++;
    }
  }
}
//display score
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
  animationArea.container.position = "relative";
  const popUp = document.createElement("div");
  popUp.id = "popUp";
  popUp.style.width = "50%";
  popUp.style.height = "300px";
  // popUp.style.backgroundColor = "yellow";
  popUp.style.position = "absolute";
  popUp.style.top = "100px";
  popUp.style.marginLeft = "24.5%";
  popUp.style.backgroundImage = "url('images/over.png')";
  popUp.style.backgroundSize = "cover";
  popUp.style.backgroundPosition = "center";
  animationArea.container.append(popUp);
  const reLoad = document.createElement("div");
  reLoad.style.position = "absolute";
  reLoad.style.height = "50px";
  reLoad.style.width = "100px";
  reLoad.style.backgroundColor = "red";
  reLoad.style.bottom = "0px";
  reLoad.style.marginLeft = "300px";
  reLoad.style.marginBottom = "30px";
  reLoad.innerText = "Reload";
  popUp.append(reLoad);
  reLoad.onclick = function () {
    window.location.reload();
  };
}
