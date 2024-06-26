// destructuring = extract values from arrays and objects
//                 then assign them to variables in a conveniant way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring


// ------------Example 1-----------
//SWAP THE VALUE OF TWO VARIABLES 

let a = 1;
let b = 2;

[a, b]= [b, a]
console.log(a);
// output is 2
console.log(b);
// output is 1

// -------------Example 2-----------
// SWAP 2 ELEMENT IN AN ARRAY

const colors = ["red", 'blue', 'black'];
[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors);
// output ["black", 'blue', 'red']

// -------------Example 3--------
// ASSIGN ARRAY TO VARIABLES 

const colors1 = ['red', 'green', 'blue', 'black', 'white'];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors1;
console.log(firstColor); 
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); 
// output : frist color : red , second color : green , and so on, extraColor = [black, white]

// --------------Example 4------------------
// Extract Values from objects 
const person1 = {
    firstname : 'patric',
    lastname :'betdavid',
    age : 30,
    job: true,
};
const person2 = {
    firstname : 'patric',
    lastname :'star',
    age : 30,
    job: false,
};
const [firstname,lastname,  age, job] = person1;
console.log(firstname);
// output : patric

// --------------Example 5-----------------
// DESTRUCTURING IN FUCTION PARAMETERS 
function person({firstname, lastname, age, job= 'unemployed'}){
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(job);



}

person(person1)