// //Prelim
// /*for (i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (i = 9; i >= 0; i--) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }
// */

// //Bronze
// /*var arr = []
// for (i = 0; i < 10; i++) {
//     arr.push(i)
// }
// console.log(arr)

// for (var i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var fruitArr = []
// for (var i = 0; i < fruit.length; i ++) {
//     if(i % 2 === 0) {
//         fruitArr.push(fruit[i])
//     }
// }
// console.log(fruitArr)
// */

// //Silver
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
 
// var names = []
// var occupations = []
//   for (var i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   }

//   for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation)
// }

// console.log(names);
// console.log(occupations);

// var everyOtherName = [];
// var everyOtherOccupation = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     if(i % 2 === 0) {
//         everyOtherName.push(peopleArray[i].name)
//     }
// }

// for (var i = 0; i < peopleArray.length; i++) {
//     if(i % 2 !== 0) {
//         everyOtherOccupation.push(peopleArray[i].occupation)
//     }
// }
// peopleArray.push(everyOtherName);
// peopleArray.push(everyOtherOccupation);
// console.log(peopleArray);


//Gold
var newArr = [[]]

for (var i = 0; i < 3; i++) {
    newArr.push([])
    for (var j = 0; j < 3; j++) {
        newArr[i].push(0)
    }
}
console.log(newArr)