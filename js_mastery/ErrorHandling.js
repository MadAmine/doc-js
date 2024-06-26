try {
    console.log('hello world');
}
catch(error){
    console.error(error);
}
finally{
    console.log("this always execute!")
}
console.log('helllo to you to !')

try{
    const dividend = window.prompt('Enter a dividend: ');
    const divisor = window.prompt('Enter a divisor: ')
    if (divisor == 0){
        throw new Error('the number should be more than 0');
    }

    const result = dividend / divisor;
    console.log(result);
}
catch (error){
    console.error(error);
}
finally{
    console.log('yu have reached the finnaly section!')
}

console.log('you have reached the end')
