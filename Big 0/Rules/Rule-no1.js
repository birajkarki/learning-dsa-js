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
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO !");
      break;
    }
  }
}
findnemo(everyone);

// Worst Case : Rule no 1
// Consider the worst-case scenario for the time complexity of an algorithm. The worst-case scenario is the scenario in
// which the algorithm takes the most amount of time to complete.
