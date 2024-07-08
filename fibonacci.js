function fibs(num) {
  let arr = [0, 1];

  if (num <= 0) {
    arr = [];
  } else if (num === 1) {
    arr.pop();
  }

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

console.log(fibs(8));

function fibsRec(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(num - 1);
    let nextFib = arr[arr.length - 1] + arr[arr.length - 2];
    return arr.concat(nextFib);
  }
}

console.log(fibsRec(8));
