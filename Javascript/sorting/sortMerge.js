// Konsep Merge Sort
// -> Bekerja dengan membagi array jadi 2 (kiri dan kanan), lalu membandingkan nilai tiap index pada pecahan array, manakah yang lebih kecil
// -> Sehingga terjadi perpindahan nilai diantara kedua bagian tersebut
// -> Setelah dibandingkan, pecahan array ini akan digabung/merge kembali menjadi sebuah array yang utuh

function divide(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2); // mencari nilai tengah
  let one = array.slice(0, mid); // menduplikasi array dari index 0 sampai nilai tengah
  let two = array.slice(mid); // menduplikasi array dari tengah ke akhir
  return sort(divide(one), divide(two));
}

function sort(one, two) {
  const sorted = []; // deklarasikan variabel penampung
  // lakukan perulangan ketika panjang variabel one dan two sama
  while (one.length && two.length) {
    // jika nilai one[0] lebih rendah atau sama dengan nilai two[0]
    if (one[0] <= two[0]) {
      // maka push variabel one yang sudah dihapus element pertamanya ke sorted
      sorted.push(one.shift());
    } else {
      // maka push variabel two yang sudah dihapus element pertamanya ke sorted
      sorted.push(two.shift());
    }
  }
  // merge atau gabung seluruh array dari sorted, one, dan two dengan menggunakan spread operator
  const result = [...sorted, ...one, ...two];
  return result;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56];

console.log(divide(randomNumber));

// const arrayA = [7, 9, 10, 11, 12, 13];
// const arrayB = [14, 18, 21];
// const mergeArray = [...arrayA, ...arrayB];

// console.log(mergeArray);
