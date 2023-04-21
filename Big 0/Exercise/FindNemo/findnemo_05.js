const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
}

findNemo(everyone);

const findNemo1 = (array) => {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found NEMO !");
    }
  });
};

findNemo1(everyone);

// --

const findNemo2 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("Found NEMO !!!");
    }
  }
};

findNemo2(everyone);
