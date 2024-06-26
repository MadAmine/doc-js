
// For loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration", i); // Log the current iteration number
}
console.log(""); // Empty line for separation

// While loop
console.log("While loop:");
let j = 0; // Initialize the loop variable outside the loop
while (j < 5) { // Loop condition: keep looping as long as j is less than 5
    console.log("While loop iteration", j); // Log the current iteration number
    j++; // Increment the loop variable to avoid an infinite loop
}
console.log(""); // Empty line for separation

// Using for loop to iterate over an array
console.log("For loop with array:");
const fruits = ["apple", "banana", "orange", "grape", "watermelon"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]); // Log each fruit in the array
}
console.log(""); // Empty line for separation

// Using while loop to find the factorial of a number
console.log("While loop for factorial:");
let number = 5;
let factorial = 1;
let k = 1;
while (k <= number) {
    factorial *= k; // Multiply factorial by the current value of k
    k++; // Increment k so that is not an infinite loop
}
console.log("Factorial of", number, "is", factorial); // Log the factorial of the number
