const targetNumber = Math.floor(Math.random() * 100) + 1;

function handleGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const userGuess = Number(guessInput.value);
    // const times=0;

    if (userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
    } else if (userGuess < targetNumber) {
        feedback.textContent = "Too low! Try again.";
        //times=times+1;
    } else if (userGuess > targetNumber) {
        feedback.textContent = "Too high! Try again.";
       // times=times+1;
    } else {
        feedback.textContent = "Congratulations! You guessed the number! no. of attempts is: ${times}";
    }

    guessInput.value = '';
    guessInput.focus();
    return false;
}
