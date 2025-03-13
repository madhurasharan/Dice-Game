window.onload = function () {
    let refreshCount = localStorage.getItem("refreshCount") || 0;
    refreshCount = parseInt(refreshCount);
  
    var title = document.querySelector("h1");
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");
  
    
    if (refreshCount >= 6) {
      title.innerText = "Game Over! 🎉";
      dice1.setAttribute("src", "images/dice6.png");
      dice2.setAttribute("src", "images/dice6.png");
  
      let playAgainBtn = document.createElement("button");
      playAgainBtn.innerText = "Play Again 🔄";
      playAgainBtn.style.padding = "10px 20px";
      playAgainBtn.style.fontSize = "1.5rem";
      playAgainBtn.style.marginTop = "20px";
      playAgainBtn.style.borderRadius = "10px";
      playAgainBtn.style.border = "none";
      playAgainBtn.style.backgroundColor = "brown";
      playAgainBtn.style.color = "white";
      playAgainBtn.style.cursor = "pointer";
  
      playAgainBtn.onclick = function () {
        localStorage.setItem("refreshCount", 0); 
        location.reload(); 
      };
  
      document.body.appendChild(playAgainBtn);
    } else {
      
      localStorage.setItem("refreshCount", refreshCount + 1);
  
      
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      if (dice1 && dice2) {
        dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
        dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
  
        if (randomNumber1 > randomNumber2) {
          title.innerText = "🚩 Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
          title.innerText = "Player 2 Wins! 🚩";
        } else {
          title.innerText = "It's a Draw! 🎲";
        }
      }
    }
  };
  