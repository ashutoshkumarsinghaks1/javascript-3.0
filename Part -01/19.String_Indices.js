//  String Indices

let name = "TONY STARK";
console.log(name); // TONY STARK

// TONY STARK => INDEX T=>0 , O=>1 , N=>2, Y=>3 , " " =>4, S=> 5, T=>6 ,A=>7,R=>8 , K=> 9

console.log(name[0]); // T
console.log(name[1]); // 0
console.log(name[2]); // N
console.log(name[3]); // Y
console.log(name[4]); // " "
console.log(name[10000]); // undefined

console.log(name.length); // 10
console.log(typeof name.length); // number

console.log(name[name.length]); //undefined   //[name.length] = 10
console.log(name[name.length - 1]); // K
console.log(name[name.length - 2]); // R
console.log(name[name.length - 3]); // A
console.log(name[name.length - 4]); // T
console.log(name[name.length - 5]); // S

console.log("Ashutosh".length); // 8
console.log("Ashutosh"[7]); // h
console.log("Ashutosh"[6]); // s
console.log("Ashutosh"[0]); // A

//***** Concatenation ***** */
// adding strings together

// "tony" + " " + "stark" = "tony stark"
// "tony" + 1 = "tony1"

console.log("tony" + " " + "stark"); // tony stark

let firstName = "tony";
let lastName = "stark";
let fullname = firstName + lastName;
console.log(fullname); //tonystark
