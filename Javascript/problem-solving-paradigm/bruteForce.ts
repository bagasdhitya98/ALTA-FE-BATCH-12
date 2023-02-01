// --- Brute Force -> mencoba segala kemungkinan untuk mencapai solusi yang paling optimal

// --- CONTOH 1

function findMinMax(array: number[]) {
  let maxValue = 0;
  let minValue = Infinity;

  for (let i = 0; i <= array.length - 1; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
      console.log("max ", maxValue);
    }
    if (minValue > array[i]) {
      minValue = array[i];
      console.log("min ", minValue);
    }
  }
  return `maksimal : ${maxValue}, minimal : ${minValue}`;
}

// console.log(findMinMax([10, 7, 3, 5, 8, 2, 9]));

// --- CONTOH 2
function longestCommonPrefix(str: string[]): string {
  if (!str.length) {
    return "";
  }

  let prefix = str[0];

  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) {
        return "";
      }
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["alterra", "academy"]));
console.log(longestCommonPrefix(["bubble", "boba"]));
console.log(longestCommonPrefix(["kupu", "kupu"]));
