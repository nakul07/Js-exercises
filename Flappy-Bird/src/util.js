function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function RandomIndex() {
  return getRandom(0, 3);
}
function eachInterval(n) {
  if ((animationArea.frame / n) % 1 == 0) {
    return true;
  }
  return false;
}
