
// callback = a function that is passed as an argument
//            to another function.

hello(goodbye);

function hello (callback){
    console.log("hello");
    callback();
}


 
function goodbye(){
    console.log("goodbye");
}



// function with 3 parametters 

sum(dispaleConsole, 1, 2);


function sum(callback, x, y){
    let result = x+ y;
    callback(result);
}



function dispaleConsole(result){
    console.log(result);
}