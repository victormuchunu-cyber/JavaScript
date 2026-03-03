// Anonymous Functions in Javascript
// These are functions that exist without a name.

// Below is an example of such functions:
// The below function shall take the name of the variable they are contained in.

const greet1 = function(){
    console.log("Hello there, hope your Monday is fine...")
}

greet1();


// Below is another anonymous function.
(function(){
    console.log("Welcome to the world of programming")
})();



// Read on arrow function with and without parameters.
// 1) Arrow Function without parameters-Used when the function doesn’t need input.
const greet = () => {
    console.log("Hello");
};

greet();

// 2) Arrow Function with parameters-Used when the function needs input.
// a)One parameter (no parentheses needed)
const square = num => num * num;

console.log(square(4)); // 16

// b)Multiple parameters (parentheses required)
const add = (a, b) => a + b;

console.log(add(5, 3)); 

// c)With multiple lines of logic
const calculate = (a, b) => {
    let sum = a + b;
    return sum * 2;
};

// research on modules in Javascript.
// Modules allow you to split your code into separate files and reuse them.

// Instead of writing everything in one file, you export what you need and import it elsewhere.
// 1) Exporting from a file
// 2) Importing in another file

// Module Types
// ES Modules (ESM) – modern standard (import/export)
// CommonJS – used in older Node.js