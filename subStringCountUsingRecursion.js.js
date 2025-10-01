function countOfSubString(string, subString) {
  return 1;
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

  testCountOfSubString("hello", "lo", 1);

}

testAll();
