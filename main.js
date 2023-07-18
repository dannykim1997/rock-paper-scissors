const computerChoices = ["Rock", "Paper", "Scissors"]
let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
let computerHand;

function getComputerChoice() {
    if (randomComputerChoice == 1) {
        computerHand = "Rock";
    } else if (randomComputerChoice == 2) {
        computerHand = "Paper";
    } else if (randomComputerChoice = "Scissors") {
        computerHand = "Scissors";
    }
    return computerHand
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "You tied, rock ties rock";   
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose, rock loses to paper";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You win, rock beats scissors";  
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You lose, paper loses to rock"
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "You tie, paper ties paper";   
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You lose, paper loses to scissors";   
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You lose, scissors loses to rock";   
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win, scissors beats paper";   
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "You tie, scissors ties scissors";   
    }
}

let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));