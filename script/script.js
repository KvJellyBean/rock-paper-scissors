// Declare starting score
let playerScore = 0;
let computerScore = 0;

// Getting the computer's random answer
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 100) + 1;

    return choice <= 33 ? 'rock' : (choice <= 56) ? 'paper' : 'scissors';
}

// Condition of winning/losing in playing
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('Tie');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('You Lose! Paper beats Rock');
            computerScore++;
        } else {
            console.log('You Win! Rock beats Scissors');
            playerScore++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('You Win! Paper beats Rock');
            playerScore++;
        } else {
            console.log('You Lose! Scissors beats Paper');
            computerScore++;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You Lose! Rock beats Scissors');
            computerScore++;
        } else {
            console.log('You Win! Scissors beats Paper');
            playerScore++;
        }
    } else {
        console.log('Only Input Rock/Paper/Scissors');
    }
}

// function to start the game
function game() {
    // reset score
    playerScore = 0;
    computerScore = 0;

    // loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerChoice = prompt('Rock / Paper / Scissors');

        console.log(playRound(playerChoice.toLowerCase(), computerSelection));
    }

    // final output (deciding the winner)
    console.log(`Score: You(${playerScore}) : Computer(${computerScore})`);
    if (playerScore > computerScore) {
        console.log('THE WINNER IS : YOU');
    } else {
        console.log('THE WINNER IS : COMPUTER');
    }
}

