// WAP to calculate the sum of squares of all elements in an array. For example, given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3

function sumOfSquares(numbers) {
    return numbers.reduce((acc, current) => acc += (current * current), 0)
}

console.log(sumOfSquares([1, 2, 3]));       // Output:14