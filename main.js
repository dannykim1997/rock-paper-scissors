const computerChoices = ["Rock", "Paper", "Scissors"]
let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
let computerHand;

function getComputerChoice() {
    if(randomComputerChoice == 1) {
        computerHand = "Rock";
    } else if (randomComputerChoice == 2) {
        computerHand = "Paper";
    } else if (randomComputerChoice = "Scissors") {
        computerHand = "Scissors";
    }
    return computerHand
}

getComputerChoice();
