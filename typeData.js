//VAR
// var strVar = "apel";
// var strVar = 45678;
// console.log(strVar);

//LET
// let strLet = "apel";
// strLet = 12345;
// console.log(strLet);

//CONST
// const strConst = "apel";
// const intConst = 789123;
// console.log(intConst);

//TIPE - TIPE PENULISAN VARIABEL
// accountNumber : camel case
// AccountNumber : pascal case

//TIPE DATA STRING
// let fruit = "lemon";
// let accountNumber = 08828771;

// let firstName = "John";
// let secondName = "Doe";
// let fullName = firstName + secondName;
// console.log("Fullname of users without spacing is : ", fullName); //menggabungkan dua string tanpa spasi
// console.log(
//   "Fullname of users with spacing is : " + firstName + " " + secondName
// ); //menggabungkan dua string dengan spasi

// let name = "John Doe";
// let lengthOfName_1 = name.length;
// console.log("lengthOfName version 1 : ", lengthOfName_1);

// let lengthOfName_2 = "John Doe".length;
// console.log("lengthOfName version 2 : ", lengthOfName_2);

//TIPE DATA NUMBER
// let number = 123;
// let float = 12.3;

// let numberA = 20;
// let numberB = 20;

// let sum = 5 + 5;
// let difference = 4 - 2;
// let product = 8 * 2;
// let quotient = 10 / 2;
// let modulo = 20 % 5;

// console.log("result of number A and B : ", numberA + numberB);
// console.log("result of sum : ", sum);
// console.log("result of difference : ", difference);
// console.log("result of product : ", product);
// console.log("result of quotient : ", quotient);
// console.log("result of modulo : ", modulo);

//TIPE DATA BOOLEAN
let condition_1 = true;
let condition_2 = false;
console.log("kondisi 1 : ", condition_1);
console.log("kondisi 2 : ", condition_2);

let compare = 4 > 9;
console.log(compare);

//TIPE DATA NULL / UNDEFINED
let undifinedVar;
let nullVar = null;
console.log("hasil undifined : ", undifinedVar);
console.log("hasil nullvar : ", nullVar);

//TIPE DATA OBJECT
let laptop = {
  merk: "Asus",
  color: ["white", "black", "red", "blue"],
  spec: {
    ram: 16,
    processor: "Intel i9",
  },
};
console.log("identitas dari laptop : ", laptop);

//TIPE DATA ARRAY
let arrVar = []; // array kosong

let fruits = ["apel", "jeruk", "mangga", "salak", "anggur"]; // array string
let ages = [21, 22, 23, 24, 25]; // array number/integer
let laptops = [laptop, laptop, laptop]; // array object
let identity = ["john", 21, "doe", 25]; // array combination

console.log("result of identity : ", identity);
console.log("result of fruits : ", fruits);
console.log("result of ages : ", ages);
console.log("result of laptops : ", laptops);

//CEK TIPE DATA
let varStr = "abcdefgh";
let varInt = 123456;
let varUndefined;
let varNull = null;
let varObject = {};
let varArray = [2, 3];

console.log("varStr : ", typeof varStr);
console.log("varInt : ", typeof varInt);
console.log("varUndefined : ", typeof varUndefined);
console.log("varNull : ", typeof varNull);
console.log("varObject : ", typeof varObject);
console.log("varArray : ", typeof varArray);
