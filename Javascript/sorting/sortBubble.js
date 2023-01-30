// Konsep Bubble Sort
// -> Menggunakan nested loop untuk membandingkan element pertama dan selanjutnya
// -> Ketika element pertama lebih besar daripada element selanjutnya, maka akan dilakukan pertukaran nilai.
// -> Kekurangan : algoritma ini tidak cocok untuk data yang relatif besar, dikarenakan processing time yang lama dan memaksa kita cek satu per satu element yang ada

function sortBubble(array) {
  console.time("sortBubble");
  let len = array.length;
  let duplicated = [...array]; // bikin duplikasi array agar tidak memutasi/mempengaruhi array aslinya, bisa pakai slice atau spread operator

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (duplicated[j] > duplicated[j + 1]) {
        let varDuplicated = duplicated[j]; // untuk menampung sementara hasil dari nilai duplicated[j]
        duplicated[j] = duplicated[j + 1]; // tukar nilai duplicated[j] dengan nilai setelah duplicated[j]
        duplicated[j + 1] = varDuplicated; // tukar nilai setelah duplicated[j] dengan nilai yang udah ditampung sebelumnya di varDuplicated
      }
    }
  }
  console.timeEnd("sortBubble");
  return duplicated;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56];

console.log(sortBubble(randomNumber));
// [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56] -> 22 dicek apakah lebih besar dari 11? jika iya, maka tukar
// [11, 22, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56 ] -> 22 dicek apakah lebih besar dari 56? jika tidak, maka pindahkan posisi element pertamanya
// [11, 22, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56 ] -> 56 dicek apakah lebih besar dari 10? jika iya, maka tukar
// [11, 22, 10, 56, 23, 4, 90, 51, 88, 44, 28, 56 ] -> 56 dicek apakah lebih besar dari 23? jika ya, maka tukar
// [11, 22, 10, 23, 56, 4, 90, 51, 88, 44, 28, 56 ] -> 56 dicek apakah lebih besar dari 4? jika ya, maka tukar
// [11, 22, 10, 23, 4, 56, 90, 51, 88, 44, 28, 56 ] -> dan seterusnya ...
