// closure = A function defined inside ofanother function,
//           the inner function has acces to the variables 
//           and scope of the outer function.
//           Allow for private variales and state maintenance
//          Used frequently in JS framework: React, Vue, Angulor

function outer (){
    let message = "hello";
    function inner(){
        console.log(message);
    }
    inner();
    return {inner};
}   
outer();
// creating a game 
function game(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}`);
    }
    function decreasScore(points){
        score -= points;
        console.log(`+${points}`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreasScore, getScore};
}

const game1 = game();
game1.increaseScore(5);

game1.increaseScore(4);

game1.decreasScore(4);
console.log(`the final results is ${getScore} pts`);





