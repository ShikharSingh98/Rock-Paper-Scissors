const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const hands = document.querySelectorAll('.hands img');
const options = document.querySelectorAll('.option');
const container = document.querySelector('.container');

let playerOption = '';
let computerOption = '';
let playerCount = 0;
let computerCount = 0;

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
    return;
  } else {
    if (playerOption === 'rock') {
      if (computerOption === 'paper') {
        computerCount++;
        setScores();
      } else {
        playerCount++;
        setScores();
      }
    }
    if (playerOption === 'paper') {
      if (computerOption === 'scissors') {
        computerCount++;
        setScores();
      } else {
        playerCount++;
        setScores();
      }
    }
    if (playerOption === 'scissors') {
      if (computerOption === 'rock') {
        computerCount++;
        setScores();
      } else {
        playerCount++;
        setScores();
      }
    }
  }
};

//Add Animation

const addAnimation = () => {
  playerHand.style.animation = 'shakePlayer 2s ease';
  computerHand.style.animation = 'shakeComputer 2s ease';
};

//Remove animation
const removeAnimation = () => {
  hands.forEach((hand) => {
    hand.addEventListener('animationend', function () {
      this.style.animation = '';
    });
  });
};

//Event Listeners for all options
options.forEach((option) => {
  option.addEventListener('click', function () {
    removeAnimation();
    addAnimation();
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
    }, 2000);
  });
});
