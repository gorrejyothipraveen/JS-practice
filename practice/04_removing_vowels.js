function isVowel(letter, index) {
  const vowels = "aeiou";

  if (index === vowels.length) {
    return false;
  }

  if (letter === vowels[index]) {
    return true
  }

  return isVowel(letter, index + 1);
}

function extractingVowelsFromSentence(sentence, index, consonantString){

  if (index === sentence.length) {
    return consonantString;
  }

  if (!isVowel(sentence[index], 0)) {
    consonantString = consonantString + sentence[index];
  }

  return extractingVowelsFromSentence(sentence, index + 1, consonantString);
}

function removingVowels(sentence) {
  return extractingVowelsFromSentence(sentence, 0, '');
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

  testRemovingVowels("empty string", "", '');
  testRemovingVowels("single vowel", "a", '');
  testRemovingVowels("sentence contain 2 vowels", "aba", 'b');
  testRemovingVowels("sentence contain 3 vowels ", "animal", 'nml');
  testRemovingVowels("sentence contain 4 vowels", "apple fruit", 'ppl frt');
  testRemovingVowels("sentence contain 5 vowels", "phone mobile", 'phn mbl');
  testRemovingVowels("sentence contain only vowels", "aeiou", '');

}

testAll();
