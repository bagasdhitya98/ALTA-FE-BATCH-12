// --- ARRAY --- //

let listRandom: number[] = [6, 7, 8, 9, 10]; // -> khusus untuk data bertipe array
let listRandomStr: (number | string)[] = [6, 7, "alterra academy"]; // -> bisa campuran antara number atau string
let listRandomGeneric: Array<number> = [6, 7, 8]; // -> khusus untuk data dengan menggunakan simbol generic
let listRandomGenericStr: Array<number | string> = [6, 7, "alterra academy"]; // -> khusus untuk data dengan menggunakan simbol generic

// console.log(listRandom)
// console.log(listRandomStr)
// console.log(listRandomGeneric)
// console.log(listRandomGenericStr)

// --- TUPLE --- //
let combinate: [number, string];
combinate = [21, "thomas"];

// console.log(combinate[1].toUpperCase()) // method untuk auto capitalize pada sebuah string
// console.log(combinate[0])

// --- OBJECT --- //
let personal = {
  firstName: "John",
  lastName: "Doe",
  id: 1122,
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(personal.fullName())

// --- OBJECT AS TYPE ---
class Fish {
  type = "shark";
  sound = "no";
}
class Reptil {
  type = "crocodile";
  sound = "no";
}
class Aves {
  type = "eagle";
  sound = "yes";
  swim() {
    console.log("cannot swim");
  }
}

let fish: Fish = new Fish(); // substitutes
let reptil: Reptil = new Reptil(); // substitutes
let aves: Aves = new Aves(); // substitutes

// console.log("Type of Fish : ", fish.type)
// console.log("Type of Reptil : ", reptil.type)
// console.log("Type of Aves : ", aves.type)

// console.log(fish.sound)
// console.log(reptil.sound)
// console.log(aves.sound)

type behaviorType = {
  type: string;
};

type addressType = {
  city?: string;
  country: string;
};

interface objType {
  name: string;
  age: number;
  job: string;
  isMarried: boolean;
  address: addressType;
  hobbies: string[];
}

const person_1: objType = {
  name: "John Doe",
  age: 40,
  job: "Front-End Developer",
  isMarried: true,
  address: {
    city: "London",
    country: "United Kingdom",
  },
  hobbies: ["Playing guitar", "Riding a bicycle"],
};

interface personalType extends addressType {
  name: string;
}

const peoples: personalType[] = [
  {
    name: "John Doe",
    city: "London",
    country: "United Kingdom",
  },
  {
    name: "Budi",
    city: "Jakarta",
    country: "Indonesia",
  },
  {
    name: "Joko",
    city: "Surabaya",
    country: "Indonesia",
  },
];

let arrPeople = peoples.forEach((people: personalType, index: number) => {
  console.log(people.city);
});

console.log(arrPeople);
