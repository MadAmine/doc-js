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

// String manipulation function (convert to uppercase)
function manipulateString(str) {
    return str.toUpperCase();
}

// Another string manipulation function (convert to lowercase)
function manipulateString2(str) {
    return str.toLowerCase();
}

// Boolean function to check if a string is empty
function isEmptyString(str) {
    return str === "";
}

// Example usage of functions with if statements
var name = "John";
var greeting = greet(name);
console.log(greeting); // Output: Hello, John!

var sum = addNumbers(10, 5);
console.log("Sum:", sum); // Output: Sum: 15

var number = 7;
if (isEven(number)) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

var num2 = 12;
if (isEven(num2)) {
    console.log("num is even");
} else {
    console.log('num is not even ')
}

var upperCaseString = manipulateString("hello");
console.log("Manipulated string (uppercase):", upperCaseString); // Output: Manipulated string (uppercase): HELLO

var lowerCaseString = manipulateString2("WORLD");
console.log("Manipulated string (lowercase):", lowerCaseString); // Output: Manipulated string (lowercase): world

var emptyString = "";
if (isEmptyString(emptyString)) {
    console.log("String is empty.");
} else {
    console.log("String is not empty.");
}
