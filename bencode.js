function encodeDigitalData(integer) {
  const encodedData = 'i' + integer + 'e';
  return encodedData;
}

function encode(data) { 
  switch(typeof data) {
    case 'number':
      return encodeDigitalData(data);
  }
}

const data = 'hello';
console.log(encode(data));
