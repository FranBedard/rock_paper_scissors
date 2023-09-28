const getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }

}

//console.log(getComputerChoice());

const playerChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('Error')
    }
}

let playerScore = 0;
let computerScore = 0;

const winnerRules = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') { 
            computerScore += 1;
            return "You lose! Paper beats rock";
        } else {
            playerScore += 1;
            return "Congrats, you won!";
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            return "You lose! Scissors beat paper"; 
        } else {
            playerScore += 1;
            return "Congrats, you won!";
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return "You lose! Rock beats scissors";
        } else {
            playerScore += 1;
            return "Congrats, you won!";
        }

    }
}

const playRound = () => {
    const playerSelection = playerChoice(prompt());
    const computerSelection = getComputerChoice();     
    console.log(`You threw: ${playerSelection}`);
    console.log(`Computer threw: ${computerSelection}`);

    console.log(winnerRules(playerSelection, computerSelection));
 }

 function game() {
    playRound();
 }

 function winGame() {
    if (playerScore >= 2) {
        return "You win!"; 
        
    } else if (computerScore >= 2) {
        return "Computer wins!" 
    
    } else {
        return "Looks like it's a tie!"
    }
    
} 


