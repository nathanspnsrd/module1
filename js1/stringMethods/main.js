// var hello = "Hello"
// var helloWorld = "Hello World"

// function capitalizeAndLowercase(string) {
//     var upper = string.toUpperCase();
//     var lower = string.toLowerCase();
//     var putTogether = upper + lower
//     console.log(putTogether)
// }

// capitalizeAndLowercase(hello)
// capitalizeAndLowercase(helloWorld)

// function findMiddleIndex(string) {
//     var middle = (string.length / 2)
//     var roundedMiddle = Math.floor(middle)
//     console.log(roundedMiddle)
// }

// findMiddleIndex(hello)
// findMiddleIndex(helloWorld)

// function returnFirstHalf(string) {
//     var middle = (string.length / 2)
//     var roundedMiddle = Math.floor(middle)
//     var firstHalf = string.slice(0, roundedMiddle)
//     console.log(firstHalf)
// }

// returnFirstHalf(hello)
// returnFirstHalf(helloWorld)

// function capitalizeAtHelf(string) {
//     var middle = (string.length / 2)
//     var roundedMiddle = Math.floor(middle)
//     var firstHalf = string.slice(0, roundedMiddle)
//     var secondHalf = string.slice(roundedMiddle, roundedMiddle.length)
//     var upperCase = firstHalf.toUpperCase()
//     var lowerCase = secondHalf.toLowerCase()
//     console.log(upperCase + lowerCase)
// }

// capitalizeAtHelf(hello)
// capitalizeAtHelf(helloWorld)

function capitalizeAfterSpace(string) {
    for (var i = 0; i < string.length; i++) {
        var words = string.split(" ")
        for (var j = 0; j < words.length; j++) {
            var newString = words[j].split("")
            var capitalizeFirst = newString[0].toUpperCase()
            newString.splice(0, 1, capitalizeFirst)
            var wholeWord = newString.join("")
        }    
    } 
    //console.log(words);
    //console.log(newString);
    console.log(wholeWord);
}

capitalizeAfterSpace("what are you doing?")

