function sortBuiltin(array) {
  const result = array.sort((a, b) => {
    // a itu adalah nilai awal
    // b itu adalah nilai setelah a
    return a - b; // return ascending (kecil ke besar)
    // return b - a -> return descending (besar ke kecil)
  });
  return result;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56];

console.log(sortBuiltin(randomNumber));
