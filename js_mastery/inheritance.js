// inheritance = allows a new class to inherit properties and methods 
//             from an existing class(parent -> child)
//             helps with code reusability


class Animal{
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating!`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping!`);
    }
}

class Rabbit extends Animal{
    name = 'rabbit';
    run(){
        console.log(`this ${this.name} is running!`)
    }
}

class Fish extends Animal{
    name= "fish";
    swim(){
        console.log(`this ${this.name} is swiming!`)
    }
}


const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
