let finalBalls = [];

const possilbeColors = [
  "red",
  "cyan",
  "blue",
  "black",
  "pink",
  "yellow",
  "purple",
  "green",
  "lightblue",
];

function startAnimation() {
  finalBalls = getBalls(Math.floor((20 - 5) * Math.random() + 5));
  animationArea.start();
}

var animationArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1350;
    this.canvas.height = 600;
    this.canvas.addEventListener("mousedown", handleClick);
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateAnimationArea, 16.66);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  gameOver: function () {
    this.context.font = "70px Comic Sans MS";
    this.context.fillStyle = "red";
    this.context.textAlign = "center";
    this.context.fillText(
      "Congratulations !!",
      this.canvas.width / 2,
      this.canvas.height / 2
    );
  },
};

function updateAnimationArea() {
  animationArea.clear();
  finalBalls.forEach((ball) => {
    wallCollisionDetect(ball);
    collisionDetect(ball);
    ball.update();
  });
  if (finalBalls.length == 0) {
    animationArea.gameOver();
  }
}
