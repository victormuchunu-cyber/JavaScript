// While loop
// Below is a simple syntax of the while loop
// 1. Initialization of a variable.
// 2. While keyword.
// 3. Condition to be checked.
// 4. Body of the while loop
// 5. Increment/decrement

let i = 0;

while (i <= 10) {
    console.log("The new value of i is: ", i);
    i++;
}


console.log("=====================")
// Come up with a Js example of a map loop
// creates a new array
const numbers = [1, 2, 3];

const squared = numbers.map(num => num * num);

console.log(squared);

console.log("===================")


// Task: Write a for loop to print all odd numbers from 1 to 19.

for (let i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


console.log("===================")
// Task: Write a for loop to count down from 10 to 1 and print the numbers in the console
for (let i = 10; i >= 1; i--) {
    console.log(i);
}