// Declare starting score
let playerScore = 0;
let computerScore = 0;
let round = 0;

let resultText = document.getElementById('result');
let scoreText = document.getElementById('Score');
const buttons = document.querySelectorAll('button');
let computerChoiceText = document.querySelector('h2#computer-choice');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Reset
        if (round == 6) {
            resultText.innerText = '';
            round = 0;
        }

        round++;
        let computerChoice = getComputerChoice();

        playRound(e.target.id, computerChoice);

        computerChoiceText.innerText = `${computerChoice}`;
        scoreText.innerText = `Score: You(${playerScore}) : Computer(${computerScore})`;

        if (round == 5) {
            if (playerScore > computerScore) {
                resultText.innerText = 'The Winner Is : YOU';
                resultText.style.color = 'green';
            } else if (playerScore < computerScore) {
                resultText.innerText = 'The Winner Is : COMPUTER';
                resultText.style.color = 'red';
            } else {
                resultText.innerText = 'Match is DRAW';
                resultText.style.color = 'blue';
            }
            round = 6;
            playerScore = 0;
            computerScore = 0;
        }
    })
})

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