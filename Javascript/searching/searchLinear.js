// Konsep Linear Search
// Menggunakan konsep looping atau perulangan yang mana mencari dari element pertama sampai target ditemukan atau sampai element terakhir
// Return index/posisinya jika target ditemukan
// Return -1 jika target tidak ditemukan

function linearSearch(array, target) {
  console.time("Linear Search");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  console.timeEnd("Linear Search");
  return -1;
}

const randomNumber = [57, 20, 11, 4, 90, 68, 34, 65, 32, 16];

console.log(linearSearch(randomNumber, 4));
console.log(linearSearch(randomNumber, 32));
console.log(linearSearch(randomNumber, 100));
