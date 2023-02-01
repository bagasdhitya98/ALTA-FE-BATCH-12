// Promise -> sebuah objet yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi (fulfill)
// atau gagal (reject) yang berdasarkan pada operasi async dan bisa menghasilkan sebuah output

// --- CONTOH 1

// const promise = new Promise((resolve, reject) => {
//   let condition = true;
//   setTimeout(() => {
//     if (condition === true) {
//       resolve("Task completed successfully!");
//     } else {
//       reject("Task not completely yet!");
//     }
//   }, 3000);
// });

// promise
//   .then((res) => {
//     console.log("result : ", res); // then -> akan dieksekusi jika operasi async dari function promise() berhasil/resolve
//   })
//   .catch((err) => {
//     console.log("error : ", err); // catch -> akan dieksekusi jika operasi async dari function promise() gagal/reject
//   });

// --- CONTOH 2

interface promiseType {
  data: string | null;
  message: string;
}

const bentengTakeshi = new Promise<promiseType>((resolve, reject) => {
  console.log("--- BENTENG TAKESHI MULAI! ---");
  console.log("Doakan aku ya!");
  let score = Math.random() * 100;
  console.log("Perlombaan dimulai ...");
  setTimeout(() => {
    console.log("score : ", score);
    if (score > 70) {
      if (score > 80) {
        resolve({
          data: "Congrats",
          message: "Hoki banget, kamu!",
        });
      } else {
        resolve({
          data: "Congrats",
          message: "Selamat, kamu berhasil menaklukkan benteng takeshi",
        });
      }
    } else {
      reject({
        data: null,
        message: "Kamu belum berhasil, jangan menyerah!",
      });
    }
  }, 5000);
});

// jika promise sendiri, artinya dieksekusi di dalam function untuk menghasilkan resolve dan rejectnya
// jika dengan async await, artinya function dieksekusi terlebih dahulu untuk menghasilkan resolve dan reject, baru dilempar hasilnya ke function await

const playingBentengTakeshi = () => {
  let strVariable = "";
  bentengTakeshi
    .then((result) => {
      strVariable = result.message;
      console.log(result.data);
      console.log(result.message);
    })
    .catch((error) => {
      strVariable = error.message;
      console.log(error.data);
      console.log(error.message);
    });
  console.log(strVariable);
};

// -- Await -> proses yang dijalankan untuk menunda jalannya asynchronous hingga proses dari await tersebut dieksekusi

const playingAwait = async () => {
  let strVariable = "";
  await bentengTakeshi
    .then((result) => {
      strVariable = result.message;
      console.log(result.data);
    })
    .catch((error) => {
      strVariable = error.message;
      console.log(error.data);
    });
};

playingAwait();
