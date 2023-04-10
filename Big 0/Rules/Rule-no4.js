function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the number:");
  numbers.forEach(function (number) {
    console.log(number);
  });
  console.log("these are their sums:");
  numbers.forEach(function (firstNum) {
    numbers.forEach(function (secondNum) {
      console.log(firstNum + secondNum);
    });
  });
}

printAllNumbersThenAllPairSums([2, 4, 6, 8]);

// Big O (n + n ^ 2 ) -> ( n ^ 2 )

// Drop Non Dominants : Rule no 4

// "Dropping non-dominant" means simplifying the time complexity of an algorithm by ignoring lower order terms that
// have a smaller impact on the overall growth rate. This is possible because, for sufficiently large input sizes, the
// dominant term(s) will overshadow the others and determine the overall growth rate. However, this simplification may
// not be accurate for small input sizes.
