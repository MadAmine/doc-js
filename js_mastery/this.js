//this = reference to the object where this is used 
//      (the object depends on the immediate context )
//      person.name = this.name

const person1 = {
    name : 'abdou', 
    age : 19,
    sayHello : function(){console.log( `Hello, my name is ${this.name} and I am ${this.age} years old.`)}

};

