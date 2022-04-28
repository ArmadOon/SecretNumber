'use strict';
// vytvoření náhodného čísla
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNumber;
//hendler function

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // Pokud zde není číslo
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ Není to číslo!!';
        // Pokud hráč vyhraje
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Správné číslo!';
        // Změní se barva na zelenou a velikost políčka
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
    }
    // Pokud je číslo vysoké
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Moc vysoké 📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💔 Prohrál jsi 😥';
            // Změní se číslo na červenou
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
    // Pokud je číslo nízké
    else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Moc nízké 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💔 Prohrál jsi 😥';
            // Změní se číslo na červenou
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});
