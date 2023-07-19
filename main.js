let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let currentPlayerScore;
let currentComputerScore;


function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let computerHand;
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
        return "You win, paper beats rock"
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

function game() {
    let result = playRound(playerSelection, computerSelection);
    if (result == "You win, rock beats scissors" || result == "You win, paper beats rock" || result == "You win, scissors beats paper" ) {
        playerScore = ++playerScore;
    } else if (result == "You lose, rock loses to paper" || result == "You lose, paper loses to scissors" || result == "You lose, scissors loses to rock") {
        computerScore = ++computerScore;
    }
    console.log(result);
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);

    playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if (result == "You win, rock beats scissors" || result == "You win, paper beats rock" || result == "You win, scissors beats paper" ) {
        playerScore = ++playerScore;
    } else if (result == "You lose, rock loses to paper" || result == "You lose, paper loses to scissors" || result == "You lose, scissors loses to rock") {
        computerScore = ++computerScore;
    }
    console.log(result);
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);

    playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if (result == "You win, rock beats scissors" || result == "You win, paper beats rock" || result == "You win, scissors beats paper" ) {
        playerScore = ++playerScore;
    } else if (result == "You lose, rock loses to paper" || result == "You lose, paper loses to scissors" || result == "You lose, scissors loses to rock") {
        computerScore = ++computerScore;
    }
    console.log(result);
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);

    playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if (result == "You win, rock beats scissors" || result == "You win, paper beats rock" || result == "You win, scissors beats paper" ) {
        playerScore = ++playerScore;
    } else if (result == "You lose, rock loses to paper" || result == "You lose, paper loses to scissors" || result == "You lose, scissors loses to rock") {
        computerScore = ++computerScore;
    }
    console.log(result);
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);

    playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if (result == "You win, rock beats scissors" || result == "You win, paper beats rock" || result == "You win, scissors beats paper" ) {
        playerScore = ++playerScore;
    } else if (result == "You lose, rock loses to paper" || result == "You lose, paper loses to scissors" || result == "You lose, scissors loses to rock") {
        computerScore = ++computerScore;
    }
    console.log(result);
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);
}

game();