let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawgame = () => {
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "grey";
};

const showwinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;

        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {

    const compChoice = genCompChoice();

    console.log("User Choice:", userChoice);
    console.log("Computer Choice:", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {

        let userwin;

        if (userChoice === "rock") {
            // Rock beats Scissors
            userwin = compChoice === "scissors";
        }

        else if (userChoice === "paper") {
            // Paper beats Rock
            userwin = compChoice === "rock";
        }

        else if (userChoice === "scissors") {
            // Scissors beats Paper
            userwin = compChoice === "paper";
        }

        showwinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

const resetBtn = document.querySelector("#reset-btn");

const resetGame = () => {
    userScore = 0;
    compScore = 0;

    userScorepara.innerText = userScore;
    compScorepara.innerText = compScore;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
};

resetBtn.addEventListener("click", resetGame);
