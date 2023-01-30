// Konsep Insertion Sort
// -> Bekerja dengan konsep pensortiran pada saat memainkan sebuah kartu
// -> Array akan dibagi menjadi 2, yang tersortir dan belum tersortir

function sortInsertion(array) {
  console.time("sortInsertion");
  const len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i; // mendeklarasikan variabel yang akan digunakan untuk menampung nilai paling kecil
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        // jika nilai array[j] lebih kecil dari array[minimal]
        min = j; // ubah nilai minimal dengan nilai j
      }
    }
    let temp = array[i]; // untuk nampung nilai array[i]
    array[i] = array[min]; // tukar nilai array[i] dengan nilai yang ada di array[min]
    array[min] = temp; // tukar nilai array[min] dengan nilai yang ada di temp
  }
  console.timeEnd("sortInsertion");
  return array;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56];

console.log(sortInsertion(randomNumber));
