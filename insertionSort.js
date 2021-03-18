function insertionSort (numsArray) {
  const length = numsArray.length;
  for (let i = 1; i < length; i++) {
    if (numsArray[i] < numsArray[0]) {
      numsArray.unshift(array.splice(i,1)[0]);
    } else {
      for (let j = 1; j < length; j++) {
        if (numsArray[i] < numsArray[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
          break;
        }
      }
    }
  }

  return numsArray;
}