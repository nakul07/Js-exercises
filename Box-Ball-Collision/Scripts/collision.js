
function collisionDetect(ball) {
    for (let i = 0; i < finalBalls.length; i++) {
      var otherBall = finalBalls[i];
      var dx1 = ball.x + ball.r - (otherBall.x + otherBall.r);
      var dy1 = ball.y + ball.r - (otherBall.y + otherBall.r);
      var distance = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  
      if (distance < ball.r + otherBall.r) {
        //collision
        ball.dx = -ball.dx;
        ball.dy = -ball.dy;
        otherBall.dx = -otherBall.dx;
        otherBall.dy = -otherBall.dy;
        ball.color = possilbeColors[i];
        otherBall.color = possilbeColors[i];
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
  
    ball.x += ball.dx;
    ball.y += ball.dy;
    ball.color = possilbeColors[Math.floor(Math.random() * possilbeColors.length)];
  }
  