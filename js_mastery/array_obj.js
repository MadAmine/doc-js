const fruits = [{name :"apple", color: "red", calories : 95}, 
                {name :"bannana", color: "brown", calories : 22}, 
                {name :"tart", color: "white", calories : 88},
                {name :"orange", color: "green", calories : 88}];

//accesing a property inside of an onjects
console.log(fruits[0].name);
// pushing an objects (add anew objects in the end)

fruits.push({name :"PINEAPPLE", color: "red", calories : 75});

// remove an objects in the end
fruits.pop;
// using slice
fruits.slice(1, 2);

// for each
fruits.forEach(fruit => console.log(fruits.name));

// map
const fruitNames = fruits.map(fruits => fruits.name);

// FILTER 
const yellowFruits = fruits.filter(fruit => fruit.color= "white");
// reduce ()

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories? fruit: max);

