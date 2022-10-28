const buttons = document.querySelectorAll(".mainGame button");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const result_  = document.querySelector(".result");
const _playerScore = document.querySelector(".playerScore");
const _computerScore = document.querySelector(".computerScore");
const mainGame = document.querySelector(".mainGame");
const startGame = document.querySelector(".startGame");
const gameResult = mainGame.appendChild(document.createElement("p"));
const restartGame = document.querySelector(".restartGame")
let randomNumber = 0;
let response = '';
let result = '';
let computerScore = 0;
let playerScore = 0;

restartGame.textContent = "Restart Game";

function _restartGame(){
    playerScore = 0;
    computerScore = 0;
    playerChoice.innerHTML = "Player Response is: ";
    computerChoice.textContent = "Computer response is: ";
    result_.innerHTML = "Result: ";
    _playerScore.innerHTML = "Player Score is: " + playerScore;
    _computerScore.innerHTML = "Computer Score is: " + computerScore;
    gameResult.textContent = "";
    restartGame.style.display = "none"
}

function beginGame() {
    mainGame.style.display = "block";
    startGame.style.display = "none";
}

buttons.forEach(button => { 
    button.addEventListener('click', game)
});

function game() {
    if (playerScore !== 5 && computerScore !== 5) { 
        playRound(this.textContent);
        playerChoice.innerHTML = "Player Response is: " + this.textContent;
        result_.innerHTML = "Result: " + result;
        _playerScore.innerHTML = "Player Score is: " + playerScore;
        _computerScore.innerHTML = "Computer Score is: " + computerScore;

        if (playerScore == 5) {      
            gameResult.textContent = "Player Won!!! Congratulations!!"            
            restartGame.style.display = "block"
        
        }
        
        else if (computerScore == 5) {
            gameResult.textContent = "Computer Won :( Try Again"
            restartGame.style.display = "block"

        }
    }
}


// Function to get a response based on random number generated in the range of 0-2 
function getComputerChoice() {
    randomNumber = parseInt(Math.random() * 3);
        if (randomNumber == 0) {
            response = 'Rock';
        }
        else if (randomNumber == 1) {
            response = 'Paper';
        }
        else if (randomNumber == 2) {
            response = 'Scissor';
        }
    computerChoice.textContent = "Computer response is: " + response;
    return response;

}


// Function that takes playesselection and computerselection and prints round results
// Also adds 1 to their respective score everytime they win 
function playRound(playerSelection,computerSelection=getComputerChoice()) {
        
        if (playerSelection == 'Paper') {
            if (computerSelection == 'Rock') {
                result = ("You Win! Paper Beats Rock");
                playerScore++;
            }
            else if (computerSelection == 'Scissor') {
                result = ("You Lose! Scissor Beats Paper");
                computerScore++;
            }
            else {
                result = ('Tie');
            }
        }
        else if (playerSelection == 'Scissor') {
            if (computerSelection == 'Rock') {
                result = ("You Lose! Rock Beats Scissor");
                computerScore++;
            }
            else if (computerSelection == 'Paper') {
                result = ("You Win! Scissor Beats Paper");
                playerScore++;
            }
            else {
                result =('Tie');
            }
        }
        else if (playerSelection == 'Rock') {
            if (computerSelection == 'Scissor') {
                result = ("You Win! Rock Beats Scissor");
                playerScore++;
            }
            else if (computerSelection == 'Paper') {
                result = ("You Lose! Paper Beats Rock");
                computerScore++;
            }
            else {
                result = ('Tie');
            }
        }
        
    }
