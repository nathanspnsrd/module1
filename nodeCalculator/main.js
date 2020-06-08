function add(num1, num2) {
  return (+num1 + +num2)
}

function subtract(num1, num2) {
  return (+num1 - +num2)
}

function multiply(num1, num2) {
  return (+num1 * +num2)
}

function divide(num1, num2) {
  return (+num1 / +num2)
} 

var readlineSync = require('readline-sync');
 
var num1 = readlineSync.question("Please enter your first number. ");
console.log("You entered " + num1 + ".");

var num2 = readlineSync.question("Please enter your second number. ");
console.log("You entered " + num2 + ".");

  operations = ["add", "subtract", "multiply", "divide"];
  index = readlineSync.keyInSelect(operations, "Please enter the operation to perform? ");

while (operations[index] === true) {
  console.log("Ok, we will " + operations[index] + ".");
}

if (operations[index] === "add") {
  var sumResult =  add(num1, num2);
  console.log("The result is: " + sumResult);

} else if (operations[index] === "subtract") {
  var subtractResult = subtract(num1, num2);
  console.log("The result is: " + subtractResult);

} else if (operations[index] === "multiply") {
  var multiplyResult = multiply(num1, num2);
  console.log("The result is: " + multiplyResult);

} else if (operations[index] === "divide") {
  var divideResult = divide(num1, num2);
  console.log("The result is: " + divideResult);

} else {
  console.log("Why did you quit?");
}