function getComputerChoice() {
            
    
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

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    
}
    


const playerSelection = userInput => {
    userInput = userInput.toLowerCase();
    console.log(userInput);
    
}



console.log(playerSelection('paper'));

const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));
