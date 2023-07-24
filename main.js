let playerScore = 0;
let computerScore = 0;
let result;
let playerSelection;
let computerSelection;
let winner;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.result');
const choices = document.querySelector('.choices');
const outcome = document.querySelector('.outcome');
const score = document.querySelector('.score');
const gameResult = document.querySelector('.gameResult');

choices.textContent = `Player: Computer: `;        
outcome.textContent = `Result: `;
score.textContent = `Player Score: Computer Score: `;

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
        if(e.target.alt) {
            playerSelection = e.target.alt;
        } else if (e.target.firstChild.getAttribute("alt")) {
            playerSelection = e.target.firstChild.getAttribute("alt");
        }

        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        choices.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;
        outcome.textContent = `Result: ${result}`;
        console.log(e.target.alt);
        console.log(e.target.firstChild.getAttribute("alt"));
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
        button.disabled = true;
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