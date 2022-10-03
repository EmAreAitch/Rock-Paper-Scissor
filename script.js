console.log("Rock Paper Scissor");
let randomNumber = 0;
let response = '';

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
    
    
    return response;

}


// Function that takes playesselection and computerselection and prints round results
// Also adds 1 to their respective score everytime they win 
function playRound(playerSelection,computerSelection=getComputerChoice()) {
        
        if (playerSelection == 'paper') {
            console.log(`Player Response is: ${playerSelection}`)
            console.log(`Computer Response is: ${response}`);
            if (computerSelection == 'Rock') {
                console.log ("You Win! Paper Beats Rock");
                playerScore++;
            }
            else if (computerSelection == 'Scissor') {
                console.log ("You Lose! Scissor Beats Paper");
                computerScore++;
            }
            else {
                console.log('Tie');
            }
        }
        else if (playerSelection == 'scissor') {
            console.log(`Player Response is: ${playerSelection}`)
            console.log(`Computer Response is: ${response}`);
            if (computerSelection == 'Rock') {
                console.log ("You Lose! Rock Beats Scissor");
                computerScore++;
            }
            else if (computerSelection == 'Paper') {
                console.log ("You Win! Scissor Beats Paper");
                playerScore++;
            }
            else {
                console.log('Tie');
            }
        }
        else if (playerSelection == 'rock') {
            console.log(`Player Response is: ${playerSelection}`)
            console.log(`Computer Response is: ${response}`);
            if (computerSelection == 'Scissor') {
                console.log ("You Win! Rock Beats Scissor");
                playerScore++;
            }
            else if (computerSelection == 'Paper') {
                console.log ("You Lose! Paper Beats Rock");
                computerScore++;
            }
            else {
                console.log('Tie');
            }
        }
        
        else {
            alert("Enter Valid Response (Rock, Paper or Scissor).");
        }
    }

let computerScore = 0;
let playerScore = 0;

//Function to keep running the game in loop until anyone's(player or computer) score reaches 5
//Also ends game if game is cancelled by user
function game(){
    while (playerScore !== 5 && computerScore !== 5) { 
    let userInput = prompt('Your Choice?');
    if (userInput === null || userInput === undefined) {
        alert("Player Cancelled the game :(");
        console.log("Player Cancelled the game :(");
        break;
    }
    let playerSelection = userInput.toLowerCase();
    playRound(playerSelection);  
}
}

//Tells final score and winner name
if (playerScore == 5 || computerScore == 5 ) {
    console.log('Computer\'s Score: ', computerScore);
    console.log('Player\'s Score: ', playerScore);  
    if (computerScore < playerScore) {
        console.log ("Player Wins!!");
    }
    else if (computerScore > playerScore) {
        console.log ("Computer Wins!!");
    }
    else {
        console.log ("Tie");
    }
}

game();