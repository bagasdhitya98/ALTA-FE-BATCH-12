// ---- STRING ----

let strVar = "lorem ipsum";
let accessFirst = strVar[0]; // mengakses index ke 0 dari sebuah string
let accessSecond = strVar[1]; // mengakses index ke 1 dari sebuah string

// console.log(`word of ${accessFirst}`);
// console.log(`word of ${accessSecond}`);

let firstThree = strVar.substring(0, 3); // menghilangkan tiga karakter dari depan
// console.log("first three characters : ", firstThree);

let restOfString1 = strVar.substring(3);
// lorem ipsum -> yang dipotong kata "lor"
let restOfString2 = strVar.substring(3, 9);
// lorem ipsum -> yang dipotong kata "lor" dan "um"
let restOfString3 = strVar.substring(3, strVar.length);
// lorem ipsum -> yang dipotong kata "lor" aja, karena posisi end nya ada di 11

//  lorem ipsum
// 01234567891011
// console.log("length of strVar : ", strVar.length);
// console.log("restOfString1 : ", restOfString1);
// console.log("restOfString2 : ", restOfString2);
// console.log("restOfString3 : ", restOfString3);

let title = "JamesBond007";
let lastThree = title.substring(9, 12);

// console.log("result of lastThree :", lastThree);
// console.log("data type of lastThree : ", typeof lastThree);

// -- PARSE TO NUMBER --
let parsedNumber = parseInt(lastThree);

// console.log("result of parsedNumber :", parsedNumber);
// console.log("data type of parsedNumber : ", typeof parsedNumber);

let numVar = 2.67;

// console.log(parseInt(numVar));
// console.log(parseFloat(numVar));

// -- PARSE TO STRING --
let randomNumber = 975770;
let stringVersion = randomNumber.toString();

console.log("string version of randomNumber : ", stringVersion);
console.log("type data of randomNumber : ", typeof stringVersion);
