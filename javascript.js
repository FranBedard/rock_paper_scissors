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

const playerSelection = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
{
    return userInput
} else {
    console.log("Error!")
}    
    
}



console.log(playerSelection('rock'));

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Oops, looks like it's a tie!";
    
    } 
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "Sorry, computer won!";
        } else {
            return "Congrats you won!";
        }
    }
} 
    


//const playerSelection = userInput => {
   // userInput = userInput.toLowerCase();
    //console.log(userInput);
    
//}



//console.log(playerSelection('rock'));

//const computerSelection = getComputerChoice();

playRound();
