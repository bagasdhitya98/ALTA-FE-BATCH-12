// --- CLASSES ---
class Motorbike {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  display(): void {
    console.log("Function displays engine is : " + this.engine);
  }
}

let randomObj = new Motorbike("XXSY1");

// console.log("Reading attribute value Engine as : " + randomObj.engine)
// Output -> Reading attribute value Engine as : XXSY1
// randomObj.display()
// Output -> Function displays engine is : XXSY1

// --- INHERITANCE ---

class Fruit {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}

class Banana extends Fruit {
  price: number;
  constructor(color: string, price: number) {
    super(color);
    this.price = price;
  }

  display(): void {
    console.log("Color of Banana fruit is : " + this.color);
    console.log("Price of Banana fruit is : " + this.price);
  }
}

let fruitObj = new Banana("Yellow", 14000);
fruitObj.display();

// --- INTERFACE ---

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  getFullName(): string;
}

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person);
console.log(person.getFullName());
