// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         super = the parent


class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    move(speed){
        console.log(`this ${this.name} can run at ${speed} mph`)
    }
    
    
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        
        this.runSpeed = runSpeed
    }
    run(){
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, fishSpeed){
        super(name, age);
        
        this.fishSpeed= fishSpeed
    }
    fish(){
        super.move(this.runSpeed);
    }
}
const rabbit = new Rabbit("rabbit", 1, 25);
const fish1 = new Fish("fich", 2, 30)
  











