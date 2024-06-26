//setTimeout() = function in JavaScript that allows you to schedule
//      the execution of a function after an amount of time (milliseconds)
//       Times are approximate (varies based on the workload of the JavaScript

//               setTimeout(callback, delay)

function sayHello(){
    window.alert('hello');

}

setTimeout(sayHello, 3000);


//using anonimous function

setTimeout(function(){ console.log('hello')}, 4000);
//using arrow function

setTimeout(() => window.alert("helo"), 5000);


// clearTimeout(timeoutId) = can cancel a timeout before it triggers
const timeoutid =  setTimeout(() => window.alert("helo"), 5000);
clearTimeout(timeoutId);
