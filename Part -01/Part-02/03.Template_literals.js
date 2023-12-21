// Template Literals

// They are used  to add embedded expressions in a string .

let a = 5;

let b = 10;

console.log(`Your pay ${a + b} rupees`); // Your pay 15 rupees

let pencilPrice = 10;

let erasorPrice = 5;

let output = "The total price is :" + (pencilPrice + erasorPrice) + " Rupees.";
console.log(output); // The total price is :15 Rupees.
console.log("The total price is :", pencilPrice + erasorPrice, "Rupees"); //The total price is : 15 Rupees

// The easier way : back tick ``

console.log(`The pencil price is : ${pencilPrice}`); //The pencil price is : 10

console.log(`The total price is :${pencilPrice + erasorPrice}`); // The total price is :15
