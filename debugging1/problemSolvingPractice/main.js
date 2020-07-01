// //#1
// const arr = [1, 7, 2, 9, 100, 4, 55, 255, 300, 4, 2, 6, 8, 99];

// function sortThem(a, b) {
//     return a - b
// }

// const sorted = arr.sort(sortThem);

// function largest() {
//     const lengthOf = sorted.length
//     console.log(sorted[lengthOf - 1])
// }

// largest()

//#2
const string = ["#3", "$$$", "C%4!", "Hey!"];
const char = "$";

function lettersWithStrings(string, char) {
    for (var i = 0; i <= string.length; i++) {
        var hasIt = string[i].includes(char)
        if(hasIt === true) {
            console.log(string[i])
        }
    }
}

lettersWithStrings(string, char)

// //#3
// function isDivisible(num1, num2) {
//     if(num1 % num2 === 0) {
//         console.log("It is divisible.")
//     } else {
//         console.log("It is not divisible.")
//     }
// }

// isDivisible(15, 4)
