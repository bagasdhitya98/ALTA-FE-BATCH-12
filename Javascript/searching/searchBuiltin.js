function builtinSearch(array, target) {
  console.time("Builtin Search");
  const result = array.indexOf(target);
  console.timeEnd("Builtin Search");
  return result;
}

const randomNumber = [11, 45, 80, 10, 22, 47, 65, 99, 34];

console.log(builtinSearch(randomNumber, 45));
console.log(builtinSearch(randomNumber, 80));

// const originalNumber = [20, 15, 10, 9, 5, 2];
// const copyOfNumber = [...originalNumber].sort((a, b) => {
//   return a - b;
// });

// console.log(originalNumber);
// console.log(copyOfNumber);
