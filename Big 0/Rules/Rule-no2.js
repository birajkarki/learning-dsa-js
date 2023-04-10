function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.lenght / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }
  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}
// BIG 0 ( 1 + n/2 + 100)
// Big O ( n )

// Remove constants : Rule no 2
// Remove the constants from the time complexity expression. When analyzing the time complexity of an algorithm,
// it is common to have constants in the expression that do not affect the growth rate of the algorithm. Therefore,
// these constants can be removed from the expression.
