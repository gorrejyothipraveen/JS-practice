const string = "L  Z  L   Z   L  Z";
let positionOfLion;
let positionOfZebra;
let distanceBetweenLandZ;
let shortestDistance;
let flagForLionPosition = 0;
let flagForZebraPosition = 0;
for ( let i = 0 ; i < string.length ; i = i+1 ) {
  if( string[i] === 'L') {
    positionOfLion = i;
    flagForLionPosition = flagForLionPosition + 1;
  }
  
  if( string[i] === 'Z') {
    positionOfZebra = i;
    flagForZebraPosition = flagForZebraPosition + 1;
  }

  if( flagForLionPosition === 1 && flagForZebraPosition === 1 || flagForLionPosition >= 1 && flagForZebraPosition === 1 || flagForLionPosition === 1 && flagForZebraPosition >= 1) {
    distanceBetweenLandZ =( positionOfLion - positionOfZebra < 0 )? -(positionOfLion - positionOfZebra) : positionOfLion - positionOfZebra ;
  }
   
  if( flagForLionPosition >= 1 && flagForZebraPosition >= 1 ) {
    shortestDistance = ( positionOfLion - positionOfZebra < 0 )? -(positionOfLion - positionOfZebra) : positionOfLion - positionOfZebra ;
    if( shortestDistance < distanceBetweenLandZ ) {
      distanceBetweenLandZ = shortestDistance;
    }
  }
}

if( flagForLionPosition < 1 || flagForZebraPosition < 1) {
  console.log(-1);
} else {
  distanceBetweenLandZ = distanceBetweenLandZ - 1;
  console.log("the distance between",string,"is :",distanceBetweenLandZ);
}

