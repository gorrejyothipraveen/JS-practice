let num1 = 1;
let num2 = 2;
let num3 = 3;
const range = 3;
let template;
for( let i = 0 ; i < range ; i++) {
  template = num1;
  num1 = num2;
  num2 = num3;
  num3 = template;
  console.log(num1,num2,num3);
}
