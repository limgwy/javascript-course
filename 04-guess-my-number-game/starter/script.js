'use strict';

// Dom Element connection

// Select elements by class name
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

//UI Helpers
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreE1.texctContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnE1.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc()(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing....');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(fasle);
  setBackground('');
}

renderInitialUI;

// handlers
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Validation
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number musr be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessafe('Correct Number YEY 🎊');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('You lost! womp womp😿');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});
