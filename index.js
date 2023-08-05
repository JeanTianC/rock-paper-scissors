const rpsArray = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll("button");
let playerScoreTotal = 0;
let computerScoreTotal = 0;
let playerScore;
let computerScore;
let roundNum = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelection = e.target.closest("button").id;
    const computerSelection = getComputerChoice();
    const roundText = playRound(playerSelection, computerSelection);
    roundNum++;

    document.querySelector(
      ".round"
    ).textContent = `Round${roundNum}:${roundText}`;

    winner();

    console.log(computerScoreTotal, playerScoreTotal);

    if (computerScoreTotal === 5 || playerScoreTotal === 5) {
      endGame();
      setTimeout(function () {
        if (computerScoreTotal === 5) {
          document.getElementById(
            "winner-message"
          ).innerHTML = `<h1 id="winner">You lose😿😿😿!</h1>`;
        } else if (playerScoreTotal === 5) {
          document.getElementById(
            "winner-message"
          ).innerHTML = `<h1 id="winner">  You win! 🎉🎉🎉</h1>`;
        }
        document.getElementById("game-box").classList.add("hidden");
        computerScoreTotal = 0;
        playerScoreTotal = 0;
      }, 1000);
    }

    document.getElementById("computerscore").textContent = computerScoreTotal;
    document.getElementById("playerscore").textContent = playerScoreTotal;
  });
});

function endGame() {
  btns.forEach((btn) => {
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  });
}

function winner() {
  if (playerScore === 1) {
    playerScoreTotal++;
  } else if (computerScore === 1) {
    computerScoreTotal++;
  }
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return rpsArray[randomNum];
}

function playRound(playerSelection, computerSelection) {
  computerScore = 0;
  playerScore = 0;

  if (playerSelection === computerSelection) {
    return "Nobody Wins";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore = 1;
    } else if (computerSelection === "scissors") {
      playerScore = 1;
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore = 1;
    } else if (computerSelection === "scissors") {
      computerScore = 1;
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore = 1;
    } else if (computerSelection === "paper") {
      playerScore = 1;
    }
  }

  if (playerScore === 1) {
    return "You Score +1";
  } else if (computerScore === 1) {
    return "Computer Score +1";
  }
}
