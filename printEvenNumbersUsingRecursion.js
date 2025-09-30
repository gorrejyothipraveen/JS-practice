//printing even numbers using recursion
function findingEvenNumbersInRange(number, evenString) {
  
  if (number % 2 === 0 && number >= 0) {
    evenString = number + ' ' + evenString;
  }

  if (number < 0) {
    return evenString;
  }

  return findingEvenNumbersInRange(number - 1, evenString);
}

function printEvenNumbers(number) {
  return findingEvenNumbersInRange(number, '');
}

function displayingOutput(message, sentence, actual, expected) {
  const inputSegment = sentence;
  const expectedSection = " | " + expected;
  const actualSection = " | " + actual;
  console.log(message, inputSegment, expectedSection, actualSection);
}

function symbol(actual, expected) {
  const message = (actual === expected) ? "✅" : "❌";
  return message;
}

function testPrintEvenNumbers(sentence, expected) {
  const actual = printEvenNumbers(sentence);
  const message = symbol(actual, expected + " ");
  displayingOutput(message, sentence, actual, expected);
}

function testAll() {

  testPrintEvenNumbers(2, "0 2");
  testPrintEvenNumbers(4, "0 2 4");

}

testAll();
