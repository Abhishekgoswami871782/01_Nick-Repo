const randomNumbar = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.querySelector('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a  number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less thn 100');
  } else {
    prevGuess.push(guess);
    if(){}
}
function checkGuess(guess) {
  //
}
function displayGuess(guess) {
  //
}
function displayMessage(Message) {
  //
}
function endGane() {
  //
}
function newGame() {
  //
}
