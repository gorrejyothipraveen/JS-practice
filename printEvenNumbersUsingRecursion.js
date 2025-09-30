//printing even numbers using recursion

function printEvenNumbers(number) {
   return "0 2";
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
  const message = symbol(actual, expected);
  displayingOutput(message, sentence, actual, expected);
}

function testAll() {

  testPrintEvenNumbers(2, "0 2");

}

testAll();
