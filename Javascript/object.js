// ---- OBJECT ----

// -- MENGAKSES VALUE KEY DI DALAM OBJECT
let user = {
  name: "John Doe", // "name" adalah sebuah key yang menyimpan value "John Doe"
  age: 25, // "age" adalah sebuah key yang menyimpan value 25
};

// console.log("name of user is : ", user.name); //mengakses key name di dalam object
// console.log("age of user is : ", user.age); //mengakses key age di dalam object

// -- MENAMBAHKAN VALUE KEY DI DALAM OBJECT
let person = {
  name: "Tom",
  favoriteLanguage: "Javascript",
  workingExperience: 5,
};

person["address"] = "Orchard road"; // menambahkan value key di dalam object
// console.log("person after added : ", person);

// -- MEMPERBARUI VALUE KEY DI DALAM OBJECT
let laptop = {
  type: "macbook air",
  year: 2018,
  processor: "intel core i5",
};

laptop["year"] = 2020; // memperbarui value key di dalam object
// console.log("laptop after updated : ", laptop);

// -- MENGHAPUS KEY DI DALAM OBJECT
let pet = {
  type: "cat",
  name: "Loki",
  age: 4,
};

delete pet.age; // menghapus value key di dalam object
// console.log("pet after deleted : ", pet);

// -- MEMERIKSA APAKAH KEY ADA DI DALAM OBJECT ATAU TIDAK
let listArray = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

let propertyNotPresent = listArray["e"]; // memeriksa apakah sebuah value ada di dalam list key yang terdaftar pada sebuah object
// console.log("result is  : ", propertyNotPresent);

// -- MEMERIKSA TIPE DATA
let superHero = {
  name: "dr. Strange",
  city: "Manhattan, NY",
  villain: "Thanos",
};

let result = typeof superHero; // memeriksa tipe data
// console.log("calling typeof on an object gives us : ", result);

// -- NESTED OBJECT
let personal = {
  name: "Tom Holland",
  title: "Student",
  address: {
    street: "Park avenue",
    city: "Queens, NY",
    state: "NY",
    zip: 18909,
  },
  hobbies: [
    "Playing football",
    "Feeding pet",
    "Learning a new programming language",
  ],
};

// -- MENGAKSES NESTED OBJECT
let accessStreet = personal.address.street; // mengakses value object di dalam nested object
let accessHobby = personal.hobbies[1]; // mengakses value array di dalam nested object
// console.log("result of street is : ", accessStreet);
// console.log("result of hobby is : ", accessHobby);

// -- MENAMBAHKAN NESTED OBJECT
personal.address["country"] = "US"; // menambahkan value object di dalam nested object
personal.hobbies.push("Fishing"); // menambahkan value array di dalam nested object
// console.log("result after added address", personal.address);
// console.log("result after added hobbies : ", personal.hobbies);

personal.address["city"] = "Miami, FL"; // mengupdate value object di dalam nested object
personal.hobbies[0] = "Playing volley ball"; // menambahkan value array di dalam nested object
// console.log("result after updated address : ", personal.address);
// console.log("result after updated hobbies : ", personal.hobbies);

delete personal.address.street; // menghapus key object di dalam nested object
delete personal.hobbies[1]; // menghapus key array di dalam nested object
// console.log("result after deleted street : ", personal.address);
// console.log("result after deleted hobbies : ", personal.hobbies);

// -- LOOPING OBJECT --
let motorcycle = {
  type: "Scooter",
  name: "Honda",
  year: 2021,
};

for (let key in motorcycle) {
  //   console.log(key); // melakukan looping terhadap key dari object
  //   console.log(motorcycle[key]); // melakukan looping terhadap value dari object
}

// -- CLONING OBJECT --
let marvel = {
  character: "Ironman",
  name: "Tony Stark",
  company: "Stark Industries",
};

let duplicate1 = Object.assign({}, marvel); // copy menggunakan object assign
let duplicate2 = { ...marvel }; // copy menggunakan spread operator
let duplicate3 = JSON.parse(JSON.stringify(marvel)); // copy menggunakan JSON method (efektif untuk melakukan deep copy atau parse ke string)
// console.log(duplicate1);
// console.log(duplicate2);
// console.log(duplicate3);
