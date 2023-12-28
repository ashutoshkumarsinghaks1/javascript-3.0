let color = "white";

if (color === "red") {
  console.log("stop");
} else if (color === "yellow") {
  console.log("slow down");
} else if (color === "green") {
  console.log("go!");
} else {
  console.log("traffic light is broken");
}

// output : traffic light is broken
// Pratice Qs
/*Create a system to calculate popcorn prices based on the size customer asked for:

if size is "XL", price is Rs 250
if size is "L",  price is Rs 200
if size is "M",  price is Rs 100
if size is "S",  price is Rs 50
*/
let size = "XL";

if (size === "XL") {
  console.log("price is Rs 250");
} else if (size === "L") {
  console.log("price is Rs 200");
} else if (size === "M") {
  console.log("price is Rs 100");
} else {
  console.log("price is Rs 50");
}

// output: price is Rs 250

let size = "S";

if (size === "XL") {
  console.log("price is Rs. 250");
} else if (size === "L") {
  console.log("price is Rs. 200");
} else if (size === "M") {
  console.log("price is Rs. 100");
} else {
  console.log("price is Rs. 50");
}

// output: price is Rs. 50
