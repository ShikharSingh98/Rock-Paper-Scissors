const rockOption = document.getElementById('rock-option');
const paperOption = document.getElementById('paper-option');
const scissorsOption = document.getElementById('scissors-option');
const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');

let playerOption = '';
let computerOption = '';

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

//Event handler for rock option click
rockOption.addEventListener('click', () => {
  setPlayerOption('rock');
  setPlayerHand('hand-rock');
  setComputerHand();
});

//Event handler for paper option click
paperOption.addEventListener('click', () => {
  setPlayerOption('paper');
  setPlayerHand('hand');
  setComputerHand();
});

//Event handler for scissors option click
scissorsOption.addEventListener('click', () => {
  setPlayerOption('scissors');
  setPlayerHand('hand-peace');
  setComputerHand();
});
