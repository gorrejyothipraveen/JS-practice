function originalFunction(arg1) {
  return Math.abs(arg1);
}

function workingTestCase(resultSymbol, description) {
  const message = resultSymbol + description;
  console.log(message);
}

function message(resultSymbol, inputSegment, expectedSection, actualSection) {
  const finalMessage = resultSymbol + inputSegment + expectedSection + actualSection;
  console.log(finalMessage);
}

function failingTestCase(resultSymbol, arg1, actual, expected) {
  const inputSegment =`  input    : ${arg1} \n`;
  const expectedSection = `    Expected : ${expected} \n`
  const actualSection = `    actual   : ${actual}`
  message(resultSymbol, inputSegment, expectedSection, actualSection);
}

function symbol(actual, expected) {
  const resultSymbol = (actual === expected)? "✅" : "❌";
  return resultSymbol;
}

function testOriginalFunction(description, arg1, expected) {
  const actual = originalFunction(arg1);
  const resultSymbol = symbol(actual, expected);
  
  if (resultSymbol === "✅") {
    return workingTestCase(resultSymbol, description);
  }

  failingTestCase(resultSymbol, arg1, actual, expected);
}

function testAll() {

  testOriginalFunction("positive number",3, 3);
  testOriginalFunction("negative number", -3,-3)
  
}

testAll();
