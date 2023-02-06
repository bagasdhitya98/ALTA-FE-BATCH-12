function minimizeBias(ratings: number[]) {
  let totalBias: number = 0;
  let sortedRatings = ratings.sort((a, b) => {
    return b - a;
  });
  console.log("sorted ratings : ", sortedRatings);
  for (let i = 0; i < sortedRatings.length; i += 2) {
    totalBias += sortedRatings[i] - sortedRatings[i + 1];
    console.log("total bias : ", totalBias);
  }

  return totalBias;
}

let arr1 = [4, 3, 6, 6];
let arr2 = [2, 4, 5, 3, 7, 8];

console.log(minimizeBias(arr1));
console.log(minimizeBias(arr2));
