function compareString(varA, varB) {
  let compare, max;

  if (varA.length < varB.length) {
    compare = varA;
    max = varB;
  } else {
    compare = varB;
    max = varA;
  }

  for (let i = 0; i <= max.length; i++) {
    if (max.substr(i, compare.length) == compare) {
      return max.substr(i, compare.length);
    }
  }
  return "Kata yang cocok tidak ditemukan";
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("JA", "KIJANG")); // JA
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
console.log(compareString("KURA-KURA", "BA")); // Kata yang cocok tidak ditemukan
