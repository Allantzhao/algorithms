const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function selectionSort (numsArr) {
  for (let i = 0; i < numsArr.length; i++) {
    let temp = numsArr[i];
    let smallestIndex = i;
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[j] < numsArr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    numsArr[i] = numsArr[smallestIndex];
    numsArr[smallestIndex] = temp;
  }

  return numsArr;
}

selectionSort(nums);