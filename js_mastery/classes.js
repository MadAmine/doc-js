// class = (ES6 feature) provides a more structured and cleaner way to
//        work with objects compared to traditionel constructor function
//        ex: statice keywork, encapuslation, inheritance 


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product: ${this.name}!`);
        console.log(`price: ${this.price}!`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("tshirt", 50);
const product2 = new Product("jeans", 60);
const product3 = new Product("hat", 15);
// lets display the products info
product1.displayProduct();


// working with  statice keyword :

class User{
    static UserCount = 0;
    constructor(username){
        this.username = username;
        User.UserCount++;
    }
    sayHello(){
        console.log(`hello, my username is ${this.username}!`)
    }
    static getUserCount(){
        console.log(`there are ${User.UserCount} `)
    }

}
const user1= new User("Sane");
console.log(user1.username);
console.log(User.UserCount);

