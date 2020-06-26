console.log("Welcome to the Colossal adventure!");


//Our info
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let hp = 100;
let inventory = [];
let namesOfDead = [];


//Enemy info ["name", hp, "inventory item", hp recieved if they die]
let jo = ["Jo", 55, "Sword", 253];
let bob = ["Bob", 139, "Noodle", 769];
let annie = ["Annie", 1000, "Colt 1911!", 10000];
var newEnyName = [];
var newEnyHP = 

//Instructions
console.log(name + ", thank you for joining.");
console.log("You only have 100 HP; however, each enemy has a different amount.");
console.log("If you kill an enemy you will gain HP.");
console.log("Type 'Print' into the console at any time to see your: name, HP, and inventory.");


//Our primary function
function walk() {
    const walk = readline.question("Please press 'w' to walK. ")
    if(walk === "w") {
        var number = Math.floor(Math.random() * 4)
        if (number === 1) {
            enemies()
            attackOrRun()
        } else {
            console.log("Keep Walking")  
            keepWalking() 
        }
    } else if (walk === "Print") {
        console.log("Your name: " + name + ", HP: " + hp + "," + " Your inventory: " + inventory + "You have killed: " + namesOfDead)
        keepWalking()
    } else {
        console.log("Please follow the instructions.")
        keepWalking()
    }
}


//Allows us to continue if an enemy is not encountered (mirrors the primary function, but happens behind the scenes)
function keepWalking() {
    const walk = readline.question("Please press 'w' to walK. ")
    if(walk === "w") {
        var number = Math.floor(Math.random() * 4)
        if (number === 1) {
            enemies()
            attackOrRun()
        } else {
            console.log("Keep Walking")  
            keepWalking()  
        }
    } else if (walk === "Print") {
        console.log("Your name: " + name + ", HP: " + hp + "," + " Your inventory: " + inventory + "You have killed: " + namesOfDead)
        keepWalking()
    } else {
        console.log("Please follow the instructions.")
        keepWalking()
    }
}


//Carries out if enemy is encountered
function enemies() {
    var enemy = Math.floor(Math.random() * 3);
    if (enemy === 0) {
        let enemyName = jo[0]
        newEnyName = enemyName
        let enyHP = jo[1]
        thisEnyHP = enyHP
        console.log(enemyName + " appeard")
        attackOrRun()
    } else if (enemy === 1) {
        let enemyName = bob[0]
        newEnyName = enemyName
        let enyHP = bob[1]
        thisEnyHP = enyHP
        console.log(enemyName + " appeard")
        attackOrRun()
    } else if(enemy === 2) {
        let enemyName = annie[0]
        newEnyName = enemyName
        let enyHP = annie[1]
        thisEnyHP = enyHP
        console.log(enemyName + " appeard")
        attackOrRun()
    }
}


//Asks to attack or run
function attackOrRun() {
    let decision = readline.question("Would you like to attack or run? (Please type your response.) ")
    if (decision === "run") {
        var randomChance = Math.floor(Math.random() * 2)
        if (randomChance === "0") {
            friendlyDamage()
            enemyDamage()
            attackOrRunInside()
        } else {
            enemyDamage()
            console.log("You escaped! Keep walking.")
            keepWalking()
        }
    } else if (decision === "attack") {
        friendlyDamage()
        enemyDamage()
        attackOrRunInside()
    } else if (decision === "Print") {
        console.log("Your name: " + name + ", HP: " + hp + "," + " Your inventory: " + inventory + "You have killed: " + namesOfDead)
        attackOrRunInside()
    } else {
        console.log("Please follow the instructions.")
        attackOrRunInside()
    }
}


//Allows us to call the attack or run function inside of itself
function attackOrRunInside() {
    let decision = readline.question("Would you like to attack or run? (Please type your response.) ")
    if (decision === "run") {
        var randomChance = Math.floor(Math.random() * 2)
        if (randomChance === "0") {
            friendlyDamage()
            enemyDamage()
            attackOrRun()
        } else {
            enemyDamage()
            console.log("You escaped! Keep walking.")
            keepWalking()
        }
    } else if (decision === "attack") {
        friendlyDamage()
        enemyDamage()
        attackOrRun()
    } else if (decision === "Print") {
        console.log("Your name: " + name + ", HP: " + hp + "," + " Your inventory: " + inventory + "You have killed: " + namesOfDead)
        attackOrRun()
    } else {
        console.log("Please follow the instructions.")
        attackOrRun()
    }
}


//Determines enemy damage
function enemyDamage() {
    var damagePoints = Math.floor(Math.random() * 101)
    console.log(newEnyName + " just dealt " + damagePoints + " point(s) of damage to you.")
    var newHP = (hp - damagePoints)
    hp = newHP
    youDied()
}

//Ends the script if you die
function youDied () {
    if (hp <= 0) {
        console.log("You just died. Go pitty yourself and then try again.")
        process.exit(-1)    
    }
}

//Determines friendly damage
function friendlyDamage() {
    var damagePoints = Math.floor(Math.random() * 101)
    console.log(name + ", you just dealt " + damagePoints + " point(s) of damage to " + newEnyName + ".")
    var newEnyHP = (thisEnyHP - damagePoints)
    thisEnyHP = newEnyHP
    console.log(thisEnyHP)
    enemyDied()
}

//Function for if the enemy is killed
function enemyDied() {
    if (thisEnyHP <= 0) {
        console.log("You just killed " + newEnyName + "good job! Please continue on your adventure.")
        namesOfDead.push(newEnyName)
    }
}

//Need to push the inventory and namesOfDead arrays to a string

//store subtracted enemy hp

/*Make function if enemy dies
-needs to get rid of enemies as they are killed
-add hp to me
-add inventory to me
-ensure we keep walking
-push the name of dead enemy to our print
-console.log("You just killed " + newEnyName + "good job! Please continue on your adventure.")
*/

walk()