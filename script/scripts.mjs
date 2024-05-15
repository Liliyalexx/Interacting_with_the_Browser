alert("Hi")


function letGame(){
// Generate a random number between 1 and 100
let num = Math.floor(Math.random() * 100) + 1;

//ask user if the number is loves or not loves
const userGuess = window.prompt(`Is ${num} a "loves"  number? (yes/no)`);

// Check if the user's guess matches the condition for a "loves" number
const isLovesNumber = num % 2 === 0;

// Display a message indicating whether the user's guess was correct or not
if((userGuess == "yes" && isLovesNumber) || (userGuess === "no" && !isLovesNumber)){
window.alert(("Correct! It's a loves number. Somebody loves you! :) "))
} else{
    window.alert("Incorrect! It's not a loves number. Nobody loves you! :(")
}
}

