'use strict';
// vytvoření náhodného čísla
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNumber;
//hendler function

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Není to číslo!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Správné číslo!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Moc vysoké 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 Prohrál jsi 😥';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Moc nízké 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 Prohrál jsi 😥';
    }
  }
});
