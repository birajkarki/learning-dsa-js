const boxes = ["a", "b", "c", "d", "e"]; //log all pairs of array
function logAllPairsOfArray(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
logAllPairsOfArray(boxes);

//*--------------O(n^2)------------*
// O(n^2) represents an algorithm with quadratic time complexity. This means that the execution time of the algorithm
// grows at a rate proportional to the square of the input size.

// An example of an O(n^2) algorithm is selection sort, which uses nested loops to search for the minimum element in
// each iteration.
