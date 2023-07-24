let playerScore = 0;
let computerScore = 0;
let result;
let playerSelection;
let computerSelection;
let winner;
const buttons = document.querySelectorAll('.button');
const results = document.querySelector('.result');
const choices = document.createElement('div');
const outcome = document.createElement('div');
const score = document.createElement('div');
const gameResult = document.createElement('div')
results.appendChild(choices);
results.appendChild(outcome);
results.appendChild(score);
results.appendChild(gameResult);

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let computerHand;
    if (randomComputerChoice == 1) {
        computerHand = "Rock";
    } else if (randomComputerChoice == 2) {
        computerHand = "Paper";
    } else if (randomComputerChoice == 3) {
        computerHand = "Scissors";
    }
    return computerHand
}

function getPlayerChoice() {
    buttons.forEach(button => button.addEventListener('click', (e) => {
        playerSelection = e.target.innerHTML; 
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        choices.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;
        outcome.textContent = `${result}`;
    }));
}
getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        result = "Tie";  
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        result = "Lose";
        computerScore = ++computerScore;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        result = "Win";
        playerScore = ++playerScore;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        result = "Win"
        playerScore = ++playerScore;
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        result = "Tie";   
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        result = "Lose";   
        computerScore = ++computerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        result = "Lose";   
        computerScore = ++computerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        result = "Win";   
        playerScore = ++playerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        result = "Tie";   
    }

    score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;


    if (playerScore == 5 || computerScore == 5) {
        gameOver();
    }
    return result;
}

function gameOver() {
    if (playerScore > computerScore) {
        winner = "You are the winner!";
    } else if (playerScore < computerScore) {
        winner = "You are the loser!";
    } else if (playerScore == computerScore) {
        winner = "It's a tie!";
    }

    gameResult.textContent = `${winner}`;
    buttons.forEach((button) => {
        button.style.display = 'none';
    })
    playAgain();
}

function playAgain() {
    const resetButton = document.createElement('button');
    resetButton.innerHTML = "Play Again!";
    results.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        window.location.reload();
    })
}