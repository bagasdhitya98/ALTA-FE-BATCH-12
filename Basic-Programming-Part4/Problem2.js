function fibonacciNumber(number) {
  if (number == 1) {
    return 0;
  } else if (number == 2) {
    return 1;
  }
  return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
}

function fibonacciArr(index) {
  const arrFibonacci = [];
  for (let i = 1; i <= index + 1; i++) {
    arrFibonacci.push(fibonacciNumber(i));
  }
  return arrFibonacci[index];
}

// const number = [1,2,3,4,5]
// number.push(6)

console.log(fibonacciArr(0)); // 0
console.log(fibonacciArr(2)); // 1
console.log(fibonacciArr(9)); // 34
console.log(fibonacciArr(10)); // 55
console.log(fibonacciArr(12)); // 144

// fibonacci : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// index : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
