// --- ARRAY --- //

let listRandom : number[] = [6,7,8,9,10] // -> khusus untuk data bertipe array
let listRandomStr: (number|string) [] = [6,7,"alterra academy"] // -> bisa campuran antara number atau string
let listRandomGeneric: Array<number> = [6,7,8] // -> khusus untuk data dengan menggunakan simbol generic
let listRandomGenericStr: Array<number|string> = [6,7,"alterra academy"] // -> khusus untuk data dengan menggunakan simbol generic

// console.log(listRandom)
// console.log(listRandomStr)
// console.log(listRandomGeneric)
// console.log(listRandomGenericStr)

// --- TUPLE --- //
let combinate: [number, string]
combinate = [21, "thomas"]

// console.log(combinate[1].toUpperCase()) // method untuk auto capitalize pada sebuah string
// console.log(combinate[0])

// --- OBJECT --- //
let personal = {
    firstName: "John",
    lastName: "Doe",
    id: 1122,
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

// console.log(personal.fullName())

// --- OBJECT AS TYPE ---
class Fish {
    type = "shark"
    sound = 'no'
}
class Reptil {
    type = "crocodile"
    sound = 'no'
}
class Aves {
    type = "eagle"
    sound = 'yes'
    swim(){
        console.log("cannot swim")
    }
}

let fish: Fish = new Fish() // substitutes
let reptil: Reptil = new Reptil() // substitutes
let aves: Aves = new Aves() // substitutes

// console.log("Type of Fish : ", fish.type)
// console.log("Type of Reptil : ", reptil.type)
// console.log("Type of Aves : ", aves.type)

// console.log(fish.sound)
// console.log(reptil.sound)
// console.log(aves.sound)