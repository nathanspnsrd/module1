var hello = "Hello"
var helloWorld = "Hello World"

function capitalizeAndLowercase("Hello") {
    var upper = this.toUpperCase();
    var lower = this.toLowerCase();
    var putTogether = upper + lower
    console.log(putTogether)
}

capitalizeAndLowercase()

function findMiddleIndex() {
    var middle = (helloWorld.length / 2)
    var roundedMiddle = Math.floor(middle)
    console.log(roundedMiddle)
}

findMiddleIndex()

function returnFirstHalf() {
    var middle = (hello.length / 2)
    var roundedMiddle = Math.floor(middle)
    var firstHalf = hello.slice(0, roundedMiddle)
    console.log(firstHalf)
}

returnFirstHalf()

function capitalizeAtHelf() {
    var middle = (helloWorld.length / 2)
    var roundedMiddle = Math.floor(middle)
    var firstHalf = helloWorld.slice(0, roundedMiddle)
    var secondHalf = helloWorld.slice(roundedMiddle, roundedMiddle.length)
    var upperCase = firstHalf.toUpperCase()
    var lowerCase = secondHalf.toLowerCase()
    console.log(upperCase + lowerCase)
}

capitalizeAtHelf()

function capitalizeEveryOther() {

}