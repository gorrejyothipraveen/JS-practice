function meanOf(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }
  return (sum / data.length);
}

function medianOf(sortedList) {
  const lowerIndex = Math.floor((sortedList.length - 1) / 2);
  const upperIndex = Math.ceil((sortedList.length - 1) / 2);

  return (sortedList[upperIndex] + sortedList[lowerIndex]) / 2;
}

function standardDeviationOf(data) {
  let sum = 0;
  const mean = meanOf(data);

  for (let index = 0; index < data.length; index++) {
    const difference = data[index] - mean;
    console.log(difference);
    sum = sum + Math.pow(difference, 2);
  }

  return Math.sqrt(sum / data.length);
}

function findFrequency(element, data) {
  let frequency = 0;
  for (let index = 0; index < data.length; index++) {
    if (data[index] === element) {
      frequency++;
    }
  }
  return frequency;
}

function mode(data) {
  let max = 0;
  let position = -1;

  for (let index = 0; index < data.length; index++) {
    const count = findFrequency(data[index], data);
    if (count > max) {
      max = count;
      position = index;
    }
  }

  if (position !== -1) {
    return data[position];
  }
  return position;
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
console.log(meanOf(data));
console.log(sorting(data));
console.log(medianOf(sorting(data)));
console.log(standardDeviationOf([0, 0, 0, 100]));
