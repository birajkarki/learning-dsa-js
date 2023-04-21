// Given 2 arrays, create a function that let's a user know
// (true/false) whether these two arrays contain any common items

// For Example:

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
// should return false.

//------------------

const array3 = ["n", "m", "c", "x"];
const array4 = ["z", "d", "x"];
// should return true.

//  2 parameters - arays - no size limit
//  return true or false

//  O(n^2) ->

function commonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// O (a*B)

console.log(commonItems(array1, array2));
