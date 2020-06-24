const readlineSync = require('readline-sync');
const name = readlineSync.question("What is your name? ")

    options = ["put your hand in the hole", "find the key", "open the door"];
    index = readlineSync.keyInSelect(options, name + ", please choose an option. ");
console.log("You chose to: " + options[index] + ".");

while (options[index] === true);

//You put your hand in the hole and died right away.
if (options[index] === "put your hand in the hole") {
    console.log(name + ", you are now DEAD!");

//Allows you to move on after first finding the key.
} else if (options[index] === "find the key") {
    console.log(name + ", you chose wisely. Please make another decision.");
    optionsAfterFind = ["put your hand in the hole", "open the door"];
    indexAfterFind = readlineSync.keyInSelect(optionsAfterFind, name + ", please choose another option. ");
    console.log("You chose to: " + optionsAfterFind[indexAfterFind] + ".");

    //If you find the key and then put your hand in the hole you die.
    if (optionsAfterFind[indexAfterFind] === "put your hand in the hole") {
        console.log(name + ", you are now DEAD!");
    
    //If you find the key and then open the door you win!
    } else if (optionsAfterFind[indexAfterFind] === "open the door") {
        console.log(name + ", you just won the game! Please tell your friends.");

    //If you CANCLE then we call you a quiter.
    } else {
        console.log("Why did you quit?");
    }

//You can't open the door without the key, so we ask you to find it.
} else if (options[index] === "open the door") {
    console.log(name + ", you can't open the door unless you find the key first. Please make another decision.");
    optionsAfterOpen = ["put your hand in the hole", "find the key"];
    indexAfterOpen = readlineSync.keyInSelect(optionsAfterOpen, name + ", please choose another option. ");
    console.log("You chose to: " + optionsAfterOpen[indexAfterOpen] + ".");

    //If you try to find the key, but put your hand in the hole: you die.
    if (optionsAfterOpen[indexAfterOpen] === "put your hand in the hole") {
        console.log(name + ", you are now DEAD!");

    //You found the key after first trying to open the door. We ask you to continue.
    } else if (optionsAfterOpen[indexAfterOpen] === "find the key") {
        console.log(name + ", you chose wisely. Please make another decision.");
        optionsAfterOpenFind = ["put your hand in the hole", "open the door"];
        indexAfterOpenFind = readlineSync.keyInSelect(optionsAfterOpenFind, name + ", please choose another option. ");
        console.log("You chose to: " + optionsAfterOpenFind[indexAfterOpenFind] + ".");
        
        //If you first tried to open, then found the key, then put your hand in the hole, you are now dead.
        if (optionsAfterOpenFind[indexAfterOpenFind] === "put your hand in the hole") {
            console.log(name + ", you are now DEAD!");
                
        //You tried to open, then found the key, then opened. You win!                
        } else if (optionsAfterOpenFind[indexAfterOpenFind] === "open the door") {
            console.log(name + ", you just won the game! Please tell your friends.");
            
        //You tried to open, found the key, then quit.
        } else {
            console.log("Why did you quit?")
        }
    } else {
        console.log("Why did you quit?")
    }

//You just quit.
} else {
    console.log("Why did you quit?")
}