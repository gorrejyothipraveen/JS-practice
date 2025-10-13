function confirmation(word, guess) { 
  if (word === guess) {
    console.log("you won the match");
  } else {
    console.log('you lost the game');
  }
}

function guessingWord() {
  const word = 'apple';
  const clue = 'if you eat my seeds upto 40 at a time you will die in 5 min\n';
  console.log(clue);
  const guess = prompt("enter your guess");
  confirmation(word, guess);
}

guessingWord();
