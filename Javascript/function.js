function sumNumber() {
  const numberA = 10;
  const numberB = 20;
  const sum = numberA + numberB;
  console.log(sum);
}

// sumNumber();

//penulisan parameter didalam function wajib berurutan
//misalnya namaFunction(a,b,c), maka dari itu pemanggilnya harus menyertakan parameter dengan urutan yang sesuai
//berarti pemanggilnya harus namaFunction(1,2,3){}, tidak boleh namaFunction(1,2){}

function sumNumberWithParameter(numA, numB) {
  let sum = numA + numB;
  return sum;
  //console.log -> hanya mencetak nilai
  //return -> hanya mengembalikan nilai, tidak bisa lebih dari satu variabel
}

function sumNumberWithReturn(numA, numB) {
  const sum = numA + numB;
  return sum;
  //console.log -> hanya mencetak nilai
  //return -> hhanya mengembalikan nilai, tidak bisa lebih dari satu variabel
}

// sumNumberWithParameter(10, 10);
// sumNumberWithReturn(10, 10);

console.log(sumNumberWithParameter(10, 10) + 5);
console.log(sumNumberWithReturn(10, 10) + 5);

//BRANCHING IF STATEMENT

function checkAge(age) {
  if (age < 16) {
    console.log("kamu masih terlalu bocil"); // statement true
  }
  if (age >= 17) {
    console.log("kamu sudah remaja"); // statement true
  }
  if (age >= 22) {
    console.log("kamu sudah dewasa"); // statement true
  } else {
    console.log("aku tidak tahu"); // statement false
  }
}

// checkAge(19); //kamu sudah remaja
// checkAge(17); //kamu sudah remaja
// checkAge(15); //kamu masih terlalu bocil
// checkAge(16); //aku tidak tahu

function checkTemperature(temp) {
  if (temp >= 37) {
    console.log("kamu kena covid");
  }
  if (temp >= 30) {
    console.log("kamu masih agak normal");
  }
  if (temp > 20 && temp < 30) {
    console.log("kamu beku");
  }
}

checkTemperature(29);
checkTemperature(31);
