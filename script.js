'use strict';

const bodyEl = document.querySelector('body');

const leftSide = document.querySelector('.left');

const secretNumberText = document.querySelector('.secret-number');
const messageText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');

const input = document.querySelector('.guess');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageText.textContent = message;
};

checkBtn.addEventListener('click', function () {
  console.log(input.value);
  console.log(secretNumber);
  if (!Number(input.value)) {
    displayMessage('Please guess a number!');
  } else if (Number(input.value) === secretNumber) {
    displayMessage('Congratulations! You hit the number!');
    secretNumberText.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    secretNumberText.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highScoreText.textContent = highscore;
    }
  } else if (Number(input.value) !== secretNumber) {
    if (score > 1) {
      displayMessage(
        Number(input.value) > secretNumber ? 'Too high!' : 'Too low!'
      );
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost! Please press the Again! button!');
      scoreText.textContent = 0;
      leftSide.style.display = 'none';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  leftSide.style.display = 'flex';
  scoreText.textContent = score;
  secretNumberText.textContent = '?';
  input.value = '';

  bodyEl.style.backgroundColor = '#222';
  secretNumberText.style.width = '15rem';
});
