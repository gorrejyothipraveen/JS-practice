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

function decodeInteger(data) {
  let deserializeInteger = 0;
  if (data[1] === '0') {
    return 'invalid';
  }
  
  for (let iterator = 1; data[iterator] !== 'e'; iterator++) {
    deserializeInteger = deserializeInteger * 10 + parseInt(data[iterator]);
  }

  return deserializeInteger;
}

function decode(data) {
  if (data[0] === 'i') {
    return decodeInteger(data);
  }
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

function testAll() {
  // testSerializeIntegerData();
  // testSerializeTextData();
  // testSerializeArrayData();
  testDeserializeIntegerData();
}

testAll();
