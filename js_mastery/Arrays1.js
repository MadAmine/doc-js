let fruits = ["apple", "banana", "avocado"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[1]);
console.log(fruits[1]);
console.log(fruits[1]);

fruits.push('cocunut');
fruits.pop();
fruits.unshift("mango");
fruits.shift();

for(let i = 1; i < fruits.length; i+=2){
    console.log(fruits[i]);
}



