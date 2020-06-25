function fizzBuzz() {
    var arr = []
    for (var i = 0; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
            arr.push("fizzbuzz")
            continue;
        } else if (i % 3 === 0) {
            console.log("fizz");
            arr.push("fizz")
            continue;
        } else if (i % 5 === 0) {
            console.log("buzz");
            arr.push("buzz")
            continue;
        }
        console.log(i)
    }
    return arr
}

var arr1 = fizzBuzz()

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