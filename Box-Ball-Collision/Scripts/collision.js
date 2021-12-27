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

    var distanceSquare = dx1 * dx1 + dy1 * dy1;
    var radiousSquare = (ball.r + otherBall.r) * (ball.r + otherBall.r);

    if (distanceSquare <= radiousSquare) {
      //collision

      if (ball.x < otherBall.x) {
        ball.dx = -Math.abs(ball.dx);
      } else {
        ball.dx = Math.abs(ball.dx);
      }
      if (ball.y < otherBall.y) {
        ball.dy = -Math.abs(ball.dy);
      } else {
        ball.dy = Math.abs(ball.dy);
      }
    }
  }
}

function wallCollisionDetect(ball) {
  if (ball.x + ball.dx > animationArea.canvas.width - ball.r) {
    ball.dx = -Math.abs(ball.dx);
  }
  if (ball.x + ball.dx < ball.r) {
    ball.dx = Math.abs(ball.dx);
  }
  if (ball.y + ball.dy > animationArea.canvas.height - ball.r) {
    ball.dy = -Math.abs(ball.dy);
  }
  if (ball.y + ball.dy < ball.r) {
    ball.dy = Math.abs(ball.dy);
  }

  ball.x += ball.dx * ball.speed;
  ball.y += ball.dy * ball.speed;
  // ball.color = possilbeColors[Math.floor(Math.random() * possilbeColors.length)];
}
