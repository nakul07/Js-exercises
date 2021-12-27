const destruct = (ball) => {
  const updatedAnts = finalBalls.filter((items, index) => ball !== index);
  finalBalls = updatedAnts;
};
function handleClick(event) {
  let pointerX = event.x;
  let pointerY = event.y;
  pointerX -= animationArea.canvas.offsetLeft;
  pointerY -= animationArea.canvas.offsetTop;
  for (let i = 0; i < finalBalls.length; i++) {
    if (
      getDistance(pointerX, finalBalls[i].x, pointerY, finalBalls[i].y) <=
      finalBalls[i].r ** 2
    ) {
      destruct(i);
      // console.log("clicked");
    }
    
  }
  
}

function getDistance(x1, x2, y1, y2) {
  return Math.floor((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
