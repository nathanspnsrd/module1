function fizzBuzz() {
    for (var i = 0; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
            continue;
        } else if (i % 3 === 0) {
            console.log("fizz")
            continue;
        } else if (i % 5 === 0) {
            console.log("buzz")
            continue;
        }
        console.log(i)
    }
}

fizzBuzz()

var arr1 = fizzBuzz

let countFizzBuzz = 0
let countFizz = 0
let countBuzz = 0

for (var i = 0; i < arr1.length; i++) {
    if(arr1[i] === "fizzbuzz") {
        countFizzBuzz += 1
        
    } else if (arr1[i] === "fizz") {
        countFizz += 1
        
    } else if (arr1[i] === "buzz") {
        countBuzz += 1
    }
}

console.log ("fizzbuzz: " + countFizzBuzz)
console.log ("fizz: " + countFizz)
console.log ("buzz: " + countBuzz)