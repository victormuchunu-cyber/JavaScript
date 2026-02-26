// Comparison Operators
// They usually evaluate to a boolean answer.
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 === number2)

// Tripe equal sign-> If either is different → it returns false.It means strict equality.



// Logical operators are used to evaluate two or more to give a boolean answer.
// Logical AND (&&) - it evaluates to true if and only if all of the conditions/statemnets are true.
console.log(number1 < number2) && (number2 > number1) && (number3 > number2)

// Logical OR (||)- It evaluates to true if one of the condition is true
console.log((number1 > number2) || (number2 > number1))

// Logical NOT (!)- It is used to negate a condition/statement
console.log(!(number1 < number2))
