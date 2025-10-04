 function extractingReversedWord(index, end, sentence, word) {

  if (index > end) {
    return word;
  } 

  if (sentence[end] === " ") {
    end = end - 1;
  }
  
  word = word + sentence[end];
  return extractingReversedWord(index, end - 1, sentence, word);
}

function reversedString(sentence , index, reversedSentence, end) {

  if (end >= sentence.length) {
    return reversedSentence;
  }

  if (sentence[end] === ' ' || end === sentence.length - 1) {
    let word = '';
    word = extractingReversedWord(index, end, sentence, word);
    index = end + 1;
    reversedSentence = (index === sentence.length) ? reversedSentence + word : reversedSentence + word + " ";
  }

  return reversedString(sentence, index, reversedSentence, end + 1);
}

function reversingLettersInSentence(sentence) {
  return reversedString(sentence, 0, '', 0);
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
  console.log(expected.length,actual.length);
  
  message(resultSymbol, inputSegment, expectedSection, actualSection);
}

function symbol(actual, expected) {
  const resultSymbol = (actual === expected)? "✅" : "❌";
  return resultSymbol;
}

function testreversingLettersInSentence(description, sentence, expected) {
  const actual = reversingLettersInSentence(sentence);
  const resultSymbol = symbol(actual, expected);
  
  if (resultSymbol === "✅") {
    return workingTestCase(resultSymbol, description);
  }

  failingTestCase(resultSymbol, sentence, actual, expected);
}

function testAll() {

  testreversingLettersInSentence("empty string", "", "");
  testreversingLettersInSentence("single letter sentence ", "a", "a");
  testreversingLettersInSentence("sentence contain two lettered words ", "ab cd", "ba dc");
  testreversingLettersInSentence("sentence contain two lettered words but they are already in reverse form", "ba dc", "ab cd");
  testreversingLettersInSentence("sentence contain three lettered words", "abc def", "cba fed");
  testreversingLettersInSentence("sentence contain 4 lettered words", "abcd efgh", "dcba hgfe");




  
}

testAll();

