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
  const WORD = 'apple';
  return WORD.indexOf(element) === position; 
}

function aboutYourGuess(guess) {
  let guessedWord = '';
  const WORD = 'apple';
  const MismatedElements = [];
  for (let index = 0; index < guess.length; index++) {
    if (WORD.includes(guess[index])) {
      if(checkIndexes(index, guess[index])) {
        guessedWord = guessedWord + guess[index];
      } else {
        guessedWord = guessedWord + '_';
        MismatedElements.push(guess[index]);
      }
    } else {
      guessedWord = guessedWord + '_';
    }
  }

  if (MismatedElements.length) {
    console.log("this elements are present in your guess but positions are different " + MismatedElements);
  }

  if (checkPresenceOfLetters(guessedWord)) {
    console.log(guessedWord.slice(0,WORD.length));
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
  confirmation(clues, chances, 0, 0);
}

guessingWord();
