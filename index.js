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
  playerHand.addEventListener('animationend', function () {
    playerHand.style.animation = '';
  });
  computerHand.addEventListener('animationend', function () {
    computerHand.style.animation = '';
  });
};

const showMessage = () => {
  console.log(playerCount, computerCount);
  if (playerCount === 5) {
    controlPanel.style.display = 'none';
    showResults.style.cssText =
      'display:flex;flex-direction:column;margin-top:2rem';
    message.textContent = 'Player Won 👑';
  }
  if (computerCount === 5) {
    controlPanel.style.display = 'none';
    showResults.style.cssText =
      'display:flex;flex-direction:column;margin-top:2rem';
    message.textContent = 'Computer Won 👑';
  }
};

//Play Again

playAgain.addEventListener('click', function () {
  //Reset Scores
  playerCount = 0;
  computerCount = 0;
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

    //First Add Animation
    addAnimation();

    //After completion remove the animation
    removeAnimation();

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
      showMessage();
    }, 2000);
  });
});
