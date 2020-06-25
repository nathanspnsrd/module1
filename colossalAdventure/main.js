console.log("Welcome to the Colossal adventure!");

const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log(name + ", thank you for joining.");

function walk() {
    const walk = readline.question("Please press 'w' to walK. ");
    if(walk === "w") {
        var number = Math.floor(Math.random() * 4);
        if (number === 1) {
            console.log("We did it!")
        } else {
            walk()
        }
    }
}

walk()


