var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

function startAnimation() {
  ball1 = new ball(100, 100, 80, "red");
  ball2 = new ball(200, 300, 60, "pink");
  ball3 = new ball(800, 100, 60, "blue");
  ball4 = new ball(500, 400, 50, "orange");
  ball5 = new ball(400, 200, 50, "purple");
  animationArea.start();
}
var animationArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 900;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateAnimationArea, 15);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function ball(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.dx = 2;
  this.dy = -2;
  this.update = function () {
    ctx = animationArea.context;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  };
  this.newPos = function () {
    if (
      this.x + this.dx > animationArea.canvas.width - this.r ||
      this.x + this.dx < this.r
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.dy > animationArea.canvas.height - this.r ||
      this.y + this.dy < this.r
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  };
  
}
function updateAnimationArea() {
  animationArea.clear();
  collisionDetect();
  ball1.newPos();
  ball2.newPos();
  ball3.newPos();
  ball4.newPos();
  ball5.newPos();
  ball1.update();
  ball2.update();
  ball3.update();
  ball4.update();
  ball5.update();
}
function collisionDetect(){
  var dx1 = (ball1.x + ball1.r) - (ball2.x + ball2.r);
  var dy1 = (ball1.y + ball1.r) - (ball2.y + ball2.r);
  var distance = Math.sqrt(dx1 * dx1 + dy1 * dy1);

  if (distance < ball1.r + ball2.r) {
      // collision detected!
      ball1.dx = -ball1.dx;
      ball1.dy = -ball1.dy;
      ball2.dx = -ball2.dx;
      ball2.dy = -ball2.dy;
  } else {
      // no collision
      
  }
}

