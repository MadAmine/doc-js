// Define a nested object
const nestedObject = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    },
    hobbies: ["Reading", "Traveling"],
    sayHello: function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  };
  
  // Accessing properties of the nested object
  console.log("Name:", nestedObject.name); // Output: John
  console.log("City:", nestedObject.address.city); // Output: New York
  console.log("Hobbies:", nestedObject.hobbies[0]); // Output: Reading
  
  // Adding a new property
  nestedObject.gender = "Male";
  console.log("Gender:", nestedObject.gender); // Output: Male
  
  // Modifying a property
  nestedObject.age = 35;
  console.log("Age:", nestedObject.age); // Output: 35
  
  // Calling a method
  console.log(nestedObject.sayHello()); // Output: Hello, my name is John and I'm 35 years old.
  
  // Looping through an array in the nested object
  console.log("Hobbies:");
  nestedObject.hobbies.forEach(hobby => {
    console.log("-", hobby);
  });
  
  // Nested object inside an array
  const users = [
    {
      username: "alice",
      email: "alice@example.com",
      address: {
        city: "London",
        country: "UK"
      }
    },
    {
      username: "bob",
      email: "bob@example.com",
      address: {
        city: "Paris",
        country: "France"
      }
    }
  ];
  
  // Accessing properties of objects in the array
  console.log("Username:", users[0].username); // Output: alice
  console.log("Email:", users[1].email); // Output: bob@example.com
  console.log("City:", users[1].address.city); // Output: Paris
  // Define a class with nested objects
class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    // Method to display information about the person
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
      console.log("Address:", this.address.city, ",", this.address.country);
    }
  }
  
  // Create instances of the Person class with nested objects
  const person1 = new Person("John", 30, { city: "New York", country: "USA" });
  const person2 = new Person("Alice", 25, { city: "London", country: "UK" });
  
  // Display information about the persons
  console.log("Person 1:");
  person1.displayInfo();
  console.log("Person 2:");
  person2.displayInfo();
  
  // Accessing and modifying nested properties
  console.log("City of Person 1:", person1.address.city); // Output: New York
  person1.address.city = "Los Angeles";
  console.log("Modified City of Person 1:", person1.address.city); // Output: Los Angeles
  
  // Adding a new property to the nested object
  person2.address.postalCode = "SW1A 1AA";
  console.log("Postal Code of Person 2:", person2.address.postalCode); // Output: SW1A 1AA
  