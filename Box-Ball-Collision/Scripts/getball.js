function getBalls(noOfBalls) {
  let newBall = [];
  let exportBall = [];
  var overlapping = false;

  // for (let i = 0; i <= noOfBalls; i++)
  while (newBall.length < noOfBalls) {
    let balls = {
      randomColor:
        possilbeColors[Math.floor(Math.random() * possilbeColors.length)],
      randomRadius: 1 + Math.floor(Math.random() * 40),
      randomX: Math.floor(900 * Math.random()),
      randomY: Math.floor(500 * Math.random()),
    };

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

      if (distance <= balls.randomRadius + otherBall.randomRadius) {
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
