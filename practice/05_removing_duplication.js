function findingNextLetterIndex(string, character, index) {
  if (index === string.length) {
    return string.length;
  }

  if (character === string[index + 1]) {
    return findingNextLetterIndex(string, character, index + 1);
  }

  return index;
}

function removeRedundentLetters(string, index, duplicateFreeString) {

  if (index === string.length) {
    return duplicateFreeString;
  }

  duplicateFreeString = duplicateFreeString + string[index];

  if (string[index] === string[index + 1]) {
    index = findingNextLetterIndex(string, string[index], index + 1);
  }

  return removeRedundentLetters(string, index + 1, duplicateFreeString);
}

function removingDuplication(string) {
  return removeRedundentLetters(string, 0, '');
}

function workingTestCase(resultSymbol, description) {
  const message = resultSymbol + description;
  console.log(message);
}

function message(resultSymbol, inputSegment, expectedSection, actualSection) {
  const finalMessage = resultSymbol + inputSegment + expectedSection + actualSection;
  console.log(finalMessage);
}

function failingTestCase(resultSymbol, string, actual, expected) {
  const inputSegment = `  input    : ${string} \n`;
  const expectedSection = `    Expected : ${expected} \n`;
  const actualSection = `    actual   : ${actual}`;
  message(resultSymbol, inputSegment, expectedSection, actualSection);
}

function symbol(actual, expected) {
  const resultSymbol = (actual === expected) ? "✅" : "❌";
  return resultSymbol;
}

function testRemovingDuplication(description, string, expected) {
  const actual = removingDuplication(string);
  const resultSymbol = symbol(actual, expected);

  if (resultSymbol === "✅") {
    return workingTestCase(resultSymbol, description);
  }

  failingTestCase(resultSymbol, string, actual, expected);
}

function testAll() {

  testRemovingDuplication("string does not contain any letters ", "", "");
  testRemovingDuplication("string contain single letter ", "a", "a");
  testRemovingDuplication("string contain two same letters ", "aa", "a");
  testRemovingDuplication("string contain three same letters ", "aaa", "a");
  testRemovingDuplication("string contain four same letters ", "aaaa", "a");
  testRemovingDuplication("string contain two different letters and repeating twice", "aabb", "ab");
  testRemovingDuplication("sentence contain three different letters and repeating thrice", "aaabbbccc", "abc");
  testRemovingDuplication("sentence does not contain any duplicate letters", "abcdefg", "abcdefg");



}

testAll();
