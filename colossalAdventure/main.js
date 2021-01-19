console.log("Welcome to the Colossal adventure!");


//Your info
const readline = require("readline-sync");
const name = readline.question("What is your name? ");

let yourInfo = {
    yourName: name,
    hp: 135,
    inventory: [],
    enemiesKilled: [],
}


//Instructions
console.log(name + ", thank you for joining.");
console.log("You only have 100 HP; however, each enemy has a different amount.");
console.log("If you kill an enemy you will gain HP.");
console.log("Type 'Print' into the console at any time to see your: name, HP, and inventory.");


//Enemy info
let jo = {
    name: "Jo", 
    hp: 55, 
    inventoryItem: "Sword", 
    hpDeathBonus: 253,
}

let bob = {
    name: "Bob", 
    hp: 139, 
    inventoryItem: "Noodle", 
    hpDeathBonus: 769,
}

let annie = {
    name: "Annie",
    hp: 1000,
    inventoryItem: "Colt 1911!",
    hpDeathBonus: 10000,
}

let enemies = [jo, bob, annie]
let filteredEnemies = enemies
let encounteredEnemy = enemies[0]


//Chooses what enemy if an enemy is encountered
function chooseEnemyToEncounter() {
    let randomIndex = Math.floor(Math.random() * filteredEnemies.length)
    return filteredEnemies[randomIndex]
}


//Allows us to keep calling the walk function
while (yourInfo.hp > 0) {
    walk()
}


//Our primary function
function walk() {
    const walk = readline.question("Please press 'w' to walK. ")
    if(walk === "w") {
        var number = Math.floor(Math.random() * 4)
        if (number === 1) {
            encounteredEnemy = chooseEnemyToEncounter()
            console.log(encounteredEnemy.name + " appeard")
            //attackOrRun()
            battle()
        } else {
            console.log("Keep Walking")   
        }
    } else if (walk === "Print") {
        console.log("Your name: " + name + ", HP: " + yourInfo.hp + "," + " Your inventory: " + yourInfo.inventory.join(", ") + " You have killed: " + yourInfo.enemiesKilled.join(", "))
    } else {
        console.log("Please follow the instructions.")
    }
}


//Allows us to continue the battle based on specific inputs
function battle() {
    while (encounteredEnemy.hp > 0) { 
        let decision = readline.question("Would you like to attack or run? (Please type your response.) ")
        if (decision === "run") {
            var randomChance = Math.floor(Math.random() * 2)
            if (randomChance === "0") {
                attack()
            } else {
                damageToEnemy()
                console.log("You escaped! Keep walking.")
            }
        } else if (decision === "attack") {
            attack()
        } else if (decision === "Print") {
            console.log("Your name: " + name + ", HP: " + yourInfo.hp + "," + " Your inventory: " + yourInfo.inventory.join(", ") + " You have killed: " + yourInfo.enemiesKilled.join(", "))
        } else {
            console.log("Please follow the instructions.")
        }
        if (encounteredEnemy.hp === 0 || decision === "run") {
            break
        }
    }
}


//If attack is chosen
function attack() {
    console.log("You chose to attack")
    damageToYou()
    damageToEnemy()
}


//Determines friendly damage
function damageToYou() {
    let damagePoints = Math.floor(Math.random() * 145)
    console.log(name + ", you just dealt " + damagePoints + " point(s) of damage to " + encounteredEnemy.name + ".")
    encounteredEnemy.hp = (encounteredEnemy.hp - damagePoints)
    enemyDied()
}


//Determines enemy damage
function damageToEnemy() {
    if (encounteredEnemy.hp > 0) {
        let damagePoints = Math.floor(Math.random() * 145)
        console.log(encounteredEnemy.name + " just dealt " + damagePoints + " point(s) of damage to you.")
        yourInfo.hp = (yourInfo.hp - damagePoints)
        youDied()
    }
}


//Ends the script if you died
function youDied () {
    if (yourInfo.hp <= 0) {
        console.log("You just died. Go pitty yourself and then try again.")
        process.exit(-1)    
    }
}


//Function for if the enemy is killed
function enemyDied() {
    if (encounteredEnemy.hp <= 0) {
        console.log("You just killed " + encounteredEnemy.name + " good job! Please continue on your adventure.")
        yourInfo.hp = (yourInfo.hp + encounteredEnemy.hpDeathBonus)
        yourInfo["inventory"].push(encounteredEnemy.inventoryItem)
        yourInfo["enemiesKilled"].push(encounteredEnemy.name)
        filteredEnemies = enemies.filter(enemy => enemy.hp > 0)
        youWon()
    }
}


//Ends the game if you win
function youWon() {
    if (filteredEnemies.length === 0) {
        console.log("You won the game, go have a beer and celebrate!")
        process.exit(-1) 
    }
}


walk()