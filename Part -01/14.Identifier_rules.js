// Indentifier Rules
/*
All javascript  variables must be identified with unique names (indentifiers).

1. Names can contain letters , digits , underscores , and dollar signs.(no space)

2.Names must begin with a letter.

3.Names can also begin with $ and _ .

4.Names are case sensitive (y and y are different variable).$

5.Reserved  words (like  javascript keywords ) cannot be used as names.

*/

/*
let price;

let price123;

let price$;

let price_;
*/
// let price-    it will give error as "-" as hyphen is not allowed

// let old price;  - it will give error as space is not allowed
// oldPrice - this is correct way

// correct way to write variable
/*
let age;
let _age;
let $age
*/

// Names are case sensitive
/*
let price = 5;
console.log(price); // 5
console.log(Price)// Price is not defined
// As price and Price are different.
*/

/*
let const = 5;
console.log(const); // SyntaxError: Unexpected token 'const'
// const is by default keyword we can't use it as variable.
*/

// camelCase  => way of writing identifiers.
/*
camelCase (JS naming convention)

snake_case

PascalCase
*/

// Let say we have to write full name.
/*
let fullName;
let full_name;
let FullName;
*/
