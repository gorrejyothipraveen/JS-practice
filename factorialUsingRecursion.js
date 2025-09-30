function factorial(number) {
  return 1;
}

function displayingOutput(message, number, actual, expected) {
  const inputSegment = number;
  const expectedSection = " | " + expected;
  const actualSection = " | " + actual;
  console.log(message, inputSegment, expectedSection, actualSection);
}

function symbol(actual, expected) {
  const message = (actual === expected) ? "✅" : "❌";
  return message;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const message = symbol(actual, expected);
  displayingOutput(message, number, actual, expected);
}

function testAll() {

  testFactorial(1, 1);
  
}

testAll();
