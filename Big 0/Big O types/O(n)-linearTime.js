const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(1000).fill("nemo");

function findnemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO !");
    }
  }
}

findnemo(large); // O(n) --> Linear Time

// This means that the time it takes to run the algorithm grows in proportion to the size of the input.
// Example: iterating over an array.

// <-----------Some examples of algorithms with O(n) time complexity-------->

// Linear search: This algorithm searches for a specific value in a list or array by examining each element in
// the list one by one.

// Counting occurrences: This algorithm counts the number of occurrences of a specific value in a list or array
// by examining each element and incrementing a counter variable when the value is found.

// Finding duplicates: This algorithm finds duplicates in a list or array by examining each element and
// checking if it has already been seen.

// Linear traversal: This algorithm performs a linear traversal of a data structure such as a linked list or tree
// by examining each element one by one.

// Linear sorting: This algorithm sorts a list or array by repeatedly finding the smallest element and moving it
// to the beginning of the list.

// Filtering: This algorithm filters a list or array by examining each element and including only those that
// meet a certain criterion.
