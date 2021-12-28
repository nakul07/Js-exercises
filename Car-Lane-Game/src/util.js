function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function RandomIndex() {
  return getRandom(0, 3);
}
