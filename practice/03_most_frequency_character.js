function mostFrequenctCharacter(sentence) {
  return (sentence[0]);
}

function workingTestCase(resultSymbol, description) {
  const message = resultSymbol + description;
  console.log(message);
}

function message(resultSymbol, inputSegment, expectedSection, actualSection) {
  const finalMessage = resultSymbol + inputSegment + expectedSection + actualSection;
  console.log(finalMessage);
}

function failingTestCase(resultSymbol, sentence, actual, expected) {
  const inputSegment =`  input    : ${sentence} \n`;
  const expectedSection = `    Expected : ${expected} \n`
  const actualSection = `    actual   : ${actual}`
  message(resultSymbol, inputSegment, expectedSection, actualSection);
}

function symbol(actual, expected) {
  const resultSymbol = (actual === expected)? "✅" : "❌";
  return resultSymbol;
}

function testMostFrequenctCharacter(description, sentence, expected) {
  const actual = mostFrequenctCharacter(sentence);
  const resultSymbol = symbol(actual, expected);
  
  if (resultSymbol === "✅") {
    return workingTestCase(resultSymbol, description);
  }

  failingTestCase(resultSymbol, sentence, actual, expected);
}

function testAll() {

  testMostFrequenctCharacter("single letter", "a", "a");
  
}

testAll();
