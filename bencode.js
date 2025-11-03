function encodeDigitalData(integer) {
  const encodedInteger = 'i' + integer + 'e';
  return encodedInteger;
}

function encodeStringData(string) {
  const stringSize = string.length;
  const encodedString = stringSize + ':' + string;
  return encodedString;
}

function encodeArrayData(array) {
  let serializeArray = '';
  for (let iterator = 0; iterator < array.length; iterator++) {
    serializeArray = serializeArray + encode(array[iterator]);
    
  }
  return 'l' + serializeArray + 'e';
}

function encode(data) { 
  switch(typeof data) {
    case 'number':
      return encodeDigitalData(data);
    case 'string':
      return encodeStringData(data);
    case 'object':
      return encodeArrayData(data);
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

function testIntegerData() {
  testData(1, 'i1e', 'single integer number');
  testData(12, 'i12e', 'two digit integer number');
  testData(123, 'i123e', 'three digit integer number');
  testData(0, 'i0e', 'zero');
}

function testTextData() {
  testData('a', '1:a', 'single letter');
  testData('ab', '2:ab', '2 letters word');
  testData('abc', '3:abc', '3 letters word');
  testData('', '0:', 'empty word');
  testData('hello world', '11:hello world', '11 letters word');
  testData('hello@#!world', '13:hello@#!world', '13 letters word including special characters');

}

function testArrayData() {
  testData([1], 'li1ee', 'list contain integer');
  testData([1, 'a'], 'li1e1:ae', 'list contain integer, string');
  testData([1, 'a', [1]], 'li1e1:ali1eee', 'list contain integer, string and nestedarray');
  testData([1, ['hello']], 'li1el5:helloee', 'nested array');
  testData([1, ['a', 'b', ['hello']]], 'li1el1:a1:bl5:helloeee', 'nested array');

}

function testAll() {
  // testIntegerData();
  // testTextData();
  testArrayData();
}

testAll();function encodeDigitalData(integer) {
  const encodedInteger = 'i' + integer + 'e';
  return encodedInteger;
}

function encodeStringData(string) {
  const stringSize = string.length;
  const encodedString = stringSize + ':' + string;
  return encodedString;
}

function encodeArrayData(array) {
  let serializeArray = '';
  for (let iterator = 0; iterator < array.length; iterator++) {
    serializeArray = serializeArray + encode(array[iterator]);
    
  }
  return 'l' + serializeArray + 'e';
}

function encode(data) { 
  switch(typeof data) {
    case 'number':
      return encodeDigitalData(data);
    case 'string':
      return encodeStringData(data);
    case 'object':
      return encodeArrayData(data);
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

function testIntegerData() {
  testData(1, 'i1e', 'single integer number');
  testData(12, 'i12e', 'two digit integer number');
  testData(123, 'i123e', 'three digit integer number');
  testData(0, 'i0e', 'zero');
}

function testTextData() {
  testData('a', '1:a', 'single letter');
  testData('ab', '2:ab', '2 letters word');
  testData('abc', '3:abc', '3 letters word');
  testData('', '0:', 'empty word');
  testData('hello world', '11:hello world', '11 letters word');
  testData('hello@#!world', '13:hello@#!world', '13 letters word including special characters');

}

function testArrayData() {
  testData([1], 'li1ee', 'list contain integer');
  testData([1, 'a'], 'li1e1:ae', 'list contain integer, string');
  testData([1, 'a', [1]], 'li1e1:ali1eee', 'list contain integer, string and nestedarray');

}

function testAll() {
  // testIntegerData();
  // testTextData();
  testArrayData();
}

testAll();
