function onLoad() {
  const initialScreen = document.createElement("div");
  initialScreen.id = "initialScreen";
  initialScreen.style.height = window.screen.height + "px";
  initialScreen.style.width = "100%";
  initialScreen.style.backgroundImage = "url('images/walpaper.jpg')";
  document.body.append(initialScreen);
  const instructionWrapper = document.createElement("div");
  instructionWrapper.id = "instructionWrapper";
  instructionWrapper.style.backgroundColor = `rgba(255, 255, 255, 0.6)`;
  instructionWrapper.style.width = "50%";
  instructionWrapper.style.borderRadius = "10px";
  instructionWrapper.style.height = window.screen.height / 2 + "px";
  instructionWrapper.style.position = "absolute";
  instructionWrapper.style.top = "100px";
  instructionWrapper.style.padding = "10px";
  instructionWrapper.style.left = "25%";
  const instructions = document.createElement("h1");
  instructions.style.textAlign = "center";
  instructions.innerText =
    "Use Arrow Left and Arrow Right keys to control the car and Enjoy !!";
  instructionWrapper.append(instructions);
  initialScreen.append(instructionWrapper);
  const startGame = document.createElement("div");
  startGame.id = "startGame";
  startGame.style.height = "70px";
  startGame.style.width = "220px";
  startGame.style.backgroundImage = "url('images/start.png')";
  startGame.style.backgroundSize = "cover";
  startGame.style.backgroundRepeat = "no-repeat";
  startGame.style.position = "absolute";
  startGame.style.marginTop = "100px";
  startGame.style.left = "34%";
  startGame.style.cursor = "pointer";
  instructionWrapper.append(startGame);
  startGame.addEventListener("mousedown", (Event) => {
    startAnimation();
    initialScreen.style.display = "none";
  });
}
