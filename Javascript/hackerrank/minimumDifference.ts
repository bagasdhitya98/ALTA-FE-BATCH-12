function minDiff(arr: number[]) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  console.log("sorted array : ", sortedArr);
  let res = 0;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    res += Math.abs(sortedArr[i] - sortedArr[i + 1]);
    console.log("res : ", res);
  }

  return res;
}

console.log(minDiff([1, 3, 3, 2, 4]));
// | 1 - 2 | + | 2 - 3 | + | 3 - 3 | + | 3 - 4 |
console.log(minDiff([5, 1, 3, 7, 3]));
// | 1 - 3 | + | 3 - 3 | + | 3 - 5 | + | 5 - 7 |
