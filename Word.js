var Letter = require('./Letter');

class Word {
    constructor(word) {
        this.lettersArray = [];
        this.guessedLetters = [];
        this.counter = 9;
        for (let i = 0; i < word.length; i++) {
            this.lettersArray.push(new Letter(word[i], false));
            this.guessedLetters.push(" _ ");
        }
    }

    addGuessedLetter() {
        var fullWord = "";
        for (let i = 0; i < this.lettersArray.length; i++) {
            var theLetter = "";
            if (this.lettersArray[i].guessed) {
                theLetter = this.lettersArray[i].getLetterValue();
                this.guessedLetters[i] = theLetter;
            }
        }
        fullWord = this.guessedLetters.join(' ');
        console.log(fullWord);
    }

    checkIfLetterIsInWord(currentChar) {
        var isPresent = false;
        var word_length = this.lettersArray.length;
        for (let i = 0; i < word_length; i++) {
            if (this.lettersArray[i].checkTheGuess(currentChar)) {
                isPresent = true;
            }
        }
        return isPresent;
    }

    getGuessedWord() {
        return this.guessedLetters.join(' ');
    }
};

module.exports = Word;
