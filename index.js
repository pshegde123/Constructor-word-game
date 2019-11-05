// import word.js
var Word = require('./Word.js');
//Load the NPM package inquirer
var inquirer = require('inquirer');
var colors = require('colors');

// set words-array with movie names
var movies = ["Titanic", "Rocky", "Matrix", "Rambo", "KillBill", "Alladin", "ToyStory", "HomeAlone", "JurrasicPark", "DieHard"];
//Start counter for 9 gueeses 
var counter = 0;
var currentWord = "";
var secretWord = "";

var startGame = function () {
    //Select a word from words-array in random order
    secretWord = movies[Math.floor(Math.random() * 10)];
    console.log("\nYou get 9 guesses to find the movie name.\n");
    currentWord = new Word(secretWord);
    promptUser();
}

var promptUser = function () {
    //Prompt user to enter a letter
    if (counter < 9) {
        console.log(currentWord.getGuessedWord());
        inquirer.prompt([{
            name: "input",
            message: "Guess a letter:"
        }]).then(function (answer) {
            checkAnswer(answer);
        });
    }
    else {
        console.log("\n Sorry, you are out of guesses.\n ".inverse);
        counter = 0;
        currentWord = "";
        secretWord = "";
        startGame();
    }
}

var checkAnswer = function (data) {
    
    if ((data.input.length === 1) && /^[a-zA-Z]+$/.test(data.input)) {
        if (currentWord.checkIfLetterIsInWord(data.input)) {
            currentWord.addGuessedLetter();
            console.log("\nCorrect !!!".green);
            rightAnswer();
        }
        else {
            counter++;
            var guessRemaining = 9 - counter;
            console.log("\nIncorrect !!!".red);
            if (guessRemaining != 0) {
                console.log("\nYou have " + guessRemaining + " guesses left.");
            }
            promptUser();
        }
    }
    else {
        console.log("\nInvalid letter.Please try again.\n".red);
        promptUser();
    }
}

var rightAnswer = function () {
    var myWord = currentWord.getGuessedWord();
    if (myWord.replace(/ /g, "") == (secretWord.replace(/ /g, ""))) {
        console.log("\nYou got it right! Next word!\n".rainbow);
        counter = 0;
        currentWord = "";
        secretWord = "";
        startGame();
    }
    else {
        var guessRemaining = 9 - counter;
        console.log("\nYou have " + guessRemaining + " guesses left.");
        promptUser();
    }
}

startGame();