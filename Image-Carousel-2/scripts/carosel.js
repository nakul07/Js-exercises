class Carousel {
  constructor(x, y, t, h, id, id1) {
    this.container = document.getElementById(id);
    this.images = document.getElementById(id1);
    this.img = this.images.children;
    this.imageCount = this.img.length;
    this.imageWidth = x;
    this.imageHeight = y;
    this.currentIndex = 0;
    this.dx = 0;
    this.interval1;
    this.interval2;
    this.dotWrapper = document.createElement("div");
    this.dots;
    this.dotIndicator;
    this.transitionSpeed = 10;
    this.tansitionTime = t;
    this.holdTime = h;
    this.phone = window.matchMedia("(max-width: 479px");
    this.tablet = window.matchMedia("(max-width: 767px)");
    this.laptop = window.matchMedia("(max-width: 991px)");
    this.nextBtnWrapper = document.createElement("div");
    this.prevBtnWrapper = document.createElement("div");
    this.nextBtn = document.createElement("img");
    this.prevBtn = document.createElement("img");

    this.media1();
    this.CarouselContainerLayout();
    this.imageContainerLayout();
    this.imagesLayout();
    this.nextBtnLayout();
    this.prevBtnLayout();
    this.media2();
    this.dotWrapperLayout();
    this.dotCreator();
    this.media3();
    this.activeDot(this.currentIndex);

    this.automaticSlider();
  }

  media1 = () => {
    if (this.laptop.matches) {
      this.imageWidth = screen.width - 30;
      this.imageHeight = 400;
    }
    if (this.tablet.matches) {
      this.imageWidth = screen.width - 20;
      this.imageHeight = 350;
    }
    if (this.phone.matches) {
      this.imageWidth = screen.width - 20;
      this.imageHeight = 200;
    }
  };
  CarouselContainerLayout = () => {
    this.container.style.overflow = "hidden";
    this.container.style.margin = "auto";
    this.container.style.marginTop = "20px";
    this.container.style.marginBottom = "40px";
    this.container.style.width = this.imageWidth + "px";
    this.container.style.position = "relative";
  };

  imageContainerLayout = () => {
    this.images.style.width = this.imageCount * this.imageWidth + "px";
    this.images.style.position = "relative";
    this.images.style.position = this.imageHeight + "px";
    this.images.style.height = this.imageHeight + "px";
  };

  imagesLayout = () => {
    for (let i = 0; i < this.img.length; i++) {
      this.img[i].style.width = this.imageWidth + "px";
      this.img[i].style.height = this.imageHeight + "px";
      this.img[i].style.float = "left";
    }
  };

  nextBtnLayout = () => {
    this.nextBtnWrapper.id = "nextBtnWrapper";
    this.container.append(this.nextBtnWrapper);
    this.nextBtnWrapper.style.float = "right";
    this.nextBtnWrapper.style.position = "absolute";
    this.nextBtnWrapper.style.zIndex = 5;
    this.nextBtnWrapper.style.top = this.imageHeight / 2 + "px";
    this.nextBtnWrapper.style.right = 0 + "px";
    this.nextBtn.id = "nextBtn";
    this.nextBtn.style.marginRight = "5px";
    this.nextBtn.src = `https://img.icons8.com/ios/48/000000/chevron-right.png`;
    this.nextBtn.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
    this.nextBtnWrapper.append(this.nextBtn);
    this.nextBtn.addEventListener("click", this.nextImage);
  };
  prevBtnLayout = () => {
    this.prevBtnWrapper.id = "prevBtnWrapper";
    this.container.append(this.prevBtnWrapper);
    this.prevBtnWrapper.style.float = "left";
    this.prevBtnWrapper.style.position = "absolute";
    this.prevBtnWrapper.style.zIndex = 5;
    this.prevBtnWrapper.style.top = this.imageHeight / 2 + "px";
    this.prevBtn.id = "prevBtn";
    this.prevBtn.style.marginLeft = "5px";
    this.prevBtn.src = `https://img.icons8.com/ios/48/000000/chevron-left.png`;
    this.prevBtn.style.background = "transparent";
    this.prevBtnWrapper.append(this.prevBtn);
    this.prevBtn.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
    this.prevBtn.addEventListener("click", this.prevImage);
  };
  media2 = () => {
    if (this.tablet.matches) {
      this.nextBtnWrapper.style.top = this.imageHeight / 2 - 25 + "px";
      this.prevBtnWrapper.style.top = this.imageHeight / 2 - 25 + "px";
      this.nextBtn.style.width = "40px";
      this.nextBtn.style.height = "40px";
      this.prevBtn.style.width = "40px";
      this.prevBtn.style.height = "40px";
    }
    if (this.phone.matches) {
      this.nextBtnWrapper.style.top = this.imageHeight / 2 - 20 + "px";
      this.prevBtnWrapper.style.top = this.imageHeight / 2 - 20 + "px";
      this.nextBtn.style.width = "30px";
      this.nextBtn.style.height = "30px";
      this.prevBtn.style.width = "30px";
      this.prevBtn.style.height = "30px";
    }
  };

  nextImage = () => {
    {
      clearInterval(this.automaticSlider());

      this.nonActiveDot(this.currentIndex);

      if (this.currentIndex === this.imageCount - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }

      if (this.currentIndex) {
        this.interval1 = setInterval(() => {
          this.dx = this.dx + this.transitionSpeed;
          if (this.dx > this.imageWidth * this.currentIndex) {
            this.dx = this.imageWidth * this.currentIndex;
            clearInterval(this.interval1);
          }
          this.images.style.left = -this.dx + "px";
        }, this.tansitionTime);
      } else {
        this.interval1 = setInterval(() => {
          this.dx = this.dx - this.transitionSpeed;
          if (this.dx < 0) {
            this.dx = 0;
          }
          this.images.style.left = -this.dx + "px";
          if (this.dx == 0) {
            clearInterval(this.interval1);
          }
        }, 1);
      }
      this.activeDot(this.currentIndex);
    }
  };

  prevImage = () => {
    this.nonActiveDot(this.currentIndex);
    if (this.currentIndex) {
      this.interval2 = setInterval(() => {
        this.dx = this.dx - this.transitionSpeed;
        if (this.dx < this.imageWidth * this.currentIndex) {
          this.dx = this.imageWidth * this.currentIndex;
          clearInterval(this.interval2);
        }
        this.images.style.left = -this.dx + "px";
      }, this.tansitionTime);
    } else {
      this.images.style.left = "0px";
      this.interval2 = setInterval(() => {
        this.dx = this.dx + this.transitionSpeed;
        if (this.dx > this.imageWidth * this.currentIndex) {
          this.dx = this.imageWidth * this.currentIndex;
          clearInterval(this.interval2);
        }
        this.images.style.left = -this.dx + "px";
      }, 1);
    }
    if (this.currentIndex === 0) {
      this.currentIndex = this.imageCount - 1;
    } else {
      this.currentIndex--;
    }
    this.activeDot(this.currentIndex);
  };

  dotWrapperLayout = () => {
    this.dotWrapper.id = "dotWrapper";
    this.dotWrapper.style.zIndex = "5";
    this.dotWrapper.style.left =
      this.imageWidth / 2 - (this.imageCount * 20) / 2 + "px";
    this.dotWrapper.style.position = "absolute";
    this.dotWrapper.style.top = this.imageHeight - 20 + "px";
    this.container.append(this.dotWrapper);
  };
  media3 = () => {
    if (this.phone.matches) {
      this.dotWrapper.style.left =
        this.imageWidth / 2 - (this.imageCount * 15) / 2 + "px";
    }
  };
  dotCreator = () => {
    for (let i = 0; i < this.imageCount; i++) {
      this.dotIndicator = document.createElement("div");
      this.dotIndicator.id = "dotIndicator";
      this.dotIndicator.style.display = "inline-block";
      this.dotIndicator.style.borderRadius = "50%";
      this.dotIndicator.style.height = "15px";
      this.dotIndicator.style.width = "15px";
      this.dotIndicator.style.marginLeft = "5px";
      this.dotIndicator.style.cursor = "pointer";
      this.dotIndicator.style.backgroundColor = "red";
      this.dotWrapper.append(this.dotIndicator);
      if (this.phone.matches) {
        this.dotIndicator.style.height = "10px";
        this.dotIndicator.style.width = "10px";
      }
      this.dotIndicator.addEventListener("click", () => {
        let currentDot = i;
        let toBeChanged = this.currentIndex - currentDot;
        if (toBeChanged > 0) {
          for (let i = toBeChanged; i != 0; i--) {
            this.prevImage();
          }
        } else if (toBeChanged < 0) {
          for (let i = toBeChanged; i != 0; i++) {
            this.nextImage();
          }
        }
      });
    }
    this.dots = Array.from(this.dotWrapper.children);
  };

  activeDot(i) {
    this.dots[i].style.backgroundColor = "white";
    this.dots[i].style.border = "2px solid red";
  }

  nonActiveDot(i) {
    this.dots[i].style.backgroundColor = "red";
  }

  automaticSlider = () => {
    setInterval(() => {
      this.nextImage();
    }, this.holdTime);
  };
}
