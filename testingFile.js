let num1 = 1;
let num2 = 2;
let num3 = 3;
let template = 0;
const range = 3;
let largestNumber;
for( let i = 0 ; i < range ; i++) {
  template = num1;
  num1 = num2;
  num2 = num3;
  num3 = template;
  largestNumber = (num1 > num2 && num1 > num3);
  if ( largestNumber === true) {
    largestNumber = num1;
    break;
  }
}
console.log(largestNumber);
