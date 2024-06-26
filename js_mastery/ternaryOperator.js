// ternary operator = a shortcut to if{} and else {} statement
//                    helps to assign a variable based on a condition
//                   condition ? codeIfTrue : codeIfFalse;


let age = 21;
const message = age >= 18 ? 'your an adult': "you're a minor";
console.log(message);



// ------------other example-------------

let time = 16;
let greeting = time < 12 ? "Good morning!": "good afternoon!";

console.log(greeting);


// other example 
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}
  
console.log(getFee(true));
// Expected output: "$2.00"
  
console.log(getFee(false));
// Expected output: "$10.00"
  
console.log(getFee(null));
// Expected output: "$10.00"
  










