var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1
vegetables.pop()

//2
fruit.shift()

//3
var index = fruit.indexOf("orange")

//4
fruit.push(index)

//5
var length = vegetables.length

//6
vegetables.push(length)

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

//7
var food = fruit.concat(vegetables)

food.splice(4, 2).join().reverse()

// //8
// food.splice(4, 2)

// //9
// food.reverse()

// //10
// food.join()
console.log(food)