function reversedString(sentence , index, reversedSentence) {

  if (index < 0) {
    return reversedSentence;
  }

  if (index >= 0) {
    reversedSentence = reversedSentence + sentence[index];
  }

  return reversedString(sentence, index - 1, reversedSentence);
}

function reversingSentence(sentence) {
  return reversedString(sentence, sentence.length - 1, '');
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

function testReversingSentence(description, sentence, expected) {
  const actual = reversingSentence(sentence);
  const resultSymbol = symbol(actual, expected);
  
  if (resultSymbol === "✅") {
    return workingTestCase(resultSymbol, description);
  }

  failingTestCase(resultSymbol, sentence, actual, expected);
}

function testAll() {

  testReversingSentence("single word ", "a", "a");
  testReversingSentence("single word ", "a b", "b a");
}

testAll();

