

function splittingOfWord(word) {
  return word;
}

function displayingOutput(word, message, actual, expected) {
  const inputSegment = word;
  const expectedSection = " | " + expected;
  const actualSection = ' | ' + actual;
  console.log(message, inputSegment, expectedSection, actualSection);
  
}

function symbol(actual, expected) {
  const resultSymbol = actual === expected ? "✅" : "❌";
  return resultSymbol;
}

function testSplittingOfWord(word, expected){
  const actual = splittingOfWord(word);
  const message = symbol(actual, expected);
  displayingOutput(word, message, actual, expected);
}

function testAll() {
  testSplittingOfWord("a", 'a');
  testSplittingOfWord("b", "b");
  testSplittingOfWord("ab", "ab");
  testSplittingOfWord("ba", "ba");


}

testAll();
