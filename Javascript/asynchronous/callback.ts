// Callback -> sebuah function yang dipanggil setelah melakukan sebuah proses,
// dalam kata lain, dipanggil setelah sebuah proses berjalan

// --- CONTOH 1

const buyer = (message: string, price: number) => {
  console.log("Pesan martabak dong? " + message + ": " + price);
};

// const seller = (callback) => {
//   console.log("Pesan martabak dong? ... (wait sedang dimasak ya)");
//   setTimeout(() => {
//     callback("Ok, martabak sudah selesai kaka", 25000);
//     //buyer(message, price)
//   }, 3000);
// };

const seller = (callback: (message: string, price: number) => void) => {
  // callback -> merepresentasikan fungsi yang punya parameter message, dan price
  console.log("Pesan martabak dong? ... (wait sedang dimasak ya)");
  setTimeout(() => {
    callback("Ok, martabak sudah selesai kaka", 25000);
    //buyer(message, price)
  }, 3000);
};

// seller(buyer);

// --- CONTOH 2

function doTask(callback: () => void) {
  console.log("Apakah tugasmu sudah selesai ?");
  callback();
  // callback sudah digantikan notifyWorker()
  console.log("Apakah udah beres ?");
}

function notifyWorker() {
  setTimeout(() => {
    console.log("Pekerjaan saya sudah selesai, kok!");
  }, 3000);
}

// doTask(notifyWorker);

// --- CONTOH 3

function driverOnline(callback: (message: string) => void) {
  console.log("Titik sudah sesuai maps ya, kak?");
  console.log("Pesanan sudah sesuai aplikasi ya, kak?");
  callback("Pesanan sudah sesuai aplikasi ya, kak?");
}

function userOnline(message: string) {
  if (message === "Pesanan sudah sesuai aplikasi ya, kak?") {
    console.log("Pesanan sudah sesuai, pak");
  }
  setTimeout(() => {
    console.log("Sudah, pak. Terima kasih ya!");
  }, 5000);
}

driverOnline(userOnline);
