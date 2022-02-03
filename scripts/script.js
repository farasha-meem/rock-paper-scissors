let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let optionNum = Math.floor(Math.random() * (2 + 1));
    let computerHand = options[optionNum];
    return computerHand;
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    function returnAction(result) {
        if (result == "win") {
            playerScore += 1;
        }
        else if (result == "lose") {
            compScore += 1;
        }
        return `Computer's hand was ${computerSelection}. You ${result}! Player Score: ${playerScore}. Computer Score: ${compScore}`;
    }
    if (playerSelection === computerSelection) {
        returnAction("tie");
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return returnAction("win");
        }
        else {
            return returnAction("lose");
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return returnAction("lose");
        }
        else {
            return returnAction("win");
        }
    }
    else {
        if (computerSelection === "rock") {
            return returnAction("lose");
        }
        else {
            return returnAction("win");
        }
    }
}

function game(playerSelection) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerText = playRound(playerSelection);
    function announceWinner(text) {
        alert(text);
        playerScore = 0;
        compScore = 0
    }
    if (playerScore == 5) {
        announceWinner("WINNER!!!!! :D :D :D");
    }
    if (compScore == 5) {
        announceWinner("LOSER :( :( :(");
    }
}