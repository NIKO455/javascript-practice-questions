// WAF to findMin that takes an array of numbers as input and returns the minimum value found in the array.

function findMin(numbers) {
    if (numbers.length < 1) return "Please provide number";

    // TODO:METHOD-1
    // return Math.min(...numbers)

    // TODO:METHOD-2
    return numbers.sort((a, b) => {
        if (a < b) return -1;
    });

}

console.log(findMin([5, 10, 2, 8]));   // Output: 2
// console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
// console.log(findMin([]));   // Output: undefined (or any suitable message for empty array)