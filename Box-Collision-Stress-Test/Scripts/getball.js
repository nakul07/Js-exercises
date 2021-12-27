function getBalls(noOfBalls) {
  let newBall = [];
  let exportBall = [];
  var overlapping = false;

  // for (let i = 0; i <= noOfBalls; i++)
  while (newBall.length < noOfBalls) {
     balls = {};
      balls.randomColor = possilbeColors[Math.floor(Math.random() * possilbeColors.length)];

      balls.randomRadius= Math.floor((15 - 10) * Math.random() + 10);
      balls.randomX= Math.floor((1350 - balls.randomRadius) * Math.random() + balls.randomRadius); //(max-min)+min max= width
      balls.randomY= Math.floor((600 - balls.randomRadius) * Math.random() + balls.randomRadius);
    // };
    // console.log(balls.randomRadius);
    // console.log(balls.randomX);

    var overlapping = false;

    for (let j = 0; j < newBall.length; j++) {
      var otherBall = newBall[j];

      var dx1 =
        balls.randomX +
        balls.randomRadius -
        (otherBall.randomX + otherBall.randomRadius);

      var dy1 =
        balls.randomY +
        balls.randomRadius -
        (otherBall.randomY + otherBall.randomRadius);
      var distance = Math.sqrt(dx1 * dx1 + dy1 * dy1);

      if (distance < balls.randomRadius + otherBall.randomRadius) {
        //overlapped
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      newBall.push(balls);
    }
  }

  for (let i = 0; i < newBall.length; i++) {
    exportBall.push(
      new ball(
        newBall[i].randomX,
        newBall[i].randomY,
        newBall[i].randomRadius,
        newBall[i].randomColor
      )
    );
  }

  return exportBall;
}
