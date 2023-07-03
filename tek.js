getComputerChoice = () => {
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


let playerCounter = 0;
let computerCounter = 0;

playRound = (playerSelection, computerSelection) => {
        playerSelection = prompt('Rock, Paper or Scissors?');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerCounter += 1;
            return 'You lose! Paper beats Rock';
        } else {
            playerCounter += 1;
            return 'You win! Rock beats Scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerCounter += 1;
            return 'You lose! Scissors beats Paper';
        } else {
            playerCounter += 1;
            return 'You win! Paper beats Rock';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerCounter += 1;
            return 'You lose! Rock beats Scissors';
        } else {
            playerCounter += 1;
            return 'You win! Scissors beats Paper';
        }
    }
}

game = (playerSelection, computerSelection) => {
    
    while (playerCounter < 5 && computerCounter < 5) {
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player score: ' + playerCounter + ', Computer score: ' + computerCounter);
    }

    if (playerCounter === 5) {
        console.log('You win!');
    } else if (computerCounter === 5) {
        console.log('You lose!');
    }
}
console.log('Hello, world!');
game();



