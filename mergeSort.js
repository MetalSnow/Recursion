function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let mid = array.length / 2;
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let merge = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merge.push(left[i]);
      i += 1;
    } else {
      merge.push(right[j]);
      j += 1;
    }
  }

  return merge.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
