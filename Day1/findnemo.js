const nemo = ["nemo"];

function findnemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO !");
      console.log(array.length);
      console.log(array[i]);
    }
  }
}

findnemo(nemo);
