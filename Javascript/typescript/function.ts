
function checkAge(num: number): string{
    if(num < 17){
        return "You're too young"
    } else if (num <= 17 && num >= 21){
        return "Middle age"
    } else {
        return "Unknown"
    }
}

// name, age -> argumen yang wajib diisi ketika function dipanggil
// address? -> argumen yang opsional diisi (tidak mempengaruhi pemanggilan function)
function greetingSelf(name: string, age: number, address?: string, id: number = 1): string{
    if(address != null){
        return `Id. ${id} My name is ${name}, I'm ${age} years old and address ${address}`
    } else {
        return `Id. ${id} My name is ${name}, I'm ${age} years old`
    }
}

// console.log(checkAge(18))
// console.log(greetingSelf("John Doe", 21))
// console.log(greetingSelf("John Doe", 25, "Bekasi"))

// --- LAMBDA FUNCTION ---

const sumOfNumber = (x: number, y: number) => {
    const result = x + y;
    return result
}

// console.log(sumOfNumber(10, 5))
// console.log(sumOfNumber(7, 8))

// --- NEVER ---

function throwError(errorMessage: string): never {
    throw new Error(errorMessage)
}

function keepProcessing(): never {
    while(true){
        console.log("Infinite loop")
    }
}

function func(){
    return throwError("Error infinite loop!")
}

// console.log(func())

// --- VOID ---
function warnUser():void{
    console.log("This is my warning message") // kenapa ada undefined ketika cetak ini? karena function tidak direturn
    // return "This is my warning message" // jika ingin menghilangkan undefined, maka void harus diganti string kemudian direturn
}

let unknown: void = undefined

function tryNumber(input: number){
    if(input > 5){
        return "bilangan lebih dari 5"
    } else {
        return warnUser()
    }
}

// console.log(tryNumber(7))
// console.log(tryNumber(3))

// --- ANONYMOUS FUNCTION ---
const message = function(){
    return "lorem ipsum, dolor amet"
}

// bentuk lain dari function
// const message = () => {}

console.log(message())