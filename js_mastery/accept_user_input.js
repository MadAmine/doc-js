


// window prompt

let userneme;

document.getElementById('mySubmit').onclick = function(){
    userneme = document.getElementById("myText").value;
    console.log(userneme);
    document.getElementById('myH1').textContent = "Hello ${userneme}"
    
}

