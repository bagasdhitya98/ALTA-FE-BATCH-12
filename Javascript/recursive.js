// --- FACTORIAL RECURSIVE ---

function searchFactorial(number) {
  if (number == 1) {
    return number;
  } else {
    // number * (number - 1)
    return number * searchFactorial(number - 1);
  }
}

// !6 = 6 * 5 * 4 * 3 * 2 * 1
// console.log(searchFactorial(6));
// !4 = 4 * 3 * 2 * 1
// console.log(searchFactorial(4));
// !8 = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// console.log(searchFactorial(8));

function recursiveSolution(number) {
  if (number == 1) {
    console.log("Nilai number : ", number);
    return number;
  } else {
    console.log("Nilai number : ", number);
    const result = recursiveSolution(number - 1);
    console.log("Hasil : ", result);
    return number * result;
  }
}

// console.log(recursiveSolution(5));

function timeComplexityFactorial() {
  console.time("recursive");
  const result = searchFactorial(8);
  console.timeEnd("recursive");
  return result;
}

function timeComplexitySolution() {
  console.time("solution");
  const result = recursiveSolution(8);
  console.timeEnd("solution");
  return result;
}

timeComplexityFactorial();
timeComplexitySolution();
