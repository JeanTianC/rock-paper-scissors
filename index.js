const rpsArray = ["rock", "paper", "scissors"];

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      "Please input your selection?Rock,Paper,Scissors"
    ).toLowerCase();
    const winner = playRound(playerSelection, computerSelection);

    console.log(`computer selection is ${computerSelection}`);
    console.log(winner);

    if (winner === "You win!") {
      playerScore++;
    } else if (winner === "You lose!") {
      computerScore++;
    }
    console.log(
      `You score is ${playerScore},computer score is ${computerScore}`
    );
  }

  console.log(`You score is ${playerScore},computer score is ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (playerScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Nobody wins!");
  }
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return rpsArray[randomNum];
}

function playRound(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection === computerSelection) {
    return "Nobody Wins";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore = 1;
      // return "You lose ! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      playerScore = 1;
      // return "You win ! Rock beats Scissors";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore = 1;
      // return "You win ! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      computerScore = 1;
      // return "You lose ! Scissors beats Paper";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore = 1;
      // return "You lose !  Scissors beats Rock";
    } else if (computerSelection === "paper") {
      playerScore = 1;
      // return "You win ! Scissors beats Paper";
    }
  }

  if (playerScore === 1) {
    return "You win!";
  } else if (computerScore === 1) {
    return "You lose!";
  }
}

// console.log(`computer selection is ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerScore, playerScore);
game();
