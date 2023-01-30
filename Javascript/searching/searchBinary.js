// Konsep Binary Search
// -> Menggunakan array yang sudah tersortir secara ascending (kecil ke besar).
// -> Pencarian dimulai dari element tengah
// -> Jika, element tengah itu lebih kecil dari target, maka geser ke kanan
// -> Jika, element tengah itu lebih besar dari target, maka geser ke kiri
// -> Return index/posisi dari target ketika ditemukan
// -> Return -1 jika target tidak ditemukan

function binarySearch(array, target) {
  console.time("Binary Search");
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
      // return jika targetnya ditemukan
    } else if (array[middle] < target) {
      start = middle + 1;
      // lanjutkan pencarian dan geser element tengah ke kanan
    } else {
      end = middle - 1;
      // lanjutkan pencarian dan geser element tengah ke kiri
    }
  }
  console.timeEnd("Binary Search");
  return -1;
}

const arrayRandom = [13, 70, 40, 33, 21, 89, 22, 5, 8];
const sortedArray = arrayRandom.sort((a, b) => {
  return a - b;
});

// console.log(sortedArray);
console.log(binarySearch(arrayRandom, 22));
// 5, 8, 13, 21, 22, 33, 40, 70, 89
console.log(binarySearch(arrayRandom, 89));
// 5, 8, 13, 21, 22, 33, 40, 70, 89
console.log(binarySearch(arrayRandom, 100));
