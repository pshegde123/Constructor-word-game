class Letter{
    constructor(letter,guessed){
        this.letter = letter;
        this.guessed = false;
    }

    getLetterValue(){
        return this.letter;
    }

    checkTheGuess(underlyingLetter){
        if(this.letter.toLowerCase()===underlyingLetter.toLowerCase()){
            this.guessed = true;
            return true;
        }
        else{
            return false;
        }
    }
};


module.exports=Letter;
