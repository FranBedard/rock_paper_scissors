function getComputerChoice() {
            
    const choices = ["rock", "paper", "scissors"]
    let random1 = choices[Math.floor(Math.random() * choices.length)]
    return random1;
}

console.log(getComputerChoice());