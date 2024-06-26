// sort() = methode used to start element of an array in place,
//         Sorts element as astrings in lexicographic order, not alphabetical
//         lexicographical = (alphabet + numbers + simbols)as strings

// using alphabetical order 
let fruits = ["apple", 'orange', "cocunut", "pineapple"];
fruits.sort();
console.log(fruits);
// using NUMBERS
let num = [4, 5, 3, 0, 1, 7, 2];
num.sort((a, b) => a - b);
console.log(num);

// sorting an objects
const people = [{name : 'werner', age : 26, goals: 2}, 
                {name : pedri, age : 21, goals : 6}, 
                {name : vinil9ard, age : 24, goals: 21}, 
                {name: "messi", age: 37, goals : 10000000000000}];


people.sort((a, b) => a.age- b.age);
console.log(people);
// IF U NEED TO SORT BY A PROPERTY THAT CONTAINS A STRING WITHIN AN OBJECTS
people.sort((a, b) => a.name.localeCompare(b.name));


