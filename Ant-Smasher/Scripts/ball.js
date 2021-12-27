function ball(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.dx = Math.random() > 0.5 ? 1 : -1;
  this.dy = Math.random() > 0.5 ? 1 : -1;
  this.speed = (2 - 1) * Math.random() + 1;
  this.img = document.createElement("img");
  this.img.src = "images/ant.png";
  this.update = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, 40, 40);
    ctx.font = "30px Arial";
    ctx.fillText("Click to Smash Ants !!", 500, 30);
  };
  
}
