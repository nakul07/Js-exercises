const container = document.getElementById("container");
const images = document.getElementById("images");
const img = document.getElementsByClassName("img1");
const imageCount = img.length;
const transitionSpeed = 10;
let imageWidth = 900;
let imageHeight = 500;
let currentIndex = 0;
let dx = 0;

//carousel container
container.style.overflow = "hidden";
container.style.margin = "auto";
container.style.marginTop = "20px";
container.style.width = imageWidth + "px";
container.style.position = "relative";


// image container
images.style.width = imageCount * imageWidth + "px";
images.style.position = "relative";
images.style.position = imageHeight + "px";
images.style.height = imageHeight + "px";

//  images
for(let i =0; i <img.length; i++){
img[i].style.width = imageWidth + "px";
img[i].style.height = imageHeight + "px";
img[i].style.float = "left";
}
//next btn wrapper
const nextBtnWrapper = document.createElement("div");
nextBtnWrapper.id = "nextBtnWrapper";
container.append(nextBtnWrapper);
nextBtnWrapper.style.float = "right";
nextBtnWrapper.style.position = "absolute";
nextBtnWrapper.style.zIndex = 5;
nextBtnWrapper.style.top = imageHeight / 2 + "px";
nextBtnWrapper.style.right = 0 + "px";


//next btn
const nextBtn = document.createElement("img");
nextBtn.id = "nextBtn";
nextBtn.style.marginRight = "10px";
nextBtn.src = `https://img.icons8.com/ios/48/000000/chevron-right.png`;

nextBtnWrapper.append(nextBtn);

//prev btn wrapper
const prevBtnWrapper = document.createElement("div");
prevBtnWrapper.id = "prevBtnWrapper";
container.append(prevBtnWrapper);
prevBtnWrapper.style.float = "left";
prevBtnWrapper.style.position = "absolute";
prevBtnWrapper.style.zIndex = 5;
prevBtnWrapper.style.top = imageHeight / 2 + "px";

//prev btn
const prevBtn = document.createElement("img");
prevBtn.id = "prevBtn";
prevBtn.style.marginLeft = "10px";
prevBtn.src = `https://img.icons8.com/ios/48/000000/chevron-left.png`;
prevBtn.style.background = "transparent";
prevBtnWrapper.append(prevBtn);

// next btn on click
nextBtn.onclick = function nextImage() {
  nonActiveDot(currentIndex);
  if (currentIndex === imageCount - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  if (currentIndex) {
    const interval = setInterval(() => {
      dx = dx + transitionSpeed;
      if (dx > imageWidth * currentIndex) {
        dx = imageWidth * currentIndex;
        clearInterval(interval);
      }
      images.style.left = -dx + "px";
    }, 10);
  } else {
     interval = setInterval(() => {
      dx = dx - transitionSpeed;
      if (dx < 0) {
        dx = 0;
      }
      images.style.left = -dx + "px";
      if (dx == 0) {
        clearInterval(interval);
      }
    }, 1);
  }
  activeDot(currentIndex);
};

//prev btn on click
prevBtn.onclick = function prevImage() {
  //   console.log("clicked");
  nonActiveDot(currentIndex);
  if (currentIndex) {
    interval = setInterval(() => {
      dx = dx - transitionSpeed;
      if (dx < imageWidth * currentIndex) {
        dx = imageWidth * currentIndex;
        clearInterval(interval);
      }
      images.style.left = -dx + "px";
    }, 10);
  } else {
    images.style.left = "0px";
    interval = setInterval(() => {
      dx = dx + transitionSpeed;
      if (dx > imageWidth * currentIndex) {
        dx = imageWidth * currentIndex;
        clearInterval(interval);
      }
      images.style.left = -dx + "px";
    }, 1);
  }
  if (currentIndex === 0) {
    currentIndex = imageCount - 1;
  } else {
    currentIndex--;
  }
  activeDot(currentIndex);
};

//dot indicators wrapper

const dotWrapper = document.createElement("div");
dotWrapper.id = "dotWrapper";
dotWrapper.style.zIndex = "5";
dotWrapper.style.left = imageWidth / 2 - (imageCount * 15) / 2 + "px";
dotWrapper.style.position = "absolute";
dotWrapper.style.top = imageHeight - 20 + "px";
container.append(dotWrapper);

//creating dot indicators

for (let i = 0; i < imageCount; i++) {
  let dotIndicator = document.createElement("div");
  dotIndicator.id = "dotIndicator";
  dotIndicator.style.display = "inline-block";
  dotIndicator.style.borderRadius = "50%";
  dotIndicator.style.height = "15px";
  dotIndicator.style.width = "15px";
  dotIndicator.style.marginLeft = "5px";
  dotIndicator.style.cursor = "pointer";
  dotIndicator.style.backgroundColor = "red";
  dotWrapper.append(dotIndicator);

  //onclick dots
  dotIndicator.addEventListener("click", () => {
    let currentDot = i;
    let toBeChanged = currentIndex - currentDot;
    if (toBeChanged > 0) {
      for (let i = toBeChanged; i != 0; i--) {
        prevBtn.onclick();
      }
    } else if (toBeChanged < 0) {
      for (let i = toBeChanged; i != 0; i++) {
        nextBtn.onclick();
      }
    }
  });
}
var dots = Array.from(dotWrapper.children);

function activeDot(i) {
  dots[i].style.backgroundColor = "white";
  dots[i].style.border = "2px solid red";
}

function nonActiveDot(i) {
  dots[i].style.backgroundColor = "red";
}
activeDot(currentIndex);
