function guessingGame() {
    let secretNum = Math.floor(Math.random() * 100);
    let guesses = 0;
    let guessed = false;

    return function (guess) {
        guesses++
        if (!guessed) {
            if (guess === secretNum) {
                guessed = true;
                return `You win! You found ${secretNum} in ${guesses} guesses.`
            } else if (guess < secretNum) {
                return `${guess} is too low!`
            } else {
                return `${guess} is too high!`
            }
        } else {
            return "The game is over, you already won!"
        }
    }
}

module.exports = { guessingGame };
