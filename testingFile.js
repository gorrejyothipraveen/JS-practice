let num1 = 1;
let num2 = 2;
let num3 = 3;
let temp = 0;
const range = 3;
let largestNumber;
let sum;
for( let i = 0 ; i < range ; i++) {
  temp = num1;
  num1 = num2;
  num2 = num3;
  num3 = temp;
  if ((num1 > num2 && num1 > num3) === true) {
    largestNumber = num1;
    break;
  }
}
console.log("largest number : ",largestNumber);


let smallestNumber;
for( let i = 0 ; i < range ; i++) {
  temp = num1;
  num1 = num2;
  num2 = num3;
  num3 = temp;
  if ((num1 < num2 && num1 < num3) === true) {
    smallestNumber= num1;
    break;
  }
}

console.log("smallest number  :  ",smallestNumber);

let secondLargestNumber;
sum = num1 + num2 + num3;
console.log("sum  : ",sum);  
secondLargestNumber = sum - largestNumber - smallestNumber;
console.log("second largest number : ",secondLargestNumber);
