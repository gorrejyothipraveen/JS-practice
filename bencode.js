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
}

function testAll() {
  // testIntegerNumbers();
  testStrings();
}

testAll();
