function getComputerChoice() {
            
    const choices = ["rock", "paper", "scissors"]
    let random1 = choices[Math.floor(Math.random() * choices.length)]
    return random1;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    
}
    


const playerSelection = userInput => {
    userInput = userInput.toLowerCase();
    console.log(userInput);
    
}



console.log(playerSelection('paper'));
//const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));
