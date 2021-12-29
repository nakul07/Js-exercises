
function gameOver() {
    //highscore
    if (score > highscore) {
      localStorage.setItem("highscore1", score);
    }

    clearInterval(animationArea.interval);
    animationArea.container.position = "relative";
    
    //popup div
    const popUp = document.createElement("div");
    popUp.id = "popUp";
    popUp.style.width = "30%";
    popUp.style.height = "300px";
    popUp.style.position = "absolute";
    popUp.style.top = "100px";
    popUp.style.marginLeft = "35%";
    popUp.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
    popUp.style.borderRadius = "15px";
    animationArea.container.append(popUp);
  
    //reload button
    const reLoad = document.createElement("div");
    reLoad.style.position = "absolute";
    reLoad.style.height = "60px";
    reLoad.style.width = "50%";
    reLoad.style.backgroundImage = "url('images/replay.png')";
    reLoad.style.backgroundPosition = "center";
    reLoad.style.backgroundSize = "cover";
    reLoad.style.bottom = "0px";
    reLoad.style.left = "26%";
    reLoad.style.marginBottom = "30px";
    reLoad.style.borderRadius = "5px";
    reLoad.style.cursor = "pointer";
    popUp.append(reLoad);
  
    //gameover display
    const h1 = document.createElement("div");
    h1.style.backgroundImage = "url('images/gameover.png')";
    h1.style.height = "200px";
    h1.style.width = "100px;";
    h1.style.backgroundPosition = "center";
    h1.style.backgroundRepeat = "no-repeat";
    h1.style.top = "50px";
    popUp.append(h1);
  
    //reload onclick action
    reLoad.onclick = function () {
      swoosh.play();
      popUp.style.display = "none";  //hide popup
      score = 0;
      scoreCounter =0;
      //reset obstacles
      for (let i = 0; i < myObstacle.length + 1; i++) {
        destruct(i);
      }
      startAnimation();
    };
  }
  