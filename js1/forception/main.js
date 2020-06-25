var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var alphabetArr = alphabet.split("")
var result = []

function forception(people, alphabetArr){
    for(let i = 0; i < people.length; i++){
        result.push(people[i] + ":")
        for (let j = 0; j < alphabetArr.length; j++){
            result.push(alphabetArr[j])
        }
    }
    console.log(result)
}

forception(people, alphabetArr)