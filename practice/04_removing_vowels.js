function removingVowels(sentence) {
  return '';
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

function testRemovingVowels(description, sentence, expected) {
  const actual = removingVowels(sentence);
  const resultSymbol = symbol(actual, expected);
  
  if (resultSymbol === "✅") {
    return workingTestCase(resultSymbol, description);
  }

  failingTestCase(resultSymbol, sentence, actual, expected);
}

function testAll() {

  testRemovingVowels("single vowel", "a", '');
  
}

testAll();
