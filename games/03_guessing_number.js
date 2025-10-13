function checkGuessWithLuckyNumber(chances, guess, luckyNumber) {
  if (guess === luckyNumber) {
    return "you win the game";
  } 
  console.log("you lose the game");
  return guessingGame(chances - 1, luckyNumber);
}

function guessingGame(chances, luckyNumber) {
  if (chances >= 0) {
    const guessOfUser = prompt("enter your guess");
    const guess = parseInt(guessOfUser);
    return checkGuessWithLuckyNumber(chances, guess, luckyNumber);
  }
  return "you ran out of the chances !";
}


function playGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10);
  const chances = 3;
  console.log("there is three chances in your hand");
  
  console.log("secret number :",secretNumber);
  
  const result = guessingGame(chances - 1, secretNumber);
  console.log(result);
}

playGuessingGame();
