//generates the random number between two numbers
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//returns true in each interval of frame
function eachInterval(n) {
  if ((animationArea.frame / n) % 1 == 0) {
    return true;
  }
  return false;
}
//destruct all the elments in the obstacle array
const destruct = (obstacle) => {
  const updatedObstacles = myObstacle.filter(
    (items, index) => obstacle == index
  );
  myObstacle = updatedObstacles;
};
