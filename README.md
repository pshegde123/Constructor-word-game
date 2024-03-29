# Guess-the-word using NodeJS
###### This is a CLI based Hangman style word(movie title) guess game using NodeJS. 

## Overview
##### The game prompts user to enter one letter at a time to guess the hidden movie title. User gets nine chances to guess all the correct letters. Once the user runs out of nine guess attempts, program restarts with a new word to guess.

## How to execute the program?
* Clone or download this repository.
* Install the `npm` dependancies using command `npm install`
* index.js file contains the game logic so to run program on yout terminal use command `node index.js`
* Once program starts running, it will prompt user to enter a letter[a-z,A-Z], if user enters more than one letter or enters a number/special character, program shows an error "Invalid letter.Please try again." 
* If you want to terminate the running program, use Ctrl-c to stop the execution.

## Result snapshots
(1) Win the game and restart
![](./images/win-restart.PNG)

(2) Run out of guesses
![](./images/fail-1.PNG)
![](./images/fail-2.PNG)

(3) Error for invalid letter input
![](./images/validate-input.PNG)

## Technologies Used:
* NodeJS
* npm packages : `inquirer`,`colors`
