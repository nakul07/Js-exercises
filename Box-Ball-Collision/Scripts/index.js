let finalBalls = [];

const possilbeColors = [
  "red",
  "cyan",
  "blue",
  "black",
  "pink",
  "white",
  "yellow",
  "purple",
  "green",
  "lightblue",
];

function startAnimation() {
  finalBalls = getBalls(10);
  animationArea.start();
}

var animationArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 900;
    this.canvas.height = 500;
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
  finalBalls.forEach((ball) => {
    ball.update();
    collisionDetect(ball);
    wallCollisionDetect(ball);
  });
}
