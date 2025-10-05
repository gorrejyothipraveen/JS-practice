function removingDuplication(string) {
  return string;
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

  testRemovingDuplication("sentence contain single letter ", "a", "a");

}

testAll();
