// Method chaining = Calling one methode after another
//                   in one continuous line of code


// -----------NO METHOD CHAINING-------

let username = window.prompt('Enter your user name');
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let ExtraChars = username.slice(1);
ExtraChars = ExtraChars.toLowerCase();

username = letter + ExtraChars;
console.log(username);

// -----------With method chaining-------

let username1 = window.prompt('enter your username: ');

username1 = username.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();

console.log(username1);



