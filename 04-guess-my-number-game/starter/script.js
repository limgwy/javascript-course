'use strict';

// Dom Element connection

// Select elements by class name
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');

// Reading element content
console.log('Current message:', messageEl.textContent);

// Modifying element content
messageEl.textContent = 'Hello from JavaScript!';
//scoreEl.textContent = '15';
//numberEl.textContent = 15;

console.log('Elements updated!');

//numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 67;

const guessInput = document.querySelector('.guess');
//guessInput.value = 13;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

// track current score
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log(`game state initialized`);

// Section 3 na!!
////////////////////////////
// Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
  // one check button is chicked do this
  console.log(`check button is clicked`);
  const guess = Number(document.querySelector('.guess').value);
  console.log(`players guessed:`, guess);

  if (guess === secretNumber) {
    console.log('Your Guess is Correct');
    document.querySelector('.message').textContent = 'YEY Correct Number 🎊';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = `You Won🥳`;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  } else if (guess > secretNumber) {
    console.log('Too High😿😿');
    document.querySelector('.message').textContent = 'Too High😿😿';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You Lost womp womp';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  } else {
    document.querySelector('.message').textContent = 'Too Low 🥺';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You Lost womp womp';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  (secretNumber = Math), trunc(Math.random() * 20) + 1;
  console.log('New Secret Number is', secretNumber);

  document.querySelector('.message').textContentt = 'Start Guessing';
  document.querySelector('.number').twxtContent = '?';
  document.querySelector('.score').twxtContent = 'score';

  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').disabled = false;
});
