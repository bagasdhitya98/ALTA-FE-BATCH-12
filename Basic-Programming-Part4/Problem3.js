function checkPrime(num) {
  if (num == 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
}

function printRectangle(high, wide, start) {
  let rectangle = "";
  let total = 0;
  for (let i = 0; i < high; i++) {
    for (let j = 0; j < wide; j++) {
      do {
        start++;
      } while (checkPrime(start));
      total += start;
      rectangle += `${start}`;
    }
    rectangle += "\n";
  }
  rectangle += total;
  return rectangle;
}

console.log(printRectangle(2, 5, 1));
