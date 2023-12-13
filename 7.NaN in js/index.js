// NaN in JS

// The NaN global Property is a value representing "Not-A- Number"

/*

1. 0/0
2. NaN - 1
3  NaN * 1
4. NaN / 1
5. NaN + 1
6. NaN + NaN

*/
// Javascript ke anadar "NaN" ek Number hai but wo jis value ko dikha raha hai wo ek number nhi h.

0 / 0;
console.log(0 / 0); // NaN

console.log(typeof NaN); //Number

console.log(NaN + 1); // NaN
console.log(NaN * 1); // Nan
console.log(NaN - 1); // NaN
console.log(NaN / 1); // NaN
console.log(NaN + NaN); // NaN
console.log(NaN * NaN); // NaN
