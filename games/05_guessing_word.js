const WORD = 'apple';
 
function underline(length) {
  return '-'.repeat(length);
}

function playWordGuess(guess, clues, chances, clueIndex) {
  if (WORD === guess) {
    console.log("\ncongrats, you won the match\n");
    return;
  } 

  if (chances > 1) {
    console.log('\n'+ "clue :" + clues[clueIndex]);
    console.log(underline(40));
  }
  confirmation(clues, chances - 1, clueIndex + 1);
}

function checkPresenceOfLetters(yourGuess) {
  for (let index = 0; index < WORD.length; index++) {
    if (yourGuess.includes(WORD[index])) {
      return true;
    }
  }
}
//pine apple
function aboutYourGuess(guess) {
  let guessedWord = '';
  for (let index = 0; index < WORD.length; index++) {
    if (guess.includes(WORD[index])) {
      guessedWord = guessedWord + WORD[index];
    } else {
      guessedWord = guessedWord + '_';
    }
  }
  return guessedWord;
}

function confirmation(clues, chances, index) { 
  if (chances > 0) {
    const guess = prompt("enter your guess :  ");
    if (checkPresenceOfLetters(guess) && chances > 1) {
      console.log(aboutYourGuess(guess));
    }
    playWordGuess(guess, clues, chances, index);
    return;
  }

  console.log('\nbadluck chances are completed,you lost the game \n\nthe Word is : ',WORD + '\n');
  return;
}

function guessingWord() {
  const clues = ['this is fruit',
    'I belongs to rose family', 
    'it takes the energy of 50 leaves to produce one fruit',
    'science of growing this fruit is pomology',
    'this fruit contain 0% fat and no cholesterol'];

  const chances = WORD.length;
  confirmation(clues, chances, 0, 0);
}

guessingWord();
