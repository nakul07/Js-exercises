let finalBalls = [];
let possilbeColors =[];

function startAnimation() {
  finalBalls = getBalls(5);
  animationArea.start();
}

function updateAnimationArea() {
  animationArea.clear();
  //   collisionDetect();
  finalBalls.forEach((ball) => {
    ball.newPos();
    ball.update();
  });
}
