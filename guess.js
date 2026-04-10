let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

let guessInput;
let submitButton;
let messageDiv;

document.addEventListener('DOMContentLoaded', () => {
    guessInput = document.getElementById('userGuess');
    submitButton = document.getElementById('button');
    messageDiv = document.getElementById('message');

    if (guessInput) {
        guessInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                checkGuess();
            }
        });
    }
});

function checkGuess() {
    const rawValue = guessInput.value.trim();
    const userGuess = parseInt(rawValue, 10);

    if (!rawValue || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.innerHTML = "Please enter a valid number between 1 and 100";
        guessInput.focus();
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        messageDiv.innerHTML = `🎉 Congratulations! You guessed it in ${attempts} attempts`;
        disableGame();
    } else if (attempts >= maxAttempts) {
        messageDiv.innerHTML = `❌ Game over! The correct number was ${randomNumber}`;
        disableGame();
    } else if (Math.abs(userGuess - randomNumber) <= 5) {
        messageDiv.innerHTML = userGuess < randomNumber
            ? "🔥 Very close! Try a little higher"
            : "🔥 Very close! Try a little lower";
    } else {
        messageDiv.innerHTML = userGuess < randomNumber
            ? "📉 The number is greater than your guess"
            : "📈 The number is smaller than your guess";
    }

    guessInput.value = "";
    guessInput.focus();
}

function disableGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
}

console.log("JS connected");