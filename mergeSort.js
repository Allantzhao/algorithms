const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (numsArray) {
  if (numsArray.length === 1) {
    return numsArray;
  }
  let middleIdx = Math.floor(numsArray.length / 2);
  let left = numsArray.slice(0, middleIdx);
  let right = numsArray.slice(middleIdx);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge (left, right) {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (left[i] || right[j]) {
    if (!left[i]) {
      return mergedArr.concat(right.slice(j));
    }

    if (!right[j]) {
      return mergedArr.concat(left.slice(i));
    }

    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }

  return mergedArr;
}