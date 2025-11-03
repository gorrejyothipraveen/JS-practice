function encodeDigitalData(integer) {
  const encodedInteger = 'i' + integer + 'e';
  return encodedInteger;
}

function encodeStringData(string) {
  const stringSize = string.length;
  const encodedString = stringSize + ':' + string;
  return encodedString;
}

function encode(data) { 
  switch(typeof data) {
    case 'number':
      return encodeDigitalData(data);
    case 'string':
      return encodeStringData(data);
  }
}

function testData(input, expected, description) {
  const actual = encode(input);

  if (actual === expected) {
    console.log('✅', description);
  }  else {
    const symbol = '❌';
    console.log(symbol , description, input, expected, actual);
  }
}

function testIntegerNumbers() {
  testData(1, 'i1e', 'single integer number');
  testData(12, 'i12e', 'two digit integer number');
  testData(123, 'i123e', 'three digit integer number');
  testData(0, 'i0e', 'zero');
}

function testStrings() {
  testData('a', '1:a', 'single letter');
  testData('ab', '2:ab', '2 letters word');
  testData('abc', '3:abc', '3 letters word');
  testData('', '0:', 'empty word');
  testData('hello world', '11:hello world', '11 letters word');
  testData('hello@#!world', '13:hello@#!world', '13 letters word including special characters');

}

function testAll() {
  // testIntegerNumbers();
  testStrings();
}

testAll();
