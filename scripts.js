const moves = ['rock', 'paper', 'scissors']

function getRandomInt(max=3) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    return moves[getRandomInt()]
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie'
        }
        else if (computerSelection === 'paper') {
            return 'Loss. Paper beats Rock.'
        }

        else if (computerSelection === 'scissors') {
            return 'Win. Rock beats Scissors.'
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'Win. Paper beats Rock.'
        }
        else if (computerSelection === 'paper') {
            return 'Tie.'
        }

        else if (computerSelection === 'scissors') {
            return 'Loss. Scissors beats Paper.'
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Loss. Rock beats Scissors.'
        }
        else if (computerSelection === 'paper') {
            return 'Win. Scissors beats Paper.'
        }

        else if (computerSelection === 'scissors') {
            return 'Tie.'
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        cpuMove = computerPlay()
        userMove = prompt('Rock, Paper, or Scissors?')
        console.log(play(userMove, cpuMove))
    }
}

game()