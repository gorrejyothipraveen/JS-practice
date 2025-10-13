function choosingAction(actions) {
  const index = Math.floor(Math.random() * 10);
  if (index < 3 && index >= 0) {
    return actions[index];
  }

  return choosingAction(actions);
}

function Validate(yourChoice, botChoice) {

  if (yourChoice === botChoice) {
    console.log("both are safe take another chance\n");
    return playGame();
  }
  if (yourChoice === 'rock' && botChoice === 'scissor') {
    return 'congrats! ,you won the game';
  }
  if (yourChoice === 'paper' && botChoice === 'rock') {
    return 'congrats! you won the game';
  }
  if (yourChoice === 'scissor' && botChoice === 'paper') {
    return 'congrats! you won the game';
  }

  return 'sorry ! you lost the game\n';
}

function playGame() {
  const actions = ["rock", "paper", "scissor"];

  const yourAction = prompt("enter your action : ");
  const botAction = choosingAction(actions);
  const yourChoice = yourAction.toLowerCase();

  if (!actions.includes(yourChoice)) {
    console.log('only 1.rock \t 2.paper \t 3.scissor options are allowed\n');
    return playGame();
  }

  console.log("bot action : ", botAction);
  return Validate(yourChoice, botAction);
}

function underline(text) {
  return '-'.repeat(text.length - 1);
}

function rockPaperScissor() {
  const chances = 3;
  console.log(`\nyou must have to enter text\nYou have five chances to play\n`);
  const text = 'you have three options';
  console.log(text + '\n' + underline(text));
  console.log("rock\npaper\nscissor\n")
  const result = playGame();
  console.log(result); 
}

rockPaperScissor();
