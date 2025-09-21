let number = 4;
const originalNumber = number;
let sum = 0;
while (number > 0) {
  sum = sum + number;
  number = number - 1;
}
console.log("sum of",originalNumber,"is  : ",sum);
