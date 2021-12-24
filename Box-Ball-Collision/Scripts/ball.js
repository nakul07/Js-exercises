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

  // this.newPos = function () {
  //   if (
  //     this.x + this.dx > animationArea.canvas.width - this.r ||
  //     this.x + this.dx < this.r
  //   ) {
  //     this.dx = -this.dx;
  //   }
  //   if (
  //     this.y + this.dy > animationArea.canvas.height - this.r ||
  //     this.y + this.dy < this.r
  //   ) {
  //     this.dy = -this.dy;
  //   }

  //   this.x += this.dx;
  //   this.y += this.dy;
    
  // };  
}
