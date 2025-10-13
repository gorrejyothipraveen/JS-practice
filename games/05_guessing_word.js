function playWordGuess(guess, word, clue, chances) {

  if (word === guess) {
    console.log("you won the match");
  } else {
    console.log(clue);
    confirmation(word, clue, chances - 1)
  }
}

function confirmation(word, clue, chances) { 
  if (chances > 0) {
    const guess = prompt("enter your guess\n");
    playWordGuess(guess, word, clue, chances);
  }
}

function guessingWord() {
  const word = 'apple';
  const clue = 'if you eat my seeds upto 40 at a time you will die in 5 min\n';
  const chances = 2;
  confirmation(word, clue, chances);
}

guessingWord();
