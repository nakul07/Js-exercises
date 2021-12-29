function obstacle(height, x, y) {
  this.height = height;
  this.x = x;
  this.y = y;
  this.width = 60;
  this.img = document.createElement("img");
  this.img.src = "images/pipe-green.png";

  this.obstacleUpdate = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
  this.score = function () {
    if (this.x < 0) {
      score++;
    }
  };
}

function bird() {
  this.y = 285;
  this.speedY = 1.1;
  this.x = 100;
  this.n = -0.4;
  this.gravity = 0.05;
  this.gSpeed = 0;
  this.height = 35;
  this.width = 45;
  this.imgIndex = 1;
  this.images = [
    "bluebird-downflap.png",
    "bluebird-midflap.png",
    "bluebird-upflap.png",
  ];
  this.img = document.createElement("img");
  this.interval = setInterval(() => {
    this.imgIndex = (this.imgIndex + 1) % 3;
  }, 100);

  this.birdUpdate = function () {
    ctx = animationArea.context;
    this.img.src = `images/${this.images[this.imgIndex]}`;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  this.birdMove = function () {
    this.gSpeed += this.gravity;
    this.y += this.speedY + this.gSpeed;
    // ctx.rotate((1 * Math.PI) / 180);
    this.hitBox();
  };

  this.hitBox = function () {
    let bottom = animationArea.canvas.height - this.height;

    if (this.y > bottom) {
      this.y = bottom - 1;
      gameOver();
    } else if (this.y < 0) {
      this.y = 0;
      gameOver();
    }
  };

  this.collisionDetect = function (obstacle) {
    let left = this.x;
    let top = this.y;
    let right = this.x + this.width;
    let btm = this.y + this.height;
    let obstacleLeft = obstacle.x;
    let obstacleTop = obstacle.y;
    let obstacleRight = obstacle.x + obstacle.width;
    let obstacleBtm = obstacle.y + obstacle.height;
    let collision = true;
    if (
      btm < obstacleTop ||
      top > obstacleBtm ||
      right < obstacleLeft ||
      left > obstacleRight
    ) {
      collision = false;
      //  console.log("voer");
      //gameOver();
    }
    return collision;
  };
}

function background() {
  this.x = 0;
  this.y = 0;
  this.width = 1000;
  this.height = animationArea.canvas.height;
  this.speedX = 0;
  this.img = document.createElement("img");
  this.img.src = "images/background.jpg";
  this.print = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.img,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  };

  this.bgLoop = function () {
    this.x += this.speedX;
    if (this.x == -this.width) {
      this.x = 0;
    }
  };
}

function gameOver() {
  if (score > highscore) {
    localStorage.setItem("highscore1", score);
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
  const h1 = document.createElement("div");
  h1.style.backgroundImage = "url('images/gameover.png')";
  h1.style.height = "200px";
  h1.style.width = "100px;";
  //h1.style.position = "absolute";
  h1.style.backgroundPosition = "center";
  h1.style.backgroundRepeat = "no-repeat";
  h1.style.top = "50px";
  popUp.append(h1);
  const h3 = document.createElement("h3");
  h3.id = "reloadTxt";
  h3.innerText = "Play Again";

  reLoad.append(h3);
  reLoad.onclick = function () {
    // window.location.reload();
    popUp.style.display = "none";

    for (let i = 0; i < myObstacle.length + 1; i++) {
      destruct(i);
    }
    startAnimation();
  };
}
