function checkGuessWithLuckyNumber(chances, guess, luckyAlphabet) {
  if (guess === luckyAlphabet) {
    return "you win the game";
  } 
  console.log("you lose the game");
  return guessingGame(chances - 1, luckyAlphabet);
}

function guessingGame(chances, luckyAlphabet) {
  if (chances >= 0) {
    const guessOfUser = prompt("enter your guess");
    const guess = guessOfUser.toLowerCase();
    return checkGuessWithLuckyNumber(chances, guess, luckyAlphabet);
  }
  return "you ran out of the chances !";
}

function findRandomIndex() {
  const index = Math.floor(Math.random() * 100); 
  if (index < 26 && index >= 0) {
    return index;
  }
  return findRandomIndex();
}

function playGuessingGame() {
  const randomIndex = findRandomIndex();
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const chances = 3;
  const secretAlphabet = alphabets[randomIndex];

  console.log("there is three chances in your hand");
  const result = guessingGame(chances - 1, secretAlphabet);
  console.log(result);
  console.log("secret alphabet :",secretAlphabet);
}

playGuessingGame();
