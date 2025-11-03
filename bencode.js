const STARTLIST = 'l';
const ENDLISTANDINTEGER = 'e';
const STARTINTEGER = 'i';

function encodeDigitalData(integer) {
  const encodedInteger = STARTINTEGER + integer + ENDLISTANDINTEGER;
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
  return STARTLIST + serializeArray + ENDLISTANDINTEGER;
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

function decodeInteger(data) {
  if (data[1] === '0' && data.length > 2) {
    return 'invalid';
  }
  const deserializeInteger = data.slice(1, data.indexOf('e'));
  return parseInt(deserializeInteger);
}

function decodeString(data) {
  const IndexOfColon = data.indexOf(':');
  const lengthOfString = parseInt(data);
  const deserializedString = data.slice(IndexOfColon + 1, IndexOfColon + lengthOfString + 1);
  return deserializedString;
}

function decode(data) {
  if (data[0] === STARTINTEGER) {
    console.log(data);
    return decodeInteger(data);
  }

  return decodeString(data);
}

function testData(input, actual, expected, description) {
  if (actual === expected) {
    console.log('✅', description);
  }  else {
    const symbol = '❌';
    console.log(symbol , description, input, expected, actual);
  }
}

function testSerializeIntegerData() {
  testData(1, encode(1), 'i1e', 'single integer number');
  testData(12, encode(12), 'i12e', 'two digit integer number');
  testData(123, encode(123), 'i123e', 'three digit integer number');
  testData(0, encode(0), 'i0e', 'zero');
}

function testSerializeTextData() {
  testData('a', encode('a'), '1:a', 'single letter');
  testData('ab', encode('ab'), '2:ab', '2 letters word');
  testData('abc', encode('abc'), '3:abc', '3 letters word');
  testData('', encode(''), '0:', 'empty word');
  testData('hello world', encode('hello world'), '11:hello world', '11 letters word');
  testData('hello@#!world', encode('hello@#!world'), '13:hello@#!world', '13 letters word including special characters');

}

function testSerializeArrayData() {
  testData([1], encode([1]), 'li1ee', 'list contain integer');
  testData([1, 'a'], encode([1, 'a']), 'li1e1:ae', 'list contain integer, string');
  // testData([1, 'a', [1]], 'li1e1:ali1eee', 'list contain integer, string and nestedarray');
  // testData([1, ['hello']], 'li1el5:helloee', 'nested array');
  // testData([1, ['a', 'b', ['hello']]], 'li1el1:a1:bl5:helloeee', 'nested array');

}

function testDeserializeIntegerData() {
  testData('i1e', decode('i1e'), 1, 'single integer');
  testData('i12e', decode('i12e'), 12, 'two digit integer');
  testData('i123e', decode('i123e'), 123, 'three digit integer');
  testData('i01e', decode('i01e'), 'invalid', 'including zeros before integer');
  
}

function testDeserializeString() {
  testData('1:a', decode('1:a'), 'a', 'single letter string');
  testData('2:ab', decode('2:ab'), 'ab', 'two letters string');
  testData('3:abc', decode('3:abc'), 'abc', 'three letters string');
}

// function testDeserializeArray() {
//   testData('li1ee', decode('li1ee'), [1], 'list contain integer');
// }

function testAll() {
  // testSerializeIntegerData();
  // testSerializeTextData();
  // testSerializeArrayData();
  // testDeserializeIntegerData();
  testDeserializeString();
}

testAll();
