const wordElement = document.getElementById('word');
const wrongLettersElement = document.getElementById('wrong-letters');
const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();
const popup = document.getElementById('popup-container');
const messageElement = document.getElementById('success-message');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');

function getRandomWord() {
    const words = ['javascript', 'java', 'pyhton'];
    return words[Math.floor(Math.random() * words.length)]
}

function displayWord() {

    wordElement.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `).join('')}
    `;
    let word = wordElement.innerText.replace(/\n/g, "");
    word = word.replace(/\ /g, '')

    if (word == selectedWord) {
        popup.style.display = "flex";
        messageElement.innerText = "Congratulations! You are the winner";
    }
}

function updateWrongLetters() {
    wrongLettersElement.innerHTML = `
        ${wrongLetters.length > 0 ? '<h3>Wrong Letters</h3>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if (index < errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

    if (wrongLetters.length === items.length) {
        popup.style.display = "flex";
        messageElement.innerText = "You are lost the game";
    }
}

function displayMessage() {
    message.classList.add('show');

    setTimeout(function () {
        message.classList.remove('show');
    }, 2000);
}

playAgainBtn.addEventListener("click", function () {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display = "none";
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayMessage();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }
            else {
                displayMessage();
            }
        }
    }
});


displayWord();