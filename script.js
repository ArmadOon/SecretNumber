'use strict';
// vytvoření náhodného čísla
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
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
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        //ukáže se správné číslo
        document.querySelector('.number').textContent = secretNumber;
        // Když je skore větší než highScore Highscore se přepíše.
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // když je číslo špatné
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? 'Moc vysoké 📈' : 'Moc nízké 📉';
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

// Po kliknutí na tlačítko znovu, se hra resetuje
document.querySelector('.again').addEventListener('click', function () {
    function locationReload() {
        location.reload();
    }
    locationReload();
});
