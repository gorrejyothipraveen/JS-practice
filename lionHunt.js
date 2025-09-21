const string = "L  Z   "
let positionOfLIon;
if(string[0] === 'L') {
  positionOfLIon = 0;
}
if(string[1] === 'L') {
  positionOfLIon = 1;
}
if(string[2] === 'L') {
  positionOfLIon = 2;
}
if(string[3] === 'L') {
  positionOfLIon = 3;
}
let positionOfZebra;
if(string[0] === 'Z') {
  positionOfZebra = 0;
}
if(string[1] === 'Z') {
  positionOfZebra = 1;
}
if(string[2] === 'Z') {
  positionOfZebra = 2;
}
if(string[3] === 'Z') {
  positionOfZebra = 3;
}
const DistanceBetweenLandZ = positionOfZebra - positionOfLIon - 1;
console.log("the distance between",string,"is :",DistanceBetweenLandZ);
