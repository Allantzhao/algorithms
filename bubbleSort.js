function bubbleSort (numsArray) {
  for (let i = 0; i < numsArray.length; i++) {
    for (let j = 0; j < numsArray.length; j++) {
      if (numsArray[j] > numsArray[j+1]) {
        let temp = numsArray[j+1];
        numsArray[j+1] = numsArray[j];
        numsArray[j] = temp;
      }
    }
  }

  return numsArray;
}