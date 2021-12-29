function onLoad() {
  const initialScreen = document.createElement("div");
  initialScreen.id = "initialScreen";
  initialScreen.style.height = "700px";
  initialScreen.style.width = "100%";
  initialScreen.style.backgroundImage = "url('images/background.jpg')";
  initialScreen.style.backgroundRepeat = "no-repeat";
  initialScreen.style.backgroundSize = "cover";
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
  instructions.style.color = "green"
  instructions.innerText =
    "Press Space Bar to flap the bird and avoid the Obstacles ";
  instructionWrapper.append(instructions);
  initialScreen.append(instructionWrapper);
  const startGame = document.createElement("div");
  startGame.id = "startGame";
  startGame.style.height = "250px";
  startGame.style.width = "200px";
  startGame.style.backgroundImage = "url('images/message.png')";
  startGame.style.backgroundSize = "cover";
  startGame.style.backgroundRepeat = "no-repeat";
  startGame.style.position = "absolute";
  startGame.style.marginTop = "30px";
  startGame.style.left = "34%";
  startGame.style.cursor = "pointer";
  instructionWrapper.append(startGame);
  startGame.addEventListener("mousedown", (Event) => {
    startAnimation();
    initialScreen.style.display = "none";
  });
}
