// Practice Qs
/*
1. Declare your name as a string and print its length in Js.
2. Declare  your first name as string and print its first character.
3. Declare your first name as string and prints its last character.
4. What is the output of following code.
     "delhicollege"+123
5.What are lengths  of an empty string and a string with a single space?
 */

// 1.
let myName = "Ashutosh Kumar Singh";
console.log(myName.length); // 20

// 2.
let fistName = "Ashutosh";
console.log(fistName[0]); // A

// 3.
let lastName = "Singh";
console.log(lastName[4]); //h
console.log(fistName[fistName.length - 1]); // h
// 4.
console.log("delhicollege" + 123); //delhicollege123

// 5.
let empty = "";
console.log(empty.length); // 0

let empty1 = " ";
console.log(empty1.length); // 1
