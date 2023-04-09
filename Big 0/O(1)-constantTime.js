// O(1) - Constant Time
function compressFirstBox(boxes) {
  console.log(boxes[0]);
}
// Here
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // 0(1)
  console.log(boxes[1]); // 0(1)
}
logFirstTwoBoxes(boxes); // 0(2) // The n in Big O notation typically refers to the size of the input,
//not the number of operations in the function.

//<-----------------constant time complexity---------------->

// O(1) is a constant time complexity, meaning that an algorithm takes the same amount of time to run,
// regardless of input size. It involves a fixed number of operations that are executed in a constant time.

// Examples of O(1) algorithms are accessing an element in an array or assigning a value to a variable.
// These operations take the same amount of time no matter how many elements are in the array or how many variables there are.

// Inputs can be any type of data. Not just arrays.
