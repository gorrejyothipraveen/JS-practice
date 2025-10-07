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
  console.log(expected.length,actual.length);
  
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

  testReversingSentence("empty sentence ", "", "");
  testReversingSentence("single word ", "a", "a");
  testReversingSentence("sentence contain single letter words ", "a b", "b a");
  testReversingSentence("sentence contain two letters each", "ab cd", "cd ab");
  testReversingSentence("sentence contain more than two letters", "you to welcome hearty", "hearty welcome to you");

}

testAll();
