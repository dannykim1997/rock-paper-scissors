function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    //Math.random gives float between 0 and 1, times 3 to make it max 2.99, floor rounds down to nearest int and plus 1 makes it so 3 is possible
    let computerHand;
    //result of randomComputerChoice will correspond to rock, paper, or scissors which is assigned to computerHand
    if (randomComputerChoice == 1) {
        computerHand = "Rock";
    } else if (randomComputerChoice == 2) {
        computerHand = "Paper";
    } else if (randomComputerChoice == 3) {
        computerHand = "Scissors";
    }
    return computerHand
}

function playRound(playerSelection, computerSelection) {
    //If else statement provides every outcome depending on user's choice between rock, paper, or scissors
    //playRound functions gets invoked within the game function
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
    let winner;
    let playerScore = 0;
    let computerScore = 0;
    
    //game function invokes playRound function five times with for loop
    //prompt is needed inside loop so it asks user five times, if outside loop, user stuck on one choice
    //getComputerChoice() needed inside loop to run every time
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
    //all possible win results increase playerScore
    //all possible lose results, increase computerScore
    //did not need to include tie results, as neither score increases or decreases
        if (result == "You win, rock beats scissors" || result == "You win, paper beats rock" || result == "You win, scissors beats paper" ) {
        playerScore = ++playerScore;
        } else if (result == "You lose, rock loses to paper" || result == "You lose, paper loses to scissors" || result == "You lose, scissors loses to rock") {
        computerScore = ++computerScore;
        }
    console.log(result);
    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);
    console.log(`loop iteration: ${i}`);
    }

    //Declare win, loss, or tie based on final playerScore vs computerScore
    if (playerScore > computerScore) {
        winner = "You are the winner!";
    } else if (playerScore < computerScore) {
        winner = "You are the loser!";
    } else if (playerScore == computerScore) {
        winner = "It's a tie!";
    }
    console.log(winner);
}

//game() is invoked once which runs for loop, within for loop, playRound is invoked 5 times
game();