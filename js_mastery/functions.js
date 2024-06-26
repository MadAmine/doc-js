// Function to greet a person
function greet(name) {
    return `Hello, ${name}!`;
}

// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// String manipulation function
function manipulateString(str) {
    return str.toUpperCase();
}
function manipulateString2(str) {
    return str.toLowerCase()
}
// Boolean function to check if a string is empty
function isEmptyString(str) {
    return str === "";
}
function main4(world){
    var main = 'abdo'
    main.toUpperCase
    return main, world
}

// Example usage of functions
var name = "John";
var greeting = greet(name);
console.log(greeting); // Output: Hello, John!

var sum = addNumbers(10, 5);
console.log("Sum:", sum); // Output: Sum: 15

var number = 7;
var isNumberEven = isEven(number);
console.log("Is number even?", isNumberEven); // Output: Is number even? false

var upperCaseString = manipulateString("hello");
console.log("Manipulated string:", upperCaseString); // Output: Manipulated string: HELLO

var emptyString = "";
var isEmpty = isEmptyString(emptyString);
console.log("Is empty string?", isEmpty); // Output: Is empty string? true
