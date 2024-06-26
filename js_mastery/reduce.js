// .reduce() = reduce the element of an array 
//             to a single value 

const prices = [5, 4, 3, 2, 1];


const total = prices.reduce(sum);
console.log(total);
// output is 105 

function sum(accumulator, element){
    return accumulator + element;
}

// other example

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);
// output is 95

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

const minimum = prices.reduce(getMin);
console.log(minimum);
//output is 50