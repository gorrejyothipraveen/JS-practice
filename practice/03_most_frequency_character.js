function countTheFrequency(sentence, letter, index, count) {

  if (index === sentence.length) {
    return count;
  }

  if (sentence[index] === letter) {
    count++;
  }

  return countTheFrequency(sentence, letter, index + 1, count)
}

function findingMostOccurredCharacterInSentence(sentence, index, count, character) {

  if (index === sentence.length) {
    return character;
  }

  let mostOccurred = countTheFrequency(sentence, sentence[index], index + 1, count);
   
  if(mostOccurred > count) {
    character = sentence[index];
    count = mostOccurred;
  }

  return findingMostOccurredCharacterInSentence(sentence, index + 1, count, character);
}

function mostFrequenctCharacter(sentence) {
  return findingMostOccurredCharacterInSentence(sentence, 0, 1, sentence[0]);
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
  testMostFrequenctCharacter("single letter", "ab", "a");
  testMostFrequenctCharacter("letter repeats two times", "aba", "a");
  testMostFrequenctCharacter("letter repeats two times", "abb", "b");
  testMostFrequenctCharacter("letterrepeats 3 times ", "ababa", "a");

  
}

testAll();
