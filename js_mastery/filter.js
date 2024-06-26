// .filter() = creates a new aray by filtering
//            out elements


let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNum = numbers.filter(isEven);
let oddNum = numbers.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element% 2  !== 0;

}

const ages = [16, 17, 18, 19, 20, 60];

const adultes = ages.filter(isAdult);

const Children = ages.filter(isChildren);

function isAdult(element){
    return element >= 18;
}

function isChildren(element){
    return element < 18;
}