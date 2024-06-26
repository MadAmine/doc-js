// function expretion = a way to define functions as 
//                       values or variables 




const hello = function(){
    console.log("hello");
}
hello();
//output :hello 


setTimeout(hello, 3000);
//output : hello with a dellay of 3 sec
 
//creating a func as an argument or treat it as a value

setTimeout(function(){
    console.log("hello");3000
});
// output is hello with a dellay of 3 sec

// other example


const numbers = [1, 2, 3, 4];

const powe = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(powe);


