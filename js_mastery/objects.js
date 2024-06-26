// objects = A collection of related properties and/or methods
//          can represent real world objects(people, products, places)


const person1 = {
    firstname : 'abdou',
    lastname : 'moustakim',
    age : 19,
    employed: true,
    sayHello : ()=> console.log("hello "),
}

console.log(person1.age);
console.log(person1.firstname);
console.log(person1.lastname);
person1.sayHello();
