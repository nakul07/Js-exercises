function obstacle(speed, y) {
  this.speed = speed;
  this.index = RandomIndex();
  this.x = obstaclePosition[this.index];
  this.y = y;
  this.yi = this.y;
  this.dy = 1;

  this.img = document.createElement("img");
  this.img.src = "images/obstacle.png";

  this.obstacleUpdate = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, 60, 95);
    this.moveObstacles();
    if (this.y >= animationArea.canvas.height) {
      this.reset();
      score++;
      this.speed = this.speed + 0.3;
      // console.log(this.speed);
    }
  };

  this.moveObstacles = function () {
    this.y += this.dy * this.speed;
  };

  this.reset = function () {
    this.y = this.yi;
    this.index = RandomIndex();
    this.x = obstaclePosition[this.index];
  };
}

function car() {
  this.y = 485;
  this.index = 1;
  this.x = obstaclePosition[this.index];
  this.img = document.createElement("img");
  this.img.src = "images/mycar.png";
  this.carUpdate = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, 60, 95);
  };
  this.moveLeft = function () {
    if (this.index > 0) {
      this.index--;
      this.x = obstaclePosition[this.index];
    }
  };
  this.moveRight = function () {
    if (this.index < obstaclePosition.length - 1) {
      this.index++;
      this.x = obstaclePosition[this.index];
    }
  };
}

function background(speed) {
  this.y = 0;
  this.height = animationArea.canvas.height;
  this.max = this.height;
  this.speed = speed;
  this.speed = this.speed + 0.1;
  this.step = -(this.speed + 1);
  this.img = document.createElement("img");
  this.img.src = "images/lane.png";
  this.print = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, 0, this.y, 500, 600);
    ctx.drawImage(this.img, 0, this.y - this.height, 500, 600);
    this.y -= this.step;
    if (this.y > this.max) {
      this.y = 0;
    }
  };
}
function gameOver() {
  if (score > highscore) {
    localStorage.setItem("highscore", score);
  }

  clearInterval(animationArea.interval);
  animationArea.container.position = "relative";
  const popUp = document.createElement("div");
  popUp.id = "popUp";
  popUp.style.width = "30%";
  popUp.style.height = "300px";
  popUp.style.position = "absolute";
  popUp.style.top = "100px";
  popUp.style.marginLeft = "35%";
  popUp.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
  popUp.style.borderRadius = "15px";
  animationArea.container.append(popUp);
  const reLoad = document.createElement("div");

  reLoad.style.position = "absolute";
  reLoad.style.height = "50px";
  reLoad.style.width = "100px";
  reLoad.style.backgroundColor = "red";
  reLoad.style.bottom = "0px";
  reLoad.style.marginLeft = "40%";
  reLoad.style.marginBottom = "30px";
  reLoad.style.borderRadius = "5px";
  reLoad.style.cursor = "pointer";
  popUp.append(reLoad);
  const h1  = document.createElement("h1");
  h1.id = "gameOver";
  h1.innerText = "Game Over !!"
  h1.style.textAlign = "center";
  h1.style.fontSize = "60px";
  h1.style.marginTop = "50px";
  h1.style.fontWeight = "600";
  h1.style.color = "red";
  popUp.append(h1);
  const h3 = document.createElement("h3");
  h3.id = "reloadTxt";
  h3.innerText = "Play Again";

  reLoad.append(h3);
  reLoad.onclick = function () {
    window.location.reload();
  };
}
