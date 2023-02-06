function countingPaths(number: number) {
  let result: number = 0;
  let lastDigit: number = 0;

  while (number != 0) {
    lastDigit = number % 10;
    if (lastDigit == 0 || lastDigit == 4 || lastDigit == 6 || lastDigit == 9) {
      result += 1;
      console.log("result if :", result);
    } else if (lastDigit == 8) {
      result += 2;
      console.log("result else :", result);
    }
    number = Math.floor(number / 10);
    console.log("number :", number);
  }
  return result;
}

console.log(countingPaths(630));
// 6 3 0
// 1 + 0 + 1 = 2

console.log(countingPaths(1288));
// 1 2 8 8
// 0 + 0 + 2 + 2 = 4
