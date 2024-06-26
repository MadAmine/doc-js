// forEach() = method used to iterate over the elements
//             of an array and apply a specific function (callback)

//             array.foreach(callback)



let numbers = [1, 2 , 3, 4];

numbers.forEach(display);

function display(element){

    console.log(element);
}



let array1 = ['abdou', 'erick'];

function double(element, index, array){
    array[index] = element * 2
}

array1.forEach(double);




