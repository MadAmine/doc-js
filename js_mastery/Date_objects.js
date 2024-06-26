// Date objects = Objects that contains values 
//                that represent dates and times
//                These date objects can be changed and formated 


// getting current date 
const date = new Date();
console.log(date);
// customize date 

// Date(year, mounth, day, hour, minute, second, ms)
const date2 = new Date(2026, 0, 2, 3, 4, 5);
console.log(date2);

const date3 = new Date("2024-01-02T12:00:00Z")
 
// getting a given value from a date or time
// --------Example------------
const year = date.getFullYear();
const mounth = date.getMonth();
const datee = date.getDate();
const day = date.getDay();
const sec = date.getSeconds();




