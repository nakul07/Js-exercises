//obstacle constructor
//height = random height as an input
//x and y are the coordinates

function obstacle(height, x, y) {
  this.height = height;
  this.x = x;
  this.y = y;
  this.width = 60;
  this.img = document.createElement("img");
  this.img.src = "images/rsz_pipe-green.png";

  this.obstacleUpdate = function () {
    ctx = animationArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
  this.score = function () {
    if (this.x < -65) {
      myObstacle.shift();
      point.play();
      scoreCounter++;
      score = scoreCounter / 2;
    }
  };
}

//bird constructor

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
    //array of images
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
    this.hitBox();
  };

  this.hitBox = function () {
    let bottom = animationArea.canvas.height - this.height;

    if (this.y > bottom) {
      this.y = bottom - 1;
      gameOver();
      hit.play(); //sounds
      die.play();
    } else if (this.y < 0) {
      this.y = 0;
      gameOver();
      hit.play(); //sounds
      die.play();
    }
  };
  //detect collision
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
    }
    return collision;
  };
}
// moving background image

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
  //to move
  this.bgLoop = function () {
    this.x += this.speedX;
    if (this.x == -this.width) {
      this.x = 0;
    }
  };
}
