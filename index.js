const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const options = document.querySelectorAll('.option');
const container = document.querySelector('.container');
const showResults = document.getElementById('show-results');
const message = document.getElementById('message');
const playAgain = document.getElementById('play-again');
const controlPanel = document.getElementById('control-panel');
const countdownText = document.getElementById('countdown-text');
const roundWinnerText = document.getElementById('round-winner-text');

let playerOption = '';
let computerOption = '';
let playerCount = 0;
let computerCount = 0;
let roundWinner = '';

//sets computer option
const setComputerOption = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  computerOption = options[randomIndex];
};

//sets the player option
const setPlayerOption = (option) => {
  playerOption = option;
  setComputerOption();
};

//sets player hand image
const setPlayerHand = (typeOfHand) => {
  playerHand.src = `https://img.icons8.com/color/96/000000/${typeOfHand}.png`;
};

const setComputerHand = () => {
  if (computerOption === 'rock') {
    computerHand.src = `https://img.icons8.com/color/96/000000/hand-rock.png`;
  }
  if (computerOption === 'paper') {
    computerHand.src = `https://img.icons8.com/color/96/000000/hand.png`;
  }
  if (computerOption === 'scissors') {
    computerHand.src = `https://img.icons8.com/color/96/000000/hand-peace.png`;
  }
};

// sets scores
const setScores = () => {
  playerScore.textContent = playerCount;
  computerScore.textContent = computerCount;
};

//Decides who is winner
const decidingWinner = () => {
  if (playerOption === computerOption) {
    roundWinner = "It's a tie";
    return;
  } else {
    if (playerOption === 'rock') {
      if (computerOption === 'paper') {
        roundWinner = 'Computer wins this round';
        computerCount++;
      } else {
        roundWinner = 'Player wins this round';
        playerCount++;
      }
    }
    if (playerOption === 'paper') {
      if (computerOption === 'scissors') {
        roundWinner = 'Computer wins this round';
        computerCount++;
      } else {
        roundWinner = 'Player wins this round';

        playerCount++;
      }
    }
    if (playerOption === 'scissors') {
      if (computerOption === 'rock') {
        roundWinner = 'Computer wins this round';
        computerCount++;
      } else {
        roundWinner = 'Player wins this round';
        playerCount++;
      }
    }
    setScores();
  }
};

const showMessage = () => {
  if (playerCount >= 5) {
    controlPanel.style.display = 'none';
    showResults.style.cssText = 'display:flex;flex-direction:column;';
    message.textContent = 'Player Won 👑';
  }
  if (computerCount >= 5) {
    controlPanel.style.display = 'none';
    showResults.style.cssText = 'display:flex;flex-direction:column;';
    message.textContent = 'Computer Won 👑';
  }
};

const addAnimation = () => {
  countdownText.style.animation = 'fadeIn 0.5s';
};

const removeAnimation = () => {
  countdownText.addEventListener('animationend', function () {
    countdownText.style.animation = '';
  });
};

let index = 0;
let countdown = ['Rock', 'Paper', 'Scissors'];
const showCountdown = () => {
  if (index < countdown.length) {
    countdownText.textContent = countdown[index];
    addAnimation();
    removeAnimation();
    index++;
    setTimeout(showCountdown, 1000);
  } else {
    index = 0;
    countdownText.textContent = '';
  }
};

//round winner

const showRoundWinner = () => {};

//Play Again

playAgain.addEventListener('click', function () {
  //Reset Scores
  playerCount = 0;
  computerCount = 0;
  //reset round winner
  roundWinnerText.textContent = '';
  //Set reset scores on scoreboard
  setScores();
  controlPanel.style.display = 'block';

  //resetting hands to rock
  playerHand.src = `https://img.icons8.com/color/96/000000/hand-rock.png`;
  computerHand.src = `https://img.icons8.com/color/96/000000/hand-rock.png`;

  //Make show results not to display
  showResults.style.cssText = 'display:none';
});

//Event Listeners for all options
options.forEach((option) => {
  option.addEventListener('click', function () {
    //resetting hands to rock
    playerHand.src = `https://img.icons8.com/color/96/000000/hand-rock.png`;
    computerHand.src = `https://img.icons8.com/color/96/000000/hand-rock.png`;
    //reset round winner
    roundWinnerText.textContent = '';

    //Show countdown
    showCountdown();

    //For syncing with animation
    setTimeout(() => {
      setPlayerOption(this.textContent.toLowerCase());
      if (this.textContent.toLowerCase() === 'rock') {
        setPlayerHand('hand-rock');
      }
      if (this.textContent.toLowerCase() === 'paper') {
        setPlayerHand('hand');
      }
      if (this.textContent.toLowerCase() === 'scissors') {
        setPlayerHand('hand-peace');
      }
      setComputerHand();
      decidingWinner();
      roundWinnerText.textContent = roundWinner; //show round winner
      showMessage();
    }, 2500);
  });
});
