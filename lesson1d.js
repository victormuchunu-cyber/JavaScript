// String Data Type
// A string is series/sequence of characters that are enclosed inside of quotation marks.
let name = "Victor Mwangi"
console.log("The name is: ", name)
console.log(typeof(name))

// floating point: This is a number with decimal
let quantity = 35.5
console.log("The quantity of sugar bought is: ", quantity)
console.log(typeof(quantity))

// Boolean : It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is James an adult? ", isAdult)
console.log("Is he registered as a voter? ", isRegistered)

console.log(typeof(isAdult))


// undefined : This is a data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is: ", county)


// Null data type: It is a data type that contains null values.
let username = null
console.log("What is the username: ", username)



// Object and Array Data type.



// A) Object data type: Store data in key value pairs.
let student = {
  name: "Victor",
  age: 22,
  course: "Computer Science",
  isGraduated: false
};

// How to access the values in an object.
// 1) Dot Notation
console.log(student.name);      // Victor
console.log(student.age);       // 22

// 2) Bracket Notation
console.log(student["course"]);     // Computer Science
console.log(student["isGraduated"]); // false



// B) Array data type: An array stores multiple values in a single variable. It uses index numbers starting from 0.
let fruits = ["Mango", "Banana", "Orange", "Apple"];

// How to access the values in an array
// 1) Using index numbers
console.log(fruits[0]);  // Mango
console.log(fruits[2]);  // Orange



// OBJECT INSIDE ARRAY
let users = [
  { name: "Joy", age: 20 },
  { name: "Mike", age: 25 }
];

// How to access the values in an object inside an array
console.log(users[0].name);  // Joy
console.log(users[1].age);   // 25


// ARRAY INSIDE OBJECT
let school = {
  name: "Nairobi School",
  students: ["Brian", "Ann", "Kevin"]
};

// How to access the values in an array inside an object
console.log(school.students[0]);  // Ann


