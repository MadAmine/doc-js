// Using var
var x = 10;
console.log("Initial value of x (var):", x); // Output: Initial value of x (var): 10

// Reassigning value to x using var
x = 20;
console.log("New value of x (var):", x); // Output: New value of x (var): 20

// Using const
const y = 5;
console.log("Initial value of y (const):", y); // Output: Initial value of y (const): 5

// Trying to reassign value to y (this will throw an error)
// Uncommenting the line below will result in a TypeError
// y = 10;
// so const cannot be reassign
// Using const with objects
const person = {
    name: "John",
    age: 30
};
console.log("Initial value of person (const):", person); // Output: Initial value of person (const): { name: 'John', age: 30 }

// Modifying a property of the person object
person.age = 35;
console.log("Modified value of person (const):", person); // Output: Modified value of person (const): { name: 'John', age: 35 }

// Adding a new property to the person object (this is allowed)
person.city = "New York";
console.log("Modified value of person with new property (const):", person); // Output: Modified value of person with new property (const): { name: 'John', age: 35, city: 'New York' }

// Using var
var x = 10;
console.log("Initial value of x (var):", x); // Output: Initial value of x (var): 10

// Reassigning value to x using var
x = 20;
console.log("New value of x (var):", x); // Output: New value of x (var): 20


// Reassigning value to y using let
y = 15;
console.log("New value of y (let):", y); // Output: New value of y (let): 15

// Using const
const z = 30;
console.log("Initial value of z (const):", z); // Output: Initial value of z (const): 30

// Trying to reassign value to z (this will throw an error)
// Uncommenting the line below will result in a TypeError
// z = 40;

// Using let in a block scope
{
    let blockScopedVar = "Inside block";
    console.log("Value of blockScopedVar inside block:", blockScopedVar); // Output: Value of blockScopedVar inside block: Inside block
}

// Trying to access blockScopedVar outside the block (this will throw a ReferenceError)
// Uncommenting the line below will result in a ReferenceError
// console.log("Value of blockScopedVar outside block:", blockScopedVar);




//var is function-scoped, hoisted, and allows redeclaration and reassignment.
//let is block-scoped, not hoisted until declared, allows reassignment
//but not redeclaration in the same block scope, and creates variables that can be reassigned.
//const is block-scoped, not hoisted until declared, does not allow
//reassignment or redeclaration in the same block scope, and creates variables that
//cannot be reassigned (though their properties can be modified in the case of objects and arrays).

