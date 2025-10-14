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
  const WORD = 'apple';
  for (let index = 0; index < WORD.length; index++) {
    if (yourGuess.includes(WORD[index])) {
      return true;
    }
  }
}

function checkIndexes(position, element) {
  for (let index = 0; index < WORD.length; index++) {
    if (WORD[index] === element && position === index) {
      return true;
    }
  }
  return false; 
}

function findingPosition(index, letter, guessedWord, mismatedElements) {
  if(checkIndexes(index, letter)) {
    return guessedWord + letter;
  } 

  if (!mismatedElements.includes(letter)) {
    mismatedElements.push(letter);
  }

  return guessedWord + '_';
}


function aboutYourGuess(guess) {
  let guessedWord = '';
  const mismatedElements = [];
  for (let index = 0; index < guess.length; index++) {
    if (WORD.includes(guess[index])) {
      guessedWord = findingPosition(index, guess[index], guessedWord, mismatedElements);
    } else {
      guessedWord = guessedWord + '_';
    }
  }

  if (mismatedElements.length) {
    console.log("\nthis elements are exist ,but positions are different " + mismatedElements);
  }

  if (checkPresenceOfLetters(guessedWord)) {
    console.log('\n' + guessedWord.slice(0,WORD.length));
  }

  return;
}

function confirmation(clues, chances, index) { 
  if (chances === 0) {
    console.log('\nbadluck chances are completed,you lost the game \n\nthe Word is : ',WORD + '\n');
    return;
  }
  
  const guess = prompt("enter your guess :  ");
  if (checkPresenceOfLetters(guess)) {
    aboutYourGuess(guess);
  }

  playWordGuess(guess, clues, chances, index);
  return;
}

function guessingWord() {

  const clues = ['this is fruit',
    'I belongs to rose family', 
    'it takes the energy of 50 leaves to produce one fruit',
    'science of growing this fruit is pomology',
    'this fruit contain 0% fat and no cholesterol'];

  const chances = WORD.length;
  console.log("the word contain : " + WORD.length + " letters");
  confirmation(clues, chances, 0, 0);
}

guessingWord();
