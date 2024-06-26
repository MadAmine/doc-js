// constructor = special method for defining the 
//               propeties and methods of objects


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log("you drive ", this.model)}
}

const car1 = new Car('ford', 'Mustang', 2024, 'red');



