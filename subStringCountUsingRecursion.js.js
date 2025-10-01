function findingOccurrence(string, subString, stringIndex, subStringIndex, count) {
  if (string[stringIndex] === subString[subStringIndex] && stringIndex < string.length && subStringIndex < subString.length) {
      return findingOccurrence(string, subString, stringIndex + 1, subStringIndex + 1, count);
  }
 
  if (stringIndex <= string.length) {

    if (subStringIndex === subString.length) {
      count++;
    }

    if (stringIndex === string.length && subStringIndex === subStringIndex) {
      count++;
      return count;
    }

    stringIndex -= subStringIndex;
    return findingOccurrence(string, subString, stringIndex + 1, 0, count)
  }
  return count;
}

function countOfSubString(string, subString) {
  return findingOccurrence(string, subString, 0, 0, 0);
}

function displayingOutput(message, string, otherString, actual, expected) {

  const inputSegment = ` [${string} , ${otherString}]  `;
  const expectedSection = " | " + expected;
  const actualSection = " | " + actual;
  console.log(message, inputSegment, expectedSection, actualSection);

}

function symbol(actual, expected) {
  const message = (actual === expected) ? "✅" : "❌";
  return message;
}

function testCountOfSubString(string, otherString, expected) {

  const actual = countOfSubString(string, otherString);
  const message = symbol(actual, expected);
  displayingOutput(message, string, otherString, actual, expected);

}

function testAll() {

  testCountOfSubString("hellolo", "lo", 2);

}

testAll();

