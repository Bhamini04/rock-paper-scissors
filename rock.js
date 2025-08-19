let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const resetBtn = document.querySelector("#resetBtn");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
   message.innerText = "It's a draw! Play again.";
   message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    const userDiv = document.getElementById(userChoice);
    const compDiv = document.getElementById(compChoice);

    if (userWin) {
        userScore++;
        userScorePara.innerText = `Player: ${userScore}`;
        userScorePara.classList.add("score-bounce");

        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";

        userDiv.classList.add("glow-win");
        compDiv.classList.add("glow-lose");
    } else {
        computerScore++;
        compScorePara.innerText = `Computer: ${computerScore}`;
        compScorePara.classList.add("score-bounce");

        message.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";

        compDiv.classList.add("glow-win");
        userDiv.classList.add("glow-lose");
    }

    // Remove effects after short delay
    setTimeout(() => {
        userDiv.classList.remove("glow-win", "glow-lose");
        compDiv.classList.remove("glow-win", "glow-lose");
        userScorePara.classList.remove("score-bounce");
        compScorePara.classList.remove("score-bounce");
    }, 700);
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Reset Game Button


resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = `Player: ${userScore}`;
    compScorePara.innerText = `Computer: ${computerScore}`;
    message.innerText = "Game reset! Play your move.";
    message.style.backgroundColor = "#081b31";
});
choices.forEach((choice) => {
    choice.classList.remove("glow-win", "glow-lose");
});













