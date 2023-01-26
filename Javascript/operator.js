let a, b, add, sub, mul, div, mod;

a = 10;
b = 20;

add = a + b;
sub = a - b;
mul = a * b;
div = a / b;
mod = a % b;

// console.log("hasil penjumlahan a + b adalah ", add);
// console.log("hasil pengurangan a - b adalah ", sub);
// console.log("hasil perkalian a * b adalah ", mul);
// console.log("hasil pembagian a / b adalah ", div);
// console.log("hasil sisa bagi a % b adalah ", mod);

//INCREMENT & DECREMENT
let increment = 10;
let decrement = 10;
let numberArr = 20;

//++increment = 10 + 1
//--decrement = 10 - 1

// console.log(++numberArr);
// console.log(++increment);
// console.log(--decrement);

//REASSIGNMENT, ==, ===

// = -> reassignment (mendeklarasikan nilai pada suatu variabel)
// == -> yang dibandingkan hanya value nya aja
// === -> yang dibandingkan value dan tipe data nya sekaligus

const temp = 15;
const condition_1 = temp == "15";
const condition_2 = temp === "15";
const condition_3 = temp != "15";
const condition_4 = temp !== "15";

//GERBANG LOGIKA AND (&&)

// false + false = false
// false + true = false
// true + false = false
// true + true = true

//GERBANG LOGIKA OR (||)

// false + false = false
// false + true = true
// true + false = true
// true + true = true

console.log(condition_1 && condition_2); //false
console.log(condition_2 && condition_3); // false
console.log(condition_1 && condition_4); // true

console.log(condition_1 || condition_2); //true
console.log(condition_2 || condition_3); //false
console.log(condition_1 || condition_4); //true

//SHORTHAND ARITHMETIC
let numVar = 10;

numVar += 10; //numVar = numVar + 10
numVar -= 10; //numVar = numVar - 10
numVar *= 10; //numVar = numVar * 10
numVar /= 10; //numVar = numVar / 10
numVar %= 10; //numVar = numVar % 10

console.log(numVar);
