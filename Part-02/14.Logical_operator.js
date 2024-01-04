// Logical operators
//logical operators  to combine expressions

// && Logical AND           (exp1)&&(exp2)

/*
console.log(true && true);    //true
console.log(true && false);   //false
console.log(false && false);  //false
console.log(false && false);  //false
*/

/*
console.log((5 > 3) && (3>1)); // true
console.log((5 > 3) && (3<1)); // false
console.log((5 < 3) && (3>1)); // false
console.log((5 < 3) && (3<1)); // false
*/

/*
let marks = 90;

if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}


//output:
pass
A+
*/

/*
let marks = 75;

if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}


// output: blank nothing

*/

/********* OR operator */

// ||
// OR operator me ek bhi true rahega to true hoga , false kewal dono false case me hoga.

/*
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // true
*/

/*
let marks = 75;

if(marks >= 33 || marks >= 80){
    console.log("pass");
    console.log("A+");
}

// output:
pass
A+
*/

//**********Logiacal Not(!) */
// (!)  logical Not  (!exp)
// it gives reverse of the the actual answer

/*
console.log(!true); // false
console.log(!false); // true

console.log(!(5 < 3));  // true
*/

/*
let marks = 75;

if(!(marks < 33 )){
    console.log("pass");
    console.log("A+");
}


// ouput:
pass 
A+

*/

/*
let marks  =  75;

if((marks > 33 &&  marks <= 80) || !false){
    console.log("pass");

}

// output: pass

*/

let marks = 95;

if (marks > 33 && marks <= 80 && !false) {
  console.log("pass");
}

// output : nothing blank

// 95 > 33 true , 95 <= 80 false,
// true && false => false
// false && !false
// false && true => false
// thats why "pass" will not show in output.
