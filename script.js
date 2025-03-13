window.onload = function () {
    let refreshCount = localStorage.getItem("refreshCount") || 0;
    refreshCount = parseInt(refreshCount);

    const title = document.querySelector("h1");
    const dice1 = document.querySelector(".img1");
    const dice2 = document.querySelector(".img2");
    const container = document.querySelector(".container");

  
    if (refreshCount >= 6) {
        title.innerText = "Game Over! 🎉";
        dice1.setAttribute("src", "images/dice6.png");
        dice2.setAttribute("src", "images/dice6.png");

        
        let playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Play Again 🔄";
        playAgainBtn.style.cssText = `
            padding: 12px 24px;
            font-size: 1.5rem;
            margin-top: 20px;
            border-radius: 10px;
            border: none;
            background-color: brown;
            color: white;
            cursor: pointer;
            transition: 0.3s;
        `;
        playAgainBtn.onmouseover = () => playAgainBtn.style.backgroundColor = "#a52a2a";
        playAgainBtn.onmouseout = () => playAgainBtn.style.backgroundColor = "brown";

        playAgainBtn.onclick = function () {
            localStorage.setItem("refreshCount", 0); 
            location.reload(); 
        };

        container.appendChild(playAgainBtn); 
    } else {
        
        localStorage.setItem("refreshCount", refreshCount + 1);
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        if (dice1 && dice2) {
            dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
            dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

            // Decide winner
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
