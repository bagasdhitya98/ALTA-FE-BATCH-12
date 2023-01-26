// Jenis - jenis looping di javascript :
// 1. for loop
// 2. while loop
// 3. for in
// 4. for of
// 5. forEach
// 6. map -> akan sering digunakan di FE

// for(init; condition; post){
//     //your code here
// }

// ---- FOR LOOP ----
// -- SINGLE LOOP --
//increment
function forLoopIncrement(number) {
  for (let i = 0; i <= number; i++) {
    console.log("result of increment : ", i);
  }
}

//decrement
function forLoopDecrement(number) {
  for (let i = 0; i >= number; i--) {
    console.log("result of decrement : ", i);
  }
}

// forLoopIncrement(10);
// forLoopDecrement(-10);

//cara kerja nested for loop berurutan
//mulai dari for ke 1, for ke 2, dst.
//for ke 2 dipengaruhi for sebelumnya
// -- NESTED LOOP --
function nestedForLoop(number) {
  for (let i = 0; i < number; i++) {
    console.log("Looping pertama ", i);
    for (let j = 0; j < number; j++) {
      console.log("Looping kedua ", j);
    }
  }
}

// nestedForLoop(5);

// ---- WHILE LOOP ----
function whileLoop(number, start) {
  while (start < number) {
    console.log("start ", start);
    start++;
  }
}

// whileLoop(10, 0);

//cara kerja nested while loop berurutan
//mulai dari while ke 1, while ke 2, dst.
//while ke 2 dipengaruhi while sebelumnya
// -- NESTED WHILE --
function nestedWhileLoop(number) {
  let i = 0;
  while (i < number) {
    console.log("Looping pertama ", i);
    let j = 0;
    while (j < number) {
      console.log("Looping kedua ", j);
      j++;
    }
    i++;
  }
}

// nestedWhileLoop(5);

// ---- DO WHILE LOOP ----
function doWhileLoop(number) {
  let i = 0;
  do {
    console.log(`cetak urutan nomor ke ${i}`);
    i++;
  } while (i < number);
}

// doWhileLoop(10);

//cara kerja nested do while loop berurutan
//mulai dari do ke 1, do ke 2, dst.
//do ke 2, dipengaruhi dari do sebelumnya
function nestedDoWhileLoop(number) {
  let i = 0;
  do {
    console.log("Looping pertama ", i);
    let j = 0;
    do {
      console.log("Looping kedua ", j);
      j++;
    } while (j < number);
    i++;
  } while (i < number);
}

// nestedDoWhileLoop(5);

// ---- CONTINUE & BREAK ----
function forContinueBreak(number) {
  for (let i = 0; i < number; i++) {
    if (i == 1) {
      continue; //minta tolong program untuk melanjutkan iterasi atau looping berikutnya tanpa perlu memproses perintah/code selanjutnya
    }
    if (i > 5) {
      break; //minta tolong program untuk menghentikan proses iterasi atau looping, fungsi ini mirip sama return
    }
    console.log(i);
  }
  console.log("Stop looping");
}

function whileContinueBreak(number, start) {
  while (start < number) {
    start++;
    if (start == 1) {
      continue;
    }
    if (start > 5) {
      break;
    }
    console.log("start ", start);
  }
  console.log("Stop looping");
}

// forContinueBreak(11);
// whileContinueBreak(10, 0);
