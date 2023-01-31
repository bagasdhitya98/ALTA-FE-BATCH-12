// --- REDECLARE ----
// -- var bisa diredeclare, dengan nama variabel yang sama
// var strA = 'helloworld1'
// var strA = 'helloworld2'
// console.log(strA)

// -- let tidak bisa diredeclare, dengan nama variabel yang sama
// let charA = 'hello, guys1'
// let charA = 'hello, guys2'
// console.log(charA)

// -- const tidak bisa diredeclare, dengan nama variabel yang sama
// const alphaA = 'hello, guys3'
// const alphaA = 'hello, guys4'
// console.log(alphaA)

// --- HOISTING ---
// -- var bersifat hoisting, artinya dia bisa dideklarasikan belakangan
// numbA = 10
// var numbA
// console.log(numbA)

// -- let tidak hoisting/tidak bisa dideklarasikan belakangan
// numbB = 20
// let numbB
// console.log(numbB)

// -- const tidak hoisting/tidak bisa dideklarasikan belakangan
// numbC = 30
// const numbC
// console.log(numbC)


// --- BLOCK SCOPE ---

// var numberA = 15
// if(true){
//     var numberA = 20
// }
// console.log(numberA)


// let numberB = 30
// if(true){
//     let numberB = 35
// }
// console.log(numberB)

// const numberC = 40
// if(true){
//     const numberC = 45
// }
// console.log(numberC)


// --- LET vs CONST ---

// let x = 12;
// x = 10;
// let y : String;
// y = 20
// console.log(x)
// console.log(y)

// let z : any // any -> digunakan jika tipe datanya dinamis atau bisa berubah ubah (bisa string, number, dll)
// z = 121
// z = "Hello World"
// console.log(z)

// const x = 3
// x = 4;
// console.log(x)

// --- BOOLEAN TYPE DATA ---
// let strA: boolean = true
// const strB: boolean = false

// untuk cetak sebagai nilai string
// console.log(strA.toString())
// console.log(strB.toString())
// untuk cetak sebagai nilai boolean
// console.log(strA.valueOf())
// console.log(strB.valueOf())

// -- cek tipe data
// console.log(typeof strA.toString())
// console.log(typeof strB.toString())
// console.log(typeof strA.valueOf())
// console.log(typeof strB.valueOf())

// --- NUMBER TYPE DATA ---
// let numX: number = 10
// let numY: number = 15
// let sumXY = numX + numY

// let decimalX: number = 0.5
// let decimalY: number = 0.7
// let sumDecimal = decimalX + decimalY

// console.log(sumXY)
// console.log(sumDecimal)

// let directSum = 0.5 + 0.7
// console.log(directSum)

// --- STRING TYPE DATA ---
// let firstChar: string = 'Type'
// let secondChar: string = 'Script'

// console.log(firstChar+secondChar)

// --- ANY TIPE DATA ---
// -- any merupakan tipe data yang bisa diisi oleh berbagai macam tipe data lainnya (soundness)
// let randomVal : any
// randomVal = "alterra academy"
// console.log(randomVal)
// randomVal = 2023
// console.log(randomVal)
// randomVal = true
// console.log(randomVal)
// randomVal = [10, 11, 12, 13, 14]
// console.log(randomVal)

// --- NULL & UNDEFINED ---
// let randomVal_A;
// let randomVal_B = null
// let randomVal_C = randomVal_A == randomVal_B // hanya membandingkan value
// let randomVal_D = randomVal_A === randomVal_B // membandingkan value dan tipe data

// console.log(randomVal_A) // undefined
// console.log(randomVal_B) // null
// console.log(randomVal_C) // true
// console.log(randomVal_D) // false

// --- ENUM DATA TYPE ---
// -- jika salah satu data di dalam enum nomornya diganti, maka nomor belakang akan menyesuaikan (auto-generated)
enum WeekDay {monday, tuesday, wednesday , thursday, friday, saturday, sunday}

let dayX : WeekDay = WeekDay.monday // untuk mendapatkan index dari enum
let dayY : string = WeekDay[0] // untuk mendapatkan value dari enum

// console.log(dayX) 
// console.log(dayY)

enum Color {red = 1, green, blue}
let colorX: Color = Color.blue

// console.log(colorX)

enum Random {a = -1, b, c, d}

let randX : Random = Random.a
let randY : string = Random[0]

console.log(randX) 
console.log(randY)

