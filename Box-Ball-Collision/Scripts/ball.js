//ball class

function ball(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.dx = Math.random() > 0.5 ? 1 : -1;
  this.dy = Math.random() > 0.5 ? 1 : -1;
  this.speed = 2;
  this.update = function () {
    ctx = animationArea.context;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  };
}
