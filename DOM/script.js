var points = [
  { x: 610, y: 20 },
  { x: 140, y: 440 },
  { x: 670, y: 120 },
  { x: 850, y: 130 },
  { x: 100, y: 290 },
  { x: 260, y: 510 },
  { x: 100, y: 360 },
  { x: 565, y: 325 },
  { x: 855, y: 345 },
  { x: 710, y: 28 },
  { x: 600, y: 500 },
];
let myElement = document.getElementById("plot");
myElement.style.padding = "20px";
myElement.style.border = "2px solid red";
myElement.style.height = "500px";

points.forEach((plot) => {
  const point = document.createElement("div");
  point.style.width = "20px";
  point.style.height = "20px";
  point.style.position = "absolute";
  point.style.top = plot.y + "px";
  console.log(plot.y);
  point.style.left = plot.x + "px";
  console.log(plot.x);

  point.style.background = "blue";
  point.style.borderRadius = "50%";

  myElement.appendChild(point);

  point.addEventListener("mouseover", function (e) {
    plot.y = plot.y + 10 * Math.random();
    plot.x = plot.x + 10 * Math.random();
    point.style.top = plot.y + "px";
    point.style.left = plot.x + "px";
  });
});
