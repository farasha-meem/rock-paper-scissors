function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let optionNum = Math.floor(Math.random() * (2 + 1));
    let computerHand = options[optionNum];
    return computerHand;
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let computerString = `Computer's hand was ${computerSelection}.`;
    if (playerSelection === computerSelection) {
        return computerString + "It's a tie!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return computerString + "You win!";
        }
        else {
            return computerString + "You lose!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return computerString + "You lose!";
        }
        else {
            return computerString + "You win!";
        }
    }
    else {
        if (computerSelection === "rock") {
            return computerString + "You lose!";
        }
        else {
            return computerString + "You win!";
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = window.prompt(`Play your hand for round ${i + 1}`);
        alert(playRound(playerSelection));
    }
}