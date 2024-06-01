// WAF fizzbuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on te following rules.

// Fir each number i in the range from startNum to endNum (both inclusive)
// If i is divisible by both 3 and 5, include 'FizzBuzz' in the result.
// If i is divisible by only 3 include 'Fizz' in the result.
// If i is divisible by only 5, include "buzz" in the result
// Otherwise, include the number i itself

function fizzbuzz(start, end) {
  let newArr = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArr.push("Fizz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(fizzbuzz(1, 15));

// Output: [1,2,"Fizz", 4, "Buzz", "Fizz", 7, 6, "Fizz", "Buzz"]
