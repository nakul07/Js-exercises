function collisionDetect(ball) {
  for (let i = 0; i < finalBalls.length; i++) {
    var otherBall = finalBalls[i];

    if (otherBall == ball) {
      continue;
    }
    var dx1 = ball.x + ball.r - (otherBall.x + otherBall.r);
    var dy1 = ball.y + ball.r - (otherBall.y + otherBall.r);
    // var dx1 = ball.x - otherBall.x;
    // var dy1 = ball.y - otherBall.y;
    var distance = Math.floor(Math.sqrt(dx1 * dx1 + dy1 * dy1));
    // console.log(distance);

    if (distance <= ball.r + otherBall.r) {
      //collision
      // ball.dx = -1 * ball.dx;
      // ball.dy = -1 * ball.dy;
      otherBall.dx = -1 * otherBall.dx;
      otherBall.dy = -1 * otherBall.dy;
    }
  }
}

function wallCollisionDetect(ball) {
  if (
    ball.x + ball.dx > animationArea.canvas.width - ball.r ||
    ball.x + ball.dx < ball.r
  ) {
    ball.dx = -ball.dx;
  }
  if (
    ball.y + ball.dy > animationArea.canvas.height - ball.r ||
    ball.y + ball.dy < ball.r
  ) {
    ball.dy = -ball.dy;
  }

  ball.x += ball.dx * ball.speed;
  ball.y += ball.dy * ball.speed;
  // ball.color = possilbeColors[Math.floor(Math.random() * possilbeColors.length)];
}
