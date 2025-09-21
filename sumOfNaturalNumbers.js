let number = 5;
const originalNumber = number;
let sum = 0;
 if (number > 0) {
  sum = sum + number;
  number = number - 1;
}
if (number > 0) {
  sum = sum + number;
  number = number - 1;
}
if (number > 0) {
  sum = sum + number;
  number = number - 1;
}
if (number > 0) {
  sum = sum + number;
  number = number - 1;
}
if (number > 0) {
  sum = sum + number;
  number = number - 1;
}
console.log("sum of",originalNumber,"is  : ",sum);
