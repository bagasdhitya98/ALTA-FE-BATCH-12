// ---- ARRAY ----

let arr = [];

let carTypes = ["Toyota", "Honda", "Suzuki", "Mitsubishi"];
let scores = [70, 85, 90, 60, 80];

// console.log(carTypes[1]); // Honda
// console.log(carTypes[2]); // Suzuki
// console.log(scores[0]); // 70
// console.log(scores[4]); // 80

// -- MENGGANTIKAN ELEMENT --
carTypes[0] = "BMW"; // menggantikan "Toyota" menjadi "BMW"
carTypes[1] = "Mercedes"; // menggantikan "Honda" menjadi "Mercedes"

// console.log(carTypes);

// -- MENAMBAHKAN ELEMENT DARI BELAKANG ARRAY
let fruits = ["salak", "semangka", "mangga", "durian"];

// console.log("original fruits : ", fruits);
// console.log("original length : ", fruits.length);

let pushLast = fruits.push("manggis");

// console.log("after add some fruits : ", fruits);
// console.log("after updated length : ", pushLast);

// -- MENGHAPUS ELEMENT DARI BELAKANG ARRAY
let randomNumber = [12, 15, 20, 11];
let popLast = randomNumber.pop();
// console.log(popLast); // menghapus element dari belakang array
// console.log(randomNumber); // menampilkan array setelah terupdate

// -- MENAMBAHKAN ELEMENT DARI DEPAN ARRAY
let randomName = ["Tom", "Mark", "Bernard"];
let unshiftName = randomName.unshift("Jonas");
// console.log(unshiftName); // menambahkan element dari depan array
// console.log(randomName); // menampilkan array setelah terupdate

// -- MENGHAPUS ELEMENT DARI DEPAN ARRAY
let randomPet = ["Dog", "Cat", "Bunny", "Bird"];
let shiftPet = randomPet.shift();
// console.log(shiftPet); // menghapus element dari depan array
// console.log(randomPet); // menampilkan array setelah terupdate

// -- COPY ARRAY WITH SLICE
let sample = ["a", "b", "c", "d", "e"];
let copyOfSample = sample.slice();
let spreadOfSample = [...sample];
// console.log("copy of sample : ", copyOfSample);
// console.log("spread of sample : ", spreadOfSample);

let sliceOfSample = sample.slice(0, 4);
// console.log(sliceOfSample);

// -- LOOPING ARRAY
let characters = ["Captain America", "Ironman", "Black Panther", "Dr Strange"];

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

// yang menjadi acuan for of adalah value nya
for (let hero of characters) {
  //   console.log(hero);
}

// yang menjadi acuan for in adalah index nya, walaupun hasil outputnya sama
for (let key in characters) {
  //   console.log(characters[key]);
}
