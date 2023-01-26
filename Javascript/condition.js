//---- NESTED IF ----

let v1 = 400;
let v2 = 700;

// HINT PENTING!
// jika persyaratan if pertama tidak dipenuhi, maka akan langsung terlempar ke block else
// contohnya seperti dibawah

function checkV(numberA, numberB) {
  if (numberA === 400) {
    if (numberB === 700) {
      console.log("Value of v1 is 400 and v2 is 700\n");
    } else {
      console.log("Value numberB invalid");
    }
  } else {
    console.log("Value numberA invalid");
  }
}

// checkV(300, v2);

//---- ELSE IF ----

let hour = 15;

// HINT PENTING!
// jika persyaratan if pertama tidak dipenuhi, maka akan langsung dilempar ke block else-if
// jika persyaratan else-f tidak dipenuhi, maka akan langsung dilempar ke block else

function checkHour(hour) {
  if (hour < 12) {
    console.log("Halo, selamat pagi!");
  } else if (hour < 18) {
    console.log("Halo, selamat sore!");
  } else {
    console.log("Halo, selamat malam!");
  }
}

// checkHour(13);
// checkHour(18);
// checkHour(20);

//---- TERNARY OPERATOR ----
let age = 20;

function ternaryDrive(age) {
  //   if (age > 17) {
  //     canDrive = "yes";
  //     return canDrive;
  //   } else {
  //     canDrive = "no";
  //     return canDrive;
  //   }

  let canDrive = age > 17 ? "yes" : "no";
  return canDrive;
}

// console.log(ternaryDrive(18));

let temperature = 34;

function ternaryTemperature(temperature) {
  // if (temperature > 36){
  //     return "you're too hot"
  // } else if (temperature > 32 && temperature <= 36){
  //     return "you're normal"
  // } else {
  //     return "you're too cool"
  // }

  let result =
    temperature > 36
      ? "you're too hot"
      : `${
          temperature > 32 && temperature <= 36
            ? "you're normal"
            : "you're too cool"
        }`;
  return result;
}

console.log(ternaryTemperature(30));

// BACKTIK AND LITERAL TEMPLATE
let number = 20;
console.log(`My name is ${number}`);

//---- SWITCH CASE ----

function switchCaseTraffic(signal) {
  switch (signal) {
    case "red":
      console.log("stop");
      break;
    case "orange":
      console.log("idle");
      break;
    case "green":
      console.log("go away");
      break;
    default:
      console.log("unknown signal");
      break;
  }
}

// switchCaseTraffic("orange");
// switchCaseTraffic("blue");

function switchCasePlacement(number) {
  switch (number) {
    case 1:
      console.log("congrats, you're numba wan");
      break;
    case 2:
      console.log("not bad for second place");
      break;
    case 3:
      console.log("okay, nope");
      break;
    default:
      console.log("hmmm.. try again");
      break;
  }
}

function switchCasePlacementTernary(number) {
  const result =
    number === 1
      ? "congrats, you're numba wan"
      : number === 2
      ? "not bad for second place"
      : number === 3
      ? "okay, nope"
      : "hmm.. try again";
  return result;
}

switchCasePlacement(3);
switchCasePlacement(4);
console.log(switchCasePlacementTernary(3));
console.log(switchCasePlacementTernary(4));
