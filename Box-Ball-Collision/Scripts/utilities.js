 possilbeColors = [
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

function getBalls(noOfBalls) {

  let newBall = [];

  for (let i = 0; i <= noOfBalls; i++) {
    let randomColor = possilbeColors[Math.floor(Math.random() * possilbeColors.length)];
    let randomRadius = 1 + Math.floor(Math.random()*60);
    let randomX = 900 * Math.random();
    let randomY = 500 * Math.random();

    newBall.push(
      new ball( randomX, randomY, randomRadius, randomColor )
    );
  }
  return newBall;
}

var animationArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 900;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateAnimationArea, 16.66);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function collisionDetect() {
  balls.forEach(() => {
    var dx1 = ball1.x + ball2.r - (ball2.x + ball2.r);
    var dy1 = ball1.y + ball1.r - (ball2.y + ball2.r);
    var distance = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  
    if (distance < ball1.r + ball2.r) {
      
      ball1.dx = -ball1.dx;
      ball1.dy = -ball1.dy;
      ball2.dx = -ball2.dx;
      ball2.dy = -ball2.dy;
    } else {
      // no collision
    }
  });

  
}

// function Game() {

//   this.ask = string, key => {
//     value = alert(string)
//     this[key] = value
//   }

// }

// const game = new Game();
// game.ask('How many balls', "ballCount");
// game.ask('HWhich color', value => game.someColor = value);
// game.render(canvas)
// game.start();

// ((900 - randomRadius * 2) * Math.random()) + 2 * randomRadius
// min : (2r, 2r)
// max (900 - 2r, 500 - 2r)
