// arrow functions = a concise way to write function expression 
//                  good for simple function that you use only once 
//                   (parameters)=> some code



const hello = (name) => {console.log("hello")};

hello('abdou');
// other example 

setTimeout(() => console.log('hello'), 3000);


const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element)=>  Math.pow(element, 2));
console.log(squares);

const evenNums = numbers.filter((element)=> element % 2 === 0);
console.log(evenNums);

