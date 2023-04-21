function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo");
  }
}
booo([1, 2, 3, 4, 5]); // O(1)

// -------------------------------

function arrayofNTimes(n) {
  let nTimes = [];
  for (let i = 0; i < n; i++) {
    nTimes[i] = "hi";
  }
  return nTimes;
}
console.log(arrayofNTimes(10));
