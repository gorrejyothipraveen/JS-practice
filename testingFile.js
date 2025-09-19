let num1 = 1;
let num2 = 2;
let num3 = 3;
let temp = 0;
const range = 3;
let smallestNumber;
for( let i = 0 ; i < range ; i++) {
  templ = num1;
  num1 = num2;
  num2 = num3;
  num3 = temp;
  if ((num1 < num2 && num1 < num3) === true) {
    smallestNumber= num1;
    break;
  }
}

console.log("smallest number  :  ",smallestNumber);
