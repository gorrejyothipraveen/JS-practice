const string = "Z  L"
let positionOfLion;
let positionOfZebra;
let i = 0;
while ( i < string.length ) {
  if( string[i] === 'L') {
    positionOfLion = i;
    console.log("lion",positionOfLion);
  }
  i = i+1;
}
i = 0;
while ( i < string.length ) {
  if( string[i] === 'Z') {
    positionOfZebra = i;
    console.log("zebra",positionOfZebra);
  }
  i = i+1;
}
const DistanceBetweenLandZ =( positionOfLion - positionOfZebra < 0 )? -(positionOfLion - positionOfZebra) : positionOfLion - positionOfZebra ;
console.log("the distance between",string,"is :",DistanceBetweenLandZ - 1);
