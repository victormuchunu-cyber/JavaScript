// Functions with parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that can be reusable through out a program


function greeting(name){
    console.log("Hello ", name,"How have you been?")
}

greeting("Victor Mwangi")
greeting("John James")
greeting("Kiarie Lewis")

console.log("=========================")
// Below is a function with parameters to calculate the sum of two numbers.
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is: ", sum)
}


addition(45, 60)
addition(90, 50)
console.log("=========================")
// By use of a function that accepts parameters Calculate the area of a triangle whose base is 20 and height is 12cm.
function triangleArea(base, height){
    area = (base * height)/2
    console.log("The area is: ", area)
}
triangleArea(20, 12)

console.log("=========================")
// Find the simple interest given the principle as 50,000, rate 5% and time 8years.
function simpleInterest(principle, rate, time){
    interest = (principle * rate *time)/100
    console.log("The simple interest is: ", interest)
}
simpleInterest(50000, 5, 8)