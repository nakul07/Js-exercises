let myElement = document.getElementById("plot");
myElement.style.border = "3px solid red";
myElement.style.height = "500px";
myElement.style.width = "500px";
myElement.style.position = "relative";
myElement.style.marginLeft = "auto";
myElement.style.marginRight = "auto";
myElement.style.marginTop= "50px"

const ball = document.createElement("div");
ball.style.height = "30px";
ball.style.width = "30px";
ball.style.marginLeft = "45%";
ball.style.position = "absolute";
ball.style.background = "blue";
ball.style.borderRadius = "50%";

myElement.appendChild(ball);

let position = 0;
let gravity = 1;

setInterval(function () {
  if (position >= 480) {
    gravity = -gravity;
  } else if (position == 0) {
    gravity = 1;
  }

  position = position + gravity;
  ball.style.top = position + "px";
}, 5);
