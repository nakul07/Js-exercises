function ball(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.dx = Math.random() > 0.5 ? 1 : -1;
  this.dy = Math.random() > 0.5 ? 1 : -1;
  this.speed = 1.5;
  this.img = document.createElement("img");
  this.img.src = "images/ant.gif";
  this.update = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  };
}
