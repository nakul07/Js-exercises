function obstacle(speed, x) {
  this.speed = speed;
  this.x = x; //220;
  this.y = -100;
  this.dy = 1;
  this.img = document.createElement("img");
  this.img.src = "images/obstacle.png";
  this.obstacleUpdate = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, 60, 95);
  };
  this.moveObstacles = function () {
    this.y += this.dy * this.speed;
  };
  
}

function car() {
  this.x = 385;
  this.y = 490;
  //this.color = c;
  this.img = document.createElement("img");
  this.img.src = "images/mycar.png";
  this.carUpdate = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, 60, 95);
  };
  this.moveLeft = function () {
    this.x = this.x - 165;
  };
}

function background(speed) {
  this.y = 0;
  this.height = animationArea.canvas.height;
  this.max = 0 + this.height;
  this.step = -(speed + 1);
  this.img = document.createElement("img");
  this.img.src = "images/lane.png";
  this.print = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, 0, this.y, 500, 600);
    ctx.drawImage(this.img, 0, this.y - this.height, 500, 600);
    this.y -= this.step;
    // console.log(this.y);
    if (this.y > this.max) {
      this.y = 0;
    }
  };
}
