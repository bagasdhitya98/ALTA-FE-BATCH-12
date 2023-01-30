function meanMedian(arr) {
  let result = 0;
  let core = 0;
  let median;
  let mean = 0;

  for (let number of arr) {
    result += number;
  }

  mean = result / arr.length;

  if (arr.length != 1) {
    core = arr.length / 2;
    if (arr.length % 2 == 0) {
      median = (arr[core - 1] + arr[core++]) / 2;
    } else {
      median = arr[Math.floor(core)];
    }
  }
  return `mean : ${mean}, median : ${median}`;
}

console.log(meanMedian([1, 2, 3, 4]));
console.log(meanMedian([1, 2, 3, 4, 5]));
console.log(meanMedian([7, 8, 9, 13, 15]));
console.log(meanMedian([10, 20, 30, 40, 50]));
console.log(meanMedian([15, 20, 30, 60, 120]));
