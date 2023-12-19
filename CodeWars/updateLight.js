// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// My answer
// function updateLight(current) {
//   const status = ["red", "green", "yellow"];
//   const currentStatus = status.findIndex((ele) => ele === current);
//   return currentStatus + 1 === status.length
//     ? status[0]
//     : status[currentStatus + 1];
// }

// More simple answer

function updateLight(current) {
  return current === "red" ? "green" : current === "green" ? "yellow" : "red";
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
