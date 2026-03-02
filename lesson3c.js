// Javascript functions
// A function is a block code that performs a certain action/task.
// The simple structure of a function is given below:
// function keyword, name of the function, the parenthesis and the body of the function inside of curly braces.
function sayHello(){
    console.log("Hello there, Hope you are having a good day?")
}
// call/invoke function by use of the name of the funtion
sayHello()

// example 2
function sayGoodbye(){
    console.log("Good bye, have a nice day and a weekend ahead...")
}
// call the function
sayGoodbye()




console.log("================")
// NHIF CODE
function calculateContribution(income) {
    let contribution;

    if (income < 6000) {
        contribution = 150;
    } 
    else if (income >= 6000 && income <= 7999) {
        contribution = 300;
    } 
    else if (income >= 8000 && income <= 11999) {
        contribution = 400;
    } 
    else if (income >= 12000 && income <= 14999) {
        contribution = 500;
    } 
    else if (income >= 15000 && income <= 19999) {
        contribution = 600;
    } 
    else if (income >= 20000 && income <= 24999) {
        contribution = 750;
    } 
    else if (income >= 25000 && income <= 29999) {
        contribution = 850;
    } 
    else if (income >= 30000 && income <= 49999) {
        contribution = 1000;
    } 
    else if (income >= 50000 && income <= 99999) {
        contribution = 1500;
    } 
    else { // Over 100,000
        contribution = 2000;
    }

    return contribution;
}

// Example usage
let grossIncome = 18000;
let monthlyContribution = calculateContribution(grossIncome);

console.log("Monthly Contribution: Ksh " + monthlyContribution);

console.log("==================")
// Research on arrow function, functions with parameters and anonymous functions in javascript

// 1) ARROW FUNCTIONS (=>)
// a shorter way to write functions in javascript
const greet = () => {
    console.log("Hello");
};

// 2)FUNCTIONS WITH PARAMETERS
// Functions that accept input value/parameter to make them reusable
function greet(name) {
    console.log("Hello " + name);
}

greet("Victor");

// 3)ANONYMOUS FUNCTIONS
// functions without a name. 