function mean(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }
  return (sum / data.length);
}

function median(sortedList) {
  const lowerIndex = Math.floor((sortedList.length - 1)/ 2);
  const upperIndex = Math.ceil((sortedList.length - 1)/ 2);

  return (sortedList[upperIndex] + sortedList[lowerIndex])/ 2;
}

function sorting(data) {
  const sortedList = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedList[i] > sortedList[j]) {
        const temp = sortedList[j];
        sortedList[j] = sortedList[i];
        sortedList[i] = temp; 
      }
    }
  }
  return sortedList;
}

const data = [1, 2, 3, 4];
console.log(mean(data));
console.log(sorting(data));
console.log(median(sorting(data)));
